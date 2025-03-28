import React from 'react';
import styles from './Hero.module.css'; // We'll create this next

// Assuming you might add the logo/image later in assets
import heroBackground from '../assets/hero-bg.jpg'; // Example path
import logoImage from '../assets/logo.png'; // Example path

const Hero: React.FC = () => {
  return (
    // We'll add the background image via CSS
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Placeholder for the overlaid logo/brand name */}
        { <img src={logoImage} alt="Eco Generation" className={styles.heroLogo} /> }
        {/* <h2 className={styles.heroBrand}>eco1 generation</h2> Or use text */}

        {/* Placeholder for the tagline */}
        <p className={styles.heroTagline}>
        იზრუნე ეკოლოგიაზე <br /> ჩვენთან ერთად
          {/* (Assuming this is the text from the image - replace if needed) */}
          {/* Using <br /> for line break as seen in the image */}
        </p>

        {/* Placeholder for the Call-to-Action button */}
        <button className={styles.heroButton}>
          შეძენა {/* (Assuming "Learn More" - replace if needed) */}
        </button>
      </div>
    </section>
  );
};

export default Hero;