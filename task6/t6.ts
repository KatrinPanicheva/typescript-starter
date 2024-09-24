// Test the function with arrays of different types

function reverseArray<T>(arr: T[]): T[] {
    // Use the reverse method to reverse the array
    return arr.reverse();
};

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const mixedArray: (string | number | boolean)[] = [true, 42, "hello", false];

// Use console log to print the result. Desired result:

// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
const reversedNumberArray = reverseArray(numberArray);
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
const reversedStringArray = reverseArray(stringArray);
// Reversed Mixed Array: [ false, 'hello', 42, true ]
const reversedMixedArray = reverseArray(mixedArray);


console.log(`Reversed Array of Numbers:`, reversedNumberArray);
console.log(`Reversed Array of Strings:`, reversedStringArray);
console.log(`Reversed Mixed Array:`, reversedMixedArray);
