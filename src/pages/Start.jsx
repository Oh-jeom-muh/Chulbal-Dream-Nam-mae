import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import "style/start.scss";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="startContainer">
      <Header
        id="start"
        title="👀"
        lines={["오늘은", "어떤걸 먹을지", "도와드릴게요."]}
        subtitle="나에게 딱 맞는 음식을 추천해드릴게요"
      />
      <div className="startBtnWrap">
        {Btn.map(({ id, className, text, link }) => (
          <button
            key={id}
            className={`actionBtn ${className}`}
            onClick={() => navigate(`/${link}`)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Start;

const Btn = [
  {
    id: 1,
    className: "chooseFoodBtn",
    text: "먹을 음식 고르기",
    link: "choose",
  },
  {
    id: 2,
    className: "viewFoodsBtn",
    text: " 먹은 음식들 보러가기",
    link: "eat",
  },
];
