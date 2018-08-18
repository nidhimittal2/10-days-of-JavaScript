  var b = document.createElement('button');
  var count =0;
   b.innerHTML = 0;
   b.id = 'btn';
   document.body.appendChild(b);
   var b1 = document.getElementById('btn');

   b1.onclick = function(){
       count++;
       b1.innerHTML = count;
   }
   