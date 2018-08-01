function checkEmail(e){
	var element=e.target;
	if(/[^a-zA-Z0-9@._]/.test(element.value)){
		alert("Email is invalid! Only characters a-z A-Z 0-9 @ . _ are allowed.");
		element.value="";
		return false;
	}
	if(!/[a-zA-Z]/.test(element.value)){
		alert("Email is invalid! a-z or A-Z characters are must");
		element.value="";
		return false;
	}
	if(!/[.]/.test(element.value)){
		alert("Email is invalid! .domain name is missing");
		element.value="";
		return false;
	}
	return true;
}

function checkSubject(e){
	var element=e.target;
	if(/[^a-zA-Z ]/.test(element.value)){
		alert("Subject is invalid! Only characters a-z A-Z are allowed.");
		element.value="";
		return false;
	}
	return true;
}

function submitForm(e){
	if (document.getElementByID('user-email').value!="" && document.getElementByID('subject').value!="" && document.getElementByID('message').value!="") {
		var contact=document.getElementsByClassName('contact-form');
		contact[0].innerHTML ="<h3>Thankyou for feedback. I'll get to you shortly</h3>";
	}
}

var email = document.getElementByID('user-email');
email.addEventListener('blur',checkEmail,false);

var subject = document.getElementByID('subject');
subject.addEventListener('blur',checkSubject,false);

var submit = document.getElementByID('submit-btn');
submit.addEventListener('click',submitForm,false);