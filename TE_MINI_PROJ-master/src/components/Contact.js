import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactPage.css";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6y1otr6",      // Replace with your EmailJS service ID
      "template_ti45edc",     // Replace with your EmailJS template ID
      form.current,
      "-W-fVmXc05-uT9ROi"       // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="p-4 text-white">
              <h2 className="fw-bold text-light mb-4">📍 Contact Information</h2>
              <p className="fs-5"><strong>🏠 Address:</strong> 123 Estate Avenue, New York, USA</p>
              <p className="fs-5"><strong>📧 Email:</strong> <a href="mailto:contact@estatebit.com" className="text-decoration-none text-white">contact@estatebit.com</a></p>
              <p className="fs-5"><strong>📞 Phone:</strong> <a href="tel:+1234567890" className="text-decoration-none text-white">+1 234 567 890</a></p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-card">
              <h2 className="fw-bold text-center text-primary">📬 Contact Us</h2>
              <p className="text-center text-muted">We’d love to hear from you!</p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input type="text" name="user_name" className="form-control input-field" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input type="email" name="user_email" className="form-control input-field" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Message</label>
                  <textarea name="message" className="form-control input-field" rows="4" placeholder="Write your message here" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 p-3 rounded-pill fw-bold">
                  📩 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="fw-bold text-center text-light">📌 Find Us Here</h3>
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.815434216236!2d-73.98542818459366!3d40.74881707932782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a2a8cb%3A0x240d176bc9a57b62!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1618194464859!5m2!1sen!2sus"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
