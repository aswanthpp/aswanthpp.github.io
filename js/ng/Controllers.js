var app = angular.module('website', []);
app.controller('GlobalController', function ($scope, $http, $window) {
   $scope.tab1=function(){
       
       $('#home')[0].scrollIntoView( true );
   };
   $scope.tab2=function(){
  
       $('#projects')[0].scrollIntoView( true );
   };
   $scope.tab3=function(){
       
        $('#internship')[0].scrollIntoView( true );
   };
   $scope.tab4=function(){
      
        $('#resume')[0].scrollIntoView( true );
   };
});
