//Sorting dates in descending order

let array = [{
    "id": 1,
    "date": "Jan 13 2021"
 },
 {
     "id": 2,
     "date": "Jun 15 2020"
 },
 {
     "id": 3,
     "date": "Mar 22 2019"
 },
 {
     "id": 4,
     "date": "Oct 05 2020"
 },
 {
     "id": 5,
     "date": "Feb 03 2022"
 }
];

let final = [];
for (let i = 0; i < array.length; i++) {
 final[i] = new Date(array[i].date);
}

final.sort(function(a, b) {
 return new Date(b).getTime() - new Date(a).getTime();
});

for (let i = 0; i < final.length; i++) {
 console.log(final[i].toDateString());
}