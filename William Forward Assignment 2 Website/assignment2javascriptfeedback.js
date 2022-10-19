
function myFunction3()
{
	var name = document.getElementById("Name");
	
	if (name.value == "")
	{
		alert("Please enter your name.");
		name.focus();
		return false;
	}
	
	var email = document.getElementById("Email Address");
	
	if (email.value == "")
	{
		alert("Please enter your email address.");
		email.focus();
		return false;
	}
	
	var feedback = document.getElementById("Feedback");
	
	if (feedback.value == "")
	{
		alert("Please enter your Feedback.");
		feedback.focus();
		return false;
	}
}