function getMaxLessThanK(n,k){
    let h=0;
    for(let i=1;i<=n;i++){
        for(let j=i+1;j<=n;j++){
            if((i&j)<k && (i&j)>h ){
               h = i&j;
            }
        }
    }
  
    return h;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
