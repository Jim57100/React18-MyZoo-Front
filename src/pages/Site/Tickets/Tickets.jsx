import React from 'react';
import BtnTickets from '../../../components/UI/Buttons/BtnTicket/BtnTickets'


const Tickets = () => {

  return (
    <>
      <section className="t-banner">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
            <div className="col-4 text-center">
              <img src="" alt="icon ticket" className="icons"/> 
              <p>Billets ou Pass annuel</p>
              <p className="help">Achetez vos billets en avance et profitez de tarifs avantageux</p>
              icon chevron simple bas
            </div>
            <div className="col-4 text-center">
            <img src="" alt="icon double bed" className="icons"/> 
              <p>Billets + Hotel</p>
              <p>Le ZooParc se visite en 2 jours ! Choisissez notre forfait billets + hôtels</p>
            </div>
            <div className="col-4 text-center">
              <img src="" alt="icon bear" />
              <p>Vivez une expérience</p>
              <p>Offrez ou réservez une expérience inoubliable au ZooParc de MyZoo</p>
            </div>
          </div>
        </div>
      </section>
      <section className="t-stack">
        <div className="t-stack_item text-center">
          <div className="container">
            <div className="row h-50">
              <div className="col-12">
                <h1>Billets ou Pass annuel</h1>
                <p>Choisissez votre billet d'1 jour, 2 jours ou ZooPass annuel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="t-stack_item">
          <div className="container">
            <div className="row" style={{height: 300}}>
              <div className="col-sm-12 col-md-4">
                <div className="card-pass">
                  <div className="card-header">
                    <img src="" alt="an image" />
                  </div>
                  <div className="card-text">
                    <p>Something</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">

              </div>
              <div className="col-sm-12 col-md-4">

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-12 text-center">
              <BtnTickets />
              <p>Déjà un ticket ? <a href={import.meta.env.VITE_BACKEND_USER} target="_blank">Connectez-vous !</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tickets;