var firstName = /^[A-z\s+]{5,50}$/;
var lastName = /^[A-z\s+]{5,50}$/;
var emailAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var address = /^[A-z0-9./, ]{5,100}$/;

var img = document.getElementById('img');

var slides=['assets/image/jordan-steranka-lpddCskeg4A-unsplash.png','assets/image/1.jpg', 'assets/image/2.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);


// ----------Submit function------------------

function submitHandle() {
    var fname = document.getElementById("fname");
    var fnameDiv = fname.closest(".form-controller");
    var fnameAlert = fnameDiv.querySelector(".alert");
    var fnameInput = fnameDiv.querySelector(".text-aria");
    if(firstName.test(fname.value)){
        fnameAlert.style.visibility='hidden'
        fnameInput.style.color='black'
    }else{
        fnameAlert.style.visibility='visible'
        fnameInput.style.color='red'
    }

    var lname = document.getElementById("lname");
    var lnameDiv = lname.closest(".form-controller");
    var lnameAlert = lnameDiv.querySelector(".alert");
    var lnameInput = lnameDiv.querySelector(".text-aria");
    if(lastName.test(lname.value)){
        lnameAlert.style.visibility='hidden'
        lnameInput.style.color='black'
    }else{
        lnameAlert.style.visibility='visible'
        lnameInput.style.color='red'
    }

    var email = document.getElementById("email");
    var emailDiv = email.closest(".form-controller");
    var emailAlert = emailDiv.querySelector(".alert");
    var emailInput = emailDiv.querySelector(".text-aria");
    if(emailAddress.test(email.value)){
        emailAlert.style.visibility='hidden'
        emailInput.style.color='black'
    }else{
        emailAlert.style.visibility='visible'
        emailInput.style.color='red'
    }

    var addressEl = document.getElementById("address");
    var addressDiv = addressEl.closest(".form-controller");
    var addressAlert = addressDiv.querySelector(".alert");
    var addressInput = addressDiv.querySelector(".text-aria");
    if(address.test(addressEl.value)){
        addressAlert.style.visibility='hidden'
        addressInput.style.color='black'
    }else{
        addressAlert.style.visibility='visible'
        addressInput.style.color='red'
    }
  }