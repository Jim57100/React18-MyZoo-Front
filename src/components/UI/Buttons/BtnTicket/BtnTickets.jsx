import React from 'react';
import brush from '../../../../assets/images/brush.png';
import { NavLink } from 'react-router-dom';
import { GiTicket } from 'react-icons/gi';
import './btnTickets.css';

const BtnTickets = () => {

  return (      
    <NavLink to="/tickets">
      <button className="btn_ticket_container">
        <img src={brush} alt="brush" className='btn_brush_img'/>
        <div class="btn_ticket_text_container">
          <GiTicket size={30} />
          <span className="btn_ticket_text">Billetterie</span>
        </div>
      </button>
    </NavLink>
  )

}

export default BtnTickets;