import React from "react";

import "./Honey.scss";

const Honey = ({ list }) => {
  return (
    <ul className={`honeyList${list.length > 3 ? " typeColum" : ""}`}>
      {list.map((data, index) => (
        <li key={index}>
          <div className="honeyBox">
            <img className="imgG" src={data.img} alt="꿀맛조합" />
          </div>
          <strong className="honeyText">{data.honey}</strong>
        </li>
      ))}
    </ul>
  );
};

export default Honey;
