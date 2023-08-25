import React, { useEffect, useState } from 'react';
import NextBtn from 'components/NextBtn/NextBtn';
import InforSection from 'components/InfoSection/InforSection';
import Loading from './Loading';
import './Eating.scss';
import Honey from 'components/Honey/Honey';

const Eating = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('data.json')
        .then((res) => res.json())
        .then((data) => {
          setSelectedFood(data);
        });
    }, 500);
  }, []);

  if (!selectedFood) return <Loading />;

  // console.log(selectedFood[0]?.list);

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
        <Honey list={selectedFood[0]?.list} />
        <NextBtn
          text={'지도에서 맛집 보기'}
          selectedFood={selectedFood[0]?.food}
        />
      </div>
    </>
  );
};

export default Eating;
