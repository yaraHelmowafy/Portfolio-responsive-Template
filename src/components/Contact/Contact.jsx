import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img className="img" src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2 className="h2">Contact.</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder="Email" />
          <textarea className="textarea" placeholder="Message"></textarea>
          <button className="button" type="submit">Send</button>
          {message && <span className="span">Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
