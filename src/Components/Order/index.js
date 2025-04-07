import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const translations = {
  en: {
    farmer: "Farmer",
    customer: "Customer",
    name: "Name",
    productNeed: "Product Need",
    cropAmount: "Crop Amount",
    email: "Email",
    phone: "Phone",
    alternatePhone: "Alternate Phone",
    address: "Address",
    location: "Location",
    viewOnMap: "View on Map",
    message: "Message on WhatsApp",
    noData: "No data found.",
  },
  te: {
    farmer: "రైతు",
    customer: "కస్టమర్",
    name: "పేరు",
    productNeed: "కావలసిన ఉత్పత్తి",
    cropAmount: "పంట పరిమాణం",
    email: "ఈమెయిల్",
    phone: "ఫోన్",
    alternatePhone: "ప్రత్యామ్నాయ ఫోన్",
    address: "చిరునామా",
    location: "స్థానం",
    viewOnMap: "మ్యాప్‌లో వీక్షించండి",
    message: "WhatsApp‌లో సందేశం పంపండి",
    noData: "డేటా కనబడలేదు.",
  },
  ta: {
    farmer: "விவசாயி",
    customer: "வாடிக்கையாளர்",
    name: "பெயர்",
    productNeed: "தேவையான பொருள்",
    cropAmount: "பயிர் அளவு",
    email: "மின்னஞ்சல்",
    phone: "தொலைபேசி",
    alternatePhone: "மாற்று தொலைபேசி",
    address: "முகவரி",
    location: "இருப்பிடம்",
    viewOnMap: "வரைபடத்தில் பார்க்க",
    message: "WhatsApp-ல் செய்தி அனுப்பு",
    noData: "தரவு இல்லை.",
  },
  kn: {
    farmer: "ಕೃಷಿಕ",
    customer: "ಗ್ರಾಹಕ",
    name: "ಹೆಸರು",
    productNeed: "ಅಗತ್ಯವಿರುವ ಉತ್ಪನ್ನ",
    cropAmount: "ಬೆಳೆ ಪ್ರಮಾಣ",
    email: "ಇಮೇಲ್",
    phone: "ಫೋನ್",
    alternatePhone: "ಬದಲಿ ಫೋನ್",
    address: "ವಿಳಾಸ",
    location: "ಸ್ಥಳ",
    viewOnMap: "ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
    message: "WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    noData: "ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲ.",
  },
};

const Order = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Farmer");
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://cspproject-a2a49-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json'
        );
        
        if (response.data) {
          const fetchedData = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setData(fetchedData);
        } else {
          setData([]);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => item.typeOfUser === selectedTab);

  if (loading) return <div className="app-container3">Loading...</div>;
  if (error) return <div className="app-container3">Error: {error}</div>;

  return (
    <div className="app-container3">
      <div className="language-dropdown">
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">🇬🇧 English</option>
          <option value="te">🇮🇳 తెలుగు</option>
          <option value="ta">🇮🇳 தமிழ்</option>
          <option value="kn">🇮🇳 ಕನ್ನಡ</option>
        </select>
      </div>

      <div className="tabs-container3">
        <button
          className={`tab3 ${selectedTab === "Farmer" ? "active" : ""}`}
          onClick={() => setSelectedTab("Farmer")}
        >
          {translations[language].farmer}
        </button>
        <button
          className={`tab3 ${selectedTab === "Customer" ? "active" : ""}`}
          onClick={() => setSelectedTab("Customer")}
        >
          {translations[language].customer}
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
                <p>{translations[language].name}: {item.username || 'N/A'}</p>
                <p>{translations[language].productNeed}: {item.productNeed || 'N/A'}</p>
                <p>{translations[language].cropAmount}: {item.cropAmount || '0'} kgs</p>
                <p>{translations[language].email}: {item.email || 'N/A'}</p>
                <p>{translations[language].phone}: {item.phoneNumber || 'N/A'}</p>
                <p>{translations[language].alternatePhone}: {item.alternateNumber || 'N/A'}</p>
                <p>{translations[language].address}: {item.address || 'N/A'}</p>
                {item.address && (
                  <p>
                    {translations[language].location}:{" "}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        item.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translations[language].viewOnMap}
                    </a>
                  </p>
                )}
                <p>
                  <button
                    className="whatsapp-button3"
                    onClick={() => {
                      const message = `Hello ${item.username}, I would like to discuss more about ${item.productNeed}.`;
                      const whatsappUrl = `https://wa.me/${item.phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    disabled={!item.phoneNumber}
                  >
                    {translations[language].message}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>{translations[language].noData}</p>
      )}
    </div>
  );
};

export default Order;