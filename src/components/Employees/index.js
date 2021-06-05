import React from "react";
import SearchForm from "../SearchForm";
import "./style.css";

function Employees(props) {
  return (
    <div
      className="employees"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <SearchForm
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <SearchForm
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Employees;
