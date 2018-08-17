/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let c=0;
    for(var j=0;j<objects.length;j++){
    if(objects[j].x==objects[j].y){
    c++;
    }}
    return c;
}
