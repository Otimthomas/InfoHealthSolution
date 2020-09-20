import React from "react";

function TextArea({ name, errors, label, ...rest }) {
	return (
		<div className='form-group'>
			<label htmlFor={name}>{label}</label>
			<textarea {...rest} name={name} id={name} className='form-control' />
			{errors && <div className='alert alert-danger'>{errors}</div>}
		</div>
	)
}

export default TextArea;