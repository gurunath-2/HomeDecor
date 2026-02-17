import React from 'react';
import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Glass Vase - 14" Removal',
      category: 'Home Decor',
      price: 'View on Flipkart',
      rating: 4.7,
      image: '/images/14-removal-glass-vase-awh-8-original.webp',
      flipkartLink: 'https://fktr.in/shqSQt7',
      description: 'Beautiful glass vase for flower arrangements'
    },
    {
      id: 2,
      name: 'Moon Vase with Flowers',
      category: 'Decor',
      price: 'View on Flipkart',
      rating: 4.8,
      image: '/images/4-moon-vase-flowers-pot-glaxy-crafts.webp',
      flipkartLink: 'https://fktr.in/Rz5ZBvj',
      description: 'Elegant moon-shaped vase with flower pot'
    },
    {
      id: 3,
      name: 'Artificial Hanging Bird',
      category: 'Wall Decor',
      price: 'View on Flipkart',
      rating: 4.6,
      image: '/images/Artificial-Hanging-Bird.webp',
      flipkartLink: 'https://fktr.in/O0z2kSG',
      description: 'Realistic artificial bird for indoor decoration'
    },
    {
      id: 4,
      name: 'Dream Catcher',
      category: 'Wall Decor',
      price: 'View on Flipkart',
      rating: 4.9,
      image: '/images/DULI-DREAM-catcher.webp',
      flipkartLink: 'https://fktr.in/cbJawaJ',
      description: 'Beautiful handmade dream catcher'
    },
    {
      id: 5,
      name: 'Butterfly 3D Metal Stickers',
      category: 'Wall Decor',
      price: 'View on Flipkart',
      rating: 4.5,
      image: '/images/large-butterfly-3d-metal-stickers.webp',
      flipkartLink: 'https://fktr.in/TkuwdDD',
      description: 'Large 3D butterfly metal wall stickers'
    },
    {
      id: 6,
      name: 'Macrame Wall Hanging Shelf',
      category: 'Furniture',
      price: 'View on Flipkart',
      rating: 4.7,
      image: '/images/macrame-wall-hanging-shelf-for-home-decor-item.webp',
      flipkartLink: 'https://fktr.in/8Hj8CuJ',
      description: 'Stylish macrame wall shelf for home display'
    },
    {
      id: 7,
      name: 'Swan Couples Statue',
      category: 'Decor',
      price: 'View on Flipkart',
      rating: 4.8,
      image: '/images/Swan-Couples-Statue.webp',
      flipkartLink: 'https://fktr.in/mO5v1ko',
      description: 'Elegant swan couples decorative statue'
    },
    {
      id: 8,
      name: 'Feng Shui Crystal Globe',
      category: 'Decor',
      price: 'View on Flipkart',
      rating: 4.7,
      image: '/images/15-10-feng-shui-crystal-globe-with-golden-stand.webp',
      flipkartLink: 'https://fktr.in/Ve0eBWS',
      description: 'Beautiful feng shui crystal globe with golden stand'
    },
    {
      id: 9,
      name: '3D Dolphin Moon Crystal Ball Lamp',
      category: 'Lighting',
      price: 'View on Flipkart',
      rating: 4.9,
      image: '/images/7-8-new-lamp-dolphin-moon-spiricon-7.webp',
      flipkartLink: 'https://fktr.in/YQ8RBgu',
      description: 'Magical 3D dolphin moon galaxy crystal ball lamp with LED light'
    }
  ];

  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  <span className="rating-value">⭐ {product.rating}</span>
                </div>
                <p className="product-price">{product.price}</p>
                <a 
                  href={product.flipkartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flipkart-btn"
                >
                  Get Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
