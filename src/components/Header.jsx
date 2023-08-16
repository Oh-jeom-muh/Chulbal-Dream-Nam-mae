import React from 'react';
import 'style/header.scss';

const Header = ({ id, title, lines, subtitle }) => {
  return (
    <div className="headerContainer">
      <h1 className="headerTitle">{title}</h1>
      <p className="headerLines">
        {lines.map((line, index) => (
          <>
            <span key={id}>{line}</span>
            {index !== lines.length - 1 && <br />}
          </>
        ))}
      </p>
      <span className="headerSubtitle">{subtitle}</span>
    </div>
  );
};

export default Header;
