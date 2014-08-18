var controleur = angular.module('ic_controleur', ['ic_usine']);

controleur.controller('testCtrl', function($scope){
    $scope.data ='hello'

});


controleur.controller('signalar', function( $scope){
    var commandsHub = $.connection.commandsHub
    var commandId="d4768108-49b0-46e5-8a77-c7bc327fb626"

    commandsHub.client.updateStatus = function (commandStatus) { console.log(commandStatus); }


    $.connection.hub.start()
        .done(function () {

        console.log(commandId);
        commandsHub.server.monitorCommand(commandId)

    });
});

controleur.controller('getSpectacle', function ($scope, dataArtishow){
    $scope.spectacleChoisi =""
    dataArtishow.spectacles.get(function(response){
    $scope.spectacles = response

    })

    $scope.$watch("spectacleChoisi", function(){
        dataArtishow.representations.get({nospectacle:$scope.spectacleChoisi.C_NOSPECTACLE},function(response){
           $scope.representation = response

        })
    });
});