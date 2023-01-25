import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/Site/ErrorPage';
import Home from './pages/Site/Home/Home';
import Animals from './pages/Site/Animals/Animals';
import Animal from './pages/Site/Animal/Animal';
import NavBar from './components/NavBar/NavBar';
import CookieConsent, { Cookies } from "react-cookie-consent";
import Footer from './components/Footer/Footer';
import Tickets from './pages/Site/Tickets/Tickets';
import Contact from './pages/Site/Contact/Contact';

function App() {

  return (
    <>
      <div className="site">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
            errorElement={<ErrorPage />}
          />
          <Route 
            path="/animals" 
            element={<Animals />} 

          />
          <Route 
            path="/animals/:id" 
            element={<Animal />} 

          />
          <Route path="/tickets" element={<Tickets />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <div className="minSite"></div>
        <Footer />
        <CookieConsent
            location="top"
            buttonText="Accepter tout"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#0d2c3b" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.{" "}
          </CookieConsent>
      </div>
    </>
  )
}

export default App
