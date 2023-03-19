import React from "react";
import styles from "./Contact.module.scss";
import contactlogo from "../../media/riona/contactBoy.png";

const Contact = () => {
  const submitMessage = () => {
    console.log("MESSAGE SENT");
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container1}>
        <div className={styles.contactSection}>
          <h1>Contacteaza-ne</h1>
          <p>
            Punete in contact direct cu unul din consultanti nostri si te vom ajuta sa iti duci afacerea la urmatorul
            nivel
          </p>
        </div>

        <div className={styles.emailSection}>
          <h1>Email</h1>
          <p>info@riona.ro</p>
        </div>

        <div className={styles.phoneSection}>
          <h1>Telefon</h1>
          <p>+40 728 711 602</p>
        </div>

        <div className={styles.socialSection}>
          <h1>Socials</h1>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>

        <img className={styles.contactLogo} src={contactlogo} alt="logo" />
      </div>

      <div className={styles.container2}>
        <div className={styles.mobileHeader}>
          <img className={styles.mobileLogo} src={contactlogo} alt="contact" />
          Contacteaza-ne
        </div>
        <form>
          <div className={styles.inputs}>
            <label> Nume </label>
            <input></input>
          </div>

          <div className={styles.inputs}>
            <label> Email </label>
            <input></input>
          </div>

          <div className={styles.inputs}>
            <label> Telefon </label>
            <input></input>
          </div>

          <div className={styles.selection}>
            <label>Selecteaza pachetul </label>
            <select>
              <option selected value=".">
                Doresc pachetul...
              </option>
              <option value="brandingBasic">Branding Basic</option>
              <option value="brandingVIP">Branding VIP</option>
            </select>
          </div>

          <div className={styles.textareaSection}>
            <label>Mesaj</label>
            <textarea></textarea>
          </div>

          <div className={styles.submitSection}>
            <button onClick={submitMessage}>{"Trimite"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
