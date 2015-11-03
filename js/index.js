var info = function() { 
	$('.information-fill').find('#formBTN').click(function() {

		$('.infomration-fill').find('.section-heading').hide(); 

		var fName = document.getElementById("inputFirstName");
		var lName = document.getElementById("inputLastName");
		var email = document.getElementById("inputEmail");
		var community = document.getElementById("inputCommunity"); 
		var youStatus = document.getElementById("youInput")
		var country = document.getElementById("countryInput");
		var state = document.getElementById("stateInput"); 

		if(fName == null || fName == "") {
			$('#inputFirstName').parent('.form-group').addClass(".has-error")
			$('#inputFirstName').attr("placeholder", "*You Must Include Your First Name")
		}
		else
		{
			$('#inputFirstName').parent('.form-group').addClass(".has-success")
		}

		if(lName == null || lName == "") {
			$('#inputLastName').parent('.form-group').addClass(".has-error")
			$('#inputLastName').attr("placeholder", "*You Must Include Your Last Name")
		}
		else
		{
			$('#inputLastName').parent('.form-group').addClass(".has-success")
		}

		if(email == null || email == "") {
			$('#inputEmail').parent('.form-group').addClass(".has-error")
			$('#inputEmail').attr("placeholder", "*You Must Include Your Email")
		}
		else
		{
			$('#inputEmail').parent('.form-group').addClass(".has-success")
		}

		if(community == null || community == "") {
			$('#inputCommunity').parent('.form-group').addClass(".has-error")
			$('#inputCommunity').attr("placeholder", "*You Must Include Your Community")
		}
		else
		{
<<<<<<< HEAD
			$("#formBTN").addClass("btn-warning");		
			$("#formBTN").removeClass("btn-success");
			$("#formBTN").removeClass("btn-default");
			document.getElementById("formBTN").innerHTML = "Error!"
			return false; 
=======
			$('#inputCommunity').parent('.form-group').addClass(".has-success")
>>>>>>> parent of e6095c1... Form Validation Final
		}

		if(youStatus == null || youStatus == "") {
			$('#youInput').parent('.form-group').addClass(".has-error")
			$('#youInput').attr("placeholder", "*You Must clarify if Your Status")
		}
		else
		{
			$('#youInput').parent('.form-group').addClass(".has-success")
		}

		if(state == null || state == "") {
			$('#stateInput').parent('.form-group').addClass(".has-error")
			$('#stateInput').attr("placeholder", "*You Must Include Your State For Validation")
		}
		else
		{
			$('#stateInput').parent('.form-group').addClass(".has-success")
		}

	});

};


$(document).ready(info);