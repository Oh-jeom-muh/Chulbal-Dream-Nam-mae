import React from 'react';
import 'style/header.scss';

const Header = ({ title, text, subtitle }) => {
  return (
    <div className="headerContainer">
      <div className="headerTitle">{title}</div>
      <p className="headerLines">{text}</p>
      <p className="headerSubtitle">{subtitle}</p>
    </div>
  );
};

export default Header;
