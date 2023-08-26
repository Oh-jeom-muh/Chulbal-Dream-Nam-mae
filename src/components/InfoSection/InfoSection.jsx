import React, { useState } from "react";
import "./InfoSection.scss";

const InfoSection = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="infoSection">
      <strong className="eatingTitles">
        {title}
        <button
          className="infoSectionBtn"
          type="button"
          aria-expanded={toggle}
          onClick={() => setToggle(!toggle)}
        >
          <img src="../img/tooltip.svg" alt="튤팁" />
        </button>
      </strong>
      {toggle && (
        <p className="infoBox" onClick={() => setToggle(false)}>
          {content}
        </p>
      )}
    </div>
  );
};

export default InfoSection;
