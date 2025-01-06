import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it('should compile',  () => {
        expect(true).toBeTruthy();
    })

    it('should return "Fizz" if it get 3', () => {
        expect(fizzbuzz(3)).toBe("Fizz")
    })

    it('should return "Buzz" if it get a 5', () => {
        expect(fizzbuzz(5)).toBe("Buzz")
    })

    it('should return "FizzBuzz" if it get a 15', () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz")
    })

    it('should return "1" if it get 1', () => {
        expect(fizzbuzz(1)).toBe("1")
    })

    it('should throw error if it get 0', () => {
        expect(() => fizzbuzz(0)).toThrow()
    })

    it('should throw if it get -10', () => {
        expect(() => fizzbuzz(-10)).toThrow()
    })
});
