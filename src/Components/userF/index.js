
import './index.css'
import axios from 'axios'
import React, { useState } from 'react'; 
import emailjs from 'emailjs-com'; // Import EmailJS library

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    typeOfUser: '',
    email: '',
    phoneNumber: '',
    alternateNumber: '',
    address: '',
    productNeed: '',
    cropAmount: '',
    userAddress: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the form data to Firebase (optional)
    axios.post('https://csppro-c0fd1-default-rtdb.firebaseio.com/order.json', formData)
      .then(() => {
        alert("Successfully Submitted");

        // Send email using EmailJS
        sendEmail(formData);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      });
  };

  const sendEmail = (formData) => {
    emailjs.send('service_goby2p4', 'template_uayyrhb', {
      username: formData.username,
      typeOfUser: formData.typeOfUser,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      alternateNumber: formData.alternateNumber,
      address: formData.address,
      productNeed: formData.productNeed,
      cropAmount: formData.cropAmount,
      userAddress: formData.userAddress,
      to_email: formData.email, // Send email to the user
    }, 'QnaeRnj8wof0SAsPEZ0k9')
      .then((response) => {
        console.log('Email successfully sent:', response);
      }, (err) => {
        console.error('Error sending email:', err);
      });
  };

  return (
    <div className='background-img'>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter User Name" value={formData.username} onChange={handleChange} required />
        
        <label>Type of User</label>
        <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Customer">Customer</option>
          <option value="Farmer">Farmer</option>
        </select>
        
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
        
        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" placeholder="Enter Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        
        <label>Alternate Number</label>
        <input type="tel" name="alternateNumber" placeholder="Enter Alternate Number" value={formData.alternateNumber} onChange={handleChange} />
        
        <label>Address</label>
        <input type="text" name="address" placeholder="Enter Address" value={formData.address} onChange={handleChange} required />
        
        <label>Product/Crop Need</label>
        <input type="text" name="productNeed" placeholder="Product/Crop Need" value={formData.productNeed} onChange={handleChange} required />
        
        <label>Amount of Crop Needed (in kgs)</label>
        <input type="number" name="cropAmount" placeholder="Amount of Crop Needed" value={formData.cropAmount} onChange={handleChange} required />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
