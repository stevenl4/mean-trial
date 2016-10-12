(function () {
  'use strict';

  angular
    .module('customers')
    .controller('CustomersListController', CustomersListController);

  CustomersListController.$inject = ['CustomersService', '$modal', '$log'];

  function CustomersListController(CustomersService, $modal, $log) {
    var vm = this;

    vm.customers = CustomersService.query();

    vm.modalDelete = function(customer){
      var modalInstance = $modal.open({
        templateUrl: 'modules/customers/client/views/delete-customer.client.view.html',
        controller: 'CustomersController',
        size: 'sm',
        controllerAs: 'vm',
        resolve: {
          customerResolve: function(){
            return customer;
          }
        }

      });

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    // Modal create logic
    vm.modalCreate = function(){
      var modalInstance = $modal.open({
        templateUrl: 'modules/customers/client/views/form-customer.client.view.html',
        controller: 'CustomersController',
        size: 'lg',
        controllerAs: 'vm',
        resolve: {
          customerResolve: function(){
            return new CustomersService();
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    
    // Modal update logic
    vm.modalUpdate = function(customer){
      var modalInstance = $modal.open({
        templateUrl: 'modules/customers/client/views/form-customer.client.view.html',
        controller: 'CustomersController',
        size: 'lg',
        controllerAs: 'vm',
        resolve: {
          customerResolve: function(){
            return customer;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  }
})();
