

function checkValues(values) {

	let p = new Promise(function(resolve, reject) {
		if(!values.name || !values.firstname || !values.email || !values.message) {
			reject('Incorect values');
		} else {
			resolve(values);
		}
	});

	return p;
	

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

		let formatedValues = {};
		formatedValues.name = values.name;
		formatedValues.firstname = values.firstname;
		return formatedValues;
		
	}
}

function send(res) {
	return function(fValues) {
		console.log('send()');
		console.log(fValues);
	}
}

export function sendMail(req, res) {
	console.log("sendMail()");

	checkValues(req.body)
	.then(formatMail(res))
	.then(send(res))
	.catch(handleError(res));
}