/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
      
        console.log(s.split("").reverse("").join(""));
    }
    catch(e){
        console.log("s.split is not a function");
        console.log(s);
    }
}
function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
