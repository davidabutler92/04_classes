const isMatching = string => {

    const res = strSplitAndFilter(string);

    let stack = [];
    let char = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < res.length; i++) {
        if(res[i] === '(' || res[i] === '{' || res[i] === '[') {
            stack.push(res[i]);
        } else {
            let prevChar = stack.pop();

            if(res[i] !== char[prevChar]) {return false;}
        }
    }
    if(stack.length !== 0) {return false;}
    return true;
}

const strSplitAndFilter = str => {
    return str.split("")
    .filter(char => char === '{' || char === '}' || char === '(' || char === ')' || char === '[' || char === ']')   
}

const exampleOne = 'function add(a, b) {return a + b;}';
const exampleTwo = 'function getFirstInArray(arr) {const first = arr[0];return first;}';
const exampleThree = 'function getSecondInArray(arr)) {const second = arr[1];return second;}';
const exampleFour = 'function getSecondInArray(arr) {const second = arr[1;return second;}';

console.log(isMatching(exampleTwo));

module.exports = {
    isMatching
}