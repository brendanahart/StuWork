Parse.initialize("UkyCtswsBB3q0C2diQANxlYEzwc4Tc2zHshOV7fm", "kAZV84cCvFW0blKhINL0kLT8hSvX0WG5Tr5erzxK");

var myApp = angular.module('userApp', []);

myApp.controller('RelationController', function() {
	// create a new page to map relations
	// get current user

	var rel = this; 

	rel.schools = []; 
	rel.roles = []

	rel.initialization = function()
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
					rel.schools[i] = school.get("SchoolName"); 
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
					rel.roles[i] = relation.get("Relation"); 
				}
			},
			error: function(error)
			{
				console.log("Error: " + error.code + " " + error.message)
			}
		})
	}

	rel.initialization(); 

	rel.mapRolesSchools = function(community, relation)
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
});