var myApp = angular.module('userApp', []);

myApp.controller('UserController', function() {
	var user = this; 

	user.signUp = function(firstName, lastName, email, password, confirmPassword)
	{
		if (password != confirmPassword)
		{
			console.log("Your password did not match the confirmation password");
			return; 
		}

		if (firstName == "" || lastName == "" || email == "" || password == "" || confirmPassword == "")
		{
			console.log("You did not enter all the required information");
			return; 
		}

		var user = new Parse.User();
		user.set("username", email);
		user.set("password", password);
		user.set("email", email);
		user.set("FirstName", firstName); 
		user.set("LastName", lastName); 

		// query school object based on the community input and assign it to an object
		// user.set("SchoolRelation", school)

		user.signUp(null, {
			success: function(user) {
		    	alert("You can now user the app now!"); 
		    	window.location.href = "http://stuwork.com/whoareyou.html"
		    },
		    error: function(user, error) {
		    	// Show the error message somewhere and let the user try again.
		    	console.log("Error: " + error.code + " " + error.message);
		    }
		});
	}
});