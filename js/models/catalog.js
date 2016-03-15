/*
 * Module representing the catalog
 */
angular.module('invoiceApp').factory('catalogFactory', function(){
    var _catalog=[
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
    /* The output factory contains all functions accessible for the catalog*/
    var catalogFactory={};
    /*
     *Returns the catalog as an array of items
     */
    catalogFactory.getCatalog = function(){
        return _catalog;
    }
    /*
     *    Searches for an item in the category returns the item if found
     *    @param id of the item in the index that you are trying to obtain.
     */
    catalogFactory.getItem = function(id){
        var catalogItems = eval(_catalog);
        for (var i=0; i<catalogItems.length; i++){
            if (catalogItems[i].id===id){
                index=i;
                break;
            }
        }
        var item={'id':catalogItems[index].id,'image':catalogItems[index].image, 'name':catalogItems[index].name,
                'price':catalogItems[index].price, 'quantity':'1', 'total':catalogItems[index].price};
        return item;
    }
    return catalogFactory;
});
