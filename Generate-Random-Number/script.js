const randomNumber = document.querySelector('.count');
const button = document.querySelector('.generate-number');

// generate number 1 to 10;
const generateNumber = ()=>{
    randomNumber.innerHTML = Math.floor(Math.random()*10+1);
    console.log(randomNumber.innerHTML);
};

button.addEventListener('click',generateNumber);

//when page is load is generate number
generateNumber();