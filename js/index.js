var info = function InfoSubmit() {
	var fName = document.SignUp("inputFirstName");
	var lName = document.SignUp("inputLastName");
	var email = document.SignUp("inputEmail");
	var community = document.SignUp("inputCommunity"); 
	var youStatus = document.SignUp("youInput")
	var country = document.SignUp("countryInput");
	var state = document.SignUp("stateInput"); 

	$('#formBTN').click(function(fName, lName, email, community, youStatus, country, state) {
		if(fName == null || fName == "") {
			('#inputFirstName').parent('.form-group').addClass(".has-error")
			('#inputFirstName').attr("placeholder", "*You Must Include Your First Name")
		}
		else
		{
			('#inputFirstName').parent('.form-group').addClass(".has-success")
		}

		if(lName == null || lName == "") {
			('#inputLastName').parent('.form-group').addClass(".has-error")
			('#inputLastName').attr("placeholder", "*You Must Include Your Last Name")
		}
		else
		{
			('#inputLastName').parent('.form-group').addClass(".has-success")
		}

		if(email == null || email == "") {
			('#inputEmail').parent('.form-group').addClass(".has-error")
			('#inputEmail').attr("placeholder", "*You Must Include Your Email")
		}
		else
		{
			('#inputEmail').parent('.form-group').addClass(".has-success")
		}

		if(community == null || community == "") {
			('#inputCommunity').parent('.form-group').addClass(".has-error")
			('#inputCommunity').attr("placeholder", "*You Must Include Your Community")
		}
		else
		{
			('#inputCommunity').parent('.form-group').addClass(".has-success")
		}

		if(youStatus == null || youStatus == "") {
			('#youInput').parent('.form-group').addClass(".has-error")
			('#youInput').attr("placeholder", "*You Must clarify if Your Status")
		}
		else
		{
			('#youInput').parent('.form-group').addClass(".has-success")
		}

		if(state == null || state == "") {
			('#stateInput').parent('.form-group').addClass(".has-error")
			('#stateInput').attr("placeholder", "*You Must Include Your State For Validation")
		}
		else
		{
			('#stateInput').parent('.form-group').addClass(".has-success")
		}
	});
}



$(document).ready(info)