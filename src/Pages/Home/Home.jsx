import React from "react";
import Card from "./../../Components/Card/Card";
import Card1 from "./../../Components/Card1/Card1";
import Heading from "../../Components/HeadingPrimary/HeadingPrimary";
import Carousel from "../../Components/Carousel/Carousel";
import HomeData  from "../../Data/dataLogement.json";

import './Home.css';
import { Link } from 'react-router-dom';
import Button from './../../Components/Button/Button';
import Card2 from "../../Components/Card2/Card2";
import Card3 from './../../Components/Card3/Card3';
import Paragraph from './../../Components/Paragraph/Paragraph';

function Home() {
  const photos = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
]


const html = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>";
const img = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";
const svg = "./chappelle.svg";
const title = "Accommodation 20";
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e";
const btnTxt = "En savoir plus";
const btnLink = "https://www.google.com";
return (
    <main className="home">
      <Carousel photos={photos} />

      <section className="miceva">
        <Heading txt="MICEVA" />
        <div className="miceva__container__card">
          <Card1 className="card1" svg={svg} title="Une mission" paragraph={paragraph}/>
          <Card1 className="card1" svg={svg} title="Des chapelles" paragraph={paragraph}/>
          <Card1 className="card1" svg={svg} title="Un évangile" paragraph={paragraph}/>
          <Card1 className="card1" svg={svg} title="Une vision et des actions" paragraph={paragraph}/>
        </div>
        <Button txt="En savoir plus" link="https://www.google.com/"/>
      </section>

      <section className="intervention">
        <Heading txt="Nos domaines d'intervention" />
        <div className="miceva__container__card">
        <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
        <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
      <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
      <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
      </div>
      </section>

      <section className="chiffre">
      <Heading txt="Nos chiffres" />
      <div className="chiffre__container__card">
        <Card3 className="card3" svg={svg} title="10" paragraph="Lorem ipsum dolor sit amet"/>
        <Card3 className="card3" svg={svg} title="20" paragraph="Lorem ipsum dolor sit amet"/>
        <Card3 className="card3" svg={svg} title="15" paragraph="Lorem ipsum dolor sit amet"/>
        <Card3 className="card3" svg={svg} title="30" paragraph="Lorem ipsum dolor sit amet"/>
      </div>
      </section>

      <section className="program">
      <Heading txt="Nos programmes" />
      <div className="miceva__container__card">
      <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
        <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
      <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
      <Card2
        img={img}
        title={title}
        paragraph={paragraph}
        btnTxt={btnTxt}
        btnLink={btnLink}
      />
    
      </div>
      </section>


      <section className="contact">
      <Heading txt="Contact" />
      <div className="miceva__container__card">
      <Card1
      className="card1"
      svg={svg}
      title={title}
      paragraph={paragraph}

    />
    <Card1
      className="card1"
      svg={svg}
      title={title}
      paragraph={paragraph}
    
    />
    <Card1
      className="card1"
      svg={svg}
      title={title}
      paragraph={paragraph}
    
    />
    <Card1
      className="card1"
      svg={svg}
      title={title}
      paragraph={paragraph}
    />
    
      </div>
      </section>
     
    </main>
  );
}
export default Home;