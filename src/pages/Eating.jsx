<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import NextBt from 'components/NextBtn/NextBtn';
import InforSection from 'components/InfoSection/InforSection';
import Loading from './Loading';
import './Eating.scss';
=======
import React, { useEffect, useState } from "react";
import NextBt from "components/NextBt/NextBt";
import Loading from "./Loading";
import Honey from "components/Honey/Honey";
import "./Eating.scss";
>>>>>>> 3f273d62afa488d1af86f1512bb6b812da4eb410

const Eating = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    setTimeout(() => {
<<<<<<< HEAD
      fetch('data.json')
=======
      fetch("data.json")
>>>>>>> 3f273d62afa488d1af86f1512bb6b812da4eb410
        .then((res) => res.json())
        .then((data) => {
          setSelectedFood(data);
        });
    }, 500);
  }, []);

  if (!selectedFood) return <Loading />;

  return (
    <>
      <div
        className="wrapHeadBg"
        style={{ backgroundImage: `url("img/prd.svg")` }}
      />
      <div className="eating">
        <div className="wrapInfo">
          <div className="eatingArea">
            <strong className="eatingTitle">떡볶이</strong>
            <p className="eatingDesc">{selectedFood[0]?.text}</p>
          </div>
          <div className="eatingNum">
            256<span className="eatingKal">&#40;kal&#41;</span>
          </div>
        </div>
        <InforSection
          title={'영양 정보'}
          content={
            '튤립 내용튤립 내용튤립 내용튤립 내용튤립 내용튤립 내용튤립 내용'
          }
        />
        <InforSection
          title={'꿀맛 조합'}
          content={
            '튤립 내용튤립 내용튤립 내용튤립 내용튤립 내용튤립 내용튤립 내용'
          }
        />
        <div className="honeyList">
          <div className="honeyBox" />
          <p className="honetTex">소세지</p>
        </div>
        <NextBt
          text={'지도에서 맛집 보기'}
          selectedFood={selectedFood[0]?.food}
        />
      </div>
    </>
  );
};

export default Eating;
