(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('MenuApp')
.component('items',{
  templateUrl:'items.html',
  
  bindings:{
    items:'<'
  }

});


})();
