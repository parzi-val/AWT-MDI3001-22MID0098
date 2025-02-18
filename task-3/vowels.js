function countVowelsAndConsonants(words) {
    return words.map(word => {
        const vowels = word.match(/[aeiouAEIOU]/g) || [];
        const consonants = word.match(/[^aeiouAEIOU]/g) || [];
        return {
            word: word,
            vowels: vowels.length,
            consonants: consonants.length
        };
    });
}

const words = ["hello", "world", "javascript", "coding"];
const result = countVowelsAndConsonants(words);
console.log(result);