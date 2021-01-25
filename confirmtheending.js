function confirmEnding(str, target) {
  let ch = str.split('');
  let result;
  let resulttarget = target.split('');
 
  for(let i=ch.length-1, j = resulttarget.length-1; j>=0; i--,j--){
    if(ch[i] !== target[j]){
      result = false;
      return result;
    } else {
      result = true;
    }
   
 }
 return result;
}

confirmEnding("Open sesame", "sage");