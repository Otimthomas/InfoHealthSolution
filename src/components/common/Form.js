import React from 'react';
import Input from './Input';
import {Button} from 'reactstrap';
import Joi from "joi-browser";

class Form extends React.Component {
	state = {
		data: {},
		errors: {}
	};

	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data, errors });
	};

	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.data, this.schema, options);

		if (!error) return null;

		let errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;
		console.log(errors);
		return errors;
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate();
		console.log(errors);
		this.setState({ errors: errors || {} });
		if (errors) return;
		this.doSubmit();
	};

	renderInput(name, label, type = "text") {
		const { data, errors } = this.state;
		return (
			<Input
				value={data[name]}
				onChange={this.handleChange}
				name={name}
				label={label}
				type={type}
				errors={errors[name]}
			/>
		);
	}

	renderButton(label) {
		return <Button disabled={this.validate()}>{label}</Button>;
	}
}

export default Form;