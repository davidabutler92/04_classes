const Stack = require('./stack');


const isMatching = str => {
    const brackets = strip(str)
    const stack = new Stack();
    const openers = ['(', '[', '{'];
    
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    for (let i = 0; i < brackets.length; i++) {
        if(openers.includes(brackets[i])) {
            stack.push(brackets[i]);
        } else {
            let opener = stack.pop();
            if(brackets[i] !== map[opener])
            return {
                'error': `Missing: ${map[opener]}`
            }
        }       
    }
    if(stack.length !== 0) {return false}
    return {
        'success': true
    }
}

const strip = (code) => {
    return code.match(/\(|\)|\{|\}|\[|\]/g)
}

module.exports = {
    isMatching
}

//iterate through the brackets
// -> if(bracket is an opener) stack.push(bracket)
// -> if(bracket is a closer)
//-> -> const opener = stack.pop()
//-> -> opener match bracket (if so we are good otherwise)

// res.send(results)

//need to match an opening bracket to the matching closing bracket. 