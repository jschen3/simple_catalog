angular.module('invoiceApp').factory('invoiceFactory', function(){
    var _invoice=[
        {'id':'0', 'image':'images/banana.jpeg', 'name':'bananas','price':'6.00','quantity':'1', 'total':'6.00'},
        {'id':'1', 'image':'images/apple.jpeg', 'name':'apples','price':'3.00', 'quantity':'1', 'total':'3.00'},
        {'id':'2', 'image':'images/pear.jpeg', 'name':'pears', 'price':'4.00', 'quantity':'1', 'total':'4.00'}
    ];
    var _total=(13).toFixed(2);
    var invoiceFactory={};
    invoiceFactory.addItem = function(item){
        var id=item.id;
        var invoiceItems = eval(_invoice);
        var invoiceIndex=findId(id);
        if (invoiceIndex===-1){
            _invoice.push(item);
        }
        else{
            _invoice[invoiceIndex].price=item.price;
            _invoice[invoiceIndex].quantity=parseInt(parseInt(_invoice[invoiceIndex].quantity)+parseInt(1));
            _invoice[invoiceIndex].total=parseInt(parseInt(_invoice[invoiceIndex].quantity) * parseInt(_invoice[invoiceIndex].price));
        }
        updateTotal();
    }
    invoiceFactory.removeItem = function(id){
        var index=findId(id);
        _invoice.splice(index, 1);
        updateTotal();
    }
    invoiceFactory.getInvoice = function(){
        return _invoice;
    }
    invoiceFactory.getTotal = function(){
        return _total;
    }
    invoiceFactory.updateRow = function(id, price, quantity){
        var index=findId(id)
        _invoice[index].quantity=quantity;
        _invoice[index].price=price;
        _invoice[index].total=(parseInt(_invoice[index].quantity) * parseInt(_invoice[index].price)).toFixed(2);
        updateTotal();
    }
    updateTotal = function(){
        var sum=0;
        var invoiceItems = eval(_invoice);
        for (var i=0; i<invoiceItems.length; i++){
            sum+=parseInt(invoiceItems[i].total);
        }
        _total=sum.toFixed(2);
    }
    findId = function(id){
        var index=-1;
        var invoiceItems = eval(_invoice);
        for (var i=0; i<invoiceItems.length; i++){
            if (invoiceItems[i].id===id){
                index=i;
                break;
            }
        }
        return index;
    }
    return invoiceFactory;
});
