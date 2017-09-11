/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */
export function countByKey (arr, key) {
    var result = [];
    var dict = {};
    var count = key.length;
    arr.forEach(function(element,i) {
        var val = element[key];
        if(val){
            if(!dict[val])
            {
                dict[val]=0;
            }
            dict[val]++;
        }
    });
    Object.keys(dict).forEach(function(val){
        var entry = {};
        entry[key]=val;
        entry["count"]=dict[val];
        result.push(entry);
    });  
    return result;
}