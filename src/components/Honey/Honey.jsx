import React from 'react';

import './Honey.scss';

const Honey = ({ list }) => {
  return (
    <div className="HoneyWrap">
      {list.map((data, index) => (
        <div className="honeyList" key={index}>
          <div className="honeyBox">
            <img className="honeyImg" src={data.img} alt="꿀맛조합" />
          </div>
          <p className="honeyText">{data.honey}</p>
        </div>
      ))}
    </div>
  );
};

export default Honey;
