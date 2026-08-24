   let age = [17,16];
          let location = "Kigali";
          let gender = ["male", "female"];
        

        if(age == ""){
            console.log("enter your age");
        } else if(location == "") {
            console.log("enter your location");
        } else if(gender[0] == "male" && age [0]<17) {
          console.log(" male allowed to vote")
        } else if(gender[1] == "female" && age[1] <16) {
          console.log("female allowed to vote")
        } else {
          console.log("not alloed to vote")
        }