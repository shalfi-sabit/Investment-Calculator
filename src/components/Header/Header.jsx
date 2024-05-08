import React from "react";

const Header = ({ image, title }) => {
  return (
    <header className="header">
      <img src={image} alt="logo" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
