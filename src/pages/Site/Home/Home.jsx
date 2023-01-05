import React from 'react';
import Hero from '../../../components/UI/Hero/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import bgImg from '../../../assets/images/tiger.png'
import {GiTopPaw} from 'react-icons/gi'
import polarBear from '../../../assets/images/white_bear_under_water.png'
import greenCircleBg from '../../../assets/images/green_round_background.png'
import './home.css'

const Home = () => {

  return (
    <ParallaxProvider>
      <Hero imgsrc={bgImg} height='500px' opacity='.5' />
      <div className="container">
        <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
          <h2>Des animaux extraordinaires !</h2>
          <p>
            Embarquez pour un séjour inoubliable à la rencontre de plus de 35 000 animaux du monde entier, installés dans les 20 territoires du ZooParc !
          </p>
        </div>
          <div className="row mt-5 mb-5 h-100 polarZone">
            <div className="col-sm-12 col-md-6 ">
              <img src={polarBear} alt="white bear under water" className='polarBearImg'/>
              <img src={greenCircleBg} className="greenCircleBg" alt="white bear under water" />
            </div>
            <div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center">
              <h3>Le Parc Polaire</h3>
              <p>Explorez le monde lors d'un voyage époustouflant ! A travers une véritable banquise et un milieu océanique polaire, découvrez plus de 200 espèces animales et végétales fascinantes… Un nouveau monde vous attend…</p>
              <div className="btn btn-warning rounded-pill btn-lg">
                Je découvre le Pôle
                <GiTopPaw />
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-4">
                <h2>La Terre des Lions</h2>
                <p>Lions, suricates, lycaons, rats-taupes...</p>
              </div>
              <div className="col-4">
                <h2>Les Hauteurs de Chine</h2>
                <p>Pandas géants, panthères des neiges, pandas roux, takins...</p>
              </div>
              <div className="col-4">
                <h2>La Réserve des Hippopotames</h2>
                <p>Hippopotames, potamochères, bongos, nyalas, pélicans...</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 class="titleToMap">Et tant d'autres animaux fascinants !</h2>
                <button className='btn btn-warning rounded-pill btn-lg'>J'explore leurs territoires</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Home;