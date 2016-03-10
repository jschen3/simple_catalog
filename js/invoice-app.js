var invoiceApp = angular.module("invoiceApp" ,[]);
invoiceApp.controller("InvoiceCtrl", function($scope){
    $scope.total=(13.00).toFixed(2);
    //$scope.total=$scope.calculateTotal();
    $scope.info={'name':'John Doe','address':'The LandMark at One Market','city':'San Francisco, CA','date':''};
    $scope.invoice=[
        {'id':'0', 'image':'images/banana.jpeg', 'name':'bananas','price':'6.00','quantity':'1', 'total':'6.00'},
        {'id':'1', 'image':'images/apple.jpeg', 'name':'apples','price':'3.00', 'quantity':'1', 'total':'3.00'},
        {'id':'2', 'image':'images/pear.jpeg', 'name':'pears', 'price':'4.00', 'quantity':'1', 'total':'4.00'}
    ];
    $scope.catalog=[
        {'id':'0', 'image':'images/banana.jpeg', 'name':'bananas','price':'6.00'},
        {'id':'1', 'image':'images/apple.jpeg', 'name':'apples','price':'3.00'},
        {'id':'2', 'image':'images/pear.jpeg', 'name':'pears', 'price':'4.00'},
        {'id':'3', 'image':'images/donald.jpeg', 'name':'dragonfruit', 'price':'1.00'},
        {'id':'4', 'image':'images/berry.jpeg', 'name':'berry sanders', 'price':'3.00'},
        {'id':'5', 'image':'images/huckleberry.jpeg', 'name':'hilla berry', 'price':'4.00'},
        {'id':'6', 'image':'images/teddy.jpeg', 'name':'teddy cruz', 'price':'2.00'},
        {'id':'7', 'image':'images/strawberry.jpeg', 'name':'strawberry', 'price':'6.00'},
        {'id':'8', 'image':'images/mango.jpeg', 'name':'mango rubio', 'price':'2.00'},
        {'id':'9', 'image':'images/grapes.jpeg', 'name':'grapes', 'price': '4.00'}
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
        $scope.invoice[index].total=($scope.invoice[index].quantity * $scope.invoice[index].price).toFixed(2);
        calculateTotal();
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
        calculateTotal();
    };
    $scope.addItem = function(id){
        var index=-1;
        var catalogItems = eval($scope.catalog);
        var invoiceItems = eval($scope.invoice);
        for (var i=0; i<catalogItems.length; i++){
            if (catalogItems[i].id===id){
                index=i;
                break;
            }
        }
        var invoiceId=-1;
        for (var z=0; z<invoiceItems.length; z++){
            if (invoiceItems[z].id===id){
                invoiceId=z;
                break;
            }
        }
        if (invoiceId===-1){
            $scope.invoice
                .push({'id':catalogItems[index].id,'image':catalogItems[index].image, 'name':catalogItems[index].name,
                'price':catalogItems[index].price, 'quantity':'1', 'total':catalogItems[index].price});
        }
        else{
            $scope.invoice[invoiceId].quantity=parseInt($scope.invoice[invoiceId].quantity)+parseInt(parseInt(1));
            $scope.invoice[invoiceId].total=(parseInt($scope.invoice[invoiceId].quantity)*parseInt($scope.invoice[invoiceId].price)).toFixed(2);
        }
        calculateTotal();
    };
    calculateTotal = function(){
        var sum=0;
        var invoiceItems = eval($scope.invoice);
        for (var i=0; i<invoiceItems.length; i++){
            sum+=parseInt(invoiceItems[i].total);
        }
        $scope.total=sum.toFixed(2);
    };
});
