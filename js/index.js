Parse.initialize("UkyCtswsBB3q0C2diQANxlYEzwc4Tc2zHshOV7fm", "kAZV84cCvFW0blKhINL0kLT8hSvX0WG5Tr5erzxK");

// Sign Up Form Validation! 
var info = function() { 
	$('.information-fill').find('#formBTN').click(function() {

		var inputs = document.getElementById("Validation").elements;
		var inputsLength = inputs.length; 
		var correctInputs = 0; 
		for(var i = 0; i < (inputsLength - 1); i++)
		{
			if (inputs[i].value == null || inputs[i].value == "")
			{
				// give id of current form value 
				var currentValue = document.getElementById("Validation")[i].id;
				var jQueryString = ("#" + currentValue); 
				$(jQueryString).parents("div.form-group").addClass("has-error has-feedback");
				$(jQueryString).siblings("span").addClass("glyphicon glyphicon-remove form-control-feedback");
			}
			else
			{
				correctInputs = correctInputs + 1; 
				var currentValue = document.getElementById("Validation")[i].id;
				var jQueryString = ("#" + currentValue); 
				$(jQueryString).parents("div.form-group").removeClass("has-error");
				$(jQueryString).siblings("span").removeClass("glyphicon glyphicon-remove form-control-feedback");
				$(jQueryString).parents("div.form-group").addClass("has-success has-feedback");
				$(jQueryString).siblings("span").addClass("glyphicon glyphicon-ok form-control-feedback");
			}
		}

		if (correctInputs == (inputsLength - 1))
		{
			$("#formBTN").removeClass("btn-default");
			$("#formBTN").removeClass("btn-warning");		
			$("#formBTN").addClass("btn-success");
			document.getElementById("formBTN").innerHTML = "Success!"

		}
		else 
		{
			$("#formBTN").addClass("btn-warning");		
			$("#formBTN").removeClass("btn-success");
			$("#formBTN").removeClass("btn-default");
			document.getElementById("formBTN").innerHTML = "Error!"
			return false;
		}

		var UserInfo = Parse.Object.extend("UserInfo");
		var userInfo = new UserInfo(); 

		userInfo.set("FirstName", $("#inputFirstName").val());
		userInfo.set("LastName", $("#inputLastName").val());
		userInfo.set("Email", $("#inputEmail").val());
		userInfo.set("School", $("#inputCommunity").val()); 
		userInfo.set("SchoolRelation", $("#youInput").val()); 
		userInfo.set("Country", $("#countryInput").val()); 
		userInfo.set("State", $("#stateInput").val()); 

		userInfo.save(null, {
			success: function(gameScore) {
		    	// Execute any logic that should take place after the object is saved.
				console.log('New object created with objectId: ' + gameScore.id);
			},
			error: function(gameScore, error) {
		    	// Execute any logic that should take place if the save fails.
		    	// error is a Parse.Error with an error code and message.
		    	console.log('Failed to create new object, with error code: ' + error.message);
		  }
		});

	});
};

$(document).ready(info);