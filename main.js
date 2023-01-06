const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let generStr = '';

function generateKey(length, characters){
    for(let i = 0; i < length; i++){
        let index = Math.floor(Math.random() * characters.length);
        generStr += characters[index];
    }
    return generStr;
}

const key = generateKey(16, characters);
console.log(key); 
