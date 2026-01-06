## 1.

输入若干对浮点数，对每对浮点数输出其精确的和与乘积。  
以下输入样例为两对浮点数输入，实际上有可能有不定对数的浮点数需要输入计算。

注1：直接使用**double**类型数据进行运算，无法得到精确值。  
注2：输出时直接调用BigDecimal的toString方法。

### 输入样例:
```in
69.1 0.02
1.99 2.01

```

### 输出样例:
```out
69.12
1.382
4.00
3.9999

```

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

小白学习了一些复利投资知识，想比较一下复利能多赚多少钱（所谓复利投资，是指每年投资的本金是上一年的本金加收益。而非复利投资是指每年投资金额不包含上一年的收益，即固定投资额）。假设他每年固定投资M元（整数），每年的年收益达到P（0<P<1，double)，那么经过N（整数）年后，复利投资比非复利投资多收入多赚多少钱呢？计算过程使用双精度浮点数，最后结果四舍五入输出整数（Math的round函数）。


### 输入格式:

M P N

### 输出格式:

复利收入（含本金），非复利收入（含本金），复利比非复利收入多的部分（全部取整，四舍五入）

### 输入样例:


```in
10000 0.2 3
```

### 输出样例:


```out
17280 16000 1280
```

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

**意义**：勾股定理是历史上第一个把数与形联系起来的定理，导致了无理数的发现，引起第一次数学危机，大大加深了人们对数的理解。勾股定理是欧氏几何的基础定理，不仅在几何学中是一颗光彩夺目的明珠，被誉为“几何学的基石”，而且在高等数学和其他科学领域也有着广泛的应用。1971年5月15日，尼加拉瓜发行了一套题为“改变世界面貌的十个数学公式”邮票，这十个数学公式由著名数学家选出的，勾股定理是其中之首。

**简史：**在中国，公元前十一世纪，数学家商高（西周初年人）就提出“勾三、股四、弦五”。编写于公元前一世纪以前的《周髀算经》中记录着商高与周公的一段对话。商高说：“……故折矩，勾广三，股修四，经隅五。”意为：当直角三角形的两条直角边分别为3（勾）和4（股）时，径隅（弦）则为5。以后人们就简单地把这个事实说成“勾三股四弦五”，根据该典故称勾股定理为商高定理。
公元三世纪，三国时代的赵爽对《周髀算经》内的勾股定理作出了详细注释，记录于《九章算术》中“勾股各自乘，并而开方除之，即弦”，赵爽创制了一幅“勾股圆方图”，用数形结合得到方法，给出了勾股定理的详细证明。后刘徽在刘徽注中亦证明了勾股定理。
在中国清朝末年，数学家华蘅芳提出了二十多种对于勾股定理证法。 

在国外，远在公元前约三千年的古巴比伦人就知道和应用勾股定理，他们还知道许多勾股数组。美国哥伦比亚大学图书馆内收藏着一块编号为“普林顿322”的古巴比伦泥板，上面就记载了很多勾股数。古埃及人在建筑宏伟的金字塔和测量尼罗河泛滥后的土地时，也应用过勾股定理。
公元前六世纪，希腊数学家毕达哥拉斯证明了勾股定理，因而西方人都习惯地称这个定理为毕达哥拉斯定理。
公元前4世纪，希腊数学家欧几里得在《几何原本》中给出一个证明。
1940年《毕达哥拉斯命题》出版，收集了367种不同的证法。 

**定义**：在平面上的一个直角三角形中，两个直角边边长的平方加起来等于斜边长的平方。如果设直角三角形的两条直角边长度分别是和，斜边长度是，那么可以用数学语言表达：**a$$^{2}$$+b$$^{2}$$=c$$^{2}$$**

请编程程序，实现如下功能：输入直接三角形的两个直角边的边长，求它们的斜边边长，结果保留2位小数。


提示：在Java中利用Math类的方法——**Math.sqrt()**求平方根。

***java.lang.Math.sqrt(double a) 返回一个double值的正平方根。***

### 输入格式:

输入有若干行，每行有2个数值，分别表示直角三角形的两个直角边长度，用空格分隔。

### 输出格式:

对应每行输入数据，输出直角三角形的斜边长度，结果保留2位小数。

### 输入样例：

```in
 3 4
 2.3 3
 5 6
 10 12
```

### 输出样例:

在这里给出相应的输出。例如：

```out
5.00
3.78
7.81
15.62
```

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

当飞机上的仪器出故障时，飞行员常常得估计他们到最近机场的距离。他们的方法是利用他们的高度和他们和机场之间的角度的估计。编写一个程序，帮助飞行员进行计算。

程序应以高度和角度作为输入，输出估计距离。公式为：距离distance=高度hight/ tan(degree)。 

说明：tan(degree)为角度为degree的正切值。

提示：在JAVA中，Math类的静态方法tan(double degree)，用于计算弧度为degree的角度的正切值。

在C语言中，函数名: tan， 头文件：<math.h>， 函数原型: double tan(double x);    功能: 正切函数，参 数：double x  为要操作的弧度，返回值：返回x弧度的正切值。

### 输入格式:

输入数据有多行。

每行为一组输入，分别是高度、角度。角度介于（0，PI/2）区间。

### 输出格式:

对应每行输入，求飞行员到机场的距离，保持2位小数。

### 输入样例:

在这里给出一组输入。例如：

```in
1033102 0.15
10210 0.8
104320 0.7
13200  1.524
84535300 0.523
```

### 输出样例:

在这里给出相应的输出。例如：

```out
6835613.92
9916.10
123853.07
618.16
146622115.56
```

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

**背景：**
海伦公式又译作希伦公式、海龙公式、希罗公式、海伦—秦九韶公式。它是利用三角形的三条边的边长直接求三角形面积的公式。它的特点是形式漂亮，便于记忆。
相传这个公式最早是由古希腊数学家阿基米德得出的，而因为这个公式最早出现在海伦的著作《测地术》中，所以被称为海伦公式。

中国秦九韶也得出了类似的公式，称三斜求积术。

**海伦公式的表示：**
假设在平面内，有一个三角形，边长分别为a、b、c，三角形的面积S可由以下公式求得：

![0.jpg](https://images.ptausercontent.com/e8fb7546-1fb6-401b-b8c5-19b4058a871e.jpg)

其中，p为半周长（即：周长的一半）：

![1.jpg](https://images.ptausercontent.com/e29644fb-40f0-459e-abe8-df904e7bfea6.jpg)

**提示：**  平方根的求解方式：

（1）在Java语言中，调用Math类的静态方法sqrt(double d)，返回一个double数据类型的值；

（2）在C语言中， 头文件：#include <math.h> ，sqrt() 函数用来求给定值的平方根，其原型为：  double sqrt(double x);

（3）在Python语言中，导入 math 模块：import math，通过静态对象调用方法sqrt()，形式为：math.sqrt( x )。

### 输入格式:

输入若干行。每行有3个数值。

### 输出格式:

对于每一行输入，有一行输出。

若三个数值能够构成三角形的边，则计算它的面积，保留2位小数；如果不能构造三角形，则输出“Input Error!"。

### 输入样例:

```in
3  4  5.0
1  2  3.0
-3 0 -2
```

### 输出样例:

```out
6.00
Input Error!
Input Error!
```

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

体重是反映和衡量一个人健康状况的重要标志之一，过胖和过瘦都不利于健康，BMI（身体质量指数）计算方法：体重（以千克为单位）除以身高（以米为单位）的平方。中国成人正常的BMI应在18.5-24之间，如果小于18.5为体重不足，如果大于等于24为超重，大于等于28为肥胖。请编写程序，测算身体状态。

### 输入格式:

两个数值：体重（以千克为单位），身高(以米为单位），数值间以空格分隔。例如：65.5 1.75。
注意：体重的世界纪录是727公斤，身高的世界纪录是2.72米。输入数据上限不得超过纪录，下限不得小于等于0；


### 输出格式:

输入数值超出范围            ：输出“input out of range”。例如：-2 3或者125 5。
BMI小于18.5                   ：输出“thin”。
BMI大于等于18.5小于24 ：输出“fit”。
BMI大于等于24小于28    ：输出“overweight”。
BMII大于等于28              ：输出“fat”。

### 输入样例0:

在这里给出一组输入。例如：

```in
-2  8
```

### 输出样例0:

在这里给出相应的输出。例如：

```out
input out of range
```

### 输入样例1:

在这里给出一组输入。例如：

```in
70 1.75
```

### 输出样例1:

在这里给出相应的输出。例如：

```out
fit
```

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

