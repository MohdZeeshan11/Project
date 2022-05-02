const button = document.querySelector('.btn');

button.addEventListener('click' ,checkPalindrome);


function checkPalindrome(){
    const word = document.querySelector('.input-box');
    const str = word.value.toUpperCase();

    const result = document.querySelector('.text');
    
    result.innerHTML = isPalindrome(str);
}
function isPalindrome(str){
    let length = str.length;
    let i = 0;
    let j = length-1;
    var flag = 0;
    while(j>=i){
        if(str.charAt(i) != str.charAt(j)){
            return str+' is not palindrome';
            flag = 1;
            break;
        }
        i++;
        j--;
    }
    if(flag == 0)
    return str+' is palindrome';
}