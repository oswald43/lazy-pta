## 1.

飞驰而过的车，它的车牌是由一个四位数构成的，只有3个路人看到它

甲说：它的前两位是一样的

乙说：它的后两位是一样的，但是和它的前两位不一样

丙说：它是一个数的平方

请你根据路人甲乙丙的叙述，写一个程序，算出该车牌号

### 输入格式:

无 

### 输出格式:

车牌号码是7744

### 输入样例:



```in

```

### 输出样例:

在这里给出相应的输出。例如：

```out
车牌号码是7744
```

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

输入一个以回车符为结束标志的字符串（少于80个字符），判断该字符串是否为回文。
回文就是字符串中心对称，如“abcba”、“abccba”是回文，“abcdba”不是回文。

### 输入格式:

输入一个以回车符为结束标志的字符串（少于80个字符）

### 输出格式:

为回文，输出yes; 非回文，输出no，注意输出的结果后面有回车符

### 输入样例:
```in
abccba

```

### 输出样例:
```out
yes

```

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

一年一度的升旗手选拔又要到了，学校要求每个班级选出一位同学做升旗手的候选人。因
为升旗手对身高有严格的要求，所以班主任决定选班级里个子最高的同学(如果两位同学
一样高，则选任意一位)。你能很快地给老师答案么?

### 输入格式:

输入包括两行。 第一行:包括一个整数n，表示班级里共有n位同学。 第二行:包含n个三位数，表示每一位同学的身高。

### 输出格式:

输出身高最高的同学的身高。

### 输入样例:


```in
4
130 125 129 140
```

### 输出样例:


```out
140
```

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

已知有一对兔子，每个月可以生一对兔子，而小兔子一个月后又可以生一对小兔子(比如:2月份出生的小兔子4月份可以生育)。也就是说，兔子的对数为：第一个月1对，第二个月2对，第三个月3对，第四个月5对.....假设兔子的生育期为两年，且不死。那么问题来了，你能说出每个月的兔子数么?

### 输入格式:

输入一个数n，表示第n个月，1<=n<=24。

### 输出格式:

输出这个月兔子的数目。

### 输入样例:

```in
4
```

### 输出样例:

```out
5
```

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

小明来到了古都西安，想去参观大唐西市！

西安的道路可以看做是与x轴或y轴垂直的直线，小明位于(a,b)，而目的地位于(c,d)，问最少几步可以到达。

### 输入格式:

一行中四个整数，a,b,c,d，表示坐标为(a,b)与(c,d)，这里0<=a,b,c,d<=1000

### 输出格式:

输出这两个点的西安距离。

### 输入样例:

```in
0 0 3 4
```

### 输出样例:

```out
7
```

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

