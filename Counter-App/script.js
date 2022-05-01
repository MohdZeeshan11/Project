
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

// event delegation
buttons.addEventListener('click', (event) => {
    if(event.target.classList.contains('increase')){
        count.innerHTML++;
        colorSet();
    }
    else if(event.target.classList.contains('decrease')){
        count.innerHTML--;
        colorSet();
    }
    else
    {
        count.innerHTML = 0;
        colorSet();
    }
})

function colorSet()
{
    if(count.innerHTML > 0)
    count.style.color = 'yellow';
    else if(count.innerHTML < 0)
    count.style.color = 'red';
    else
    count.style.color = 'white';
}
