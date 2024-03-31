import React from "react";
import Banner from './../../Components/Banner/Banner';
import Dropdown from './../../Components/Dropdown/Dropdown';
import AboutData  from "../../Data/dataAbout.json";
import "./About.css"
import Button from "../../Components/Button/Button";
import HeadingPrimary from "../../Components/HeadingPrimary/HeadingPrimary";
import Card1 from './../../Components/Card1/Card1';
import HeadingSecondary from './../../Components/HeadingSecondary/HeadingSecondary';
import Card2 from './../../Components/Card2/Card2';
import Card3 from './../../Components/Card3/Card3';

export default function About() {
  const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>";
  const img = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";
  const svg = "./chappelle.svg";
  const title = "Accommodation 20";
  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e";
  const btnTxt = "En savoir plus";
  const btnLink = "https://www.google.com";

  return (
    <main className="about">
      <HeadingPrimary txt="Heading Primary"/>
      <HeadingSecondary txt="Heading Secondary" />
      <Button txt="Button" link="https://www.google.com/"/>
      <Card1 svg={svg} title={title} paragraph={paragraph}/>
      <Card2 img={img} title={title} paragraph={paragraph} btnTxt={btnTxt} btnLink={btnLink}/>
      <Card3 svg={svg} title={title} paragraph={paragraph}/>
    </main>
  );
}