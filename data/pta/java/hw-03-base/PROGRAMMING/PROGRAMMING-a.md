## 1.

### Answer ✅

```java
 import java.math.BigDecimal;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext()){
            String str1=scanner.next();
            String str2=scanner.next();
            BigDecimal num1 = new BigDecimal(str1);
            BigDecimal num2 = new BigDecimal(str2);
            System.out.println(num1.add(num2));
            System.out.println(num1.multiply(num2));
        }

    }
}
```

## 2.

### Answer ✅

```java
 import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int M = sc.nextInt();
        double P = sc.nextDouble();
        int N = sc.nextInt();
        
        double compound = M * Math.pow(1 + P, N);
        double simple = M * (1 + N * P);
        double diff = compound - simple;
        
        long compRound = Math.round(compound);
        long simpRound = Math.round(simple);
        long diffRound = Math.round(diff);
        
        System.out.println(compRound + " " + simpRound + " " + diffRound);
    }
}
```

## 3.

### Answer ✅

```java
 import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext()) {
            double a = scanner.nextDouble();
            double b = scanner.nextDouble();
            double c;
            c=Math.pow(a*a+b*b,0.5);
            System.out.printf("%.2f",c);
            System.out.println();
        }
    }
}
```

## 4.

### Answer ✅

```java
 import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while(scanner.hasNext()) {
            double high = scanner.nextDouble();
            double c = scanner.nextDouble();
            double distance;
            distance=high/Math.tan(c);
            System.out.printf("%.2f",distance);
            System.out.println();

        }
    }
}
```

## 5.

### Answer ✅

```java
 import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine().trim();
            if (line.isEmpty()) {
                continue;
            }
            
            String[] parts = line.split("\\s+");
            if (parts.length < 3) {
                System.out.println("Input Error!");
                continue;
            }
            
            try {
                double a = Double.parseDouble(parts[0]);
                double b = Double.parseDouble(parts[1]);
                double c = Double.parseDouble(parts[2]);
                
                // 检查边长是否为正数且能构成三角形
                if (a <= 0 || b <= 0 || c <= 0) {
                    System.out.println("Input Error!");
                } else if (a + b > c && a + c > b && b + c > a) {
                    double p = (a + b + c) / 2;
                    double area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
                    System.out.printf("%.2f\n", area);
                } else {
                    System.out.println("Input Error!");
                }
            } catch (NumberFormatException e) {
                System.out.println("Input Error!");
            }
        }
        
        scanner.close();
    }
}
```

## 6.

### Answer ✅

```java
 import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double weight = scanner.nextDouble();//体重
        double height = scanner.nextDouble();//身高
        
        if (weight <= 0 || weight > 727 || height <= 0 || height > 2.72) {
            System.out.println("input out of range");
            return;
        }
        double bmi = weight / (height * height);
        
        if (bmi < 18.5) {
            System.out.println("thin");
        } else if (bmi < 24) {
            System.out.println("fit");
        } else if (bmi < 28) {
            System.out.println("overweight");
        } else {
            System.out.println("fat");
        }
    }
}
```

