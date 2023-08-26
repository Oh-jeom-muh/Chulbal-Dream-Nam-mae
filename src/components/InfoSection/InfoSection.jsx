import React, { useState } from 'react';
import './InfoSection.scss';

const InfoSection = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="inforSection">
      <strong className="eatingTitles">
        {title}
        <button
          className="inforSectionBtn"
          type="button"
          aria-expanded={toggle}
          onClick={() => setToggle(!toggle)}
        >
          <img src="../img/tooltip.svg" alt="튤팁" />
        </button>
      </strong>
      {toggle && (
        <p className="inforBox" onClick={() => setToggle(false)}>
          {content}
        </p>
      )}
    </div>
  );
};

export default InfoSection;
