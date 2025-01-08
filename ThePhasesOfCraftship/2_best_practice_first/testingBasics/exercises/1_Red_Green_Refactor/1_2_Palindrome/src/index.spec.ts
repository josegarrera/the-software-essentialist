import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    it('should know that "mom" is a palindrome', () => {
        expect(isPalindrome('mom')).toBeTruthy();
    })

    it('should know that "Bill" is not a palindrome', () => {
        expect(isPalindrome("Bill")).toBeFalsy();
    })

    it('should know that "Mom" is a palindrome', () => {
        expect(isPalindrome('Mom')).toBeTruthy();
    })

    it('should know that "MoM" is a palindrome', () => {
        expect(isPalindrome('MoM')).toBeTruthy();
    })

    it('should know that "Momx" is not a palindrome', () => {
        expect(isPalindrome("Momx")).toBeFalsy();
    })

    it('should know that "xMomx" is a palindrome', () => {
        expect(isPalindrome('xMomx')).toBeTruthy();
    })

    it('should know that "Was It A Rat I Saw" is a palindrome', () => {
        expect(isPalindrome('Was It A Rat I Saw')).toBeTruthy();
    })

    it('should know that "Never Odd Or Even" is a palindrome', () => {
        expect(isPalindrome('Never Odd Or Even')).toBeTruthy();
    })

    it('should know that "Was It A Rat I Saw1" is not a palindrome', () => {
        expect(isPalindrome("Was It A Rat I Saw1")).toBeFalsy();
    })
})