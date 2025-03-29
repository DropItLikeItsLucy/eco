// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Import icons (choose appropriate ones)
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Example: Font Awesome 5
// Or from Fa6: import { FaMapLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

import styles from './ContactPage.module.css'; // We will create this file

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic here
    // (e.g., send data to an API endpoint, Netlify Forms, EmailJS, etc.)
    console.log('Form data submitted:', formData);
    alert(t('contactFormSubmissionAlert')); // Simple feedback using translation key
    // Optionally clear form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contactPageContainer}>
      {/* <h1>{t('pageTitleContact')}</h1> Use translation key */}

      <div className={styles.contentWrapper}>

        {/* Column 1: Contact Info */}
        <div className={styles.infoSection}>
          <h2>{t('contactGetInTouch')}</h2> {/* Use translation key */}
          <p>{t('contactIntroText')}</p> {/* Use translation key */}
<br />
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.infoIcon} /> {/* Or FaMapLocationDot */}
            <span>
              {t('contactAddress')}
              {/* Replace with your actual address */}
              {/* Tbilisi, Georgia, Vardevani st. 2 0178 */}
            </span>
          </div>
<br />
          <div className={styles.infoItem}>
            <FaPhone className={styles.infoIcon} />
            <span>
              {/* {t('contactPhoneLabel')}:<br /> */}
              <a href="tel:+995599080169">+995 599 08 01 69</a> {/* Replace */}
            </span>
          </div>
<br />
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.infoIcon} />
            <span>
              {/* {t('contactEmailLabel')}:<br /> */}
              <a href="mailto:info@ecogeneration.ge">info@ecogeneration.ge</a> {/* Replace */}
            </span>
          </div>
        </div>

        {/* Column 2: Contact Form */}
        <div className={styles.formSection}>
          <h2>{t('contactSendUsMessage')}</h2> {/* Use translation key */}
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t('contactNameLabel')}</label> {/* Use key */}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">{t('contactEmailLabelForm')}</label> {/* Use key */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">{t('contactMessageLabel')}</label> {/* Use key */}
              <textarea
                id="message"
                name="message"
                rows={5} // Adjust rows as needed
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              {t('contactSendButton')} {/* Use key */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;