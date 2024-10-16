"use client";
import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Head from "next/head";

function reverseTransformHtml(html) {
  // 1. Convert self-closing <input /> to <input>
  html = html.replace(/<input\s+([^>]+)\s*\/>/g, (match, inputAttributes) => {
    return `<input ${inputAttributes}>`;
  });

  // 2. Convert htmlFor to for in <label> tags
  html = html.replace(/htmlFor=/g, 'for=');

  // 3. Convert <Link> to <a> tags
  html = html.replace(/<Link\s+([^>]+)>(.*?)<\/Link>/gs, (match, linkAttributes, content) => {
    return `<a ${linkAttributes}>${content}</a>`;
  });

  // 4. Convert <Image /> to <img> and remove width and height attributes, as well as the self-closing slash
  html = html.replace(/<Image\s+([^>]+)\s*\/>/g, (match, imageAttributes) => {
    // Remove width and height attributes from the Image tag
    const cleanedAttributes = imageAttributes.replace(/\s*width=\{?\d+\}?/g, "").replace(/\s*height=\{?\d+\}?/g, "");
    return `<img ${cleanedAttributes}>`;
  });

  // 5. Handle className= conversion with various patterns (single/double quotes and template literals)
  html = html.replace(/className=\{`([^`]*)`\}/g, (match, classes) => {
    const classArray = classes
      .match(/style\["([^"]+)"\]/g)
      .map((cls) => cls.replace(/style\["([^"]+)"\]/, "$1"))
      .join(" ");
    return `class="${classArray}"`;
  });

  // Convert className={style["..."]} to class="..."
  html = html.replace(/className=\{style\["([^"]+)"\]\}/g, (match, cls) => {
    return `class="${cls}"`;
  });

  // Convert className={style['...']} to class="..."
  html = html.replace(/className=\{style\['([^']+)'\]\}/g, (match, cls) => {
    return `class="${cls}"`;
  });

  // Convert className={`container`} to class="container"
  html = html.replace(/className=\{`([^`]*)`\}/g, (match, cls) => {
    return `class="${cls}"`;
  });

  // Convert className={"container"} to class="container"
  html = html.replace(/className=\{["']([^"']+)["']\}/g, (match, cls) => {
    return `class="${cls}"`;
  });

  // Convert className="container" or className='container' to class="container"
  html = html.replace(/className=["']([^"']+)["']/g, (match, cls) => {
    return `class="${cls}"`;
  });

  // Convert multiple className={`${style["..."]} ${style["..."]}`} to class="..."
  html = html.replace(/className=\{`([^`]*)`\}/g, (match, classes) => {
    const classArray = classes
      .split(/\s+/)
      .map((cls) => cls.replace(/style\["([^"]+)"\]/g, "$1"))
      .join(" ");
    return `class="${classArray}"`;
  });

  return html;
}




const pagemodulecsstocss = () => {
  const [htmlInput, setHtmlInput] = useState("");
  const [transformedHtml, setTransformedHtml] = useState("");
  const transformedEditorRef = useRef(null);

  const handleEditorChange = (value) => {
    setHtmlInput(value);
    setTransformedHtml(reverseTransformHtml(value));
  };

  const handleSubmit = () => {
    setTransformedHtml(reverseTransformHtml(htmlInput));
  };

  const handleCopy = () => {
    const transformedText = transformedEditorRef.current.getValue();
    navigator.clipboard
      .writeText(transformedText)
      .then(() => {
        alert("Transformed code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="editormainpart">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.30.1/min/vs/editor/editor.main.min.css" />
      </Head>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <button onClick={handleSubmit} style={{ marginRight: "10px" }}>
          Submit
        </button>
        <button onClick={handleCopy}>Copy Transformed Code</button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h2>Input Editor</h2>
          <Editor
            height="90vh"
            defaultLanguage="html"
            defaultValue="<!-- Write or paste your HTML here -->"
            value={htmlInput}
            onChange={handleEditorChange}
          />
        </div>
        <div style={{ width: "50%" }}>
          <h2>Transformed Editor</h2>
          <Editor
            height="90vh"
            defaultLanguage="html"
            value={transformedHtml}
            options={{ readOnly: true }}
            ref={transformedEditorRef}
            editorDidMount={(editor) => {
              transformedEditorRef.current = editor;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default pagemodulecsstocss;