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
        <label>{t('username')}</label>
        <input type="text" name="username" placeholder={t('enter_username')} value={formData.username} onChange={handleChange} required />
        
        <label>{t('type_of_user')}</label>
        <select name="typeOfUser" value={formData.typeOfUser} onChange={handleChange} required>
          <option value="">{t('select')}</option>
          <option value="Customer">{t('customer')}</option>
          <option value="Farmer">{t('farmer')}</option>
        </select>
        
        <label>{t('email')}</label>
        <input type="email" name="email" placeholder={t('enter_email')} value={formData.email} onChange={handleChange} required />
        
        <label>{t('phone_number')}</label>
        <input type="tel" name="phoneNumber" placeholder={t('enter_phone_number')} value={formData.phoneNumber} onChange={handleChange} required />
        
        <label>{t('alternate_number')}</label>
        <input type="tel" name="alternateNumber" placeholder={t('enter_alternate_number')} value={formData.alternateNumber} onChange={handleChange} />
        
        <label>{t('address')}</label>
        <input type="text" name="address" placeholder={t('enter_address')} value={formData.address} onChange={handleChange} required />
        
        <label>{t('product_need')}</label>
        <input type="text" name="productNeed" placeholder={t('enter_product_need')} value={formData.productNeed} onChange={handleChange} required />
        
        <label>{t('crop_amount')}</label>
        <input type="number" name="cropAmount" placeholder={t('enter_crop_amount')} value={formData.cropAmount} onChange={handleChange} required />
        
        <button type="submit">{t('submit')}</button>
      </form>
    </div>
  );
};

export default Form;