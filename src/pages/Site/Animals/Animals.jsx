import React, { useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import greenCircle from '../../../assets/images/green_round_background.png'
import flying from '../../../assets/images/flying.png'
import flamings from '../../../assets/images/flamings.png'
import CardAnimal from '../../../components/CardAnimal/CardAnimal'
import { IconContext } from "react-icons"
import { GrSearch } from "react-icons/gr"
import './animals.css';


const Animals = () => {

  //API Call
  const [animals, setAnimals] = React.useState([]);

  const loadData = async () => {
    const url = import.meta.env.VITE_BACKEND_GET_ANIMALS;
    await axios.get(url)
    .then((response) => {
          console.log(Object.values(response.data));
          setAnimals(Object.values(response.data));
        }); 
  }

  useEffect(() => {
    loadData();
  }, [])


  const placeholderText = ['lion', 'gorille', 'koala', 'hippopotame', 'éléphant'];
  const [index, setIndex] = React.useState(0);
  //Timer
  // useEffect(() => {
  //   const timer = () => {
  //     setIndex(prevIndex => {
  //       if(prevIndex === placeholderText.length -1 ){
  //         return 0;
  //       }
  //       return prevIndex + 1;  
  //     })
  //   }
  //   setInterval(timer, 2000);
  //   return () => { clearInterval(timer); }  //cleanup the effect
  // }, []);

  return (
    <>
    <section className="a_hero">
      <div className="container-fluid">
        <div className="row a_h_header"></div>
        <div className="row">
          <div className="a_h_background_image"></div>
          <div className="a_h_overlay"></div>
        </div>
        <div className="a_h_content">
          <div className="a_h_parallaxes col-sm-12 col-md-7">
            <img src={flamings} alt="flamings in a wide green space" className='a_h_flamings'/>
            <img src={flying} alt="flying bird taking flight" className='a_h_flying'/>
            <img src={greenCircle} alt="green circle background" className='a_h_green_circle_bg'/> 
          </div>
          <div className="a_title col-sm-12 col-md-5">
            <h1>Les animaux extraordinaires de MyZoo</h1>
            <p>Venez rencontrer les incroyables animaux de MyZoo ! Du plus petit des amphibiens au plus grand des mammifères terrestres, l'éléphant, admirez la diversité du monde animal.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="a_main">
    
      <div className="container">
        <div className="row a_m_content mt-5 mb-5 pt-5 pb-5">
          <div className="col-sm-12 col-md-7 a_search">
            <form>
              <label>
                <p style={{color: 'black', fontWeight: 'bold', fontSize: '25px'}}>Vous recherchez un animal ?</p>
                <div className="searchBox_container">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder={placeholderText[index]}
                    id='searchBox'
                  />
                  <IconContext.Provider value={{ className: 'react_icons' }}>
                    <button type="submit" className='btnSubmit'>
                      <GrSearch />
                    </button>
                  </IconContext.Provider>
                </div>
              </label>
            </form>
          </div>
          <div className="col-sm-12 col-md-5 a_info">
            <h3 className='a_info_title'>
              800 espèces fascinantes à découvrir à MyZoo !
            </h3>
            <p className='a_info_text'>Tout ce que vous avez toujours voulu savoir sur les nombreuses espèces animales accueillies au ZooParc de Beauval se trouve ici, sur nos fiches animaux. Et pour en apprendre encore plus, assistez à nos animations pédagogiques dans les allées du parc !</p>
            <span className="a_info_text mt-3">Découvrez ici quelques unes des espèces emblématiques.</span>
          </div>
        </div>
        <div className="container a_cards-container">
          <div className="row a_display_data no-gutters">
            {
              animals.map((animal) => {
                return (
                  <div 
                    className="col-12 col-md-6 col-xl-4 a_card" 
                    key={animal.id}
                  >
                    <NavLink to={`./${animal.id}`}>
                      <CardAnimal {...animal}/>
                    </NavLink>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Animals;