var myApp = angular.module('userApp', []);

myApp.controller('UserController', function() {
	var user = this; 

	user.schools = []; 
	user.roles = []

	user.initialization = function()
	{
		var schools = Parse.Object.extend("Schools");
		var querySchool = new Parse.Query(schools); 

		querySchool.exists("SchoolName"); 

		querySchool.find({
			success: function(results) {
				console.log("Successfully retrieved " + results.length + " scores."); 

				for (var i = 0; i < results.length; i++)
				{
					var school = results[i];
					user.schools[i] = school.get("SchoolName"); 
				}
			},
			error: function(error)
			{
				console.log("Error: " + error.code + " " + error.message)
			}
		});

		var relation = Parse.Object.extend("SchoolRelation");
		var queryRelation = new Parse.Query(relation); 

		queryRelation.exists("Relation"); 

		queryRelation.find({
			success: function(results) {
				console.log("Successfully retrieved " + results.length + " scores."); 

				for (var i = 0; i < results.length; i++)
				{
					var relation = results[i];
					user.roles[i] = relation.get("Relation"); 
				}
			},
			error: function(error)
			{
				console.log("Error: " + error.code + " " + error.message)
			}
		})
	}

	user.mapRolesSchools = function(community, relation)
	{
		var currentUser = Parse.User.current(); 
		var role = Parse.Object.extend("SchoolRelation");
		var queryRelation = new Parse.Query(role); 
		queryRelation.equalTo("Relation", relation); 
		queryRelation.find({
			success: function(resultsRole, currentUser) {
				console.log("Found relation"); 
				var roleObj = resultsRole[0];
				roleObj.set("Users", currentUser);
			},
			error: function(error) {
				console.log("Role could not be mapped"); 
			}
		});

		var school = Parse.Object.extend("Schools"); 
		var querySchool = new Parse.Query(school)
		querySchool.equalTo("SchoolName", community);
		querySchool.find({
			success: function(resultsSchool, currentUser) {
				console.log("Found school"); 
				var schoolObj = resultsSchool[0];
				schoolObj.set("Members", currentUser); 

			},
			error: function(error) {
				console.log("School could not be mapped"); 
			}
		});
	}

	user.initialization(); 

	user.signUp = function(firstName, lastName, community, relation, email, password, confirmPassword)
	{
		if (password != confirmPassword)
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

		// query school object based on the community input and assign it to an object
		// user.set("SchoolRelation", school)

		user.signUp(null, {
			success: function(user) {
		    	alert("You can now user the app now!"); 
		    	user.firstName = "";
		    	user.lastName = "";
		    	user.email = "";
		    	user.password = "";
		    	user.confirmPassword = "";
		    	user.community = "";
		    	user.relation = "";
		    },
		    error: function(user, error) {
		    	// Show the error message somewhere and let the user try again.
		    	console.log("Error: " + error.code + " " + error.message);
		    }
		});

		user.mapRolesSchools(community, relation); 
	}
});