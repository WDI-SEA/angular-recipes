var app = angular.module('RecipeApp', ['ui.router', 'RecipeCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/recipes.html',
    controller: 'HomeCtrl'
  })
  .state('newRecipe', {
    url: '/recipes/new',
    templateUrl: 'app/views/newRecipe.html',
    controller: 'NewCtrl'
  })
  .state('recipeShow', {
    url: '/recipes/:id',
    templateUrl: 'app/views/showRecipe.html',
    controller: 'ShowCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/userSignup.html',
    controller: 'SignupCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/userLogin.html',
    controller: 'LoginCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}])
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]);

