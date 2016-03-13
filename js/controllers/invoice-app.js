var app=angular.module('invoiceApp',[]);
angular.module('invoiceApp').controller('InvoiceCtrl', ['$scope', 'invoiceFactory', 'catalogFactory', function($scope, invoiceFactory, catalogFactory){
    var d=new Date();
    $scope.total=invoiceFactory.getTotal();
    $scope.info={'name':'John Doe','date':'','id':''};
    $scope.info.date=parseInt(d.getMonth())+parseInt(1)+"/"+d.getDate()+"/"+d.getFullYear();
    $scope.info.id=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    $scope.invoice=invoiceFactory.getInvoice();
    $scope.catalog=catalogFactory.getCatalog();
    $scope.removeRow = function(id){
        invoiceFactory.removeItem(id);
        $scope.total=invoiceFactory.getTotal();
    };
    $scope.addItem = function(id){
        var index=-1;
        var item=catalogFactory.getItem(id);
        invoiceFactory.addItem(item);
        $scope.total=invoiceFactory.getTotal();
    };
    $scope.updateRow = function(id, price, quantity){
        invoiceFactory.updateRow(id, price, quantity);
        $scope.total=invoiceFactory.getTotal();
    }
    $scope.print = function(){
        var restorepage = document.body.innerHTML;
	    var printcontent = document.getElementById("invoice-main").innerHTML;
	    document.body.innerHTML = printcontent;
	    window.print();
	    document.body.innerHTML = restorepage;
    };
}]);
