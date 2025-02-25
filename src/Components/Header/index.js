import React, { useState } from 'react'; // Import useState for mobile menu toggle
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './index.css';
import {
  FaGlobe,
  FaSignOutAlt,
  FaHome,
  FaSeedling,
  FaCloudSunRain,
  FaTractor,
  FaTools,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from 'react-icons/fa'; // Import icons

const Header = () => {
  const { t, i18n } = useTranslation(); // Use the useTranslation hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Function to handle logout
  const OnclickLogout = () => {
    Cookies.remove('jwt_token');
    return <Redirect to="/login" />;
  };

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language using i18n
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="header-container">
      {/* Logo and Title */}
     
        <img
          alt="wave"
          className="logo"
          src="https://www.pngplay.com/wp-content/uploads/6/Agriculture-Green-Icon-PNG.png"
        />
       
     

      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-items-list ${isMobileMenuOpen ? 'open' : ''}`}>
        <li className="tabs">
          <Link className="route-link" to="/Weather">
            <FaHome className="nav-icon" /> {/* Home icon */}
            {t('governmentSchemes')} {/* Use translation for the link */}
          </Link>
        </li>
        <li className="tabs">
          <Link className="route-link" to="/CropPrizes">
            <FaSeedling className="nav-icon" /> {/* Seedling icon */}
            {t('products')} {/* Use translation for the link */}
          </Link>
        </li>
        <li className="tabs">
          <a
            className="route-link"
            href="https://www.msn.com/en-in/weather/forecast/in-Tamil-Nadu,India?loc=eyJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOiI3Ny42NzEwODkxNzIzNjMyOCIsInkiOiI5LjU3NDQ0NTcyNDQ4NzMwNSJ9&weadegreetype=C&ocid=msedgntp&cvid=ff562c6f673d43ac94878a798ab4d56b"
          >
            <FaCloudSunRain className="nav-icon" /> {/* Weather icon */}
            {t('Weather')} {/* Use translation for the link */}
          </a>
        </li>
        <li className="tabs">
          <Link className="route-link" to="/FarmingTechniques">
            <FaTractor className="nav-icon" /> {/* Tractor icon */}
            {t('FarmingTechniques')} {/* Use translation for the link */}
          </Link>
        </li>
        <li className="tabs">
          <Link className="route-link" to="/UserNeeds">
            <FaUser className="nav-icon" /> {/* User icon */}
            {t('UserNeeds')} {/* Use translation for the link */}
          </Link>
        </li>
        <li className="tabs">
          <Link className="route-link" to="/Machinery">
            <FaTools className="nav-icon" /> {/* Tools icon */}
            {t('Machinery')} {/* Use translation for the link */}
          </Link>
        </li>
        <li className="tabs">
          <Link className="route-link" to="/Orders">
            <FaShoppingCart className="nav-icon" /> {/* Shopping cart icon */}
            {t('Order')} {/* Use translation for the link */}
          </Link>
        </li>
      </ul>

      {/* Language selection dropdown with icon */}
      <div className="language-selector">
        <FaGlobe className="language-icon" /> {/* Globe icon */}
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannada</option>
        </select>
      </div>

      {/* Logout button with icon */}
      
        <button  onClick={OnclickLogout}>
          <FaSignOutAlt className="logout-icon" /> {/* Logout icon */}
          {t('logOut')} {/* Use translation for the button */}
        </button>
      
    </nav>
  );
};

export default withRouter(Header);