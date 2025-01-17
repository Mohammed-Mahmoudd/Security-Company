const backToTopButton = document.getElementById('backToTop');
window.onscroll = function () {
  if (document.body.scrollTop > 125) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const form = document.getElementById("form")
const errorName = document.getElementById("errorName")
const impname = document.getElementById("name")
const errorEmail = document.getElementById("errorEmail")
const inpemail = document.getElementById("email")
const inpmessage = document.getElementById("message")
const errorMessage = document.getElementById("errorMessage")
const btn = document.getElementById("send")


const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
const nameRegex = /^[a-zA-Z ]{2,}$/
const messageRegex = /^[A-Za-z0-9_%$@ ]{15,}$/

form.addEventListener("submit" , function(prevent) {
  if(inpemail.value === "" || impname.value === "" || inpmessage.value === "") {
    prevent.preventDefault()
    errorEmail.innerHTML = ""
    errorName.innerHTML = ""
    errorMessage.innerHTML = ""
    errorMessage.innerHTML = "Please enter value for all fields" 
    errorMessage.style.color = "red"
    errorMessage.style.fontSize = "12px"
    
  }else {
    errorMessage.innerHTML = "" 
    impname.value = impname.value.trim()
    if(!nameRegex.test(impname.value)) {
      prevent.preventDefault()
      errorName.innerHTML = "Please enter a valid Name without numbers and above 1 character | John "
      errorName.style.color = "red"
      errorName.style.fontSize = "12px"
    }else {
      errorName.innerHTML =""
      if(!emailRegex.test(inpemail.value)) {
        prevent.preventDefault()
        errorEmail.innerHTML = "Please Enter A valid Email | exampleEmail@gmail.com"
        errorEmail.style.color = "red"
        errorEmail.style.fontSize = "12px"
        console.log(messageRegex.test(inpmessage.value))
        console.log(inpmessage.value)
      
    }else {
      errorEmail.innerHTML = ""
      if(!messageRegex.test(inpmessage.value)) {
        prevent.preventDefault()
        errorMessage.textContent = "Please enter a message above 14 character "
        errorMessage.style.color = "red"
        errorMessage.style.fontSize = "12px"
      }else {
      errorMessage.textContent = ""
      
    }
    }
  }
  }
})

