import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const ProjectItem = props => {
    const jwtToken=Cookie.get('jwt_token')
    if(jwtToken === undefined){
      return <Redirect to='/login'/>
    }
  
  const {projectDetails} = props
  const {projectId, imageURL, CropName,Rate} = projectDetails
 
  return (
    <>
      <li className="project-item-container">
      
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        
         <p className="project-item">CROP:{CropName}</p>
         <p className="project-item">RATE:{Rate}</p>
 

       
        
        
        

      
      
        
        
    
    

        </li>
       
    </>
  )
}

export default ProjectItem
