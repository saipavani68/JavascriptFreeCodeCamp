let A = [
        {
          a1:"10",
          a2:"20",
          a3:"30",
        },
        {
          a1:"50",
          a2:"60",
          a3:"70",
        }
      ]

 let B=[90,100];

 for(let i=0, j=0; i < A.length; i++, j++){
        A[i].a4 = B[j];
 }


console.log(A);