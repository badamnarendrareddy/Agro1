import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

const WeatherForecast = () => {
    const jwtToken=Cookie.get('jwt_token')
  if(jwtToken === undefined){
    return <Redirect to='/login'/>
  }
    return(
        <div className="container">
           <h1 className='h'>government schemes</h1>
          <div className='bg'>
          <a href='https://agriinfra.dac.gov.in/' className='a'>
            <h className='h'>Agriculture Infrastructure Fund</h>
            <p className=''>The Agriculture Infrastructure Fund (AIF) is a scheme by the Indian government to provide financial support and incentives for improving agricultural infrastructure</p>  
          </a>
          </div>
          <div className='bg'>
          <a href='https://pmkisan.gov.in/' className='a'>
            <h className='h'>PM-Kisan Samman Nidhi</h>
            <p className=''>The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) scheme is an initiative by the Indian government to provide financial support to small and marginal farmers. The scheme's objective is to help farmers meet the costs of inputs for crop health and yields, and to protect them from moneylenders.</p>  
          </a>
          </div>
          <div className='bg'>
          <a href='https://extensionreforms.da.gov.in/DashBoard_Statusatma.aspx' className='a'>
            <h className='h'>	ATMA</h>
            <p className=''>ATMA could refer to the Agricultural Technology Management Agency or the AIMS Test for Management Admissions</p>  
          </a>
          </div>
          <div className='bg'>
          <a href='https://agmarknet.gov.in/PriceAndArrivals/arrivals1.aspx' className='a'>
            <h className='h'>AGMARKNET</h>
            <p className=''>Agmarknet is a government of India portal that provides agricultural marketing information to a variety of stakeholders</p>  
          </a>
          </div>
          <div className='bg'>
          <a href='https://soilhealth.dac.gov.in/home' className='a'>
            <h className='h'>Soil Health Card</h>
            <p className=''>A Soil Health Card (SHC) is a printed report that provides information about a farmer's soil health, including the nutrient status of the land and recommendations for fertilizers and soil amendments. The SHC is generated using a web or smartphone-based application developed by the Government of India's Ministry of Agriculture & Farmers Welfare. 
The SHC includes information on the following parameters:
Macro-nutrients: N, P, K
Secondary nutrients: S
Micro-nutrients: Zn, Fe, Cu, Mn, Bo
Physical parameters: pH, EC, OC 
The SHC can be downloaded from the SHC portal or through an SMS link. Farmers can also print their SHC from the portal or at Common Service Centres. 
The SHC scheme aims to: 
Promote soil test-based nutrient management 
Increase awareness among farmers about judicious use of fertilizers 
Strengthen soil testing laboratories 
Build capacity of district and state level staff 
According to a 2017 study, the SHC scheme has led to a decrease in the use of chemical fertilizers and an increase in crop yield. 
Soil Health Card| National Portal of India
22 Oct 2018


</p>  
          </a>
          </div>
          <div className='bg'>
          <a href='https://agriinfra.dac.gov.in/' className='a'>
            <h className='h'>Agriculture Infrastructure Fund</h>
            <p className=''>The Agriculture Infrastructure Fund (AIF) is a scheme by the Indian government to provide financial support and incentives for improving agricultural infrastructure</p>  
          </a>
          </div>
          
       
        
      </div>
  
  
    )
}
  
   
   

export default WeatherForecast
