import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Order = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Farmer'); // Default tab is Farmer

  // Fetch data from API
  useEffect(() => {
    axios
      .get(
        'https://csppro-c0fd1-default-rtdb.firebaseio.com/order.json'
      )
      .then((response) => {
        const fetchedData = Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }));
        setData(fetchedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter data based on selected tab
  const filteredData = data.filter((item) => item.typeOfUser === selectedTab);

  return (
    <div className="app-container3">
      <div className="tabs-container3">
        <button
          className={`tab3 ${selectedTab === 'Farmer' ? 'active' : ''}`}
          onClick={() => setSelectedTab('Farmer')}
        >
          Farmer
        </button>
        <button
          className={`tab3 ${selectedTab === 'Customer' ? 'active' : ''}`}
          onClick={() => setSelectedTab('Customer')}
        >
          Customer
        </button>
      </div>

      {filteredData.length > 0 ? (
        <div className="profile-grid3">
          {filteredData.map((item) => (
            <div key={item.id} className="profile-card3">
              <div className="profile-image3">
                <img
                  src="https://img.favpng.com/4/1/19/computer-icons-user-profile-computer-software-png-favpng-7ujTL6FqkdsYJh37sSpqEZgZH.jpg"
                  alt="User"
                />
              </div>
              <div className="profile-details3">
                <p>Name: {item.username}</p>
                <p>Product Need: {item.productNeed}</p>
                <p>Crop Amount: {item.cropAmount} kgs</p>
                <p>Email: {item.email}</p>
                <p>Phone: {item.phoneNumber}</p>
                <p>Alternate Phone: {item.alternateNumber}</p>
               
                <p>Address: {item.address}</p>
                <p>
                  Location:{' '}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      item.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Map
                  </a>
                </p>
                {/* WhatsApp Button */}
                <p>
                  <button
                    className="whatsapp-button3"
                    onClick={() => {
                      const message = `Hello ${item.username}, I would like to discuss more about ${item.productNeed}.`;
                      const whatsappUrl = `https://wa.me/${item.phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Message on WhatsApp
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No {selectedTab.toLowerCase()}s found.</p>
      )}
    </div>
  );
};

export default Order;
