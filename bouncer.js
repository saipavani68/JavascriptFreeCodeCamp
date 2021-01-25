/* Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/


function bouncer(arr) {
    for(let i=0; i< arr.length; i++){
      if((typeof arr[i]=="string" && arr[i] === '') || (Boolean(arr[i]) === false)){
        arr.splice(i,1)
        i = i -1;
      }
    }
    return arr;
  }
  
  bouncer([false, null, 0, NaN, undefined, ""])