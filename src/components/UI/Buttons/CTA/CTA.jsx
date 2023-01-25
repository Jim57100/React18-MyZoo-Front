import React from 'react';
import BtnTickets from '../BtnTicket/BtnTickets';

const CTA = (props) => {

  return (
    <section className='commercial mt-5 mb-5'>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className={props.color}>Prêts pour l'aventure ?</h2>
          <p>Réservez vos billets dès maintenant et profitez de nos offres exclusives internet !</p>
          <BtnTickets />
        </div>
      </div>
    </div>
  </section>
  )
}

export default CTA;