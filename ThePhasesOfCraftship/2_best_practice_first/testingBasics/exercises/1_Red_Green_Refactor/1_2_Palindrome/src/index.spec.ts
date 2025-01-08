import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it('should know that "mom" is a palindrome', () => {
        expect(isPalindrome('mom')).toBeTruthy();
    })
})