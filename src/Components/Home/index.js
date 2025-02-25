import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import Header from '../Header';
import './index.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const jwtToken = Cookie.get('jwt_token');
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading typing-effect">
            {t('welcome')}
          </h1>
          <h2 className="home-heading typing-effect">
            {t('empowering')}
          </h2>
          <p className="home-description typing-effect-paragraph">
            {t('description')}
          </p>
          <button className="cta-button">{t('cta')}</button>
        </div>
      </div>
    </>
  );
};

export default Home;