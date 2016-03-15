/*
 * Controller class for the invoiceApp. Calls utility functions to manage the app.
 */
var app=angular.module('invoiceApp',[]);
angular.module('invoiceApp').controller('InvoiceCtrl', ['$scope', 'invoiceFactory', 'catalogFactory', function($scope, invoiceFactory, catalogFactory){
    var d=new Date();
    $scope.total=invoiceFactory.getTotal();
    $scope.info={'name':'John Doe','date':'','id':''};
    $scope.info.date=parseInt(d.getMonth())+parseInt(1)+"/"+d.getDate()+"/"+d.getFullYear();
    $scope.info.id=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    $scope.invoice=invoiceFactory.getInvoice();
    $scope.catalog=catalogFactory.getCatalog();
    /*
     * removes an item from the invoice.
     * @param id of the item to remove.
     */
    $scope.removeRow = function(id){
        invoiceFactory.removeItem(id);
        $scope.total=invoiceFactory.getTotal();
    };
    /*
     * adds an item to the invoice from the catalog.
     * @param id from the catalog of the item added to the invoice.
     */
    $scope.addItem = function(id){
        var index=-1;
        var item=catalogFactory.getItem(id);
        invoiceFactory.addItem(item);
        $scope.total=invoiceFactory.getTotal();
    };
    /*
     * updates the values of an item in the invoice.
     * @param id id of the item from the invoice changed
     * @param price price of the item in the invoice changed
     * @param quantity of the item in the invoice changed
     */
    $scope.updateRow = function(id, price, quantity){
        invoiceFactory.updateRow(id, price, quantity);
        $scope.total=invoiceFactory.getTotal();
    }
    /*
     * utility function to prepare invoice for printing.
     * TODO: Fix bug where printing freezes javascript.
     */
    $scope.print = function(){
        var restorepage = document.body.innerHTML;
	    var printcontent = document.getElementById("invoice-main").innerHTML;
	    document.body.innerHTML = printcontent;
	    window.print();
	    document.body.innerHTML = restorepage;
    };
}]);
