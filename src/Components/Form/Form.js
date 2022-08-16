import React, { useState, useEffect } from 'react';
import './Form.css'

const Form = () => {
  const getData = () => {
    const storageData = localStorage.getItem("formData");
    if (!storageData) {
      return {
        name: "",
        email: "",
        textarea: "",
      };
    } else {
      return JSON.parse(storageData);
    }
  };
  const [formData, setFormData] = useState(getData);

  useEffect(()=> {
    localStorage.setItem("formData", JSON.stringify(formData));
  },[formData]);

  const nameHandle = (e) => {
    setFormData({...formData, name: e.target.value});
  };

  const emailHandle = (e) => {
    setFormData({...formData, email: e.target.value});
  };

  const textareaHandle = (e) => {
    setFormData({...formData, textarea: e.target.value});
  };


  const [submitted, setSubmitted] = useState(false)

  const submitHandle = () => {
    setSubmitted(!submitted)
  }

  console.log(submitted)

  return (
    <div className="contact-form" >
      <h2>Leave your message</h2>

      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={nameHandle}
          placeholder="Your name.."
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={emailHandle}
          placeholder="Your mail address.."
          required
        />
        <textarea
          name="message"
          value={formData.textarea}
          onChange={textareaHandle}
          placeholder="Your message.."
          required
        />
        <input
          type="submit"
          value="Send"
        />
      </form>

      {
        submitted ? <div className="success">Message sent</div> : null
      }
      
    </div>
  );
};

export default Form;
