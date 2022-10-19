
function validate()
{
	var fn = document.getElementById("First Name");
	
	if (fn.value == "")
	{
		alert("Please enter your first name.");
		fn.focus();
		return false;
	}
	
	var ln = document.getElementById("Last Name");
	
	if (ln.value == "")
	{
		alert("Please enter your last name.");
		ln.focus();
		return false;
	}
	
	var ea = document.getElementById("Email Address");
	
	if (ea.value == "")
	{
		alert("Please enter your email address.");
		ea.focus();
		return false;
	}
	
	var s = document.getElementById("Subject");
	
	if (s.value == "")
	{
		alert("Please enter your subject of the message.");
		s.focus();
		return false;
	}
	
	var m = document.getElementById("Message");
	
	if (m.value == "")
	{
		alert("Please enter your message.");
		m.focus();
		return false;
	}
}