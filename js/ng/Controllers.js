var app = angular.module('website', []);
app.controller('GlobalController', function ($scope, $http, $window) {
   $scope.tab1=function(){
       
       $('#resume')[0].scrollIntoView( true );
   };
   $scope.tab2=function(){
  
       $('#projects')[0].scrollIntoView( true );
   };
   $scope.tab3=function(){
       
        $('#internship')[0].scrollIntoView( true );
   };
     $scope.tab4=function(){
//       alert("Coming Soon ");
         window.open('http://fourthmen.blogspot.in/');
   };
   $scope.tab5=function(){
      window.open('pdf/Resume_ASWANTH.pdf');
   };
   $scope.openNav=function(){
        document.getElementById("mySidenav").style.width = "250px";
     
   };
   $scope.closeNav=function(){
      document.getElementById("mySidenav").style.width = "0";  
   };
});
