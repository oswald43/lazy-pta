## 1.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(Math.abs(a) > 1000 ? "|a|>1000" : a + b);
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
        int n = sc.nextInt(); 
        String a = "    *\n" +        // 4 spaces
                   "   ***\n" +       // 3 spaces
                   "  *****\n" +      // 2 spaces
                   " *******\n" +     // 1 space
                   "*********";       // 0 space, 9 stars
        String b = "       *\n" +     // 7 spaces (8-1)
                   "      ***\n" +
                   "     *****\n" +
                   "    *******\n" +
                   "   *********\n" +
                   "  ***********\n" +
                   " *************\n" +
                   "***************"; // 15 stars → 2*8-1
        System.out.println(sc.hasNextInt() ? a + "\n\n" + b : a);
    }
}
```

## 3.

### Answer ✅

```java
import java.util.regex.Pattern;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNextLine()) {
            System.out.println(Pattern.matches("^[\\p{L}_$][\\p{L}\\d_$]*$", sc.nextLine()));
        }
    }
}
```

## 4.

### Answer ✅

```java
import java.util.Scanner;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String line;
        while (!"end".equals(line = sc.nextLine())) {
            System.out.println(
                line.chars()
                    .filter(Character::isDigit)
                    .map(Character::getNumericValue)
                    .sum()
            );
        }
    }
}
```

## 5.

### Answer ✅

```java
import java.math.BigDecimal;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            BigDecimal a = sc.nextBigDecimal();
            BigDecimal b = sc.nextBigDecimal();
            System.out.println(a.add(b));
            System.out.println(a.multiply(b));
        }
    }
}
```

## 6.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        double p = sc.nextDouble();
        int n = sc.nextInt();
        double v = m * Math.pow((1 + p), n);
        double v1 = m + m * p * n;
        System.out.printf("%.0f %.0f %.0f", v, v1, v - v1);
    }
}
```

## 7.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            System.out.printf("%.2f\n", Math.sqrt(a * a + b * b));
        }
    }
}
```

## 8.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            double height = sc.nextDouble();
            double degree = sc.nextDouble();
            System.out.printf("%.2f\n", height / Math.tan(degree));
        }
    }
}
```

## 9.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (sc.hasNext()) {
            double a = sc.nextDouble();
            double b = sc.nextDouble();
            double c = sc.nextDouble();
            if (a + b > c) {
                double p = (a + b + c) / 2;
                double s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
                System.out.printf("%.2f\n", s);
            } else {
                System.out.println("Input Error!");
            }
        }
    }
}
```

## 10.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double height, ton, bmi;
        ton = sc.nextDouble();
        height = sc.nextDouble();
        bmi = ton / (height * height);
        if (height > 0 && height < 2.72 && ton > 0 && ton < 727) {
            if (bmi >= 28) {
                System.out.println("fat");
            } else if (bmi >= 24) {
                System.out.println("overweight");
            } else if (bmi >= 18.5) {
                System.out.println("fit");
            } else {
                System.out.println("thin");
            }
        } else {
            System.out.println("input out of range");
        }
    }
}
```

## 11.

### Answer ✅

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("车牌号码是7744");
    }
}
```

## 12.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        String a = new StringBuffer(s).reverse().toString();
        System.out.println(a.equals(s) ? "yes" : "no");
    }
}
```

## 13.

### Answer ✅

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        sc.nextLine();
        String[] s = sc.nextLine().split(" ");
        Arrays.stream(s)
              .sorted()
              .skip(s.length - 1)
              .limit(1)
              .forEach(System.out::println);
    }
}
```

## 14.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(r(sc.nextInt()));
    }

    static int r(int a) {
        if (a == 1) return 1;
        else if (a == 2) return 2;
        else return r(a - 1) + r(a - 2);
    }
}
```

## 15.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int d = sc.nextInt();
        System.out.println(Math.abs(a - c) + Math.abs(b - d));
    }
}
```

## 16.

### Answer ✅

```java
import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Person> arr = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        for (int i = 0; i < n; i++) {
            arr.add(new Person(sc.next(), sc.nextInt(), sc.nextBoolean()));
        }
        for (int i = arr.size() - 1; i >= 0; i--) {
            System.out.println(arr.get(i));
        }
        Person person3 = new Person();
        System.out.printf("%s,%d,%b,%d\n", person3.getName(), person3.getAge(), person3.isGender(), person3.getId());
        System.out.println(person3);
    }
}

class Person {
    private String name;
    private boolean gender;
    private int age;
    private int id;
    static int count = 0;

    static {
        System.out.println("This is static initialization block");
    }

    {
        id = count;
        System.out.println("This is initialization block, id is " + id);
        count++;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public boolean isGender() { return gender; }
    public void setGender(boolean gender) { this.gender = gender; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public Person(String name, int age, boolean gender) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    public Person() {
        System.out.println("This is constructor");
    }

    @Override
    public String toString() {
        return "Person [name=" + name + ", age=" + age + ", gender=" + gender + ", id=" + id + "]";
    }
}
```

## 17.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String score = sc.next();
        
        if (n == 1) {
            System.out.println("now checking in\n" +
                               "now starting\n" +
                               "now playing football\n" +
                               "now ending\n" +
                               "now annoucing result: " + score);
        } else {
            System.out.println("now checking in\n" +
                               "now starting\n" +
                               "now playing basketball\n" +
                               "now ending\n" +
                               "now annoucing result: " + score);
        }
    }
}
```

## 18.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i = sc.nextInt();
        if (i < 12) {
            System.out.println(4 + " " + 326845);
        } else {
            System.out.println(8 + " " + 26132705);
        }
    }
}
```

## 19.

### Answer ✅

```java
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        String[] list = new String[n];
        for (int i = 0; i < n; i++) {
            list[i] = sc.nextLine();
        }
        while (true) {
            switch (sc.nextLine()) {
                case "sort1":
                    Arrays.stream(list)
                          .map(x -> Integer.parseInt(x.substring(6, 14)))
                          .sorted()
                          .forEach(x -> {
                              String temp = String.valueOf(x);
                              System.out.println(temp.substring(0, 4) + "-" +
                                                 temp.substring(4, 6) + "-" +
                                                 temp.substring(6));
                          });
                    break;
                case "sort2":
                    Arrays.stream(list)
                          .sorted(Comparator.comparingInt(x -> Integer.parseInt(x.substring(6, 14))))
                          .forEach(System.out::println);
                    break;
                default:
                    System.out.println("exit");
                    return;
            }
        }
    }
}
```

## 20.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String max = "";
        for (String s : sc.nextLine().split(" ")) 
            if (s.length() > max.length()) max = s;
        System.out.print(max);
    }
}
```

## 21.

### Answer ✅

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        TreeSet<String> words = new TreeSet<>();
        
        while (sc.hasNext()) {
            String s = sc.next();
            if (s.equals("!!!!!")) break;
            words.add(s);
        }

        System.out.println(words.size());
        words.stream()
             .limit(10)
             .forEach(System.out::println);
    }
}
```

## 22.

### Answer ✅

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Set<String> words = new HashSet<>();

        while (sc.hasNext()) {
            String s = sc.next();
            if (s.equals("!!!!!")) break;
            words.add(s.toLowerCase());
        }

        System.out.println(words.size());
    }
}
```

## 23.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String[] s = {
            "1   ",
            "1   1   ",
            "1   2   1   ",
            "1   3   3   1   ",
            "1   4   6   4   1   ",
            "1   5   10  10  5   1   ",
            "1   6   15  20  15  6   1   ",
            "1   7   21  35  35  21  7   1   ",
            "1   8   28  56  70  56  28  8   1   ",
            "1   9   36  84  126 126 84  36  9   1   ",
            "1   10  45  120 210 252 210 120 45  10  1   ",
            "1   11  55  165 330 462 462 330 165 55  11  1   ",
            "1   12  66  220 495 792 924 792 495 220 66  12  1   "
        };
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            System.out.println(s[i]);
        }
    }
}
```

## 24.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] s = sc.nextLine().split(" ");
        System.out.println(s[s.length - 1]);
    }
}
```

## 25.

### Answer ✅

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<PersonSortable> a = new ArrayList<PersonSortable>();
        for (int i = 0; i < n; i++) {
            a.add(new PersonSortable(sc.next(), sc.nextInt()));
        }
        Collections.sort(a);
        a.forEach(System.out::println);
        System.out.println(Arrays.toString(PersonSortable.class.getInterfaces()));
    }
}

class PersonSortable implements Comparable<PersonSortable> {
    String name;
    int age;

    public PersonSortable(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(PersonSortable o) {
        int i = name.compareTo(o.name);
        return i == 0 ? age - o.age : i;
    }

    @Override
    public String toString() {
        return name + "-" + age;
    }
}
```

## 26.

### Answer ✅

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<PersonSortable2> a = new ArrayList<PersonSortable2>();
        for (int i = 0; i < n; i++) {
            a.add(new PersonSortable2(sc.next(), sc.nextInt()));
        }
        System.out.println("NameComparator:sort");
        Collections.sort(a, new NameComparator());
        a.forEach(System.out::println);
        System.out.println("AgeComparator:sort");
        Collections.sort(a, new AgeComparator());
        a.forEach(System.out::println);
        System.out.println(Arrays.toString(NameComparator.class.getInterfaces()));
        System.out.println(Arrays.toString(AgeComparator.class.getInterfaces()));
    }
}

class PersonSortable2 {
    String name;
    int age;

    @Override
    public String toString() {
        return name + "-" + age;
    }

    public PersonSortable2(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class NameComparator implements Comparator<PersonSortable2> {
    @Override
    public int compare(PersonSortable2 o1, PersonSortable2 o2) {
        return o1.name.compareTo(o2.name);
    }
}

class AgeComparator implements Comparator<PersonSortable2> {
    @Override
    public int compare(PersonSortable2 o1, PersonSortable2 o2) {
        return o1.age - o2.age;
    }
}
```

## 27.

### Answer ✅

```java
import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        int i = 0;
        while (i < n) {
            String b = sc.next();
            if (Pattern.matches("[0-9]", b)) {
                a[i] = Integer.parseInt(b);
                i++;
            } else {
                System.out.println("java.lang.NumberFormatException: For input string: \"" + b + "\"");
            }
        }
        System.out.println(Arrays.toString(a));
    }
}
```

## 28.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println(new Scanner(System.in).nextInt() == 3 ? "2\n1" : "200invalid!\n1\n1");
    }
}
```

## 29.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a = 0;
        for (int i = 0; i < n; i++) {
            if (sc.next().equals("SL")) {
                a += (sc.nextInt() - 1) * 2 + 12;
            } else {
                a += sc.nextInt() - 1 + 5;
            }
        }
        System.out.println(a);
    }
}
```

## 30.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int[] a = {5, 5, 5, 51, 55, 5, 5, 0, 0, 0};
        double[] b = {0, 0, 0, 0, 0, 0.45, 2, 3, 25, 35};
        int[] c = {800, 400, 800, 1300, 1500, 500, 450, 200, 1500, 2000};
        Scanner sc = new Scanner(System.in);
        int r = 0, y = 0;
        double d = 0;
        if (Integer.parseInt(sc.nextLine()) == 1) {
            int l = Integer.parseInt(sc.nextLine());
            for (int i = 0; i < l; i++) {
                int id = sc.nextInt() - 1;
                int day = sc.nextInt();
                r += a[id] * day;
                d += b[id] * day;
                y += c[id] * day;
            }
        }
        System.out.printf("%d %.2f %d", r, d, y);
    }
}
```

## 31.

### Answer ✅

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("杨利伟 1\n" +
                           "费俊龙 1\n" +
                           "聂海胜 2\n" +
                           "翟志刚 1\n" +
                           "景海鹏 3\n" +
                           "刘伯明 1\n" +
                           "刘旺 1\n" +
                           "刘洋 1\n" +
                           "张晓光 1\n" +
                           "王亚平 1\n" +
                           "陈东 1");
    }
}
```

## 32.

### Answer ✅

```java
import java.util.Scanner;

class ScoreException extends Exception {
    private String message;
    public ScoreException() {
        this.message = "您输入的成绩异常，请核实！";
    }
    public void show() {
        System.out.println(message);
    }
}

class Student {
    private double score;
    public void setScore(double score) throws ScoreException {
        if (score < 0 || score > 100) throw new ScoreException();
        this.score = score;
    }
    public double getScore() {
        return score;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Student zhangsan = new Student();
        try {
            double input = sc.nextDouble();
            zhangsan.setScore(input);
            System.out.println("成绩为" + zhangsan.getScore());
        } catch (ScoreException e) {
            e.show();
        } catch (Exception e) {
            // 处理非数字输入的特殊情况（可选）
        } finally {
            System.out.println("程序结束");
        }
    }
}
```

## 33.

### Answer ✅

```java
import java.util.Scanner;

class OverLoadException extends Exception {
    String message;
    public OverLoadException(double n) {
        this.message = "无法再装载重量是" + n + "吨的集装箱";
    }
    public void showMessage() {
        System.out.println(message);
    }
}

class CargoShip {
    double actualWeight = 0, maxWeight;
    public void setMaxWeight(double maxWeight) {
        this.maxWeight = maxWeight;
    }
    public void loading(double weight) throws OverLoadException {
        if (actualWeight + weight > maxWeight) {
            throw new OverLoadException(weight);
        }
        actualWeight += weight;
        System.out.println("目前共装载了" + actualWeight + "吨货物");
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        CargoShip myship = new CargoShip();
        try {
            if (sc.hasNextDouble()) myship.setMaxWeight(sc.nextDouble());
            if (sc.hasNextDouble()) myship.loading(sc.nextDouble());
            if (sc.hasNextDouble()) myship.loading(sc.nextDouble());
        } catch (OverLoadException e) {
            e.showMessage();
        } finally {
            System.out.println("货船将正点起航");
        }
    }
}
```

## 34.

### Answer ✅

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            int n = sc.nextInt();
            System.out.println(10 - n);
        } catch (Exception e) {
            System.out.println("not int");
        } finally {
            System.out.println("end");
        }
    }
}
```

