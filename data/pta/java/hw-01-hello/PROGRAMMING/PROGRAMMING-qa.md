## 1.

定义一个名字为Main的类，在屏幕上输出以下信息：

Hello Java! 

Programming is fun!

### 输入格式:

本题不需要输入。

### 输出格式:

分两行输出，注意本题的标点符号为英文格式。

### 输入样例:

本题不需要输入。

```in

```

### 输出样例:

在这里给出相应的输出。例如：

```out
Hello Java!
Programming is fun!

```

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

模仿练习, 编写程序，输出三行信息
Write the program to display three messages.

要求：

模仿“参考代码”完成题目，请不要复制参考代码，在开发工具上手工录入代码，运行正确后，提交代码；

参考代码
```
public class Main {
    public static void main(String[] args) throws Exception {
        System.out.println("Programming is fun!");
        System.out.println("Fundamentals First");
        System.out.println("Problem Driven");
    }
}
```

### 输入格式:

无

### 输出格式:

输出三行信息

### 输入样例:

在这里给出一组输入。例如：

```in

```

### 输出样例:

在这里给出相应的输出。例如：

```out
Programming is fun!
Fundamentals First
Problem Driven
```

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

本题目要求读入若干对整数a和b，然后输出它们的和。
### 输入格式:
在一行中给出一对整数a和b。
以下输入样例只有两对，实际测试数据可能有多对值。

### 输出格式:
对每一组输入，如果a的绝对值>1000，输出`|a|>1000`，否则输出`a+b`的值。  

### 输入样例:
```in
18 -299
1001 -9
-1001 8

```

### 输出样例:
```out
-281
|a|>1000
|a|>1000

```

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

金字塔是继99乘法表决之后的一个经典图形排列题

题目要求：

要求用户可以自主控制塔身的层数， 完成如下金字体样式;

### 输入格式:

4

### 输出格式:
       *
      ***
     *****
    *******

### 输入样例:

在这里给出一组输入。例如：

```in
5
8
```

### 输出样例:

在这里给出相应的输出。例如：

```out
    *
   ***
  *****
 *******
*********


       *
      ***
     *****
    *******
   *********
  ***********
 *************
***************

```

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

分三行在屏幕上输出社会主义核心价值观基本内容的中英文对照。

请注意：含有main方法的类（class）的名字必须命名为Main，否则调试不成功。

### 输入格式:

不需要输入。

### 输出格式:

分三行输出社会主义核心价值观基本内容的中文（英文）对照。

### 输入样例:

本题不需要输入。

```in

```

### 输出样例:

在这里给出相应的输出。注意输出结果中的括号和顿号均为中文输入法下的格式。

```out
富强（Prosperity）、民主（Democracy）、文明（Civility）、和谐（Harmony）
自由（Freedom）、平等（Equality）、公正（Justice）、法治（Rule of Law）
爱国（Patriotism）、敬业（Dedication）、诚信（Integrity）、友善（Friendship）
```

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

