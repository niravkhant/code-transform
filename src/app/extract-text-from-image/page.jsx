"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Tesseract from "tesseract.js";
import style from "@/styles/PageExtractText.module.css";
import Spinner from "@/Components/Spinner";

const pageExtractText = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setLoading(true);
      Tesseract.recognize(file, "eng", {
        logger: (m) => console.log(m),
      })
        .then(({ data: { text } }) => {
          setText(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={`${style["extracttextmaindiv"]}`} style={{ padding: "20px" }}>
      <div
        className={`${style["imagedropinput"]}`}
        {...getRootProps()}
        style={{
          border: "4px dashed #cccccc",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {loading ? <Spinner /> : <p className={`${style["placeholdertext"]}`}>Drag 'n' drop an image here, or click to select one</p>}
      </div>
      {text && (
        <div className={`${style["inputdiv"]}`} style={{ marginTop: "20px" }}>
          <textarea className={`${style["textareamain"]}`} value={text} rows={10} style={{ width: "100%", padding: "10px" }} />
          <button className={`${style["buttoncopy"]}`} onClick={handleCopy}>
            <span className={`${style["button-content"]}`}>Copy to Clipboard</span>
          </button>
          {copied && <p style={{ color: "green", marginTop: "10px" }}>Text copied!</p>}
        </div>
      )}
    </div>
  );
};

export default pageExtractText;
