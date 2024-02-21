//(IIFE) immediately invoked function expression
// function chai(){
//     console.log('DB connected');
// }
// chai()

//global scope ke pollution ko hatane ke lea jo use karte hia wahi iife hai
(
    function chai() {
        //named iife
        console.log('DB connected');
    }
)(); //semicolon lagana jaruri hai nhi tho bsdk ko pata nhi hai kaha stop karna hai

(
    () => {
        console.log('DB connected two');

    }
)()