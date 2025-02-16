import React, { useState } from 'react';
import './index.css'
function States() {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [showDistrict, setShowDistrict] = useState(false);

  const handleStateChange = (e) => {
    setState(e.target.value);
    setShowDistrict(true);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const districts = {
    Andhra: ['East Godavari', 'West Godavari', 'Krishna', 'Guntur', 'Prakasam'],
    Telangana: ['Hyderabad', 'Ranga Reddy', 'Medak', 'Nalgonda', 'Warangal']
    // Add more districts for each state here
  };

  return (
    <div>
        <form className='from'>
        <label  className='label' for="status">Select State</label>  
        <select value={state} onChange={handleStateChange}>
            <option value="">Select State</option>
            <option value="Andhra">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
            {/* Add more states here */}
      </select>

      <label className='' for="Dist">District</label>  

      {showDistrict && (
        <select value={district} onChange={handleDistrictChange}>
          <option value="">Select District</option>
          {districts[state].map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      )}
          

          <label className='from' for="crops">Select Crop Type</label>
          <select id="crops">
                <option value="active">Cereals</option>
                <option value="Inactive">Legumes</option>
                <option value="active"> Roots and Tubes</option>
                <option value="Inactive">OilSeeds</option>
                <option value="active">Fiber Crops</option>
                <option value="Inactive">Sugar Crops</option>
                <option value="active">Fruits</option>
                <option value="Inactive">Vegetables</option>
                <option value="active">Nuts</option>
                <option value="Inactive">Spices</option>
          </select>

          <button className='button'>GO</button>
        </form>
     
    
    </div>
  );
}

export default States;

