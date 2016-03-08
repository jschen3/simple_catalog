var invoiceApp = angular.module("invoiceApp" ,['ngMaterial']);
invoiceApp.controller("InvoiceCtrl", function($scope){
    $scope.invoice=[
        {'id':'0', 'image':'', 'name':'bananas','price':'6.00','quantity':'1', 'total':'6'},
        {'id':'1', 'image':'', 'name':'apples','price':'3.00', 'quantity':'1', 'total':'3'},
        {'id':'2', 'image':'', 'name':'pears', 'price':'4.00', 'quantity':'1', 'total':'4'}
    ];
    $scope.updateTotal = function(id){
        var index=-1;
        var invoiceItems = eval($scope.invoice);
        for (var i=0; i<invoiceItems.length; i++){
            if (invoiceItems[i].id===id){
                index=i;
                break;
            }
        }
        $scope.invoice[index].total=$scope.invoice[index].quantity * $scope.invoice[index].price;
    };
    $scope.removeRow = function(id){
        var index=-1;
        var invoiceItems = eval($scope.invoice);
        for (var i=0; i<invoiceItems.length; i++){
            if (invoiceItems[i].id===id){
                index=i;
                break;
            }
        }
        $scope.invoice.splice(index, 1);
    };


});
