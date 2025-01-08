import {isPalindrome} from "./index";

describe('palindrome checker', () => {
    const truthyCases: [string][] = [
        ["mom"],
        ["Mom"],
        ["MoM"],
        ["xMomx"],
        ["Was It A Rat I Saw"],
        ["Never Odd Or Even"]
    ]

    test.each(truthyCases)('should know that \"%s\" is a palindrome', (input:string,) => {
        expect(isPalindrome(String(input))).toBeTruthy();
    })

    const falsyCases: [string][] = [
        ["Bill"],
        ["Momx"],
        ["Was It A Rat I Saw1"],
        ["Never Odd Or Even1"]
    ]

    test.each(falsyCases)('should know that \"%s\" is not a palindrome', (input:string,) => {
        expect(isPalindrome(String(input))).toBeFalsy();
    })
})