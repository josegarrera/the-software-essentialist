export const isPalindrome = (input: string): boolean => {
    const inputWithoutEmptySpaces = input.split(' ').join('');
    return inputWithoutEmptySpaces.toLowerCase() === inputWithoutEmptySpaces.toLowerCase().split('').reverse().join('')
}