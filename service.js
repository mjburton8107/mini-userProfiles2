angular.module('userProfiles').service('mainService', function($http){

	this.getUser = function(){
		return $http ({
			method: 'GET',
			url: 'https://reqres.in/api/users?page=1'
		});
	};

})
