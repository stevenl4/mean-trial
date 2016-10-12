//Customers service used to communicate Customers REST endpoints
(function () {
  'use strict';

  angular.module('customers').factory('CustomersService', CustomersService);
  angular.module('customers').factory('NotifyService', NotifyService);


  CustomersService.$inject = ['$resource'];

  function CustomersService($resource) {
    return $resource('api/customers/:customerId', {customerId: '@_id'}, {update: {method: 'PUT'}});
  }

  NotifyService.$inject = ['$rootScope'];

  function NotifyService($rootScope){
    var notify = {};
    notify.sendMsg = function(msg, data){
      data = data || {};
      $rootScope.$emit(msg, data);
      
      console.log('message sent!');
    };
    
    notify.getMsg = function(msg, func, scope) {
      var unbind = $rootScope.$on(msg, func);
      
      if (scope){
        scope.$on('destroy', unbind);
      }
    };

    return notify;
  }
})();
