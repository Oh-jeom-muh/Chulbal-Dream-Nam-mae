import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="img-container">
        <img src="../img/spinner.png" className="imgG" alt="" />
      </div>
    </div>
  );
};

export default Loading;
