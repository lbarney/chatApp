angular.module('chatApp').controller('mainCtrl', function($scope, mainServ){
var newChat = {};
$scope.chats;

$scope.postChat = function(){
	newChat.body = $scope.newChat
	mainServ.postChat(newChat)
	.then(function(res){
		$scope.chat = res.data;
		$scope.getAllChats();
	})
},
$scope.getAllChats = function(){
	mainServ.getServChats()
	.then(function(res){
		$scope.chats = res
		console.log(res);
	})
}

});