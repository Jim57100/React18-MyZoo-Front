import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
/* badges de menaces */
import vu from '../../../assets/images/threat_pills/vu.png';
import lc from '../../../assets/images/threat_pills/lc.png';
import cr from '../../../assets/images/threat_pills/cr.png';
import en from '../../../assets/images/threat_pills/en.png';
/* css */
import './animal.css';
/* composants */
import CTA from '../../../components/UI/Buttons/CTA/CTA';
import {GiTopPaw} from 'react-icons/gi'

const Animal = () => {

  const {id} = useParams();
  const [animal, setAnimal] = useState([]);
  
  const loadData = async () => {
    await axios.get(`http://localhost/udemy/projets/serveurFSmyZoo/front/animal/${id}`)
    .then((response) => {
      console.log(Object.values(response.data));
      setAnimal(Object.values(response.data));
    })
    .catch(error => console.log('Error: ' + error)); 
  }

  useEffect(() => {
    loadData();
  }, [])
  
  const threatImg = (id) => {
    switch (id) {
      case 1 : return '../../../assets/images/threat_pills/lc.png'; break;
      case 2 : return '../../../assets/images/threat_pills/vu.png'; break;
      case 3 : return '../../../assets/images/threat_pills/cr.png'; break;
      case 4 : return '../../../assets/images/threat_pills/cr.png'
      ; break;
      default: return ""; break;
    }
  }



  return (
    
      animal.map((data) => {
        const nickname = (data.name).split(' ');

        
        return (
          <div key={data.id}>
            <section className='hero'>
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-6 h_headings">
                    <h1>{data.name}</h1>
                    <p>{data.family.name}</p>
                    <div className='h_threat'>
                      <img src={() => threatImg(data.threat.priority)} style={{ height: 80}} alt="macaron de vulnérabilité" className='img-fluid'/>
                      <p>Espèce</p>
                      <p><strong>{data.threat.description}</strong></p>
                      <a href="#">En savoir plus</a>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 a-banner">
                    <figure className="a-banner figure_wrapper">
                      <picture className="a-banner figure_picture">
                        <img src={data.thumbnail} 
                          alt={`image d'un(e) ${data.name}`} 
                          className='img-fluid figure_picture_image' 
                          loading={'lazy'}
                        />
                      </picture>
                    </figure>
                  </div>
                </div>
              </div>
            </section>
            <section className='animal_main_content'>
              <section className='a_description_container'>
                <div className="container d-flex justify-content-center flex-column">
                  <div className="row a_fact_container">
                    <div className="col-12 text-center">
                      <h4 className='a_fact'>{data.fact}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <h3>{data.main_title}</h3>
                      <h4>{data.second_title}</h4>
                      <p className='a_description'>{data.description}</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <figure>
                        <picture>
                          <img 
                            src={data.image} 
                            alt={`image de ${data.name} dans son environnement naturel`} 
                            className='img-fluid'

                          />
                        </picture>
                      </figure>
                    </div>
                  </div>
                </div>
              </section>
              <section className='a_news_container mt-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-sm-12 col-md-6 p-1'>
                      <figure>
                        <picture>
                          <img 
                            src={data.news[0].image} 
                            alt="" 
                            className='a_news_image'
                          />
                        </picture>
                      </figure>
                    </div>
                    <div className='col-sm-12 col-md-6 p-1'>
                      <p className='a_news_description'>{data.news[0].description}</p>
                      <button className="btn btn-warning btn-lg">L'actu des {nickname[0]+'s'} <span className='pl-2'><GiTopPaw /></span></button>
                    </div>
                  </div>
                </div>
              </section>
              <section className='a_learnMore_container mt-5'>
                <div className="container">
                  <div className="row a_stack">
                    <div className="col-12 a_stack_item">
                      <div className="a_stack_item_wrapper text-center">
                        <h3>En savoir plus sur l'espèce</h3>
                      </div>
                    </div>
                    <div className="col-12 a_stack_item map">
                      <div className="a_stack_item_wrapper">
                        <div className='location'>
                          <img src="" alt="carte du monde" />
                          <h6>DISTRIBUTION</h6>
                          <p><strong>{data.continents[0].name}</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <CTA />
            </section>
          </div>
        )
      }) 
  )
}

export default Animal;