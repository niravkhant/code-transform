"use client";
import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Head from "next/head";

// function reverseTransformHtml(html) {
//   return html.replace(/className=\{`([^`]*)`\}/g, (match, classes) => {
//     const classArray = classes
//       .match(/style\["([^"]+)"\]/g)
//       .map(cls => cls.replace(/style\["([^"]+)"\]/, '$1'))
//       .join(' ');
//     return `class="${classArray}"`;
//   });
// }

function reverseTransformHtml(html) {
  // Handle template literals className={`...`}
  html = html.replace(/className=\{`([^`]*)`\}/g, (match, classes) => {
    const classArray = classes
      .match(/style\["([^"]+)"\]/g)
      .map((cls) => cls.replace(/style\["([^"]+)"\]/, "$1"))
      .join(" ");
    return `class="${classArray}"`;
  });

  // Handle simple object property access className={style["..."]}
  html = html.replace(/className=\{style\["([^"]+)"\]\}/g, (match, cls) => {
    return `class="${cls}"`;
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
