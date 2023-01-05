import { Routes, Route } from "react-router-dom";
import ErrorPage from './pages/Site/ErrorPage'
import Home from './pages/Site/Home/Home'
import Animals from './pages/Site/Animals/Animals'
import NavBar from './components/NavBar/NavBar';
import CookieConsent, { Cookies } from "react-cookie-consent";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
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
    </>
  )
}

export default App
