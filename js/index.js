const firstName = /^[A-z\s+]{5,50}$/;
const lastName = /^[A-z\s+]{5,50}$/;
const emailAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const address = /^[A-z\s+]{5,50}$/;

const img = document.getElementById('img');

const slides=['assets/image/jordan-steranka-lpddCskeg4A-unsplash.png','assets/image/1.jpg', 'assets/image/2.jpg'];

const Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);