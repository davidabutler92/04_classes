const { isMatching } = require('./functions');

describe('isMatching', () => {
    it('should take in a string and check for ,atching [],{},() and returns true or false', async() => {
      const res = isMatching('function() = console.log(hello)');
      expect(res).toEqual(true);
    });
  });