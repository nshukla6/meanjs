
    'use strict';
    angular.module('app', ['ngRoute'])
        
        .controller('controller2', Controller2)
        .controller('studentController', StudentController)
        .controller('controller1', Controller1)
        .config(function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'pages/home.html',
                    controller: 'controller1'

                })
                .when('/contact', {
                    templateUrl: 'pages/contact.html',
                    controller: 'controller2'

                })
                .when('/student', {
                    templateUrl: 'pages/student.html',
                    controller: 'studentController'

                });
        });

    
    Controller2.$inject = ['$scope', '$http'];
    StudentController.$inject = ['$scope', '$http'];
    Controller1.$inject = ['$scope', '$http'];

function Controller1($scope, $http) {
        console.log('hi basu1');
        $scope.myVar=true;
        $scope.onPress=function(){
            $scope.myVar=false;
        $http({
            url:'/api/stuff',
            method:'GET'
        })
        .then(function(result){
            console.log(result.data);
            $scope.data=result.data;
        })
        .catch(function(error){
            console.log('error',error);
        });

    }

    }

    
    function Controller2($scope, $http) {
        console.log('hi basu2');
        $scope.myVar=true;
       $scope.onPress=function(){
             $scope.myVar=false;
        $http({
            url:'/api/stuff1',
            method:'GET'
        })
        .then(function(result){
            console.log(result.data);
            $scope.data=result.data;
        })
        .catch(function(error){
            console.log('error',error);
        });

    }
}
   function StudentController($scope, $http) {
       $scope.myVar=true;
        console.log('hi student');
       $scope.onPress=function(){
            
           
        $http({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'GET'
        })
        .then(function(result){
            console.log('inside then');
            console.log(result.data);
            $scope.data=result.data;
            $scope.myVar=false;
        })
        .catch(function(error){
            console.log('inside error');
            console.log('error',error);
        });

    }
    }
    
