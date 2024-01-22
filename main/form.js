const text_one = document.querySelector('.text_one p')

text_one.innerHTML = text_one.innerText.split('').map(
    (char, i) => 
    `<span style="transform:rotate(${i * 13.5}deg )">${char}</span>`
).join('');

const text_two = document.querySelector('.text_two p')

text_two.innerHTML = text_two.innerText.split('').map(
    (char, i) => 
    `<span style="transform:rotate(${i * 13.5}deg )">${char}</span>`
).join('');
