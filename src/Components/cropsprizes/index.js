import {Component} from 'react'


import ProjectItem from '../cropsItems'



import './index.css'



const projectsList = [
 
  
  {
    projectId: 0,
    category: 'Cereals',
    imageURL: 'https://images5.alphacoders.com/338/thumb-1920-338002.jpg',
    CropName:"Wheat",
    Rate: '₹2515.51/Quintal',  
  },
  {
    projectId: 1,
    category: 'Cereals',
    imageURL: 'https://media.istockphoto.com/photos/ripe-rice-in-the-field-of-farmland-picture-id622925154?k=20&m=622925154&s=612x612&w=0&h=hLtkpC3VdXeqWhblSowvPRu4XgsCwFW6JQM-Px2KzbY=',
    CropName:"Rice",
    Rate: '₹3651.06/Quintal',  
  },
  {
    projectId: 2,
    category: 'Cereals',
    imageURL: 'https://tse2.mm.bing.net/th?id=OIP.-az9hn-WWQ_t2v1dOPFNZQAAAA&pid=Api&P=0&w=300&h=300',
    CropName:"Corns",
    Rate: ' ₹30/kg',  
  },
  {
    projectId: 3,
    category: 'Cereals',
    imageURL: 'https://kj1bcdn.b-cdn.net/media/86386/jowar.jpg',
    CropName:"Jowar",
    Rate: '₹1800/Quintal.',  
  },
  {
    projectId: 4,
    category: 'Cereals',
    imageURL: 'https://tse2.mm.bing.net/th?id=OIP.RPabuxw2wXPXCJLwyf1gngHaGi&pid=Api&P=0&h=180',
    CropName:"Bajra",
    Rate: ' ₹1771/Quintal',  
  },
  {
    projectId: 5,
    category: 'Cereals',
    imageURL: 'https://tse1.mm.bing.net/th?id=OIP.K6v3v-luSWjwEK9tyECcagHaHa&pid=Api&P=0&h=180',
    CropName:"Ragi",
    Rate: '₹4500/Quintal.',  
  },
  {
    projectId: 6,
    category: 'Cereals',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.86KX9B8caiGAAb-beOy0twHaD4&pid=Api&P=0&h=180',
    CropName:"Barley",
    Rate: '₹1320/Quintal',  
  },
  {
    projectId: 7,
    category: 'Cereals',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.swDVbyLSMYwjHj4cjQ37MQHaD4&pid=Api&P=0&h=180',
    CropName:"Oats",
    Rate: '₹1320/Quintal',  
  },
  {
    projectId: 8,
    category: 'Cereals',
    imageURL: 'https://thumbs.dreamstime.com/b/cereal-crop-triticale-25867112.jpg',
    CropName:"Triticale (hybrid of wheat and rye",
    Rate: ' 1,268.89 per kilogram',  
  },
  {
    projectId: 9,
    category: 'Cereals',
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.vGEvnM89pw6mc65NFzWDzQHaEy&pid=Api&P=0&h=180',
    CropName:"Sorghum",
    Rate: '₹6150/Quintal',  
  },
  {
    projectId: 10,
    category: 'Cereals',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.-Hr5l19WK8er3sZ_TDCeJwHaFj&pid=Api&P=0&h=180',
    CropName:"Foxtail Millet",
    Rate: '₹4200/Quintal.',  
  },
  {
    projectId: 11,
    category: 'Cereals',
    imageURL: 'https://www.agrifarming.in/wp-content/uploads/Organic-Little-Millet-Farming1.jpg',
    CropName:"Little Millet",
    Rate: '₹4200/Quintal.',  
  },
  {
    projectId: 12,
    category: 'Cereals',
    imageURL: 'https://www.asiafarming.com/wp-content/uploads/2022/12/Barnyard-Millet-Farming1-1024x1024.jpg',
    CropName:"Barnyard Millet",
    Rate: '₹35.0/kg',  
  },
  {
    projectId: 13,
    category: 'Cereals',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.r4QIHziomddVAL3_RjQJRgHaFS&pid=Api&P=0&h=180',
    CropName:"Buckwheat",
    Rate: '₹60.0/kg',  
  },
  {
    projectId: 14,
    category: 'Cereals',
    imageURL: 'https://i.pinimg.com/originals/d8/c3/e0/d8c3e0c8f40c3de6c222ba96f917c5b4.jpg',
    CropName:" Amaranth",
    Rate: '₹67.13 per kilogram',  
  },
  {
    projectId: 15,
    category: 'Cereals',
    imageURL: 'https://tse2.mm.bing.net/th?id=OIP.ikvGgyczYJ14zPUxNJ9NgwHaEm&pid=Api&P=0&h=180',
    CropName:"Quinoa ",
    Rate: '₹67.13 per kilogram',  
  },
  {
    projectId: 16,
    category: 'Legumes',
    imageURL: 'https://cdn.mos.cms.futurecdn.net/mmrjcWoheuvmnucbNy246i.jpg',
    CropName:"Chickpeas",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 17,
    category: 'Legumes',
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.qyIiEWhIeXjrQM2eLGab0AHaG3&pid=Api&P=0&h=180',
    CropName:"Kidney bean",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 18,
    category: 'Legumes',
    imageURL: 'https://plantix.net/en/library/assets/custom/crop-images/gram.jpeg',
    CropName:"Black gram,",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 19,
    category: 'Legumes',
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.L_JuE_U2dIlz4_3euB0LRQHaGl&pid=Api&P=0&h=180',
    CropName:"Green gram",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 20,
    category: 'Legumes',
    imageURL: 'https://tse1.mm.bing.net/th?id=OIP.snbPz_1dJU72t4fP5VGnlQHaE8&pid=Api&P=0&h=180',
    CropName:"Pigeon pea",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 21,
    category: 'Legumes',
    imageURL: 'https://tse1.mm.bing.net/th?id=OIP.1XUgNsaaS9FGDWWzYu9GOgHaE_&pid=Api&P=0&h=180',
    CropName:"Lentil, Pea",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 22,
    category: 'Legumes',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.zxMsc_yLfL-SEtzxurtcfwHaFj&pid=Api&P=0&h=180',
    CropName:"Cowpea",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 23,
    category: 'Legumes',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.Lh7ghuvVDs6YCohlgKFz1wHaFF&pid=Api&P=0&h=180',
    CropName:"Soybean",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 24,
    category: 'Legumes',
    imageURL: 'https://www.theayurveda.org/wp-content/uploads/2016/07/groundnuts-inside-the-husk.jpg',
    CropName:"GroundNuts",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 25,
    category: 'Legumes',
    imageURL: 'https://cdn.shopify.com/s/files/1/0284/2450/products/beans_2048x@2x.jpg?v=1571438538',
    CropName:"Lablab bean",
    Rate: '₹12633/Quintal',  
  },{
    projectId: 27,
    category: 'Legumes',
    imageURL: 'https://hips.hearstapps.com/hmg-prod/images/fenugreek3-1676488319.jpg?crop=0.75xw:1xh;center,top&resize=980:*',
    CropName:"Red lentil",
    Rate: '₹12633/Quintal',  
  },

  {
    projectId: 28,
    category: 'Legumes',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.EZPH10xubPX1zHgGM_rjkgHaDa&pid=Api&P=0&h=180',
    CropName:"Alfalfa",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 29,
    category: 'Roots and Tubes',
    imageURL: 'https://gardenerspath.com/wp-content/uploads/2022/03/How-to-Grow-Nantes-Carrots-Feature.jpg',
    CropName:"Carrot",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 30,
    category: 'Roots and Tubes',
    imageURL: 'https://www.thetutuguru.com.au/wp-content/uploads/2020/10/baby-beet-1.jpg',
    CropName:"BeetRoot",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 31,
    category: 'Roots and Tubes',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.Ykl1L-enCy9tzIOVLW-pkQHaE6&pid=Api&P=0&h=180',
    CropName:"Parsnip",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 32,
    category: 'Roots and Tubes',
    imageURL: 'https://healthyday.net/wp-content/uploads/2020/05/radish-3151347_19202.jpg',
    CropName:"Radish",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 33,
    category: 'Roots and Tubes',
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.yCOtmHqXBZUTkfq-XNgNcQHaE7&pid=Api&P=0&h=180',
    CropName:"Turnip",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 34,
    category: 'Roots and Tubes',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.QBSQ2BcQkdbd98qS2DfOjwHaEK&pid=Api&P=0&h=180',
    CropName:"Onion",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 35,
    category: 'Roots and Tubes',
    imageURL: 'https://www.thespruce.com/thmb/Ptvalllc9czYhXZuq2_hF6_YIyk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hardneck-and-softneck-garlic-2540056-02-187d9130324346319f9d2df16a7124c5.jpg',
    CropName:"Garlic",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 36,
    category: 'Roots and Tubes',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.iIxXBM1yiQs24Z2DNDAUWwHaE8&pid=Api&P=0&h=180',
    CropName:"Ginger",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 37,
    category: 'Roots and Tubes',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.IeQwrVM0qw7wLliLAG9bAAHaEc&pid=Api&P=0&h=180',
    CropName:"Turmeric",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 38,
    category: 'Roots and Tubes',
    imageURL: 'https://tse1.mm.bing.net/th?id=OIP.X_CL9U4vuQ_8toa1Vn2lSQHaE8&pid=Api&P=0&h=180',
    CropName:"Sweet potato",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 39,
    category: 'Roots and Tubes',
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.c2c6X9IcPwdxM648TMU7lwHaE8&pid=Api&P=0&h=180',
    CropName:"Cassava ",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 40,
    category: 'Roots and Tubes',
    imageURL: 'https://i0.wp.com/strictlymedicinalseeds.com/wp-content/uploads/2017/09/Wild_Yam_chinese_tuber_hand_500.jpg?fit=1200%2C1028&ssl=1',
    CropName:"Yam",
    Rate: '₹12633/Quintal',  
  },
  {
    projectId: 41,
    category: 'Fruits',
    imageURL: 'https://th.bing.com/th/id/OIP.JZxHe2bk-F9VR5vRM71dCAHaE8?rs=1&pid=ImgDetMain',
    CropName:"Apple",
    Rate: '₹1800/Quintal',  
  },
  {
    projectId: 42,
    category: 'Fruits',
    imageURL: 'https://th.bing.com/th/id/OIP.w4dKZu7pE0ackyZ2WNVyAAHaE8?rs=1&pid=ImgDetMain',
    CropName:"Banana",
    Rate: '₹450/Quintal',  
  },
  {
    projectId: 43,
    category: 'Fruits',
    imageURL: 'https://th.bing.com/th/id/OIP.bJpQwgl22MKrrFz9eDZFhwHaE8?w=2048&h=1367&rs=1&pid=ImgDetMain',
    CropName:"Orange",
    Rate: '₹950/Quintal',  
  },
  {
    projectId: 44,
    category: 'Fruits',
    imageURL: 'https://www.agrifarming.in/wp-content/uploads/2020/07/wild-3808186_1920.jpg',
    CropName:"Mangos",
    Rate: '₹5000/Quintal',  
  },
  {
    projectId: 45,
    category: 'Fruits',
    imageURL: 'https://th.bing.com/th/id/OIP.VdaXEGlRmCE9S9a2K-C7yAHaE8?rs=1&pid=ImgDetMain',
    CropName:"Watermelon",
    Rate: '₹2000/Quintal',  
  },
  {
    projectId: 46,
    category: 'Fruits',
    imageURL: 'https://th.bing.com/th/id/OIP.vLBWsuVsJHf6KIlMwbJTfwHaE8?rs=1&pid=ImgDetMain',
    CropName:"Grapes",
    Rate: '₹99.9/Quintal',  
  },
  {
    projectId: 47,
    category: '',
    imageURL: '',
    CropName:"",
    Rate: '',  
  },
  {
    projectId: 48,
    category: 'Vegetables',
    imageURL: 'https://tse1.mm.bing.net/th?id=OIP.yBzL6iBdcSxjStxDXEJMWQHaGA&pid=Api&P=0&h=180',
    CropName:"Tomato",
    Rate: '30Kg',  
  },{
    projectId: 49,
    category: 'Vegetables',
    imageURL: 'https://tse2.mm.bing.net/th?id=OIP.jvIx9j76H5Blbq7AhRjpzwHaFj&pid=Api&P=0&h=180',
    CropName:"Cabbage",
    Rate: '50Kg',  
  },
  {
    projectId: 50,
    category: 'Vegetables',
    imageURL: 'https://tse3.mm.bing.net/th?id=OIP.UcYaJmy8H__LHawH4HAAsAHaHa&pid=Api&P=0&h=180',
    CropName:"Pumpkin",
    Rate: '50Kg',  
  },
  {
    projectId: 52,
    category: 'Vegetables',
    imageURL: 'https://tse1.mm.bing.net/th?id=OIP.e5XlI-BDQp5h4IOZN9FgNAHaFj&pid=Api&P=0&w=300&h=300',
    CropName:"Cucumber",
    Rate: '40Kg',  
  },
  {
    projectId: 52,
    category: 'Vegetables',
    imageURL: 'https://tse4.mm.bing.net/th?id=OIP.WPzhL0OIvAuMFEezM_oq7AHaE7&pid=Api&P=0&h=180',
    CropName:"Bell Pepper",
    Rate: '50Kg',  
  },

  
 
]

class Crops extends Component {
constructor() {
    super();
    this.state = {
      state: '',
      district: '',
      CropsTypes:'',
      tradetye:'',
      
      filterlist:projectsList,
      showDistrict: false,
      districts: {
        Andhra: ['East Godavari', 'West Godavari', 'Krishna', 'Guntur', 'Prakasam'],
        ArunachalPradesh :["Tawang",
    "West Kameng",
    "East Kameng",
    "Pakke Kessang",
    "Papum Pare",
    "Kra Daadi",
    "Kurung Kumey",
    "Lower Subansiri",
    "Upper Subansiri",
    "Kamle",
    "West Siang",
    "Shi Yomi",
    "Siang",
    "East Siang",
    "Upper Siang",
    "Lower Siang",
    "Lepa Rada",
    "Dibang Valley",
    "Lower Dibang Valley",
    "Anjaw",
    "Lohit",
    "Namsai",
    "Changlang",
    "Tirap",
    "Longding",
    "Itanagar Capital Complex",
    "Shi-Yomi",
    "Pakke Kessang"],
    Assam: ["Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong"],
    Bihar:["Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran"],
    Chhattisgarh :["Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Gaurela-Pendra-Marwahi",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sukma",
    "Surajpur",
    "Surguja",
    "Balodabazar",
    "Sarangarh-Bilaigarh",
    "Manendragarh-Chirmiri-Bharatpur",
    "Mohla-Manpur-Chowki",
    "Khairagarh-Chhuikhadan-Gandai"],
      
      }
    };
  }

handleStateChange = (e) => {
    this.setState({
      state: e.target.value,
      showDistrict: true
    });
  };

  handleDistrictChange = (e) => {
    this.setState({
      district: e.target.value
    });
  };
  TypesofCrops=(event)=>{
    this.setState({CropsTypes:event.target.value})
   
  }
  TypesofTrade=(event)=>{
    this.setState({tradetye:event.target.value})
   
  }

onSubmitFrom=(event)=>{
  event.preventDefault()
  const {CropsTypes}=this.state
 
  const filter=projectsList.filter(each=>(each.category===CropsTypes))
  this.setState({filterlist:[...filter]})
}

  
  render() {
  const {state,district,districts,CropsTypes,filterlist,tradetye}=this.state
  console.log(filterlist)

 

 
    return (
    
     
        <div className='tabs-container'>
          
          <form className='from1' onSubmit={this.onSubmitFrom}>
          <label htmlFor="label" className='label1'>State</label>
          <select className='section'  id='label' onChange={this.handleStateChange}>
          <option value="State">State</option>
          <option value="Andhra">AndhraPradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh </option>
          <option value="Assam">Assam </option>
          <option value="Bihar">Bihar</option>
          <option value="Chhattisgarh">Chhattisgarh </option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value=" Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value=" Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value=" Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value=" Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value=" Tripura">Tripura</option>
          <option value=" Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
        <label htmlFor='dist' className='label1'>District</label>
        {this.state.showDistrict && (
          <select value={district} id='dist' className='section' onChange={this.handleDistrictChange}>
            <option value="">Select District</option>
            {districts[state].map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        )}

         

          <label className='label1' htmlFor="crops">CropType</label>
          <select id="crops" className='section' value={CropsTypes} onChange={this.TypesofCrops}> 
                <option value="Select CropTypes">CropTypes</option>

                <option value="Cereals">Cereals</option>
                <option value="Legumes">Legumes</option>
                <option value="Roots and Tubes"> Roots and Tubes</option>
                <option value="OilSeeds">OilSeeds</option>
                <option value="Fiber Crops">Fiber Crops</option>
                <option value="Sugar Crops">Sugar Crops</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Nuts">Nuts</option>
                <option value="Spices">Spices</option>
          </select>
          <label className='label1' htmlFor="crops">UserType</label>

          <select id="TradeType" className='section' value={tradetye} onChange={this.TypesofTrade}> 
                <option value="Select user">User</option>

              
                <option value="Framer">Framer</option>
                <option value="Consumer">Consumer</option>
                
          </select>

         

          <button className='fancy-button' >GO</button>
         
        </form>

       
        

        
       
        <ul className="project-list-container">
          {filterlist.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
        </div>
    
    )
  }
}

export default Crops
