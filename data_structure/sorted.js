// let list1 = [1,2,3,4]
// let list2 = [2,1,3,4]

// let all_lists = []

// all_lists.push(...list1, ...list2)

// let sorted = all_lists.sort()

// console.log(all_lists)
// console.log(sorted);


let num1 = 20
let num2, num3;
num2 = String(num1).slice(0,1)
num3 = String(num1).slice(-1)

if(num1 % 2 != 0 && num2 % 2 != 0 && num3 % 2 != 0){
    console.log("True");
} else{
    console.log("False");
    
}

function delay (msg, time){
    setTimeout(function(){
        console.log(msg);
        
    }, time)
}

delay("Hello", 6000)