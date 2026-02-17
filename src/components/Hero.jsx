import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="hero-title">Turn Your Home into a Cozy, Aesthetic Sanctuary</h2>
        <p className="hero-subtitle">Simple, beautiful home decor ideas for every budget—find your perfect pieces on Flipkart</p>
        <a href="#products" className="cta-button">Explore Ideas</a>
      </div>
    </section>
  );
}

export default Hero;
