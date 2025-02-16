import {Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const FarmingTechniques= props => {
    const jwtToken=Cookie.get('jwt_token')
    if(jwtToken === undefined){
      return <Redirect to='/login'/>
    }

  
  return (
    <div class="container3">
      <a  className='a' href='https://youtu.be/kbvHM2S2_bk'>
      <div class="card" id="crop-rotation">
        <h2>Crop Rotation</h2>
        <p>Alternating crops in the same field seasonally to improve soil fertility, prevent pests, and reduce dependency on chemical fertilizers.</p>
        <img src='https://tse2.mm.bing.net/th?id=OIP.jzH8lU53O3RKFxiaZ4JopgHaEK&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>
      </a>
   
     <a className='a' href='https://youtu.be/jLZ0KtNx354'>
     <div class="card" id="agroforestry">
        <h2>Agroforestry</h2>
        <p>Combining crops with trees to improve biodiversity, reduce soil erosion, and enhance carbon sequestration.</p>
        <img src='https://tse1.mm.bing.net/th?id=OIP.lMqAWVNG5ddEGkcMU0lgawHaFj&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>

     </a>
   
<a className='a' href='https://youtu.be/Xej22GsLLQA'>
<div class="card" id="drip-irrigation">
        <h2>Drip Irrigation</h2>
        <p>A water-efficient method that delivers water directly to the roots of plants, minimizing wastage and enhancing crop yield.</p>
        <img src='https://tse3.mm.bing.net/th?id=OIP.S2MgyzbUVZrqQLfM8cmNKQHaE8&pid=Api&P=0&w=300&h=300' className='imag' alt=''/>
    </div>

</a>

    

    <div class="card" id="integrated-pest-management">
        <h2>Integrated Pest Management (IPM)</h2>
        <p>Using biological controls, like natural predators and minimal chemical inputs, to manage pests sustainably.</p>
        <img src='https://tse2.mm.bing.net/th?id=OIP.Pf_wq2SALH5qhpB-zBy9bAHaE8&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>

    <div class="card" id="no-till-farming">
        <h2>No-Till Farming</h2>
        <p>Avoiding traditional plowing to preserve soil structure, reduce erosion, and maintain organic matter.</p>
        <img src='https://tse3.mm.bing.net/th?id=OIP.a1UZUN0JB038loyObbd3lgHaE8&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>

    <div class="card" id="organic-farming">
        <h2>Organic Farming</h2>
        <p>Eliminating synthetic pesticides and fertilizers, focusing on natural processes like composting and biological diversity.</p>
        <img src='https://tse3.mm.bing.net/th?id=OIP.E-ayJe7lDFn3-F-uY7qKCwHaE8&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>

    <div class="card" id="hydroponics">
        <h2>Hydroponics</h2>
        <p>Growing plants in a nutrient-rich water solution without soil, allowing for year-round cultivation and efficient land use.</p>
        <img src='https://tse1.mm.bing.net/th?id=OIP.-FK2dwpPP5-BhrtrdrDPHAHaE8&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>

    <div class="card" id="cover-cropping">
        <h2>Cover Cropping</h2>
        <p>Planting crops like legumes or grasses during off-seasons to enrich the soil with nutrients and prevent erosion.</p>
        <img src='https://tse1.mm.bing.net/th?id=OIP.mNN-R0VErfYHw7aZxom74AHaFj&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>

    <div class="card" id="precision-agriculture">
        <h2>Precision Agriculture</h2>
        <p>Utilizing GPS, sensors, and data analytics to monitor crop health, optimize inputs, and increase farm efficiency.</p>
        <img src='https://en.smag.tech/app/uploads/2018/07/agriculture_de_precision.jpg' className='imag' alt=''/>
    </div>

    <div class="card" id="composting">
        <h2>Composting</h2>
        <p>Recycling organic waste into nutrient-rich fertilizer, reducing the need for chemical inputs and promoting soil health.</p>
        <img src='https://tse1.mm.bing.net/th?id=OIP.-FK2dwpPP5-BhrtrdrDPHAHaE8&pid=Api&P=0&h=180' className='imag' alt=''/>
    </div>
</div>

   
  )
}

export default FarmingTechniques
