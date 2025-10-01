#!/usr/bin/env python3
"""
Odd or Even Number Checker in Python
MCP upskill repository
"""

def is_even(number):
    """
    Check if a number is even
    Args:
        number (int): The number to check
    Returns:
        bool: True if even, False if odd
    """
    return number % 2 == 0

def is_odd(number):
    """
    Check if a number is odd
    Args:
        number (int): The number to check
    Returns:
        bool: True if odd, False if even
    """
    return number % 2 != 0

def check_number(number):
    """
    Check if a number is odd or even and display result
    Args:
        number (int): The number to check
    """
    try:
        num = int(number)
        if is_even(num):
            print(f"{num} is an EVEN number")
        else:
            print(f"{num} is an ODD number")
    except ValueError:
        print("Error: Please enter a valid integer")

def main():
    """Main function to run the odd/even checker"""
    print("=== Odd or Even Number Checker ===")
    print("Welcome to MCP upskill repository!")
    print("This program checks if a number is odd or even.")
    print()
    
    while True:
        try:
            # Get user input
            user_input = input("Enter a number (or 'quit' to exit): ").strip()
            
            # Check if user wants to quit
            if user_input.lower() in ['quit', 'exit', 'q']:
                print("Goodbye!")
                break
            
            # Check the number
            check_number(user_input)
            print()
            
        except KeyboardInterrupt:
            print("\nGoodbye!")
            break
        except Exception as e:
            print(f"An error occurred: {e}")
            print()

if __name__ == "__main__":
    main()