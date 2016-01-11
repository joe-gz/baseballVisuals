(function(){
  angular
  .module('leagues')
  .directive('dropdownDirective', function(){
    return {
      templateUrl: 'js/leagues/_rd_dropdown.html',
      link: function(scope){
        scope.myName = 'Slim Shady';
      }
    }
  });
})();
