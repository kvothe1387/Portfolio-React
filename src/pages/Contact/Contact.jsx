import React, { useState } from "react";
import emailjs from "emailjs-com";

import styles from "./pages/Contact/Contact.module.css";

export const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState('');

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_id';
      const templateId = 'template_id';
      const userId = 'user_id';
      const templateParams = {
        name,
        email,
        message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      alert('The pleasure would me mine if all fields are entered.');
    }
  }

  return (
    <div id="contact-form">
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required />
      <textarea placeholder="Kindly grace my inbox with your message here." value={message} onChange={e => setMessage(e.target.value)} required> </textarea>
      <button onClick={submit}>Send Message</button>

      <span className={emailSent ? 'visable' : null}>I look forward to appreciating your message! </span>

    </div>
  );

};

