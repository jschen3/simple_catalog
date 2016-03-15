/*
 * Module representing the invoice.
 */
angular.module('invoiceApp').factory('invoiceFactory', function(){
    var _invoice=[
        {'id':'0', 'image':'images/banana.jpeg', 'name':'bananas','price':'6.00','quantity':'1', 'total':'6.00'},
        {'id':'1', 'image':'images/apple.jpeg', 'name':'apples','price':'3.00', 'quantity':'1', 'total':'3.00'},
        {'id':'2', 'image':'images/pear.jpeg', 'name':'pears', 'price':'4.00', 'quantity':'1', 'total':'4.00'}
    ];
    var _total=(13).toFixed(2);
    /*
     * The output factory object, contains all the functions accessible for the invoice object.
     */
    var invoiceFactory={};
    /*
     * Add an item to the invoice. If the item is already in the invoice increment the quantity of the item.
     * @param {item} object. The item you want to add to the invoice
     */
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
    /*
     * Removes an item from the invoice. Removes all info in the entity about the item.
     * @param id of the item to remove from the invoice.
     */
    invoiceFactory.removeItem = function(id){
        var index=findId(id);
        _invoice.splice(index, 1);
        updateTotal();
    }
    /*
     * Returns the invoice as an array of items.
     */
    invoiceFactory.getInvoice = function(){
        return _invoice;
    }
    /*
     * Returns the total cost of all items in the invoice
     */
    invoiceFactory.getTotal = function(){
        return _total;
    }
    /*
     * Updates the price, quantity, total of an item
     * @param id the id of the item to update quanity price and total
     * @param price the price of the item in the invoice to change
     * @param quantity the quantity of the item in the invoice to change
     */
    invoiceFactory.updateRow = function(id, price, quantity){
        var index=findId(id)
        _invoice[index].quantity=quantity;
        _invoice[index].price=price;
        _invoice[index].total=(parseInt(_invoice[index].quantity) * parseInt(_invoice[index].price)).toFixed(2);
        updateTotal();
    }
    /*
     * update the total of items in the invoice
     */
    updateTotal = function(){
        var sum=0;
        var invoiceItems = eval(_invoice);
        for (var i=0; i<invoiceItems.length; i++){
            sum+=parseInt(invoiceItems[i].total);
        }
        _total=sum.toFixed(2);
    }
    /*
     * finds the index of the id of the item
     * @param the id of the item in te index you want to find.
     */
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
