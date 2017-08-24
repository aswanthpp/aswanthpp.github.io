var app = angular.module('website', []);
app.controller('GlobalController', function ($scope, $http, $window) {
    $scope.gotoParam = "views/home.html";

    $scope.tab1 = function () {
        $scope.gotoParam = "views/home.html";
        //  $('#resume')[0].scrollIntoView( true );
    };
    $scope.tab2 = function () {
        $scope.gotoParam = "views/projects.html";
        // $('#projects')[0].scrollIntoView( true );
    };
    $scope.tab3 = function () {
        $scope.gotoParam = "views/work-experience.html";
    };
    $scope.tab4 = function () {
       alert("ComingSoon");
       //coompitive coding part
    };
    $scope.tab5 = function () {
        window.open('pdf/Resume_ASWANTH.pdf');
    };
   $scope.tab6=function(){
        $scope.gotoParam = "views/contact.html";
   };
    $scope.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    $scope.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
});