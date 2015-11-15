var myApp = angular.module('userApp', []);

myApp.controller('UserController', function() {
	var user = this; 

	var schools = []; 

	user.signUp = function(firstName, lastName, community, relation, email, password, confirmPassword)
	{
		if (password !== confirmPassword)
		{
			console.log("Your password did not match the confirmation password");
			return; 
		}

		if (firstName == "" || lastName == "" || community == "" || relation == "" || email == "" || password == "" || confirmPassword == "")
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
		user.set("Relationship", relation); 

		// relations?
		user.set("SchoolRelation", community); 

		// TODO
		// add user to role? - 2 different roles, adult + student

		user.signUp(null, {
			success: function(user) {
		    // Hooray! Let them use the app now.
		    },
		    error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		    }
		});
	}
});