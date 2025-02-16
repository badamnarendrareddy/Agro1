import { Redirect } from 'react-router-dom';
import Cookie from 'js-cookie';
import Header from '../Header';
import './index.css';

const Home = () => {
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
            Welcome to AgroGuide
          </h1>
          <h className='ome-heading typing-effect'>Empowering Farmers and Connecting Communities</h>

          <p className="home-description typing-effect-paragraph">
          
          Stay updated with the latest government initiatives and benefits designed to support farmers
          Get real-time updates on crop prices to make informed selling decisions.
          Access accurate weather forecasts to plan your farming activities.
          Discover the latest agricultural machinery and tools to enhance productivity.
          Engage directly with customers and build strong, profitable relationships.
          </p>

          <button className="cta-button">Start Using AgroGuide</button>
        </div>

       
      </div>
    </>
  );
};

export default Home;
