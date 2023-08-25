import React, { useState } from 'react';
import './Recommend.scss';
import NextBtn from 'components/NextBtn/NextBtn';
import Header from 'components/Header';
import Option from 'components/Option/Option';

const Recommend = () => {
  const [isCheck, setISCheck] = useState({
    meal: '',
    age: '',
    spicy: '',
    type: '',
  });

  return (
    <div className="Recommend">
      <Header
        title="&#x1F44B;"
        text={
          <>
            나만을 위한 음식 <br /> 추천을 위해 <br />
            10초만 내어주세요!
          </>
        }
        subtitle="나에게 딱 맞는 음식을 추천해드릴게요"
      />
      <Option isCheck={isCheck} setISCheck={setISCheck} />
      <NextBtn isCheck={isCheck} text={'나에게 딱 맞는 음식 보기'} />
    </div>
  );
};

export default Recommend;
