/* Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
  let ch = str.split('');
  ch[0] = ch[0].toUpperCase();
  for(let i=1; i< ch.length; i++){
    if(ch[i] === ' '){
      ch[i+1] = ch[i+1].toUpperCase();
      i = i+1;
    }
    else
      ch[i] = ch[i].toLowerCase();
  }
  str = ch.join('');
  console.log(str);
  return str;
}

titleCase("sHoRt AnD sToUt");