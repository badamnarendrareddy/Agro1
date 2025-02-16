import {Link,Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import { withRouter, } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

const Header = () =>{
  const OnclickLogout=(props)=>{
    const jwtToken=Cookies.remove('jwt_token')
    if(jwtToken === undefined){
      return <Redirect to='/login'/>
    }
   
  }
  return(
    <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://www.pngplay.com/wp-content/uploads/6/Agriculture-Green-Icon-PNG.png"
      />
      <h1 className="title1">AgroGuide</h1>
    </div>

    <ul className="nav-items-list">
      <li className="tabs">
        <Link className="route-link" to="/Weather">
        governmentSchemes
        </Link>
      </li>
      <li className="tabs">
        <Link className="route-link" to="/CropPrizes">
      products
        </Link>
      </li>
      <li className="tabs">
        <a className="route-link" href="https://www.msn.com/en-in/weather/forecast/in-Tamil-Nadu,India?loc=eyJyIjoiVGFtaWwgTmFkdSIsImMiOiJJbmRpYSIsImkiOiJJTiIsImciOiJlbi1pbiIsIngiOiI3Ny42NzEwODkxNzIzNjMyOCIsInkiOiI5LjU3NDQ0NTcyNDQ4NzMwNSJ9&weadegreetype=C&ocid=msedgntp&cvid=ff562c6f673d43ac94878a798ab4d56b">
        Weather
        </a>
      </li>
      <li className="tabs">
        <Link className="route-link" to="/FarmingTechniques">
        FarmingTechniques
      
        </Link>
      </li>
      
      <li className="tabs">
        <Link className="route-link" to="/UserNeeds">
        UserNeeds
        </Link>
      </li>
      <li className="tabs">
        <Link className="route-link" to="/Machinery">
        Machinery
        </Link>
      </li>
      <li className="tabs">
        <Link className="route-link" to="/Orders">
        Order
        </Link>
      </li>
      






     
   
     

    </ul>
       <Link className="route-login-link" to="/Login">
        <button className='fancy-button' onClick={OnclickLogout}>logOut</button>
        </Link>
  </nav>

  )
}
 
  


export default withRouter(Header)