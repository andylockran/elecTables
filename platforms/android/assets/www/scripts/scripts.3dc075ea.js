"use strict";angular.module("elecTablesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ionic"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]);var PhoneGapInit=function(){this.boot=function(){angular.bootstrap(document,["elecTablesApp"])},void 0!==window.phonegap?document.addEventListener("deviceready",function(){this.boot()}):(console.log("PhoneGap not found, booting Angular manually"),this.boot())};angular.element(document).ready(function(){new PhoneGapInit}),angular.module("elecTablesApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.PageTitle="ElecTables"}]).controller("MenuCtrl",["$scope",function(a){a.items=[{title:"Home",path:"#/"},{title:"About",path:"#/about"}]}]),angular.module("elecTablesApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);