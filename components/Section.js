import React, { Component } from "react";
import Proptypes from "prop-types";

const Section = ({ heading, id, img, text }) => (
  <section id={id}>
    <h2>{heading}</h2>

    <div className="img-container">
      <img src={img.src} alt={img.alt} />

    </div>
    <div className="text">
      <p>{text}</p>
      <a href="" className="btn"><span>Click me</span></a>
    </div>

    <style jsx>{`
  .btn {
  display: block;
  height: 50px;
  width: 186px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  font-size: 14px;
  text-align: center;
}
  .btn:after {
    position: absolute;
    content:'';
    display: inline-block;
    background: rgba(59,173,227,1);
    background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
    height: 50px;
    width: 372px;
    z-index:1;
    transform: translateX(-280px);
    transition: transform 400ms ease-in;
  }

  .btn:hover:after {
      transform: translateX(-200px);
  }
  .btn span {
    z-index:2;
    position: relative;
    top: 16px;
  }


.text{
}

*{
  box-sizing:border-box;
}

section {
    display:flex;
    border: 4px solid green;
    align-items:center;
    flex-wrap:wrap;
    box-sizing:border-box;
    margin-top:20px;
    justify-content:space-around;
    /**background-color:lightgray;**/
}
.img-container{
box-sizing:border-box;
display:flex;
flex-wrap:wrap;
height: 20rem;
border: 2px solid red;
align-self:flex-start;
flex-basis:50%;
}

img {
box-sizing:border-box;

  object-fit: cover;
  object-position: center;
  width:auto;
  height: 100%;
  position: relative;
  display:flex;
  flex-basis:100%;
  min-width:80px;
}

.text{
flex-basis:45%;
box-sizing:border-box;
border: 3px solid hotpink;


}
p{
box-sizing:border-box;
align-self:flex-start;
margin:0;
padding:0;
top:0;

margin:0;
border:10px solid blue;
min-width: 80px;
}
h2{
  align-self:flex-start;
  border: 3px solid orange;
  margin:0;
  flex-basis:100%;
  text-align:center;
}


`}</style>
  </section>
);

Section.propTypes = {
  id: Proptypes.number.isRequired,
  img: Proptypes.object.isRequired,
  text: Proptypes.string.isRequired,
  heading: Proptypes.string.isRequired
};

export default Section;
