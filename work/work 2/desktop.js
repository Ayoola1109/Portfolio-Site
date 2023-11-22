let firstName = document.querySelector(".firstname")
let lastName = document.querySelector(".lastname")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let button = document.querySelector("button")
let errorMessage = document.querySelector("small")


button.addEventListener("click",function(e){
  e.preventDefault();

  if (firstName.value == ""){
    firstName.style.border = "1px solid red"
    errorMessage.style.color = "red"
    errorMessage.innerHTML = "First Name can't be empty"
  }else{
    firstName.style.border = "1px solid green"
    errorMessage.style.color = "green"
    errorMessage.innerHTML = "Good"
  }
  if (lastName.value == ""){
    lastName.style.border = "1px solid red"
    errorMessage.style.color = "red"
    errorMessage.innerHTML = "Last Name can't be empty"
  }else{
    lastName.style.border = "1px solid green"
    errorMessage.style.color = "green"
    errorMessage.innerHTML = "Good"
  }
  if (email.value == ""){
    email.style.border = "1px solid red"
    errorMessage.style.color = "red"
    errorMessage.innerHTML = "Looks like this is not an Email"
  }else{
    email.style.border = "1px solid green"
    errorMessage.style.color = "green"
    errorMessage.innerHTML = "Good"
  }
  if (password.value == ""){
    password.style.border = "1px solid red"
    errorMessage.style.color = "red"
    errorMessage.innerHTML = "First Name can't be empty"
  }else{
    password.style.border = "1px solid green"
    errorMessage.style.color = "green"
    errorMessage.innerHTML = "Good"
  }

  });