import React, { useEffect, useState } from 'react';
import NextBt from 'components/NextBt/NextBt';
import Loading from './Loading';
import './Eating.scss';

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

  return (
    <>
      <div
        className="wrapHeadBg"
        style={{ backgroundImage: `url("img/prd.svg")` }}
      />
      <div className="eating">
        <div className="wrapInfo">
          <div className="eatingArea">
            <strong className="eatingTitle">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </strong>
            <p className="eatingDesc">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </p>
          </div>
          <div className="eatingNum">
            256<span className="eatingKal">&#40;kal&#41;</span>
          </div>
        </div>
        <strong className="eatingTitle">영양 정보</strong>

        <strong className="eatingTitle">꿀맛 조합</strong>
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
