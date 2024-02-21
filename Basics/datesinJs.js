let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(typeof(myDate));

let mycreatedDate=new Date(2024,8,7)//->follows 0 indexing of array for month

console.log(mycreatedDate.toDateString());


let Timestamp= Date.now();
console.log(Timestamp);
console.log(mycreatedDate.getTime());
console.log(mycreatedDate.getTime()-Timestamp);

