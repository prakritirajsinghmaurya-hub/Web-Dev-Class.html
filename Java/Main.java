import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your favorite coding language: ");
        String language = scanner.nextLine();
        
        System.out.println("Awesome! " + language + " is great!");
        scanner.close();
    }
}

