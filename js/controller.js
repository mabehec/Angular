var controleur = angular.module('ic_controleur', []);

controleur.controller('testCtrl', function($scope){
    $scope.data ='hello'

});


controleur.controller('signalar', function($scope){
    var commandsHub = $.connection.commandsHub
    var commandId="d4768108-49b0-46e5-8a77-c7bc327fb626"
    $scope.majstatut = function (commandStatus){commandsHub.client.updateStatus(commandStatus)}
    $scope.monitor = function(commandId){commandsHub.server.monitorCommand(commandId)}

});

