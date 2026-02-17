import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Your trusted destination for premium home decor and furniture products from Flipkart.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.flipkart.com">Visit Flipkart</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <p>For product details and purchases, visit Flipkart directly.</p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://www.flipkart.com">www.flipkart.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Home Decor Collection. Products displayed are from Flipkart.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
