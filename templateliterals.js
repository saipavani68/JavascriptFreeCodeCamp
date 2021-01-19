const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
  for(var i=0; i< arr.length; i++){
      failureItems[i] = `<li class="text-warning">${arr[i]}</li>`;
  }
    // Only change code above this line
    console.log(failureItems);
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  