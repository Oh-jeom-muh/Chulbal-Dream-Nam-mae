import React, { useState } from 'react';
import './InforSection.scss';

const InforSection = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="inforSection">
      <strong className="eatingTitles">
        {title} &nbsp;
        <img
          src="../img/tooltip.svg"
          alt="튤팁"
          onClick={() => setToggle(!toggle)}
        />
        {toggle && (
          <div className="inforBox" onClick={() => setToggle(false)}>
            {content}
          </div>
        )}
      </strong>
    </div>
  );
};

export default InforSection;
