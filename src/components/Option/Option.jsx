import React, { useCallback } from 'react';
import './Option.scss';

const Option = ({ isCheck, setISCheck }) => {
  const handleCheck = useCallback((e) => {
    const { title, value } = e.target;
    setISCheck((isCheck) => ({
      ...isCheck,
      [title]: isCheck[title] === value ? '' : value,
    }));
  }, []);

  return (
    <div className="RecommendWrap">
      {OPTION_LIST.map((option, index) => (
        <div className="buttonBox" key={index}>
          {option.text.map((text) => (
            <button
              className={`RecommendBox ${
                isCheck[option.title] === text ? 'checked' : ''
              }`}
              key={text}
              title={option.title}
              value={text}
              onClick={handleCheck}
            >
              {text}
              <img
                className="RecommendCheck"
                src="../img/check.svg"
                alt=""
              />
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Option;

const OPTION_LIST = [
  { id: 1, title: 'meal', text: ['점심', '저녁'] },
  { id: 2, title: 'age', text: ['20대 이하', '20대 이상'] },
  {
    id: 3,
    title: 'spicy',
    text: ['맵초보', '맵달인'],
  },
  { id: 4, title: 'type', text: ['다이어트식', '일반식'] },
];
