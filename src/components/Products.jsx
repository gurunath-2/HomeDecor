import React from 'react';
import './Products.css';

function Products() {
  const categories = [
    {
      categoryName: 'Living Room Decor',
      categoryId: 'living-room',
      products: [
        {
          id: 1,
          name: 'Classic Glass Vase - 14"',
          price: 'Budget-friendly',
          rating: 4.5,
          image: '/images/14-removal-glass-vase-awh-8-original.webp',
          flipkartLink: 'https://fktr.in/shqSQt7',
          description: 'Add timeless elegance to your shelf or table. This clear glass vase brings a fresh, airy feel to any living room and makes fresh flowers feel even more special. Perfect for small homes and modern apartments.'
        },
        {
          id: 2,
          name: 'Moon Vase with Flowers',
          price: 'Under ₹1500',
          rating: 4.3,
          image: '/images/4-moon-vase-flowers-pot-glaxy-crafts.webp',
          flipkartLink: 'https://fktr.in/Rz5ZBvj',
          description: 'Create an Instagram-worthy moment in your living room. This unique moon-shaped vase instantly adds personality and warmth. Ideal for rentals—no wall installation needed. A cozy, modern focal point.'
        },
        {
          id: 7,
          name: 'Swan Couples Statue',
          price: 'Budget-friendly',
          rating: 4.6,
          image: '/images/Swan-Couples-Statue.webp',
          flipkartLink: 'https://fktr.in/mO5v1ko',
          description: 'Bring peaceful elegance to your home with this graceful swan statue. Perfect for creating a sophisticated, calming vibe in your living room or bedroom. Adds premium feel without the premium price.'
        }
      ]
    },
    {
      categoryName: 'Wall Decor & Art',
      categoryId: 'wall-decor',
      products: [
        {
          id: 3,
          name: 'Artificial Hanging Bird',
          price: 'Under ₹1000',
          rating: 4.6,
          image: '/images/Artificial-Hanging-Bird.webp',
          flipkartLink: 'https://fktr.in/O0z2kSG',
          description: 'Turn bare walls into a nature-inspired corner. This lifelike hanging bird adds dimension and charm instantly. Perfect for small walls and rentals—easy installation, zero damage.'
        },
        {
          id: 4,
          name: 'Dream Catcher',
          price: 'Under ₹1000',
          rating: 4.4,
          image: '/images/DULI-DREAM-catcher.webp',
          flipkartLink: 'https://fktr.in/cbJawaJ',
          description: 'Create a dreamy, bohemian vibe in any room. This handmade dream catcher brings softness and intention to your walls. Works beautifully above beds or in cozy reading nooks. Rental-friendly decor.'
        },
        {
          id: 5,
          name: 'Butterfly 3D Metal Stickers',
          price: 'Under ₹500',
          rating: 4.5,
          image: '/images/large-butterfly-3d-metal-stickers.webp',
          flipkartLink: 'https://fktr.in/Tx80Ei6',
          description: 'Add playful dimension to your walls instantly. These 3D metal butterflies create depth and movement without looking cluttered. Perfect for hallways, kids\' rooms, and adding life to plain spaces.'
        },
        {
          id: 6,
          name: 'Macrame Wall Hanging Shelf',
          price: 'Under ₹2000',
          rating: 4.5,
          image: '/images/macrame-wall-hanging-shelf-for-home-decor-item.webp',
          flipkartLink: 'https://fktr.in/8Hj8CuJ',
          description: 'Combine style with function. This macrame shelf brings boho charm while giving you real storage. Display small plants, candles, or books for a curated, aesthetic look. Great for small apartments.'
        },
        {
          id: 10,
          name: 'Metal Wall Mirror',
          price: 'Under ₹1000',
          rating: 4.6,
          image: '/images/70-40-1-metal-wall-minior-nifsa-store.webp',
          flipkartLink: 'https://fktr.in/Zad3IfM',
          description: 'Instantly brighten your space with this sleek metal wall mirror. Perfect for reflecting light and making rooms feel more spacious and airy. Works beautifully in modern homes, bedrooms, and entryways. Easy installation, rental-approved.'
        },
        {
          id: 11,
          name: 'Supremecraft Wall Art Panel',
          price: 'Under ₹1500',
          rating: 4.4,
          image: '/images/10-3-scf-pt-17-supremecraft.webp',
          flipkartLink: 'https://fktr.in/A728j5f',
          description: 'Add sculptural dimension to your walls with this artistic wall panel. Creates a statement focal point that transforms plain walls into gallery-quality design. Perfect for modern, minimalist, and eclectic home aesthetics.'
        }
      ]
    },
    {
      categoryName: 'Statement Decor Pieces',
      categoryId: 'statement-pieces',
      products: [
        {
          id: 8,
          name: 'Feng Shui Crystal Globe',
          price: 'Budget-friendly',
          rating: 4.5,
          image: '/images/15-10-feng-shui-crystal-globe-with-golden-stand.webp',
          flipkartLink: 'https://fktr.in/Ve0eBWS',
          description: 'Bring balance and positive energy to your workspace or shelf. This stunning crystal globe with golden stand feels premium and purposeful. A conversation-starter that costs less than you\'d expect.'
        },
        {
          id: 12,
          name: 'Bhagya-G Swing Double Swan Crystal Duck Showpiece',
          price: 'Under ₹1000',
          rating: 4.4,
          image: '/images/7-7-swing-double-swan-crystal-duck-showpiece-for-homedecor.webp',
          flipkartLink: 'https://fktr.in/fgtycVP',
          description: 'Add an artistic statement piece to your home with this elegant swing double swan crystal duck showpiece. Perfect for shelves, tables, or as a centerpiece. Premium look at an affordable price.'
        },
        {
          id: 13,
          name: 'Miss Peach Pair White Duck Kissing Showpiece',
          price: 'Under ₹1000',
          rating: 4.6,
          image: '/images/pair of whiteduck.webp',
          flipkartLink: 'https://fktr.in/YXQ1hF1',
          description: 'Capture the sweetness of love with this charming white duck kissing pair showpiece. A delightful addition to any home decor theme. Perfect for expressing affection and adding warmth to your living space.'
        }
      ]
    },
    {
      categoryName: 'Ambient Lighting',
      categoryId: 'lighting',
      products: [
        {
          id: 9,
          name: '3D Dolphin Moon Crystal Ball Lamp',
          price: 'Under ₹2500',
          rating: 4.6,
          image: '/images/7-8-new-lamp-dolphin-moon-spiricon-7.webp',
          flipkartLink: 'https://fktr.in/YQ8RBgu',
          description: 'Transform your room with magical, ambient lighting. This 3D dolphin-moon lamp instantly creates a cozy, enchanting atmosphere perfect for winding down. Works as night light, decor, and mood setter. A must-have for aesthetic homes.'
        },
        {
          id: 14,
          name: 'Bonsai Desk Tree LED Light',
          price: 'Under ₹1500',
          rating: 4.5,
          image: '/images/bonsai-desk-tree-led-battery-powered-or-usb-adapter-top.webp',
          flipkartLink: 'https://fktr.in/bvKddeR',
          description: 'Bring nature-inspired ambiance to your desk with this adorable bonsai desk tree LED light. Battery powered or USB adapter compatible. Perfect for creating a calming workspace while adding decorative charm.'
        },
        {
          id: 15,
          name: 'Dikuji Cute Rabbit Night Light',
          price: 'Under ₹1200',
          rating: 4.7,
          image: '/images/cute-rabbit-night-light-usb-rechargeable-changing-light-room.webp',
          flipkartLink: 'https://fktr.in/e635M0k',
          description: 'Transform your room with this adorable USB-rechargeable rabbit night light. Features color-changing light modes for ultimate ambiance. Perfect for kids\' rooms or anyone who loves cute decor that\'s also functional.'
        }
      ]
    }
  ];

  return (
    <section className="products" id="products">
      {categories.map((category) => (
        <div key={category.categoryId} className="category-section">
          <div className="container">
            <h2 className="category-title">{category.categoryName}</h2>
            <div className="products-grid">
              {category.products.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-meta">
                      <span className="product-price">{product.price}</span>
                      <span className="rating-value">⭐ {product.rating}</span>
                    </div>
                    <a 
                      href={product.flipkartLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flipkart-btn"
                    >
                      Check Price on Flipkart
                    </a>
                    <p className="affiliate-disclosure">Prices & availability may change.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Products;
