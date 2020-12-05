const Stack = require('./stack');

const openers = ['(', '[', '{'];

let matchBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
    ')': '(',
    ']': '[',
    '}': '{',
}

const strip = (code) => {
    //return array of brakets
    return code.match(/\(|\)|\{|\}|\[|\]/g)
}

const isMatching = arr => {
    //creates new stack array
    const stack = new Stack();
    let result = true;

    //loop through array 
    arr.map(bracket => {
        //look at stack
        const peek = stack.peek();
        //if it matches any of the openers, push it to the stack
        if(openers.includes(bracket)) {
            stack.push(bracket)
        } else {
            //otherwise if it is a matching bracket, pop it from stack
            if(matchBrackets[bracket] === peek) {
                stack.pop();
            } else {
                //if logic above doesn't run then something is wrong and return result obj.
                result = {
                    'missing': matchBrackets[peek || bracket]
                }
            }
        }
    })
    if (stack.length) {
        result = {
            'missing': matchBrackets[peek || bracket]
        }
    }
    const remainder = stack.peek()
    if (remainder) {
        result = {
            'missing': matchBrackets[remainder]
        }
    }
    //returns results (either being true or missing object)
    return result;
}

const linter = code => {
    //strip code to an array of brackets
    const bracketArr = strip(code);
    console.log(bracketArr);

    //result again, will be either true or 'missing'
    const result = isMatching(bracketArr)
    //if true return success object
    if(result === true) {
        return {
            'success': true
        }
    } else {
        //otherwise return missing object with result from isMatching function.
        return {
            'error': `missing ${result.missing}`
        }
    }
}

const code = "const add = (a, b) => { return a + b };"
console.log(linter(code));

module.exports = {
    linter
}

//iterate through the brackets
// -> if(bracket is an opener) stack.push(bracket)
// -> if(bracket is a closer)
//-> -> const opener = stack.pop()
//-> -> opener match bracket (if so we are good otherwise)

// res.send(results)

//need to match an opening bracket to the matching closing bracket. 