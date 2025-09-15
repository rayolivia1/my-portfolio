import React from "react";
import "./Contact-Me.css";
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a1cdc5b3-55ef-4fd3-bb8e-4cf5925a2955");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
    });
    }
  };
    return (
        <section className = "contact">
            <form onSubmit = {onSubmit}>
                <h2>Contact Form</h2>
                <div className = "input-box">
                    <label>Full Name</label>
                    <input type = "text" className = "field" placeholder = 'Enter your name' name = 'name' required />
                </div>
                <div className = "input-box">
                    <label>Email Address</label>
                    <input type = "text" className = "field" placeholder = 'Enter your email address' name = 'email' required />
                </div>
                <div className = "input-box">
                    <label>Your Message</label>
                    <textarea name = "message"  id = "" className = "field mess "type = "text"  placeholder = 'Enter your message' required></textarea>
                </div>
                <button type = "submit"> Send Message.</button>
            </form>
        </section>
    );
}

export default Contact;