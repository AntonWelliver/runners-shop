const bcrypt = require('bcryptjs');

const users = [
	{
		name: 'Admin User',
		email: 'admin@gmail.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Anton W',
		email: 'anton@gmail.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Peter W',
		email: 'peter@gmail.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

module.exports = users;
