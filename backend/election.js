let forms = document.getElementById("forms");
let gender;

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  let h_location = document.getElementById("location").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  console.log(h_location, age, gender);

  if (location == "") {
    console.log("You need to write your location");
  } else if (gender == "male" && age > 16 && location == "kibagabaga") {
    console.log("You are allowed to vote");
  } else if (age < 18) {
    if (gender == "female" && age > 15) {
      console.log("You are allowed to vote");
    }
    if (gender == "male") {
    console.log("You are not allowed to vote");
    }
  } else {
    console.log("Pending");
  }
});
