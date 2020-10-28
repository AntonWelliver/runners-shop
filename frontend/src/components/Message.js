import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
	console.log('Message.variant', variant);
	return <Alert variant={variant}>{children}</Alert>;
};

//Message.deafultProps = {
Message.defaultProps = {
	variant: 'info',
};

export default Message;
