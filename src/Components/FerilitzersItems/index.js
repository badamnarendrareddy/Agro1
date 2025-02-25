import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import './index.css';
import { useTranslation } from 'react-i18next';

const FarmingTechniques = () => {
  const { t } = useTranslation();
  const jwtToken = Cookie.get('jwt_token');
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container3">
      <a className="a" href="https://youtu.be/kbvHM2S2_bk">
        <div className="card" id="crop-rotation">
          <h2>{t('crop_rotation')}</h2>
          <p>{t('crop_rotation_description')}</p>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.jzH8lU53O3RKFxiaZ4JopgHaEK&pid=Api&P=0&h=180"
            className="imag"
            alt=""
          />
        </div>
      </a>

      <a className="a" href="https://youtu.be/jLZ0KtNx354">
        <div className="card" id="agroforestry">
          <h2>{t('agroforestry')}</h2>
          <p>{t('agroforestry_description')}</p>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.lMqAWVNG5ddEGkcMU0lgawHaFj&pid=Api&P=0&h=180"
            className="imag"
            alt=""
          />
        </div>
      </a>

      <a className="a" href="https://youtu.be/Xej22GsLLQA">
        <div className="card" id="drip-irrigation">
          <h2>{t('drip_irrigation')}</h2>
          <p>{t('drip_irrigation_description')}</p>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.S2MgyzbUVZrqQLfM8cmNKQHaE8&pid=Api&P=0&w=300&h=300"
            className="imag"
            alt=""
          />
        </div>
      </a>

      <div className="card" id="integrated-pest-management">
        <h2>{t('integrated_pest_management')}</h2>
        <p>{t('integrated_pest_management_description')}</p>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.Pf_wq2SALH5qhpB-zBy9bAHaE8&pid=Api&P=0&h=180"
          className="imag"
          alt=""
        />
      </div>

      <div className="card" id="no-till-farming">
        <h2>{t('no_till_farming')}</h2>
        <p>{t('no_till_farming_description')}</p>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.a1UZUN0JB038loyObbd3lgHaE8&pid=Api&P=0&h=180"
          className="imag"
          alt=""
        />
      </div>

      <div className="card" id="organic-farming">
        <h2>{t('organic_farming')}</h2>
        <p>{t('organic_farming_description')}</p>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.E-ayJe7lDFn3-F-uY7qKCwHaE8&pid=Api&P=0&h=180"
          className="imag"
          alt=""
        />
      </div>

      <div className="card" id="hydroponics">
        <h2>{t('hydroponics')}</h2>
        <p>{t('hydroponics_description')}</p>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.-FK2dwpPP5-BhrtrdrDPHAHaE8&pid=Api&P=0&h=180"
          className="imag"
          alt=""
        />
      </div>

      <div className="card" id="cover-cropping">
        <h2>{t('cover_cropping')}</h2>
        <p>{t('cover_cropping_description')}</p>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.mNN-R0VErfYHw7aZxom74AHaFj&pid=Api&P=0&h=180"
          className="imag"
          alt=""
        />
      </div>

      <div className="card" id="precision-agriculture">
        <h2>{t('precision_agriculture')}</h2>
        <p>{t('precision_agriculture_description')}</p>
        <img
          src="https://en.smag.tech/app/uploads/2018/07/agriculture_de_precision.jpg"
          className="imag"
          alt=""
        />
      </div>

      <div className="card" id="composting">
        <h2>{t('composting')}</h2>
        <p>{t('composting_description')}</p>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.-FK2dwpPP5-BhrtrdrDPHAHaE8&pid=Api&P=0&h=180"
          className="imag"
          alt=""
        />
      </div>
    </div>
  );
};

export default FarmingTechniques;