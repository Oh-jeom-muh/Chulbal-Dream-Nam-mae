import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import 'style/start.scss';
import './Splash.scss';

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="startContainer">
      <Header
        title="&#x1F64C;"
        text={
          <>
            오늘은 <br /> 어떤걸 먹을지 <br /> 도와드릴게요.
          </>
        }
        subtitle="나에게 딱 맞는 음식을 추천해드릴게요"
      />
      <div className="startBtnWrap">
        {Btn.map(({ id, className, text, link }) => (
          <button
            type="button"
            key={id}
            className={
              link === 'choose' ? `actionBtn ${className}` : `actionBtn`
            }
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
    className: 'on',
    text: '먹을 음식 고르기',
    link: 'choose',
  },
  {
    id: 2,
    text: ' 먹은 음식들 보러가기',
    link: 'eat',
  },
];
