var myApp = angular.module('userApp', []);

myApp.controller('RelatioController', function() {
	// create a new page to map relations
	// get current user

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
}