import React, { Component } from "react";
import Proptypes from "prop-types";

const Section = ({ heading, id, img, text,color }) => (
  <section id={id} style={{backgroundColor:color}}>
    <h2>{heading}{color}</h2>

    <div className="img-container">
      <img src={img.src} alt={img.alt} />

    </div>
    <div className="text">
      <p>{text}</p>
      <a href="" className="btn"><span>Mehr</span></a>
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
  margin-right:2em;
  margin-left:auto;
  margin-top:2em;
  margin-bottom:2em;
  border-radius:10px;
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



*{
  box-sizing:border-box;
}

section {
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    box-sizing:border-box;
    margin-top:20px;
    justify-content:space-around;
    border: 2px solid skyblue;
    width:90%;
    margin:2em auto;
    /**background-color:lightgray;**/
    /**background-color:#264F87;**/
}
.img-container{
box-sizing:border-box;
display:flex;
flex-wrap:wrap;
height: 20rem;
align-self:flex-start;
flex-basis:50%;
flex:1;
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
}

.text{
  flex-basis:50%;
  flex:1;
  min-width: 300px;
  align-self:stretch;

box-sizing:border-box;


}
p{
box-sizing:border-box;
align-self:flex-start;
margin:0;
padding:1em;
top:0;
color:white;

margin:0;
}
h2{
  padding: 1em 0;
  color:white;
  align-self:flex-start;
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
