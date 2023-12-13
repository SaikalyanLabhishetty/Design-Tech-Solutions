// Appmain.js
import React from 'react';
import AppHeader from './AppHeader';
import Carousal from "@itseasy21/react-elastic-carousel";
import { Breakpoints, slider, Info } from './export';
import './Appmain.css';
import Marquee from 'react-fast-marquee';
import Footer from "./Footer"
import NewArrivals from './NewArrivals';

const Appmain = () => {
  return (
    <div>
      <AppHeader />
      <div className='section-1'>
        <Carousal itemsToShow={1} autoPlaySpeed={30} showArrows={true} className='carousal' breakPoints={Breakpoints}>
          {slider.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={slide.name} />
            </div>
          ))}
        </Carousal>
        </div>
        <div className='section-5'>
        <h3>
          <u>Courses & Internships Offered</u>
        </h3>
       <Marquee direction="left" speed={60} height={100} style={{margin:"0",padding:"0"}}>
        {Info.map((info,index) => (
          <div className='test' key={index.id}>
          <img src={info.image}/>
          <h5>{info.name}</h5>
          <p>{info.courses}</p>
        </div>
        ))
        }
       </Marquee>
      </div>
      <NewArrivals/>
        <Footer/>
    </div>
  );
}

export default Appmain;
