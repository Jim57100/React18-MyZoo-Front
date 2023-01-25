import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import { Parallax } from 'react-scroll-parallax'
/* Components */
import Hero from '../../../components/UI/Hero/Hero'
import LeafParallax from '../../../components/UI/LeafParallax/LeafParallax';
import CTA from '../../../components/UI/Buttons/CTA/CTA';
/* css */
import './home.css'
/* icons */
import {GiTopPaw} from 'react-icons/gi'
/* imgs */
import monsteraLeftClear from '../../../assets/images/monstera_left_clear.png'
import bgImg from '../../../assets/images/tiger.png'
import polarBear from '../../../assets/images/white_bear_under_water.png'
import greenCircleBg from '../../../assets/images/green_round_background.png'
import lion from '../../../assets/images/lion.png'
import panda from '../../../assets/images/panda.png'
import snowTiger from '../../../assets/images/snowTiger.png'

const Home = () => {

  return (
    <ParallaxProvider>
      <section>
        <Hero imgsrc={bgImg} height='500px' opacity='.5' />
      </section>
      <LeafParallax />
      <section className='animalSection'>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-12 text-center">
              <h2 className='text-white'>Des animaux extraordinaires !</h2>
              <p>
                Embarquez pour un séjour inoubliable à la rencontre de plus de 35 000 animaux du monde entier, installés dans les 20 territoires du ZooParc !
              </p>
            </div>
          </div>
          <div className="row mt-5 mb-5 h-100 polar_zone_container">
            <div className="col-sm-12 col-md-6 polar_image_container">
              <img src={polarBear} alt="white bear under water" className='polar_img'/>
              <img src={greenCircleBg} className="green_circle_bg" alt="green circle background" />
            </div>
            <div className="polar_zone_text col-sm-12 col-md-4">
              <h3 className="text-white">Le Parc Polaire</h3>
              <p>
                Explorez le monde lors d'un voyage époustouflant ! A travers une véritable banquise et un milieu océanique polaire, découvrez plus de 200 espèces animales et végétales fascinantes… Un nouveau monde vous attend…
              </p>
              <div className="btn btn-warning rounded-pill btn-lg">
                Je découvre le Pôle
                <GiTopPaw style={{marginLeft: 10}}/>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
              <img src={lion} alt="lion" className='animalImg' style={{height: 350, width: 350}}/>
              <h2 className="text-center text-white">Le territoires des félins</h2>
              <p className="text-center">Lions, tigres, panthères, guépards...</p>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
              <img src={panda} alt="panda" className='animalImg' style={{height: 350, width: 350}}/>
              <h2 className="text-center text-white">La jungle asiatique</h2>
              <p className="text-center">Pandas géants, panthères des neiges, pandas roux, takins...</p>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
              <img src={snowTiger} alt="panda" className='animalImg' style={{height: 350, width: 350}}/>
              <h2 className="text-center text-white">La terre d'Amérique du Nord</h2>
              <p className="text-center">Tigres des neiges, loup Artictique, Bisons...</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h2 className="titleToMap">Et tant d'autres animaux fascinants !</h2>
              <button className='btn btn-warning rounded-pill btn-lg'>
                J'explore leurs territoires
                <GiTopPaw style={{marginLeft: 10}}/>
              </button>
            </div>
          </div>
        </div>
         <Parallax
          translateY={['0px', '-1000px']}
          speed={250}
          style={{'position': 'absolute', 'left': '-50px'}}
        >
        <img src={monsteraLeftClear} alt="monstera leaf" style={{ height: 300}}/>
      </Parallax>
      </section>
      <CTA color={'text-white'}/>
      
    </ParallaxProvider>
  );
}

export default Home;