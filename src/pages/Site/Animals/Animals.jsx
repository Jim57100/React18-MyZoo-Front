import React, { useEffect } from 'react';
import greenCircle from '../../../assets/images/green_round_background.png'
import flying from '../../../assets/images/flying.png'
import flamings from '../../../assets/images/flamings.png'
import CardAnimal from '../../../components/CardAnimal/CardAnimal'
import axios from 'axios';
import './animals.css';



const Animals = () => {

  //Form placeholder autocomplete  
  function showLettersOf(arrayOfStrings) {
    var stringIndex=0, letterIndex=0, str="";
    return setInterval(() => {
      str += arrayOfStrings[stringIndex].charAt(letterIndex++);
      if (letterIndex >= arrayOfStrings[stringIndex].length){
        letterIndex=0;
        str="";
        if (++stringIndex >= arrayOfStrings.length) stringIndex=0;
      }
    }, 1000);
  }
  

  //API Call
  const [animals, setAnimals] = React.useState([]);

  useEffect(() => {
    axios.get(`http://localhost/udemy/projets/serveurFSmyZoo/front/animals`)
    .then((response) => {
      console.log(Object.values(response.data));
      setAnimals(Object.values(response.data));
    });
  }, []);


  const display = animals && animals.map(
    animal => {
      return animal.name
    }
  );
  console.log(display);

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
        <div className="row a_m_content mt-5 mb-5">
          <div className="col-sm-12 col-md-7 a_search">
            <form>
              <label>
                <h3>Vous recherchez un animal ?</h3>
                <input 
                  type="text" 
                  name="name" 
                  placeholder={ showLettersOf(['lion', 'gorille']) }
                />
              </label>
              <input type="submit" value="Submit"/>
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
        <div className="container cards-container">
          <div className="row a_display_data no-gutters">
            
            {
              animals.map((animal) => {
                return (
                  <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                    <CardAnimal {...animal} />
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