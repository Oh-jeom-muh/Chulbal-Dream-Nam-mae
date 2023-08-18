import React from 'react';
import 'style/header.scss';

const Header = ({ id, title, lines, subtitle }) => {
  return (
    <div className="headerContainer">
      <div className="headerTitle">{title}</div>
      <p className="headerLines">
        {lines.map((line, index) => (
          <>
            <span key={id}>{line}</span>
            {index !== lines.length - 1 && <br />}
          </>
        ))}
      </p>
      <p className="headerSubtitle">{subtitle}</p>
    </div>
  );
};

export default Header;
