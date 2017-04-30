import React from "react";

const Slogan = props => (
  <div>
    <span className="slogan">{props.text}</span>
    <style jsx>
      {`
      span{
        position: absolute;
        text-align: center;
        background-color:rgba(255,255,255,0.7);
        bottom:0;
        left:0;
        padding: .25em .5em;
        border-radius:10px;
        margin:1em;
        font-size: 2.25em;
        font-family: "Lobster Two", sans-serif;
        }
    `}
    </style>
  </div>
);

export default Slogan;
