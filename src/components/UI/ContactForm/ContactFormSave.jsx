/* dependencies */
import React, { useRef, useState } from 'react';
import { useFormik  } from 'formik';
import * as Yup from 'yup';
/* css */
import './contactForm.css';
/* components */
import ReCAPTCHA from 'react-google-recaptcha' 

const onSubmit = () => {
  console.log("submitted");
  alert(JSON.stringify(values, null, 2));
}

const ContactForm = () => {

  const [captchaIsDone, setCaptchaIsDone] = useState(false)
  // const [termsIdDone, setTermsIsDone] = useState(false)
  // const [newsletterIsDone, setNewsletterIsDone] = useState(false)
  const reRef = useRef();

  const recaptchaChange = () => {
    setCaptchaIsDone(true)
  }

  
  // const termsChange = () => {
  //   setTermsIsDone(true)
  // }

  // const newsletterChange = () => {
  //   setNewsletterIsDone(true)
  // }

  const ContactSchema = Yup.object().shape({
    reason: Yup.string().required("Ce champ est obligatoire"),
    email: Yup.string().email("email invalide")
    .required("Requis"),
    gender: Yup.string().required("Requis"),
    firstName: Yup.string()
    .min(3, "Le prénom doit avoir plus de 2 caractères")
    .required("Requis"),
    lastName: Yup.string()
    .min(3, "Le nom doit faire faire plus de 2 caractères")
    .required("Requis"),
    terms: Yup.bool().oneOf([true], "Accepter les conditions est obligatoire")
  })

  const {values, handleChange, handleBlur, handleSubmit, errors} = useFormik({
    initialValues: {
      reason: '',
      email: '',
      gender: '',
      firstName: '',
      lastName: '',
      message: '',
      terms: 'false',
      newsletter: 'false',
    },
    validationSchema: {ContactSchema},
    onSubmit
  });
  
  return (
    <>
      <h3>Envoyez-nous un message</h3>
      <form onSubmit={handleSubmit}>
        <div className='mt-3 mb-3'>
          <label htmlFor='reason' className='form-label'>Vous êtes...*</label>
          <select 
            className='form-select' 
            id='reason' 
            aria-label='selectionnez qui vous êtes' 
            name='reason'
            onChange={handleChange}
            values={values.reason}   

          >
            <option defaultvalues=''>Sélectionnez...</option>
            <option values='1'>Un particulier</option>
            <option values='2'>Un professionnel</option>
            <option values='3'>Un CE</option>
            <option values='4'>Une école</option>
            <option values='5'>Autre</option>
          </select>
        </div>
        <div className='mb-3'>
          <label 
          htmlFor='email' 
          className='form-label'
          >
          E-mail*
          </label>
          <input 
            type='email' 
            className='form-control' 
            aria-labelledby='email' 
            id='email' 
            aria-describedby='emailHelp'  
            name='email'
            onChange={handleChange}
            values={values.email}   
          />
          <div id='emailHelp' className='form-text'>
            Nous ne partagerons jamais votre e-mail avec qui que ce soit.
          </div>
        </div>
        <div className='mb-3'>
        <label 
          htmlFor='gender' 
          className='form-label'
        >
        Civilité*
        </label>
          <select 
            className='form-select' 
            id='gender' 
            aria-label='Default select example' 
            name='gender'
            onChange={handleChange}
            values={values.gender}   

          >
            <option defaultvalues={''}>Sélectionnez...</option>
            <option values='1'>Madame</option>
            <option values='2'>Monsieur</option>
          </select>
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
              <input 
                type='text' 
                id='firstName' 
                className='form-control' 
                placeholder='First name' 
                aria-label='First name' 
                name='firstName' 
                onChange={handleChange}
                values={values.firstName}   
 
              />
            </div>
            <div className='col'>
              <label 
                htmlFor='lastName' 
                className='form-label'
              >
                Nom*
              </label>
              <input 
                type='text' 
                id='lastName' 
                className='form-control' 
                placeholder='Last name' 
                aria-label='Last name'
                name='lastName' 
                onChange={handleChange}
                values={values.lastName}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label 
            htmlFor='message' 
            className='form-label'
          >
          Message*
          </label>
          <textarea 
            className='form-control' 
            id='message' 
            rows='3'
            name='message'
            onChange={handleChange}
            values={values.message} 
          >
          </textarea>
        </div>
        <div className='mb-3 form-check'>
          <input 
            type='checkbox' 
            className='form-check-input' 
            id='terms'
            name='terms' 
            onChange={handleChange}
            values={values.terms} 
          />
          <label 
            className='form-label' 
            htmlFor='terms'
          >
          J'ai pris connaissance des informations sur les données personnelles</label>
        </div>
        <div className='mb-3 form-check'>
          <input 
            type='checkbox' 
            className='form-check-input' 
            id='newsletter' 
            name='newsletter' 
            onChange={handleChange}
            values={values.newsletter}
          />
          <label 
            className='form-label' 
            htmlFor='newsletter'
          >
          J'autorise le ZooParc de MyZoo à m'envoyer des informations
          </label>
        </div>
        <ReCAPTCHA 
          sitekey={import.meta.env.VITE_RECAPTCHA_KEY} 
          onChange={recaptchaChange}
          ref={reRef}
          className="recaptcha mt-3 mb-3"  
        />
        <button 
          type='submit' 
          className='btn btn-warning mb-5' 
          disabled={!captchaIsDone}
        >
          Submit
        </button>
      </form>
    </>
    
  )
}

export default ContactForm;