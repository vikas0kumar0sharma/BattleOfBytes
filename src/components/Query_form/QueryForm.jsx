// QueryForm.js

import React from 'react';
import './QueryForm.css';

const QueryForm = () => {
  return (
    <div className="query-form-container">
      <form className="query-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject of your query" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your query"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QueryForm;
