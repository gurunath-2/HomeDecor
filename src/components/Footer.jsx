import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Your Aesthetic Home Starts Here</h3>
            <p>Curated home decor inspiration to transform your space into a cozy, beautiful sanctuary. All products available on Flipkart.</p>
          </div>
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Shop by Category</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.flipkart.com">Buy on Flipkart</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Trust & Transparency</h3>
            <p>We partner with Flipkart to bring you verified, affordable home decor products.</p>
            <p style={{fontSize: '0.85rem', marginTop: '0.8rem', color: '#999'}}>Affiliate links: We earn a small commission when you purchase through our links at no extra cost to you.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Home Decor Collection. Curated products from Flipkart. <span style={{fontSize: '0.85rem'}}>| Affiliate disclosure: We use affiliate links.</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
