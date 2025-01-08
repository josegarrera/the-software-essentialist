export const isPalindrome = (input: string): boolean => {
    const inputWithoutEmptySpaces = input.split(' ').join('');
    const reverseInput = (input: string): string => input.split('').reverse().join('');
    return inputWithoutEmptySpaces.toLowerCase() === reverseInput(inputWithoutEmptySpaces).toLowerCase();
}