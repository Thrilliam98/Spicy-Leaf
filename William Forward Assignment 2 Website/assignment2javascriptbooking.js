function myFunction2()
{
	var name = document.getElementById("Name");
	
	if (name.value == "")
	{
		alert("Please enter your name.")
		name.focus();
		return false;
	}
	
	var date = document.getElementById("Date");
	
	if (date.value == "")
	{
		alert("Please enter the date you are expected to arrive.")
		date.focus();
		return false;
	}
	
	var time = document.getElementById("Time");
	
	if (time.value == "")
	{
		alert("Please enter the time you are expected to arrive.")
		time.focus();
		return false;
	}
	
	var people = document.getElementById("People");
	
	if (people.value == "")
	{
		alert("Please enter how many people are expected to come.")
		people.focus();
		return false;
	}
	
	var date = document.getElementById("Date");
	var time = document.getElementById("Time");
	var people = document.getElementById("People");
	
	alert("Dear Customer\nA table has been booked for you on" + "\n" + "Date: " + date.value + "\n" + "Time: " + time.value + "\n" + "No of People: " + people.value + "\n" + "If you are not going to be able to make it then please email spiceleaf@tonbridge.com  or tel 079898989 to cancel your booking. Otherwise a 25% charge will be made to your booking fee.");
}