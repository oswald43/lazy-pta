## 1.

使用异常处理输入机制，让程序变得更健壮。

## main方法：
1. 输入n，创建大小为n的int数组。
2. 输入n个整数，放入数组。输入时，有可能输入的是非整型字符串，这时候需要输出异常信息，然后重新输入。
3. 使用`Arrays.toString`输出数组中的内容。


## 输入样例：
```in
5
1
2
a
b
4
5
3

```
## 输出样例：
```out
java.lang.NumberFormatException: For input string: "a"
java.lang.NumberFormatException: For input string: "b"
[1, 2, 4, 5, 3]

```

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

编写一个程序进行一个班某门课程成绩的录入，能够控制录入成绩总人数，对录入成绩统计其及格人数和不及格人数。设计一个异常类，当输入的成绩小0分或大于100分时，抛出该异常类对象，程序将捕捉这个异常对象，并调用执行该异常类对象的toString（）方法，该方法获取当前无效分数值，并返回一个此分数无效的字符串。

### 输入格式:

从键盘中输入学生人数n

从键盘中输入第1个学生的成绩

从键盘中输入第2个学生的成绩

...

从键盘中输入第n个学生的成绩

（注：当输入的成绩无效时（即分数为小于0或大于100）可重新输入，且输出端会输出此分数无效的提醒。）

### 输出格式:

显示及格总人数

显示不及格总人数

### 输入样例:

在这里给出一组输入。例如：

```in
3
100
30
60
```

### 输出样例:

在这里给出相应的输出。例如：

```out
2
1
```

### 输入样例:

在这里给出一组输入。例如：

```in
2
200
69
30
```

### 输出样例:

在这里给出相应的输出。例如：

```out
200invalid!
1
1
```

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

自定义一个异常类`ScoreException`，继承自Exception类。有一个私有的成员变量`message`（异常提示信息，String类型）；一个公有的无参数的构造方法，在方法中将message的值确定为“`您输入的成绩异常，请核实！`”；一个公有的方法`show()`，该方法的功能是输出message的值。

定义一个学生类`Student`，有一个私有成员变量`score`（成绩，double类型）；一个带参数的公有方法`setScore()`用于设置学生的成绩，该方法声明可能抛出异常ScoreException，当设置的成绩为负数或超过100时，会抛出一个异常对象；一个公有方法`getScore()`用于获取学生的成绩。

在测试类`Main`中，创建一个Student类的对象zhangsan，尝试调用setScore()方法来设置他的成绩（成绩从键盘输入，double类型），然后调用getScore()方法获取到该成绩后再将其输出。因用户的输入存在不确定性，以上操作有可能捕捉到异常ScoreException，一旦捕捉到该异常，则调用show()方法输出异常提示。不管是否有异常，最终输出“程序结束”。使用try...catch...finally语句实现上述功能。

### 输入格式:

输入一个小数或整数。

### 输出格式:

可能输出：
成绩为XXX
程序结束
也可能输出：
您输入的成绩异常，请核实！
程序结束

### 输入样例1:

```in
-20
```

### 输出样例1:

```out
您输入的成绩异常，请核实！
程序结束
```

### 输入样例2:

```in
90
```

### 输出样例2:

```out
成绩为90.0
程序结束
```

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

自定义一个异常类`OverLoadException`（超载异常），它是Exception的子类，有一个成员变量`message`（消息，String类型），有一个带参数的构造方法`public OverLoadException(double n)`，使得message的值为“`无法再装载重量是XXX吨的集装箱`”，其中XXX为参数n的值。有一个公有的成员方法`showMessage()`，功能为输出message的值。

定义一个类`CargoShip`（货船），有成员变量`actualWeight`（实际装载量，double类型，初始值为0）、`maxWeight`（最大装载量，double类型）；有公有的成员方法`setMaxWeight()`用于设置maxWeight的值；公有的成员方法`void loading(double weight)`的功能是给货船加载weight吨的集装箱。但是根据参数weight的值，该方法可能会抛出超载异常，如果装载后实际重量没有超过最大装载量，则实际装载量增加，并输出“`目前共装载了XXX吨货物`”，其中XXX为actualWeight的值，否则抛出一个OverLoadException异常对象。

在测试类`Main`中，定义一个CargoShip类的对象myship，从键盘输入一个数，用于设置其最大装载量。从键盘再输入两个数，作为两个集装箱的重量，尝试将这两个集装箱按输入时的顺序先后装上货船，该操作有可能捕捉到超载异常，一旦捕捉到该异常，则调用showMessage()方法输出异常提示。不管是否有异常，最终输出“货船将正点起航”。使用try...catch...finally语句实现上述功能。

### 输入格式:

第一行输入一个大于零的整数或小数，当作货船的最大装载量maxWeight。
第二行输入两个大于零的整数或小数，当作尝试装载上货船的两个集装箱的重量，中间以空格隔开。

### 输出格式:

根据输入的值，可能输出以下两种情况之一：
目前共装载了XXX吨货物
无法再装载重量是XXX吨的集装箱
最后输出：货船将正点起航


### 输入样例1:

```in
500
200 380
```

### 输出样例1:

```out
目前共装载了200.0吨货物
无法再装载重量是380.0吨的集装箱
货船将正点起航
```

### 输入样例2:

```in
1000
300 500
```

### 输出样例2:

```out
目前共装载了300.0吨货物
目前共装载了800.0吨货物
货船将正点起航
```

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

从键盘输入一个整形数n，如果输入正确的话，输出10-n后的值，如果输入错误的话输出“not int”最后输出end。

### 输入格式:

输入一个整数n。

### 输出格式:

根据情况输出结果。




### 输入样例:

在这里给出一组输入。例如：

```in
5
```
### 输出样例:

在这里给出相应的输出。例如：

```out
5
end
```
### 输入样例:

在这里给出一组输入。例如：

```in
a
```

### 输出样例:

在这里给出相应的输出。例如：

```out
not int
end
```

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

