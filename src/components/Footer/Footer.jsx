import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';
import classes from './footer.module.css';

const Footer = () => {

  return (
    <footer className='pt-3'>
      <div className="row f_container">
        <div className="f_column col-sm-12 col-md-3">
          <div className="f_title">
            <h4>Venir</h4>
              <ul className='f_items'>
                <li className='f_items'>MyZoo</li>
                <li className='f_items'>3 rue somewhere</li>
                <li className='f_items'>99999 My Country</li>
              </ul>
              <ul className='f_items openings mt-3'>
                <li>Ouvert toute l'année</li>
                <li>7j/7 à partir de 9h00</li>
                <li>Y compris les jours fériés</li>
              </ul>
          </div>
        </div>
        <div className="f_column col-sm-12 col-md-3">
          <div className="f_title">
            <h4>Découvrir</h4>
              <ul className='f_items'>
                <li className='f_items'>
                  <NavLink 
                    to="/animals" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Le Zoo & les animaux
                  </NavLink>
                </li>
                <li className='f_items'>
                  <NavLink 
                    to="/shows" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Les spectacles et activités
                  </NavLink>
                </li>
                <li className='f_items'>
                  <NavLink 
                    to="/resort" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Préparez votre visite
                  </NavLink>
                </li>
              </ul>
          </div>
        </div>
        <div className="f_column col-sm-12 col-md-3">
          <div className="f_title">
            <h4>Réserver</h4>
              <ul className='f_items'>
                <li className='f_items'>
                  <NavLink 
                    to="/tickets" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Nos offres du moment
                  </NavLink>
                </li>
                <li className='f_items'>
                  <NavLink 
                    to="/tickets" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Billets
                  </NavLink>
                </li>
                <li className='f_items'>
                  <NavLink 
                    to="/tickets" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Billets & hotel
                  </NavLink>
                </li>
              </ul>
          </div>
        </div>
        <div className="f_column col-sm-12 col-md-3">
        <div className="f_title">
            <h4>Séjourner</h4>
              <ul className='f_items'>
                <li className='f_items'>
                  <NavLink 
                    to="/resort/hotel" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Notre hôtel
                  </NavLink>
                </li>
                <li className='f_items'>
                  <NavLink 
                    to="/resort/spa" 
                    className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
                  >
                    Le Spa
                  </NavLink>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div className="row footer_copy">
        <div className="f_column col-sm-12 col-md-4 f_items"> 
          &copy;MyZoo 2023 / 
            <NavLink 
              to="https://jimprojects.ovh" 
              className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
            >
              jimprojects
            </NavLink>- Tout droits réservés
        </div>
        <div className="col-sm-12 col-md-4">
          <NavLink 
            to="/mentionsLegales" 
            className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
          >
            mentions légales
          </NavLink>
        </div>
        <div className="col-sm-12 col-md-4">
          <a 
            href="mailto:contact@myzoo.com" 
            className={['nav-link', 'p-0' ,'m-0', classes.p_footerLink ].join(" ")}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;