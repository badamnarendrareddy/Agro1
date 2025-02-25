import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useTranslation } from 'react-i18next';

const WeatherForecast = () => {
  const { t } = useTranslation();
  const jwtToken = Cookie.get('jwt_token');
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <h1 className="h">{t('government_schemes')}</h1>
      <div className="bg">
        <a href="https://agriinfra.dac.gov.in/" className="a">
          <h className="h">{t('agriculture_infrastructure_fund')}</h>
          <p className="">{t('agriculture_infrastructure_fund_description')}</p>
        </a>
      </div>
      <div className="bg">
        <a href="https://pmkisan.gov.in/" className="a">
          <h className="h">{t('pm_kisan_samman_nidhi')}</h>
          <p className="">{t('pm_kisan_samman_nidhi_description')}</p>
        </a>
      </div>
      <div className="bg">
        <a href="https://extensionreforms.da.gov.in/DashBoard_Statusatma.aspx" className="a">
          <h className="h">{t('atma')}</h>
          <p className="">{t('atma_description')}</p>
        </a>
      </div>
      <div className="bg">
        <a href="https://agmarknet.gov.in/PriceAndArrivals/arrivals1.aspx" className="a">
          <h className="h">{t('agmarknet')}</h>
          <p className="">{t('agmarknet_description')}</p>
        </a>
      </div>
      <div className="bg">
        <a href="https://soilhealth.dac.gov.in/home" className="a">
          <h className="h">{t('soil_health_card')}</h>
          <p className="">{t('soil_health_card_description')}</p>
        </a>
      </div>
    </div>
  );
};

export default WeatherForecast;