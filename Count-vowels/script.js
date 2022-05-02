const button = document.querySelector('.btn');

button.addEventListener('click' ,checkVowel);


function checkVowel(){
    const word = document.querySelector('.input-box');
    const result = document.querySelector('.text');
    const ans = countVowel(word.value);
    result.innerHTML = word.value.toUpperCase()+ ' has '+ans+' vowels';
}
function countVowel(str){
    let i = 0;
    var count_vowel = 0;
    while(i<str.length){

        if(str.charAt(i) == 'a')
        count_vowel++;
        else if(str.charAt(i) == 'e')
        count_vowel++;
        else if(str.charAt(i) == 'i')
        count_vowel++;
        else if(str.charAt(i) == 'o')
        count_vowel++;
        else if(str.charAt(i) == 'u')
        count_vowel++;
        i++;
    }
    return count_vowel;
}