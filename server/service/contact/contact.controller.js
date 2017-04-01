

function checkValues(values) {


	return new Promise(function(resolve, reject) {

		if(!values.name || !values.firstname || !values.email || !values.message) {
			reject('Incorect values');
		} else {
			resolve(values);
		}
	});


}

function handleError(res) {
	return function(reason) {
		console.log("Error reason: " + reason);
		res.sendStatus(400).end();
	}
}

function formatMail(res) {
	return function(values) {

		console.log('formatMail with values');
		console.log(values);

		let mailOptions = {
			from: 'y_lefoll@orange.fr',
			to: 'y_lefoll@orange.fr',
			subject: 'Message from: ' + values.email,
			text: values.message
		};

		return mailOptions;
		
	}
}

function send(res) {
	return function(mailOptions) {
		console.log('send()');
		console.log(mailOptions);

		let nodemailer = require('nodemailer');

		let transporter = nodemailer.createTransport({
			host: 'smtp.orange.fr',
			port: 465,
			secure: true,
			authType: 'LOGIN',
			auth: {
				user: 'y_lefoll@orange.fr',
				pass: "premier1"
			},
			tls: {
				rejectUnauthorized: false
			}
		});


		return new Promise(function(resolve, reject) {
			transporter.sendMail(mailOptions, (error, info) => {
				if(error) {
					return reject(error);
				}

				res.sendStatus(200);

				return resolve(info);
			});
		});

	}
}

export function sendMail(req, res) {
	console.log("sendMail()");

	checkValues(req.body)
	.then(formatMail(res))
	.then(send(res))
	.catch(handleError(res));
}