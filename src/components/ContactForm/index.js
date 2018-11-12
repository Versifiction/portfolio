import React, { Component } from 'react';
import firebase from 'firebase';

import './ContactForm.css';

var config = {
  apiKey: "AIzaSyAZGDzhcdbloh92FFbrrA4WIjevbdiukM8",
  authDomain: "portfoli-8ff4b.firebaseapp.com",
  databaseURL: "https://portfoli-8ff4b.firebaseio.com",
  projectId: "portfoli-8ff4b",
  storageBucket: "portfoli-8ff4b.appspot.com",
  messagingSenderId: "935440828998"
};
firebase.initializeApp(config);

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      clientName: "",
      clientEmail: "",
      clientTelephone: "",
      clientEntreprise: "",
      messageContent: "",
      messageError: false,
      isMessageSended: false,
      submitMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (evt) => {
    evt.persist();
    let state = this.state;
    state[evt.target.name] = evt.target.value;
    this.setState(state);
  }

  handleSubmit = evt => {
    evt.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (this.state.clientName.length < 1) {
      this.setState({
        messageError: true,
        submitMessage: "Veuillez remplir le champ réservé à votre nom",
      });
      nameInput.style.border = '1px solid red';
    } else if (this.state.clientEmail.length < 1) {
      this.setState({
        messageError: true,
        submitMessage: "Veuillez remplir le champ réservé à votre email",
      });
      emailInput.style.border = '1px solid red';
    } else if (this.state.messageContent.length < 1) {
      this.setState({
        messageError: true,
        submitMessage: "Veuillez remplir le champ réservé à votre message",
      });
      messageInput.style.border = '1px solid red';
    } else if (!this.state.clientEmail.includes("@") && !this.state.clientEmail.includes(".")){
      this.setState({
        messageError: true,
        submitMessage: "Veuillez rentrer une adresse e-mail valide",
      });
      emailInput.style.border = '1px solid red';
    } else {
      nameInput.style.border = '1px solid #ddd';
      emailInput.style.border = '1px solid #ddd';
      messageInput.style.border = '1px solid #ddd';
      this.setState({
        clientName: "",
        clientEmail: "",
        clientTelephone: "",
        clientEntreprise: "",
        messageContent: "",
        messageError: false,
        isMessageSended: true,
        submitMessage: "Votre message a bien été envoyé !",
      });
    }

    var database = firebase.database();
    var messagesRef = database.ref("messages");
    var result = messagesRef.push().set({
      clientName: this.state.clientName,
      clientEmail: this.state.clientEmail,
      clientTelephone: this.state.clientTelephone,
      clientEntreprise: this.state.clientEntreprise,
      messageContent: this.state.clientName,
    });
  }

  render() {
    const {
      clientName,
      clientEmail,
      clientTelephone,
      clientEntreprise,
      messageContent,
      messageError,
      isMessageSended,
      submitMessage
    } = this.state;
    return (
      <div className="contact-form">
        <div className="content">
          <h3>Écrivez moi un message</h3>
          <div className="separator not-centered"></div>
          {!isMessageSended && <form className="form" method="post">
            <input type="text" name="clientName" id="name" placeholder="Nom *" size="30" maxLength="30" value={clientName} onChange={this.handleChange} />
            <br />
            <input type="text" name="clientEmail" id="email" placeholder="E-mail *" size="30" maxLength="30" value={clientEmail} onChange={this.handleChange} />
            <br />
            <input type="tel" name="clientTelephone" id="telephone" placeholder="Téléphone" size="30" maxLength="15" value={clientTelephone} onChange={this.handleChange} />
            <br />
            <input type="text" name="clientEntreprise" id="entreprise" placeholder="Entreprise" size="30" maxLength="30" value={clientEntreprise} onChange={this.handleChange} />
            <br />
            <textarea name="messageContent" id="message" placeholder="Message *" size="60" maxLength="300" value={messageContent} onChange={this.handleChange}></textarea>
            <br />
            <p><span className="italic">* Les mentions suivies d'un astérisque sont à remplir obligatoirement</span></p>
            {messageError && <p className="submit-message">{submitMessage}</p>}
            <input onClick={this.handleSubmit} type="submit" value="Envoyer" className="myButtonBlue" />
          </form>}
          {isMessageSended && <p className="sended-message">{submitMessage}</p>}
        </div>
      </div>
    );
  }
}

export default ContactForm;