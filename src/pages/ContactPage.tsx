// src/pages/ContactPage.tsx
import React, { useState, useRef } from 'react'; // Add useRef
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './ContactPage.module.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null); // Ref for the form element
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null); // Feedback state

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
    if (!form.current) return; // Type guard for ref

    setIsSubmitting(true); // Set loading state
    setSubmitStatus(null); // Reset previous status

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error("EmailJS environment variables are not set!");
        setSubmitStatus('error'); // Indicate configuration error
        setIsSubmitting(false);
        return; // Prevent sending
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' }); // Clear form
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
          setIsSubmitting(false); // Reset loading state regardless of outcome
      });
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
          <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
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
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? t('contactSendingButton') : t('contactSendButton')}
            </button>
            {submitStatus === 'success' && <p className={styles.successMessage}>{t('contactSuccessMessage')}</p>}
            {submitStatus === 'error' && <p className={styles.errorMessage}>{t('contactErrorMessage')}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;