/* dependencies */
import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
/* css */
import './contactForm.css';
/* components */
import ReCAPTCHA from 'react-google-recaptcha' 
import axios from 'axios';


const ContactForm = () => {

  const [captchaIsDone, setCaptchaIsDone] = useState(false)
  const [modal, setModal] = React.useState(undefined);
  const [errorModal, setErrorModal] = React.useState(undefined);

  const reRef = useRef();

  const recaptchaChange = () => {
    setCaptchaIsDone(true)
  }

  const formSchema = Yup.object().shape({
    gender: Yup.string().required('Requis'),
    firstName: Yup.string()
     .min(2, 'Trop court!')
     .max(50, 'Trop long!')
     .required('Requis'),
    lastName: Yup.string()
     .min(2, 'Trop court!')
     .max(50, 'Trop long!')
     .required('Requis'),
    message: Yup.string().min(10, 'Trop court!').max(255, 'Trop long!').required('Requis'),
    email: Yup.string().email('Invalid email').required('Requis'),
    terms: Yup.bool().oneOf([true], "You need to accept the terms and conditions")
  });

 
  return (
    <>
      <h3>Envoyez-nous un message</h3>
      <Formik
        initialValues={{
          gender: '',
          email: '', 
          firstName: '', 
          lastName: '',
          message: '',
          terms: false,
          newsletter: false,
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {

          const message = {
          gender: values.gender,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          message: values.message,
          newsletter: values.newsletter
          }
          
          const url = import.meta.env.VITE_URL_BACK_CONTACT;
          axios.post(url,message)
          .then(response=> {
              setModal(true);
              console.log('response ', response)
          })
          .catch(error => {
              console.log(error)
              setErrorModal(true);
          })

          setTimeout(() => {
            // console.log(JSON.stringify(message, null, 2));
            actions.setSubmitting(false);
          }, 400);
          actions.resetForm();
        }}
      >
       {(props) => (
        <Form>
        { errorModal && <div className="alert alert-danger" role="alert">Erreur d'envoi du message</div> }
        { modal && <div className="alert alert-success" role="alert">Merci ! nous avons bien reçu votre message.</div> }

          <div className='mt-3 mb-3'>  
            <label htmlFor='email' className='form-label'>E-mail*</label>
            <Field 
              name="email" 
              type="email"  
              className='form-control' 
              aria-labelledby='email' 
              id='email' 
              aria-describedby='emailHelp' 
            />
            {props.errors.email && props.touched.email ? <div style={{color: 'red'}}>{props.errors.email}</div> : null}
            <div id='emailHelp' className='form-text'>
              Nous ne partagerons jamais votre e-mail avec qui que ce soit.
            </div>
          </div>
          <div className='mt-3 mb-3'>  
            <label 
              htmlFor='gender' 
              className='form-label'
            >
              Civilité*
            </label>
            <Field 
              as='select'
              className='form-select' 
              id='gender' 
          
              aria-label='Default select example' 
              name='gender'
            >
              <option defaultvalues=''>Sélectionnez...</option>
              <option values='Madame'>Madame</option>
              <option values='Monsieur'>Monsieur</option>
              <option values='Undefined'>Non défini</option>
            </Field>
            {
              props.errors.gender && props.touched.gender 
              ? <div style={{color: 'red'}}>{props.errors.gender}</div> 
              : null
            }
          </div>
          <div className='mb-3'>
            <div className='row'>
              <div className='col'>
                <label 
                  htmlFor='firstName' 
                  className='form-label'
                >
                  Prénom*
                </label>
                <Field 
                  type='text' 
                  id='firstName' 
                  className='form-control' 
                  aria-label='First name' 
                  name='firstName'  
                />
                {
                  props.errors.firstName && props.touched.firstName 
                  ? <div style={{color: 'red'}}>{props.errors.firstName}</div> 
                  : null
                }
              </div>
              <div className="col">
                <label 
                  htmlFor='lastName' 
                  className='form-label'
                >
                 Nom*
                </label>
                <Field 
                  type='text' 
                  id='lastName' 
                  className='form-control' 
                  aria-label='Last name'
                  name='lastName' 
                />
                {
                  props.errors.lastName && props.touched.lastName 
                  ? <div style={{color: 'red'}}>{props.errors.lastName}</div> 
                  : null
                }
              </div>
            </div>
          </div>
          <div className='mb-3'>
            <label 
              htmlFor='message' 
              className='form-label'
            >
              Message*
            </label>
            <Field 
              as='textarea'
              className='form-control' 
              id='message' 
              rows='3'
              name='message'
            />
            {
              props.errors.message && props.touched.message 
              ? <div style={{color: 'red'}}>{props.errors.message}</div> 
              : null
            }
          </div>
          <div className='mb-3 form-check'>
            <label 
              className='form-label' 
              htmlFor='terms'
            >
              J'ai pris connaissance des informations sur les données personnelles
            </label>
            <Field 
              type='checkbox' 
              className='form-check-input' 
              id='terms'
              name='terms'
            />
            {
              props.errors.terms && props.touched.terms 
              ? <div style={{color: 'red'}}>{props.errors.terms}</div> 
              : null
            }
          </div>
          <div className='mb-3 form-check'>
            <label 
              className='form-label' 
              htmlFor='newsletter'
            >
            J'autorise le ZooParc de MyZoo à m'envoyer des informations
            </label>
            <Field 
                type='checkbox' 
                className='form-check-input' 
                id='newsletter'
                name='newsletter'
            />
          </div>
          <ReCAPTCHA 
            sitekey={import.meta.env.VITE_RECAPTCHA_KEY} 
            onChange={recaptchaChange}
            ref={reRef}
            className="recaptcha mt-3 mb-3"  
          />
          <button 
            className="btn btn-warning mb-3" 
            type="submit" 
            disabled={!captchaIsDone}
          >
            Envoyer
          </button>
        </Form>
        )}
      </Formik>

    </>
    
  )
}

export default ContactForm;