angular.module('stsadmin',['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  //   .state('tab', {
  //   url: '/tab',
  //   abstract: true,
  //   templateUrl: 'app/vie.html'
  // })

  .state('index',{
  	url :'/',
  	templateUrl : 'app/views/record_payment.html'
  })
  .state('list', {
    url: '/list',
    templateUrl : 'app/views/student_list.html'
    // views: {
    //   'tab-account': {
    //     templateUrl: 'templates/tab-account.html',
    //     controller: 'AccountCtrl'
    //   }
    // }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
