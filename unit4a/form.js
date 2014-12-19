$(document).ready(function() {

	$resultError = $("#resultError");
	$name = $("#name");
	$email = $("#email");
	$comments = $("#comments");
	
	$("#contactForm").submit(function() {
		console.log("form submit");

		//clear any possible error
		$resultError.html("");

		//get the values
		var name = $name.val();
		var email = $email.val();
		var comments = $comments.val();

		//flag for error state
		var hasErrors = false;

		//messages for our errors
		var errorMessages = [];

		//is the name blank?
		if(name === '') {
			hasErrors = true;
			errorMessages.push("Name is required.");
		}

		//if the email is NOT blank, validate
		if(email !== '' && email.indexOf("@") <= 0) {
			hasErrors = true;
			errorMessages.push("If an email is specified, it must be an email address.");					
		}

		//are the comments blank?
		if(comments === '') {
			hasErrors = true;
			errorMessages.push("Comments are required.");
		}

		if(hasErrors) {
			console.log(errorMessages);
			var errorStr = '<div class="alert alert-danger" role="alert"><strong>Please correct:</strong><ul>';
			for(var i=0, len=errorMessages.length; i<len; i++) {
				errorStr += '<li>' + errorMessages[i] + '</li>';
			}

			errorStr += '</ul></div>';
			$resultError.html(errorStr);

			return false;
		} else {
			return true;
		}

	});
});