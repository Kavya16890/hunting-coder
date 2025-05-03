import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ phone, name, email, desc });
    const data = { phone, name, email, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("thanks for submitting the form.");
        setPhone("");
        setEmail("");
        setDesc("");
        setName("");
      })
      .catch(() => {
        console.error("Error:", error);
      });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleOnChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            value={name}
            onChange={handleOnChange}
            type="text"
            className={styles.formlabel}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Enter your phone no.
          </label>
          <input
            type="number"
            onChange={handleOnChange}
            value={phone}
            className={styles.formlabel}
            id="phone"
            name="phone"
          />
        </div>
        <div className="mb-3 form-check">
          <label htmlFor="email" className={styles.formlabel}>
            Enter your email here:
          </label>
          <input
            value={email}
            onChange={handleOnChange}
            type="email"
            className="form-check-input"
            id="email"
            name="email"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your Description
          </label>
          <textarea
            type="text"
            onChange={handleOnChange}
            className={styles.formlabel}
            id="desc"
            value={desc}
            name="desc"
            placeholder="Write your concern here."
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
