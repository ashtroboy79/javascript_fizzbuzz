describe('Fizzbuzz', function() {

  let fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(17)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizzbuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });

    it('returns the number when not divisible by 3 or 5', function() {
      expect(fizzbuzz.says(11)).toEqual(11);
    });

  });

});