angular.module('chatApp').service('mainServ', function($http){




	this.postChat= function(data){
		return $http({
			method: 'POST',
			url: '/chat',
			data: data
		}).then(function(res){
			console.log(res.data);
			return res.data;
		})
	},
	this.getServChats = function(){
		return $http({
			method: 'GET',
			url: '/chat'
			}).then(function(res){
				console.log(res.data)
				return (res.data)
		})
	}

});