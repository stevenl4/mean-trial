(function () {
  'use strict';

  // Customers controller
  angular
    .module('customers')
    .controller('CustomersController', CustomersController);

  CustomersController.$inject = ['$scope', '$state', '$modalInstance', 'Authentication', 'customerResolve', 'NotifyService'];

  function CustomersController ($scope, $state, $modalInstance, Authentication, customer, NotifyService) {

    var vm = this;
    vm.authentication = Authentication;
    vm.customer = customer;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;
    vm.cancel = cancel;
    
    // Options for dropdown
    vm.channelOptions = [
      {id: 1, item: 'Facebook'},
      {id: 2, item: 'Twitter'},
      {id: 3, item: 'Email'}
    ];
    // Remove existing Customer
    function remove() {
      $modalInstance.close('Deleted');
      vm.customer.$remove($state.go('customers.list', {}, {reload: true}));

    }

    // Modal Cancel
    function cancel() {
      $modalInstance.dismiss('cancel');
    }
    
    // Save Customer
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.customerForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.customer._id) {
        vm.customer.$update(successCallback, errorCallback);
      } else {
        vm.customer.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $modalInstance.close('Saved');
        $state.go('customers.list', {}, {reload: true});
      }

      function errorCallback(res) {
        console.log(res.data);
        vm.error = res.data.message;
      }
    }
  }
})();
