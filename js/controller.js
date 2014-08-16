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

controleur.controller('getSpectacle2', function ($scope, dataArtishow){

    dataArtishow.spectacles.get(function(response){
    $scope.data2 = response

    })


});