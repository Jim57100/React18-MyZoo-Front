import React from 'react';
import ContactForm from '../../../components/UI/ContactForm/ContactForm'
// import axios from 'axios';

const Contact = () => {

  return (
    <>
    <section> 
      <div className="container-fluid">
        <div className="row c-hero d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
          <div className="col-4 w-75 pt-5">
            <h1>Contact</h1>
          </div>
          <div className="col-8">
            <figure>
              <picture>
                <div className="figure_wrapper">
                  <img src="" alt="" />
                </div>
              </picture>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section style={{backgroundColor: 'white'}}>
    <div className="c-stack">
      <div className="container w-50">
        <div className="row empty h-50"></div>
        <div className="row top_title h-75">
          <div className="col-12 text-center">
            <p>Contactez-nous</p>
            <p>
              Une question sur le ZooParc de Beauval ? Un renseignement ? Envoyez votre demande et nous la transmettrons au bon interlocuteur du ZooParc.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Vous avez une question ?</h2> 
            <p className='text-black'>
              Contactez un de nos passionnés sur la fenêtre de chat en bas à droite de votre écran.
            </p> 
            <div className="text-center">
              <div className="btn btn-warning">Consulter notre FAQ</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="container pt-3 p-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Contact;