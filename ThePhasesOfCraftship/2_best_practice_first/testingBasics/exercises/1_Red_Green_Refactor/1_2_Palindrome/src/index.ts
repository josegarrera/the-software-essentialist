export const isPalindrome = (input: string): boolean => {
    const lowerCaseInput = input.toLowerCase();
    return lowerCaseInput === lowerCaseInput.split('').reverse().join('')
}