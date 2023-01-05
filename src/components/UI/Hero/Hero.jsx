import React from 'react';
import leftLeafClear from '../../../assets/images/leaf-left-clear.png'
import leftLeafVague from '../../../assets/images/leaf-left-vague.png'
import rightLeafClear from '../../../assets/images/leaf-right-clear.png'
import rightLeafVague from '../../../assets/images/leaf-right-vague.png'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import './hero.css'


const Hero = (props) => {

  return (
    <ParallaxBanner style={{ height: 600 }} className="main">
      <ParallaxBannerLayer image={props.imgsrc} speed={-20} />
      <ParallaxBannerLayer 
        image={leftLeafClear} 
        expanded={false}
        speed={20}
        scale={[1, 2]}
        opacity={[0.3, 1]}
        style={{aspectRatio: '1 / 1', top: 300, left: 0}}
        className="left-leaf-clear" 
        />
      <ParallaxBannerLayer 
        image={leftLeafVague} 
        expanded={false}
        speed={5}
        scale={[1, 1.2]}
        style={{aspectRatio: '1 / 2' , top: 45, left: 0}}
        className="left-leaf-clear"
        />
      <ParallaxBannerLayer 
        image={rightLeafClear} 
        expanded={false}
        speed={20}
        scale={[1, 1.2]}
        opacity={[1, 0.8]}
        style={{aspectRatio: '1 / 1', top: 0, left: 1250}}
        className="left-leaf-clear" 
        />
      <ParallaxBannerLayer 
        image={rightLeafVague} 
        expanded={false}
        speed={5}
        scale={[1, 2]}
        opacity={[1, 0]}
        style={{aspectRatio: '1 / 1' , top: 300, left: 1260}}
        className="left-leaf-clear"
        />
    </ParallaxBanner>
    // <ParallaxBanner
    //   layers={[
    //     {image: props.imgsrc, speed: -20},
    //     {image: leftLeafClear, speed: -5}
    //   ]}
    //   style={{height: props.height}}
    // >
    // <div>
    //   {props.children}
    // </div>
    // </ParallaxBanner>
  );
  }

export default Hero;