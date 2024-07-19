import React from "react";
import style from "@/styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={`${style["spinnermain"]}`}>
      <div className={`${style["loader"]}`}></div>
    </div>
  );
};

export default Spinner;
