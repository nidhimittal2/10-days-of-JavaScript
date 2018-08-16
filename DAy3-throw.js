 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  
      if(a==0){
        throw Error("Zero Error");
    }
    else{
        if(a<0){
        throw Error("Negative Error");}
    }
    
    return "YES";
}
