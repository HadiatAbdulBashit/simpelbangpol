import React from "react";

import "./wave.css";

function Wave (props) {
    return (
      <div class="waves" style={{transform: props.rotate}}>
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
    );
};
export default Wave;