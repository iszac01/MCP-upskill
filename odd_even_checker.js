#!/usr/bin/env node
/**
 * Odd or Even Number Checker in JavaScript/Node.js
 * MCP upskill repository
 */

const readline = require('readline');

/**
 * Check if a number is even
 * @param {number} number - The number to check
 * @returns {boolean} True if even, False if odd
 */
function isEven(number) {
    return number % 2 === 0;
}

/**
 * Check if a number is odd
 * @param {number} number - The number to check
 * @returns {boolean} True if odd, False if even
 */
function isOdd(number) {
    return number % 2 !== 0;
}

/**
 * Check if a number is odd or even and display result
 * @param {string} input - The input string to check
 */
function checkNumber(input) {
    try {
        const num = parseInt(input);
        if (isNaN(num)) {
            console.log("Error: Please enter a valid integer");
            return;
        }
        
        if (isEven(num)) {
            console.log(`${num} is an EVEN number`);
        } else {
            console.log(`${num} is an ODD number`);
        }
    } catch (error) {
        console.log("Error: Please enter a valid integer");
    }
}

/**
 * Main function to run the odd/even checker
 */
function main() {
    console.log("=== Odd or Even Number Checker ===");
    console.log("Welcome to MCP upskill repository!");
    console.log("This program checks if a number is odd or even.");
    console.log();
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const askQuestion = () => {
        rl.question("Enter a number (or 'quit' to exit): ", (answer) => {
            const input = answer.trim();
            
            if (input.toLowerCase() === 'quit' || input.toLowerCase() === 'exit' || input.toLowerCase() === 'q') {
                console.log("Goodbye!");
                rl.close();
                return;
            }
            
            checkNumber(input);
            console.log();
            askQuestion();
        });
    };
    
    askQuestion();
}

// Call the main function
main();