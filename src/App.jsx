import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/Site/ErrorPage';
import Home from './pages/Site/Home/Home';
import Animals from './pages/Site/Animals/Animals';
import NavBar from './components/NavBar/NavBar';
import CookieConsent, { Cookies } from "react-cookie-consent";
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <div className="site">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div className="minSite"></div>
        <Footer />
        <CookieConsent
            location="bottom"
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
