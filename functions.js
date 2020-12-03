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

const test = 'function() = {hello})';
console.log(isMatching(test));

module.exports = {
    isMatching
}