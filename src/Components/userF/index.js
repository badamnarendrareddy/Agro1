import './index.css';
import axios from 'axios';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save the form data to your Firebase URL
      const response = await axios.post(
        'https://cspproject-a2a49-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
        formData
      );
      console.log('Firebase response:', response.data);  
      
      alert("Successfully Submitted");
      
      // Send email using EmailJS
      await sendEmail(formData);
      
      // Reset form after successful submission
      setFormData({
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
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(`Error submitting form: ${error.message}`);
    }
  };

  const sendEmail = async (formData) => {
    try {
      await emailjs.send('service_goby2p4', 'template_uayyrhb', {
        username: formData.username,
        typeOfUser: formData.typeOfUser,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        alternateNumber: formData.alternateNumber,
        address: formData.address,
        productNeed: formData.productNeed,
        cropAmount: formData.cropAmount,
        userAddress: formData.userAddress,
        to_email: formData.email,
      }, 'QnaeRnj8wof0SAsPEZ0k9');
      
      console.log('Email successfully sent');
    } catch (err) {
      console.error('Error sending email:', err);
    }
  };

  return (
    <div className='background-img'>
      <form onSubmit={handleSubmit} className="form-container">
        <label>{t('username')}</label>
        <input type="text" name="username" placeholder={t('enter_username')} 
               value={formData.username} onChange={handleChange} required />
        
        <label>{t('type_of_user')}</label>
        <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
          <option value="">{t('select')}</option>
          <option value="Farmer">{t('farmer')}</option>
          <option value="Customer">{t('customer')}</option>
        </select>
        
        <label>{t('email')}</label>
        <input type="email" name="email" placeholder={t('enter_email')} 
               value={formData.email} onChange={handleChange} required />
        
        <label>{t('phone_number')}</label>
        <input type="tel" name="phoneNumber" placeholder={t('enter_phone_number')} 
               value={formData.phoneNumber} onChange={handleChange} required />
        
        <label>{t('alternate_number')}</label>
        <input type="tel" name="alternateNumber" placeholder={t('enter_alternate_number')} 
               value={formData.alternateNumber} onChange={handleChange} />
        
        <label>{t('address')}</label>
        <input type="text" name="address" placeholder={t('enter_address')} 
               value={formData.address} onChange={handleChange} required />
        
        <label>{t('product_need')}</label>
        <input type="text" name="productNeed" placeholder={t('enter_product_need')} 
               value={formData.productNeed} onChange={handleChange} required />
        
        <label>{t('crop_amount')}</label>
        <input type="number" name="cropAmount" placeholder={t('enter_crop_amount')} 
               value={formData.cropAmount} onChange={handleChange} required />
        
        <button type="submit">{t('submit')}</button>
      </form>
    </div>
  );
};

export default Form;