// this is new update code for fully next js conversion
"use client";
import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Head from "next/head";

function transformHtml(html) {
  const wordsToSkip = ["col-1","col-2","col-3","col-4","col-5","col-6","col-7","col-8","col-9","col-10","col-11","col-12","col-sm-1","col-sm-2","col-sm-3","col-sm-4","col-sm-5","col-sm-6","col-sm-7","col-sm-8","col-sm-9","col-sm-10","col-sm-11","col-sm-12","col-md-1","col-md-2","col-md-3","col-md-4","col-md-5","col-md-6","col-md-7","col-md-8","col-md-9","col-md-10","col-md-11","col-md-12","col-lg-1","col-lg-2","col-lg-3","col-lg-4","col-lg-5","col-lg-6","col-lg-7","col-lg-8","col-lg-9","col-lg-10","col-lg-11","col-lg-12","container","row","commonimageclass", "commoniconclass", "commonlink","commontitle","commondescription","custom-row"];
  
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
