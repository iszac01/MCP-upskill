import java.util.Scanner;

/**
 * Odd or Even Number Checker in Java
 * MCP upskill repository
 */
public class OddEvenChecker {
    
    /**
     * Check if a number is even
     * @param number The number to check
     * @return true if even, false if odd
     */
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    /**
     * Check if a number is odd
     * @param number The number to check
     * @return true if odd, false if even
     */
    public static boolean isOdd(int number) {
        return number % 2 != 0;
    }
    
    /**
     * Check if a number is odd or even and display result
     * @param input The input string to check
     */
    public static void checkNumber(String input) {
        try {
            int num = Integer.parseInt(input);
            if (isEven(num)) {
                System.out.println(num + " is an EVEN number");
            } else {
                System.out.println(num + " is an ODD number");
            }
        } catch (NumberFormatException e) {
            System.out.println("Error: Please enter a valid integer");
        }
    }
    
    /**
     * Main method to run the odd/even checker
     * @param args command line arguments
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Odd or Even Number Checker ===");
        System.out.println("Welcome to MCP upskill repository!");
        System.out.println("This program checks if a number is odd or even.");
        System.out.println();
        
        while (true) {
            System.out.print("Enter a number (or 'quit' to exit): ");
            String input = scanner.nextLine().trim();
            
            if (input.toLowerCase().equals("quit") || 
                input.toLowerCase().equals("exit") || 
                input.toLowerCase().equals("q")) {
                System.out.println("Goodbye!");
                break;
            }
            
            checkNumber(input);
            System.out.println();
        }
        
        scanner.close();
    }
}