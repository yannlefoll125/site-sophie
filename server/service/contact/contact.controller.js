

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
		let error = {
			message: reason
		};
		res.status(400).json(error);
	}
}

function formatMail(res) {
	return function(values) {

		console.log('formatMail with values');
		console.log(values);


		let message = 'Message envoyé par ' + values.firstname + ' ' + values.name + '\n';
		message += 'Nom:' + values.name + '\n';
		message += 'Prénom: ' + values.firstname + '\n';
		message += 'e-mail: ' + values.email + '\n';

		if(!!values.tel) {
			message += 'tel: ' + values.tel + '\n';
		}

		message += 'Message: \n\n';
		message += values.message + '\n\n';
		//message += 'Ce message a été généré automatiquement à partir des informations du formulaire de la page contact. L\'adresse e-mail de réponse est celle spécifiée par l\'utilisateur.';
		


		let mailOptions = {
			from: 'contact@la-therapie-de-sophie.fr',
			to: 'y_lefoll@orange.fr',
			subject: '[La Thérapie de Sophie] Message de ' + values.firstname + ' ' + values.name,
			text: message
		};

		return mailOptions;
		
	}
}

function send(res) {
	return function(mailOptions) {
		console.log('send()');
		console.log(mailOptions);

		let nodemailer = require('nodemailer');

		const orange = {
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
		};

		const ovh = {
			host: 'ssl0.ovh.net',
			port: 465,
			secure: true,
			authType: 'LOGIN',
			auth: {
				user: 'contact@la-therapie-de-sophie.fr',
				pass: "therapiedesophie"
			},
			tls: {
				rejectUnauthorized: false
			}
		}

		let transporter = nodemailer.createTransport(ovh);


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