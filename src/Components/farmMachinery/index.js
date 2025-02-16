import React, { Component } from "react";
import "./index.css";

const products = [
 
  {
    id: 1,
    discount: 63,
    title: "Hectare Hand Weeder",
    brand: "Sickle Innovations Pvt Ltd",
    price: 560,
    originalPrice: 699,
    savedPrice: 139,
    imageUrl: "https://m.media-amazon.com/images/I/61WztWoRpHL._SL1500_.jpg", // replace with actual image URL
    sizes: ["pack of 1", "pack of 2"]
  },
  {
    id: 2,
    discount: 45,
    title: "Balwaan Bhoo...",
    brand: "Bharata 2 in 1 Hand Weeder",
    price: 501,
    originalPrice: 599,
    savedPrice: 98,
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.btaL3lvKgCb3SnV2hM-2JgHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119",
    sizes: ["1 unit", "2 units"]
  },
  {
    id: 3,
    discount: 20,
    title: "Dr Enterprises Farm safety Shoes.",
    brand: "Dr ENTERPRIZES",
    price: 1560,
    originalPrice: 2999,
    savedPrice: 14000,
    imageUrl: "https://mail.workmaster.shoes/application/files/thumbnails/image_and_text3/8715/9612/1959/Farmlite_Agriculture_Boots_Lower.jpg", // replace with actual image URL
    sizes: ["1 unit", "2 units"]
  },
  {
    id: 4,
    discount: 55,
    title: "Taps Hand Weeder",
    brand: "FarmoGuarad",
    price: 360,
    originalPrice: 699,
    savedPrice: 139,
    imageUrl: "https://tse3.mm.bing.net/th?id=OIP.4Hr78DuOoOn7TJ_wsL6qfwHaEU&pid=Api&P=0&h=180", // replace with actual image URL
    sizes: [""]
  },
  {
    id: 5,
    discount: 45,
    title: "Taps Farmer Safety Kit",
    brand: "BioPrime",
    price: 400,
    originalPrice: 800,
    savedPrice: 400,
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.rNcgMDRnSDiFDmN-R-AH6QAAAA&pid=Api&P=0&h=180", // replace with actual image URL
    sizes: [""]
  },
  {
    id: 6,
    discount: 90,
    title: "Balwaan Bhoo Shaki Torch",
    brand: "Modish Tractoraurkisan PVT LTD",
    price: 999,
    originalPrice: 1699,
    savedPrice: 801,
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.3ZnzJRtbAHRnprp2M6HDyQHaHa&pid=Api&P=0&h=180", // replace with actual image URL
    sizes: [""]
  },
  {
    id: 7,
    discount: 35,
    title: "Neptune nf 02 Knapsack Hand Operrated Garden Sprayer",
    brand: "SNAP EXPORT",
    price: 1560,
    originalPrice: 2699,
    savedPrice: 400,
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/71xLj+MiFyL._AC_UL116_SR116,116_.jpg", // replace with actual image URL
    sizes: [""]
  },
  {
    id: 8,
    discount: 70,
    title: "Hectare Man Harvester Picker",
    brand: "Sickle Innovation ",
    price: 550,
    originalPrice: 599,
    savedPrice: 50,
    imageUrl: "https://tse2.mm.bing.net/th?id=OIP.YZ4wiy6TPOQGFPiqf6PMzgAAAA&pid=Api&P=0&h=180", // replace with actual image URL
    sizes: [""]
  },
  {
    id: 9,
    discount: 10,
    title: "Solar Study Ligth",
    brand: "Mitava",
    price: 960,
    originalPrice: 1000,
    savedPrice: 150,
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.9hoopXjNdSModMNzYECz7gAAAA&pid=Api&P=0&h=180", // replace with actual image URL

  },
  {
    id: 10,
    discount: 30,
    title: "Garden Shade Net",
    brand: "Anil Packing",
    price: 1330,
    originalPrice:1700,
    savedPrice: 301,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71DAErDZEtL._SL1001_.jpg", // replace with actual image URL

  },
  {
    id: 11,
    discount: 60,
    title: "Vedant Regular Quality Silver",
    brand: "Vedant",
    price: 1949,
    originalPrice: 2200,
    savedPrice: 259,
    imageUrl: "https://cdn.shopify.com/s/files/1/0722/2059/products/1_147dfe49-54fc-4b1a-a5f1-c7196b1d131a.webp?v=1682323677&width=3840", // replace with actual image URL
    
  },
  {
    id: 12,
    discount: 40,
    title: "Vinspire Chaff Cutter",
    brand: "Vinspire",
    price: 23560,
    originalPrice: 25000,
    savedPrice: 2999,
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.-s09y1w-DU9gDB_1XVDXhwAAAA&pid=Api&P=0&h=180", // replace with actual image URL
   
  },
  // Add more products as needed...
];

class ProductCard extends Component {
  render() {
    const { product, onClick } = this.props;
    return (
      <div className="product-card" onClick={() => onClick(product)}>
        <div className="discount-badge">{product.discount}% OFF</div>
        <img src={product.imageUrl} alt={product.title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-brand">{product.brand}</p>
          <div className="product-pricing">
            <span className="product-price">₹{product.price}</span>
            <span className="product-original-price">₹{product.originalPrice}</span>
          </div>
          <p className="saved-price">Saved Price ₹{product.savedPrice}</p>
        </div>
      </div>
    );
  }
}

class PaymentModal extends Component {
  render() {
    const { product, onClose } = this.props;

    if (!product) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Payment Options</h2>
          <p>Product: {product.title}</p>
          <p>Price: ₹{product.price}</p>
          <div className="payment-buttons">
            <button onClick={() => alert("Payment Successful!")}>Pay Now</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

class Machinery extends Component {
  state = {
    selectedProduct: null,
  };

  handleProductClick = (product) => {
    this.setState({ selectedProduct: product });
  };

  closeModal = () => {
    this.setState({ selectedProduct: null });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <div className="app">
        <h1>Farm Machinery</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={this.handleProductClick} />
          ))}
        </div>
        <PaymentModal product={selectedProduct} onClose={this.closeModal} />
      </div>
    );
  }
}

export default Machinery;
