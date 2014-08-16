var usine = angular.module('ic_usine',['ngResource'])


usine.factory('dataArtishow', function($resource){
    return{
        spectacles: $resource('http://vbicible.dyndns.org:8080/artishowsmb/admin/query/getSpectacles',null,{'get':    {method:'GET', isArray:true}}),
        representations :$resource('http://vbicible.dyndns.org:8080/artishowsmb/admin/query/getRepresentationsAvecAssistanceTotale' ,{nospectacle:'@noSpec'},{'get':    {method:'GET', isArray:true}}),
        ville :$resource('http'),
        nbDeJours :$resource('http://vbicible.dyndns.org:8080/artishowsmb/admin/query/getReservationsAvecNbJours' ,{nospectacle:'@noSpec'},{'get':    {method:'GET', isArray:true}}),
        reservationsParJour :$resource('http://vbicible.dyndns.org:8080/artishowsmb/admin/query/getReservationsParJour', {nospectacle:'@noSpec'},{'get':    {method:'GET', isArray:true}})
    };
});

usine.factory('reservationArtishow', function($resource){

    return{
        spectacle: $resource('http://vbicible.dyndns.org:8080/artishowsmb\\/', null,
            {'get':  {method:'GET', headers:{'Renderer': 'json'}, isArray:false}}),
        representation : $resource('http://vbicible.dyndns.org:8080/artishowsmb/spectacle/612', null,
            {'get':  {method:'GET', headers:{'Renderer':'json'}, isArray:false} })

    };
});
