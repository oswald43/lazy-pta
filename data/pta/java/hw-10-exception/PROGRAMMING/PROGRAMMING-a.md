## 1.

### Answer ✅

```java
 import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // 输入n
        int n = scanner.nextInt();
        int[] array = new int[n];
        
        // 输入n个整数
        for (int i = 0; i < n; ) {
            try {
                String input = scanner.next();
                array[i] = Integer.parseInt(input);
                i++;
            } catch (NumberFormatException e) {
                System.out.println(e);
            }
        }
        
        // 输出数组内容
        System.out.println(Arrays.toString(array));
        
        scanner.close();
    }
}
```

## 2.

### Answer ✅

```java
 import java.util.Scanner;

// 自定义异常类
class InvalidScoreException extends Exception {
    private int score;
    
    public InvalidScoreException(int score) {
        this.score = score;
    }
    
    @Override
    public String toString() {
        return score + "invalid!";
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // 输入学生人数
        int n = scanner.nextInt();
        int[] scores = new int[n];
        
        // 输入每个学生的成绩
        for (int i = 0; i < n; ) {
            try {
                int score = scanner.nextInt();
                
                // 检查成绩是否有效
                if (score < 0 || score > 100) {
                    throw new InvalidScoreException(score);
                }
                
                scores[i] = score;
                i++;
            } catch (InvalidScoreException e) {
                System.out.println(e);
            }
        }
        
        // 统计及格和不及格人数
        int passCount = 0;
        int failCount = 0;
        
        for (int score : scores) {
            if (score >= 60) {
                passCount++;
            } else {
                failCount++;
            }
        }
        
        // 输出结果
        System.out.println(passCount);
        System.out.println(failCount);
        
        scanner.close();
    }
}
```

## 3.

### Answer ✅

```java
 import java.util.Scanner;

// 自定义异常类
class ScoreException extends Exception {
    private String message;
    
    public ScoreException() {
        this.message = "您输入的成绩异常，请核实！";
    }
    
    public void show() {
        System.out.println(message);
    }
}

// 学生类
class Student {
    private double score;
    
    public void setScore(double score) throws ScoreException {
        if (score < 0 || score > 100) {
            throw new ScoreException();
        }
        this.score = score;
    }
    
    public double getScore() {
        return score;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Student zhangsan = new Student();
        
        try {
            double inputScore = scanner.nextDouble();
            zhangsan.setScore(inputScore);
            System.out.println("成绩为" + zhangsan.getScore());
        } catch (ScoreException e) {
            e.show();
        } finally {
            System.out.println("程序结束");
        }
        
        scanner.close();
    }
}
```

## 4.

### Answer ✅

```java
 import java.util.Scanner;

// 自定义异常类
class OverLoadException extends Exception {
    private String message;
    
    public OverLoadException(double n) {
        this.message = "无法再装载重量是" + n + "吨的集装箱";
    }
    
    public void showMessage() {
        System.out.println(message);
    }
}

// 货船类
class CargoShip {
    private double actualWeight = 0;
    private double maxWeight;
    
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
        Scanner scanner = new Scanner(System.in);
        CargoShip myship = new CargoShip();
        
        // 设置最大装载量
        double maxWeight = scanner.nextDouble();
        myship.setMaxWeight(maxWeight);
        
        // 输入两个集装箱的重量
        double weight1 = scanner.nextDouble();
        double weight2 = scanner.nextDouble();
        
        try {
            myship.loading(weight1);
            myship.loading(weight2);
        } catch (OverLoadException e) {
            e.showMessage();
        } finally {
            System.out.println("货船将正点起航");
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
        
        try {
            int n = scanner.nextInt();
            System.out.println(10 - n);
        } catch (Exception e) {
            System.out.println("not int");
        } finally {
            System.out.println("end");
        }
        
        scanner.close();
    }
}
```

