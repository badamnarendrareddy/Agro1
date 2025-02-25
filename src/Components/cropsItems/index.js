import React from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import Cookie from 'js-cookie';
import './index.css';

const ProjectItem = (props) => {
  const { t, i18n } = useTranslation(); // Use the useTranslation hook
  const jwtToken = Cookie.get('jwt_token');

  // Redirect to login if JWT token is missing
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }

  const { projectDetails } = props;
  const { projectId, imageURL, CropName, Rate } = projectDetails;

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <li className="project-item-container">
        {/* Language Switcher Dropdown */}
        <div className="language-switcher">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
            <option value="ta">Tamil</option>
            <option value="kn">Kannada</option>
          </select>
        </div>

        {/* Project Details */}
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <p className="project-item">{t('crop')}: {CropName}</p>
        <p className="project-item">{t('rate')}: {Rate}</p>
      </li>
    </>
  );
};

export default ProjectItem;