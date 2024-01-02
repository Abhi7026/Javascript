let score="33abc";
//console.log(typeof score);
let valueinNumber=Number(score);
//"33"->number
//"33abc"->NaN(a type of number)
// Disadvantage of Javascript thats why we use typescript
//console.log(typeof NaN);

let isLoggedIN="Abhi";
let booleanIsloggedIN=Boolean(isLoggedIN);
//console.log(booleanIsloggedIN);
//1-> true; 0->false
//""->false;, Any value "Abhinandan"->true;

//***************Operations************

let str1="Hello"
let str2=" Abhinandan"
let str3=str1 + str2;
console.log(str3);
console.log("1"+2);//->12
console.log(1+"2");//->12
console.log("1"+"2");//->12
console.log(1+2+"2");//->32(agar string last me hai tho pehle operation hoga fir string ke saath add hoga)
console.log("1"+2+2);//->122(agar string 1st me hai tho sabhi string treat honge)
console.log(1+"2"+2);//->string 122


