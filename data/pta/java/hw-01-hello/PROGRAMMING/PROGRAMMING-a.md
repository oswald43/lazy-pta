## 1.

### Answer ✅

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
        System.out.println("Programming is fun!");
    }
}
```

## 2.

### Answer ✅

```java
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("Programming is fun!");
        System.out.println("Fundamentals First");
        System.out.println("Problem Driven");
    }
}
```

## 3.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(Math.abs(a) > 1000 ? "|a|>1000" : a+b);
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
        Scanner sc = new Scanner(System.in);
        String a = "    *\n"
            + "   ***\n"
            + "  *****\n"
            + " *******\n"
            + "*********";
        String b = "       *\n"
            + "      ***\n"
            + "     *****\n"
            + "    *******\n"
            + "   *********\n"
            + "  ***********\n"
            + " *************\n"
            + "***************\n";
        System.out.println(sc.hasNextLine() ? a : b);
    }
}
```

## 5.

### Answer ✅

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("富强（Prosperity）、民主（Democracy）、文明（Civility）、和谐（Harmony）");
        System.out.println("自由（Freedom）、平等（Equality）、公正（Justice）、法治（Rule of Law）");
        System.out.println("爱国（Patriotism）、敬业（Dedication）、诚信（Integrity）、友善（Friendship）");
    }
}
```

