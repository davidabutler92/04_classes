const express = require('express');
const app = express();
const Stack = require('./stack');

app.use(express.json());

const strip = (code) => {
    return code.match(/\(|\)|\{|\}|\[|\]/g)
}

app.post('/lint', (req, res) => {
    const brackets = strip(req.body.code)
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
})


app.listen(7890, () => {
    console.log('started on 7890');
})

//iterate through the brackets
// -> if(bracket is an opener) stack.push(bracket)
// -> if(bracket is a closer)
//-> -> const opener = stack.pop()
//-> -> opener match bracket (if so we are good otherwise)

// res.send(results)

//need to match an opening bracket to the matching closing bracket. 