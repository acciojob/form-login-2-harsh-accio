//your JS code here. If required.
document.getElementById('submitbtn').addEventListener('click',()=>{
	const fname = document.getElementById('first-name').value;
	const lname = document.getElementById('last-name').value;
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;

	window.alert(`First Name: ${fname} Last Name: ${lname} Phone Number: ${phone}  Email ID: ${email}`);
	
})