import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class ContactForm extends Form {
	state = {
		data: {
			username: "",
			password: ""
		},
		errors: {}
	};

	schema = {
		username: Joi.string()
			.required()
			.label("Username"),
		password: Joi.string()
			.required()
			.label("Password")
	};

	doSubmit = () => {
		//call server
		console.log("Form submitted");
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("name", "Name")}
					{this.renderInput("email", "Email")}
					{this.renderButton("Send")}
				</form>
			</div>
		);
	}
}

export default ContactForm;

