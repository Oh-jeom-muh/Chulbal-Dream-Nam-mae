import React, { useState } from "react";
import "./Recommend.scss";
import Check from "./../../img/check.svg";
import NextBt from "components/NextBt/NextBt";

const Recommend = () => {
  const [isCheck, setISCheck] = useState({});

  const optionCheck = (id) => {
    setISCheck((preState) => ({
      ...preState,
      [id]: !preState[id],
    }));
  };

  return (
    <div className="Recommend">
      <div className="RecommendWrap">
        {OPTION_LIST.map((option) => (
          <div
            className={`RecommendBox ${isCheck[option.id] ? "checked" : ""}`}
            key={option.id}
            onClick={() => optionCheck(option.id)}
          >
            <p className="RecommendText">{option.text}</p>
            <img className="RecommendCheck" src={Check} alt="RecommendCheck" />
          </div>
        ))}
      </div>
      <NextBt />
    </div>
  );
};

export default Recommend;

const OPTION_LIST = [
  { id: 1, text: "점심" },
  { id: 2, text: "저녁" },
  { id: 3, text: "20대 이하" },
  { id: 4, text: "20대 이상" },
  { id: 5, text: "맵초보" },
  { id: 6, text: "맵고수" },
  { id: 7, text: "다이어트식" },
  { id: 8, text: "일반식" },
];
