import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="hero-title">Premium Home Decor Collection</h2>
        <p className="hero-subtitle">Discover curated collections exclusively on Flipkart</p>
        <a href="#products" className="cta-button">View Products</a>
      </div>
    </section>
  );
}

export default Hero;
