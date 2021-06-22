// 1. Temperature Converter
function convert(tempInput) {
    const degree = tempInput.substr(tempInput.length - 2)
    const tempNumber = parseFloat(tempInput.substr(0, tempInput.length - 2))
    if (degree === "°C") {
        return Math.round(tempNumber * (9 / 5) + 32) + "°F"
    }
    if (degree === "°F") {
        return Math.round((tempNumber - 32) * (5 / 9)) + "°C"
    } else {
        return "Error"
    }
}
console.log(convert("35°C"));


// 2. Plant Trees
function plantTrees(w, l, g) {
    const x = (w * l - Math.pow(w - 2, 2)) % (g+1)
    console.log(x);
    if (x === 0) {
        return (w * l - Math.pow(w - 2, 2)) / (g + 1)
    } else {
        return Math.ceil(((w * l - Math.pow(w - 2, 2)) / (g + 1))) - 1
    }
}
console.log(plantTrees(3,3,1));


// 3. Find Missing Letter
function missingLetter(array) {
    let string = array.join("");
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
            return String.fromCharCode(string.charCodeAt(i) + 1);
        }
    }
}
console.log(missingLetter(['a', 'b', 'c', 'e']));
console.log(missingLetter(['l', 'n', 'o', 'p']));
console.log(missingLetter(['s', 't', 'u', 'w', 'x']));
console.log(missingLetter(['O', 'Q', 'R', 'S']));


// 4. How Many "Prime Numbers" Are There?
function checkPrime(number) {
    if (number <= 1) {
        return false;
    }
    else {
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }
    return true;
}
function primeNumbers(number) {
    let result = 0;
    for (let i = 2; i <= number; i++) {
        if (checkPrime(i)) {
            result++;
        }
    }
    return result;
};
console.log(primeNumbers(23));


// 5. Shiritori Game
class My_Shiritori {
    play(word) {
        if (words.length === 0) {
            words.push(word)
            return words
        } else {
            const lastWords = words[words.length - 1]
            const lastCharacter = lastWords.charAt(lastWords.length - 1)
            const firstCharacter = word.charAt(0)
            if (lastCharacter !== firstCharacter) {
                return "game over"
            } else {
                const isSameWord = words.some(x => x === word)
                if (isSameWord) {
                    return "game over"
                }
                words.push(word)
                return words

            }
        }

    }
    getWords() {
        return words
    }
    restart() {
        return words = []
    }
}
let words = []
const my_shiritori = new My_Shiritori()
console.log(my_shiritori.play("apple"));
console.log(my_shiritori.play("eye"));
console.log(my_shiritori.play("ear"));
console.log(my_shiritori.getWords());
console.log(my_shiritori.restart());