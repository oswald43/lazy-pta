## 1.

### Answer ✅

```java
public class Main {
    public static void main(String[] args ){
        for (int i = 1000; i < 9999; i++) {
            int a = i / 1000;
            int b = i / 100 % 10;
            int c = i / 10 % 10;
            int d = i % 10;
            if(a==b&&c==d){
                for (int j = 10; j <100 ; j++) {
                    if (j*j==i){
                        System.out.println("车牌号码是"+i);
                    }
                }

            }
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
        Scanner scanner = new Scanner(System.in);
        
        // 确保有输入再读取
        if (scanner.hasNext()) {
            String str = scanner.next();
            boolean isPalindrome = true;
            
            for (int i = 0; i < str.length() / 2; i++) {
                if (str.charAt(i) != str.charAt(str.length() - i - 1)) {
                    isPalindrome = false;
                    break;
                }
            }
            
            System.out.println(isPalindrome ? "yes" : "no");
        }
        
        scanner.close();
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
        int ints=scanner.nextInt();
        int[] ints1 = new int[ints];
        for (int i = 0; i < ints1.length; i++) {
            ints1[i]=scanner.nextInt();
        }
        int max=ints1[0];
        for (int j : ints1) {
            if (j >= max) {
                max = j;
            }
        }
        System.out.println(max);

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
        int n = scanner.nextInt();
        
        if (n == 1) {
            System.out.println(1);
        } else if (n == 2) {
            System.out.println(2);
        } else {
            int a = 1;  // 第1个月
            int b = 2;  // 第2个月
            int result = 0;
            
            for (int i = 3; i <= n; i++) {
                result = a + b;
                a = b;
                b = result;
            }
            
            System.out.println(result);
        }
        
        scanner.close();
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
        int a=scanner.nextInt();
        int b=scanner.nextInt();
        int c=scanner.nextInt();
        int d=scanner.nextInt();
        System.out.println(Math.abs(a-c)+Math.abs(b-d));

    }
}

```

