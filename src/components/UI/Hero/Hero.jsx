import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import './hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero = (props) => {

  return (
    <ParallaxBanner 
      style={{ height: 600, aspectRatio: '2 / 1' }} 
      className="main"
      layers={[
        {
          image: props.imgsrc,
          speed: -20
        },
        {
          children: (
            <div className="main_title" data-aos="fade-up" data-aos-duration="3000">
              <h1 className="text-8xl text-white font-thin">Bienvenue au ZooParc de MyZoo</h1>
            </div>
          ),
          speed: -10
        }
      ]}
    />
    
  );
  }

export default Hero;