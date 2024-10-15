"use client";
import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Head from "next/head";

function transformHtml(html) {
  const wordsToSkip = ["container", "row", "col-md-6"]; // Add any class names to skip conversion
  
  return html
    .replace(/(class|className)=['"]([^'"]+)['"]/g, (match, p1, classes) => {
      // Handle class or className attributes with single or double quotes
      const classArray = classes.split(" ").map((cls) => {
        return wordsToSkip.includes(cls) ? cls : `\${style["${cls}"]}`;
      }).join(" ");
      return `className={\`${classArray}\`}`;
    })
    .replace(/<img\s+([^>]+)>/g, (match, imgAttributes) => {
      // Convert <img> to <Image /> with width and height set to 0
      const attributes = imgAttributes.replace(/\s?\/?\s?>/, ""); // Remove any self-closing slashes if present
      return `<Image ${attributes} width={0} height={0} />`;
    })
    .replace(/<a\s+([^>]+)>(.*?)<\/a>/gs, (match, anchorAttributes, content) => {
      // Convert <a> to <Link> while keeping the inner content unchanged
      return `<Link ${anchorAttributes}>${content}</Link>`;
    })
    .replace(/<label\s+for=['"]([^'"]+)['"]/g, (match, labelFor) => {
      // Convert for= to htmlFor= in <label> tags
      return `<label htmlFor="${labelFor}"`;
    })
    .replace(/<input\s+([^>]+)>/g, (match, inputAttributes) => {
      // Convert <input> tags to self-closing tags
      return `<input ${inputAttributes} />`;
    });
}

export default function MonacoEditor() {
  const [htmlInput, setHtmlInput] = useState("");
  const [transformedHtml, setTransformedHtml] = useState("");
  const transformedEditorRef = useRef(null);

  const handleEditorChange = (value) => {
    setHtmlInput(value);
    setTransformedHtml(transformHtml(value));
  };

  const handleSubmit = () => {
    setTransformedHtml(transformHtml(htmlInput));
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
}
