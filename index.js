// function myfun() {
//     var regular = /^[A-Za-z]+$^/;
//     var username = document.getElementById("user_name");
//     var errors = document.getElementById("error");
//     if (username.value == "") {
//         alert("Name must be filled...!!!");
//         errors.innerHTML = "Name must be filled...!!!";
//         errors.style.display = "block";
//         return false;
//     } else if (username.value.lenght < 3) {
//         alert("Name must be more than 3  characters...!");
//         errors.innerHTML = "Name must be less than 20 characters...!";
//         errors.style.display = "block";
//         return false;
//     } else if (username.value.lenght > 20) {
//         alert("Name must be less than 20 characters...!");
//         errors.innerHTML = "Name must be less than 20 characters...!";
//         errors.style.display = "block";
//         return false;
//     }
//     if (username.matches(regular))
//         true;
//     else {
//         errors.innerHTML = "Only alphabets are allowed...!";
//         errors.style.display = "block";
//         return false;
//     }
//     return true;
// }