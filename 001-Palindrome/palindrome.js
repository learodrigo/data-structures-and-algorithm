const button = document.getElementById('button')
const input = document.getElementById('input')
const result = document.getElementById('result')

button.addEventListener('click', () => {
    const letters = []
    const word = input.value
    let rword = ''

    for (let i = 0; i < word.length; i++) {
        letters.push(word[i])
    }

    for (let i = 0; i < word.length; i++) {
        rword += letters.pop()
    }

    if (rword === word) {
        result.innerHTML = `<b> ${word}</b> is a palindrome`
    } else {
        result.innerHTML = `<b> ${word}</b> isn't a palindrome`
    }
})
