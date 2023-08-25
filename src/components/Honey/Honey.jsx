import React, { useEffect, useState } from "react";
import "./Honey.scss";

const Honey = () => {
  const [honeyData, setHoneyData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const honeyList = data.map((item) => item.list);
        setHoneyData(honeyList);
      });
  }, []);
  console.log(honeyData.honey);

  return (
    <>
      <div className="HoneyWrap">
        <strong className="eatingTitle">꿀맛 조합</strong>
        {honeyData.map((data, index) => (
          <div className="honeyList" key={index}>
            <div className="honeyBox">
              <img className="honeyImg" src={data.img} alt="꿀맛조합" />
            </div>
            <p className="honeyText">{data.honey}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Honey;
