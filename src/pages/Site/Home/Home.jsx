import React from 'react';
import Hero from '../../../components/UI/Hero/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import bgImg from '../../../assets/images/tiger.png'
import {GiTopPaw} from 'react-icons/gi'
import polarBear from '../../../assets/images/white_bear_under_water.png'
import greenCircleBg from '../../../assets/images/green_round_background.png'
import lion from '../../../assets/images/lion.png'
import panda from '../../../assets/images/panda.png'
import hippo from '../../../assets/images/hippo.png'
import './home.css'
import BtnTickets from '../../../components/UI/Buttons/BtnTicket/BtnTickets';
import LeafParallax from '../../../components/UI/LeafParallax/LeafParallax';
import monsteraLeftClear from '../../../assets/images/monstera_left_clear.png'
import { Parallax } from 'react-scroll-parallax'

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
              <h2>Des animaux extraordinaires !</h2>
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
              <h3>Le Parc Polaire</h3>
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
              <img src={lion} alt="lion" className='animalImg'/>
              <h2 className="text-center">La Terre des Lions</h2>
              <p className="text-center">Lions, suricates, lycaons, rats-taupes...</p>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
              <img src={panda} alt="panda" className='animalImg'/>
              <h2 className="text-center">Les Hauteurs de Chine</h2>
              <p className="text-center">Pandas géants, panthères des neiges, pandas roux, takins...</p>
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-center">
              <img src={hippo} alt="panda" className='animalImg'/>
              <h2 className="text-center">La Réserve des Hippopotames</h2>
              <p className="text-center">Hippopotames, potamochères, bongos, nyalas, pélicans...</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h2 class="titleToMap">Et tant d'autres animaux fascinants !</h2>
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
          style={{'position': 'absolute', 'z-index': '1', 'left': '-50px'}}
        >
        <img src={monsteraLeftClear} alt="monstera leaf" style={{ height: 300}}/>
      </Parallax>
      </section>
      <section className='commercial mt-5 mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Prêts pour l'aventure ?</h2>
              <p>Réservez vos billets dès maintenant et profitez de nos offres exclusives internet !</p>
              <BtnTickets />
            </div>
          </div>
        </div>
      </section>
      
    </ParallaxProvider>
  );
}

export default Home;