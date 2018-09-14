const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzzer', () => {
  it('Throw error for non-numbers', () => {
    const badResults = ['man', 'this', true, 'cow', 'honeybooboo'];

    badResults.forEach(num => {
      expect(() => fizzBuzzer(num)).to.throw(Error);
    });
  });

  it('Return "FizzBuzz" where % by 15', () => {
    const goodResults = [15, 30, 45, 60, 75];

    goodResults.forEach(num => {
      const result = fizzBuzzer(num);
      expect(result).to.equal('fizz-buzz');
    });
  });

  it('Return "Buzz" when % 5', () => {
    const goodResults = [5, 10, 20, 50, 55];

    goodResults.forEach(num => {
      const result = fizzBuzzer(num);
      expect(result).to.equal('buzz');
    });
  });

  it('Return "Fizz" when % 3', () => {
    const goodResults = [3, 6, 9, 12, 18];

    goodResults.forEach(num => {
      const result = fizzBuzzer(num);
      expect(result).to.equal('fizz');
    });
  });

  it('Return number if not % by 15, 5, or 3', () => {
    const goodResults = [1, 2, 7, 13];

    goodResults.forEach(num => {
      const result = fizzBuzzer(num);
      expect(result).to.equal(num);
    });
  });
});