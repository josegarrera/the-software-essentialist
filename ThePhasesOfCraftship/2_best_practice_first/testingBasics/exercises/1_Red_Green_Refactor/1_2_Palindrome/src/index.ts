export const isPalindrome = (input: string): boolean => {
    return input.split(' ').join('').toLowerCase() === input.split(' ').join('').toLowerCase().split('').reverse().join('')
}