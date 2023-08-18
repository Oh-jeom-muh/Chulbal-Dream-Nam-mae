import React, { useState } from "react";
import "./Recommend.scss";
import NextBt from "components/NextBt/NextBt";
import Header from "components/Header";

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
      <Header
        title="&#x1F440;"
        text={
          <>
            나만을 위한 음식 <br /> 추천을 위해 <br />
            10초만 내어주세요!
          </>
        }
        subtitle="나에게 딱 맞는 음식을 추천해드릴게요"
      />
      <div className="RecommendWrap">
        {OPTION_LIST.map((option) => (
          <button
            className={`RecommendBox ${isCheck[option.id] ? "checked" : ""}`}
            key={option.id}
            onClick={() => optionCheck(option.id)}
          >
            {option.text}
            <img
              className="RecommendCheck"
              src="../img/check.svg"
              alt="RecommendCheck"
            />
          </button>
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
