
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
	});
};

$(document).ready(info);