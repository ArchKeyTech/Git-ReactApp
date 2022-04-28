import React from "react";
import ReactLoading from "react-loading";
import "../App.css";

const Loading = () => (
  <ReactLoading
    type="spin"
    height={"15%"}
    width={"15%"}
    color="rgba(88, 80, 64, 0.836)"
    className="loading"
  />
);

export default Loading;
