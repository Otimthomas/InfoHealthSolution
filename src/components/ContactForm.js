import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class ContactForm extends Form {
  state = {
    data: {
	  name: "",
	  phone: "",
	  email: "",
	  subject: '',
	  message: ''
    },
    errors: {},
  };

  schema = {
	name: Joi.string().required().label("Name"),
	email: Joi.string().email().required().label("Email"),
	subject: Joi.string().required().label('Subject'),
	phone: Joi.number().required().label('Phone'),
	message: Joi.string().required().label('Message')
  };

  doSubmit = () => {
    //call server
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
		  {this.renderInput('phone', 'Phone')}
		  {this.renderInput('subject', 'Subject')}
		  {this.renderTextArea('message', 'Message or Comment')}
          {this.renderButton("Send")}
        </form>
      </div>
    );
  }
}

export default ContactForm;
