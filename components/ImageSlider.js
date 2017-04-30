import React, { Component } from "react";
import NoSSR from "react-no-ssr";
import Slogan from "./Slogan";

import classnames from "classnames";

const text = ["Binz", "Ostsee", "Rügen"];

const load = () => <p>loading</p>;
class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      images: ["/static/images/image1.jpg"],
      visible: [true, false, false]
    };
    this.showImage = this.showImage.bind(this);
  }
  showImage(n) {
    n %= 3;
    let visible = Array(3).fill(false);
    visible[n] = true;
    this.setState({
      visible: visible,
      text: text[n]
    });
  }

  slide(n) {
    let i = n;
    this.timerID = setInterval(() => this.showImage(i++), 2000);
  }

  handleClick(n) {
    clearInterval(this.timerID);
    this.showImage(n);
    setTimeout(() => this.slide(n + 1), 1500);
  }

  componentDidMount() {
    /*  setTimeout(() => {
      this.setState({
        images: [
          ...this.state.images,
          "/static/images/image2.jpg",
          "/static/images/image3.jpg"
        ]
      });
      this.slide(0);
    }, 1000);
*/
    this.slide(0);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const classes = this.state.visible.map(value =>
      classnames({ hide: !value })
    );

    const dotClasses = this.state.visible.map(value =>
      classnames("dot", { white: value })
    );

    return (
      <div onSSR={<load />} className="slider-container">

        {/**this.state.images.map((src, i) => (
          <img src={src} alt={text[i]} className={classes[i]} />
        ))**/}
        <img
          className={classes[0]}
          src="https://source.unsplash.com/random"
          alt={text[0]}
        />
        <img
          className={classes[1]}
          src="https://source.unsplash.com/category/nature"
          alt={text[1]}
        />
        <img
          className={classes[2]}
          src="https://source.unsplash.com/user/erondu"
          alt={text[2]}
        />

        <div className="dots">
          <div className={dotClasses[0]} onClick={() => this.handleClick(0)} />
          <div className={dotClasses[1]} onClick={() => this.handleClick(1)} />
          <div className={dotClasses[2]} onClick={() => this.handleClick(2)} />
        </div>
        <Slogan text={this.state.text} />
        <style jsx>
          {`
            .slider-container {
               	position: relative;
                width:100vw;
                height: 70vh;
                overflow: hidden;
                display:flex;
                margin:0 auto;
                flex-wrap:wrap;
                justify-content: center;
            }

            img {
              z-index:-1;
              object-fit: cover;
              object-position: center;
              width:100%;
              height: 100%;
              position: absolute;
            }

            .dots{
              align-self:flex-end;
              margin:0 auto;
            }
            .dot{
              padding-left: 8px;
              padding-right: 8px;
              padding:0;
              margin:0 3px;
              background-color:#000;
              color:#fff;
              display:inline-block;
              height:13px;
              width:13px;
              border:1px solid #ccc;
              background-color:transparent;
              border-radius:50%;
            }

            .dot:hover{
              color:#000!important;
              background-color:#fff;
            }

            .white{
              background-color:white;
            }

            .hide{
              display:none;
            }
           `}
        </style>
      </div>
    );
  }
}

export default ImageSlider;
