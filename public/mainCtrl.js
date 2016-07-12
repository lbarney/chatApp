angular.module('chatApp').controller('mainCtrl', function($scope, mainServ){
var newChat = {};


$scope.postChat = function(){
	newChat.body = $scope.newChat
	mainServ.postChat(newChat)
	.then(function(res){
		$scope.chat = res.data
	})
}

});