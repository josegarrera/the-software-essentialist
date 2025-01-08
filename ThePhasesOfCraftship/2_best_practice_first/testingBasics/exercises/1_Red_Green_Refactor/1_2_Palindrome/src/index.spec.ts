import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it('should know that "mom" is a palindrome', () => {
        expect(isPalindrome('mom')).toBeTruthy();
    })

    it('should know that "Bill" is not a palindrome', () => {
        expect(isPalindrome("Bill")).toBeFalsy();
    })
})