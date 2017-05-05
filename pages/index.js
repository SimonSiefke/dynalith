import React from "react";

import ImageSlider from "../components/ImageSlider";
import Section from "../components/Section";
import Layout from "../components/Layout";

const sections = [
  {
    img: {
      src: "https://source.unsplash.com/random",
      alt: "img"
    },
    heading: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    id: 1
  },
  {
    img: {
      src: "https://source.unsplash.com/random",
      alt: "img"
    },
    heading: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
    id: 2
  }
];

const Home = () => (
  <div>
    <Layout />
    <ImageSlider />
    <div>
      {sections.map(({ heading, img, text, id }) => (
        <Section heading={heading} img={img} text={text} id={id} key={id} />
      ))}
    </div>
  </div>
);

export default Home;
