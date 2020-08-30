import React from "react";
import CompletionStatus from "./completion-status/CompletionStatus";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">Todos</div>
      <CompletionStatus />
    </div>
  );
};

export default Header;
