import React from "react";

import "./Honey.scss";

const Honey = ({ list }) => {
  return (
    <ul className={`honeyList${list.length > 3 ? " typeColum" : ""}`}>
      {list.map(({ img, honey }, index) => (
        <li key={index}>
          <div className="honeyBox">
            <img className="imgG" src={img} alt="" />
          </div>
          <strong className="honeyText">{honey}</strong>
        </li>
      ))}
    </ul>
  );
};

export default Honey;
