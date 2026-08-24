


let location = "kibagabaga"
let male_age = 17
let female_age = 16
let gender = "male"

if(location == ""){
    console.log("You need to write your location");

} else if(gender == "male" && male_age > 16 && location == "kibagabaga") {
    console.log("You are allowed to vote");
} else if(age < 18){
    if(gender == "female" && female_age > 15){
        console.log("You are allowed to vote");
    }
    if(gender == "male"){
        console.log("You are not allowed to vote")
    }
}
else{
    console.log("You are allowed to vote");
}