## 1.

找出长度最长的单词（不同长度的单词只出现一次）。

### 输入格式:

输入格式为单行形式，单词之间使用空格分割。

### 输出格式:

输出格式为长度最长的一个单词。

### 输入样例:

在这里给出一组输入。例如：

```in
an not need happy suggest
```

### 输出样例:

在这里给出相应的输出。例如：

```out
suggest
```

### Answer ✅

```java
import java.util.Scanner;

// 类名改为 Main，与文件名一致
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] words = scanner.nextLine().split(" ");
        String longestWord = "";
        
        for (String word : words) {
            if (word.length() > longestWord.length()) {
                longestWord = word;
            }
        }
        
        System.out.println(longestWord);
        scanner.close();
    }
}
```

## 2.

现需要统计若干段文字(英文)中的不同单词数量。  
如果不同的单词数量不超过10个，则将所有单词输出(按字母顺序)，否则输出前10个单词。  


**注1：**单词之间以空格(1个或多个空格)为间隔。  
**注2：**忽略空行或者空格行。  
**注3：**单词大小写敏感，即'word'与'WORD'是两个不同的单词 。 

### 输入说明
若干行英文，最后以`!!!!!`为结束。

### 输出说明
不同单词数量。
然后输出前10个单词（按字母顺序），如果所有单词不超过10个，则将所有的单词输出。

### 输入样例
```in
Failure is probably the fortification in your pole
It is like a peek your wallet as the thief when you
are thinking how to spend several hard-won lepta
when you Are wondering whether new money it has laid
background Because of you, then at the heart of the
most lax alert and most low awareness and left it
godsend failed
!!!!!

```
### 输出样例
```out
49
Are
Because
Failure
It
a
alert
and
are
as
at

```

### Answer ✅

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // 使用 TreeSet 自动去重并按字母顺序排序（大小写敏感，符合字典序规则）
        Set<String> wordSet = new TreeSet<>();

        // 读取输入，直到遇到 "!!!!!" 结束
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine().trim(); // 去除行首尾空格，处理空行/空格行
            
            // 终止条件：当前行是 "!!!!!"（trim后不影响，因为终止符无空格）
            if (line.equals("!!!!!")) {
                break;
            }
            
            // 忽略空行或纯空格行（trim后为空字符串）
            if (line.isEmpty()) {
                continue;
            }
            
            // 按 1个或多个空格 分割单词（正则 \\s+ 匹配任意空白字符序列）
            String[] words = line.split("\\s+");
            
            // 将非空单词添加到集合（去重+排序）
            for (String word : words) {
                if (!word.isEmpty()) { // 避免分割后出现空字符串（极端情况）
                    wordSet.add(word);
                }
            }
        }
        scanner.close();

        // 输出不同单词的总数量
        System.out.println(wordSet.size());

        // 输出前10个单词（按字母顺序，TreeSet已排序）
        int count = 0;
        for (String word : wordSet) {
            if (count >= 10) {
                break;
            }
            System.out.println(word);
            count++;
        }
    }
}
```

## 3.

输入一篇英文文章，碰到"!!!!!"的时候停止，输出文章中出现的不重复单词的个数(注意：单词不区分大小写，如：The和the为一个单词)

### 输入格式:

一篇英文文章，以"!!!!!"结尾

### 输出格式:

不重复单词的个数

### 输入样例:


```in
Unmanned aerial vehicles have been adopted in the inspection of violations Procurators will file public interest litigations against perpetrators who will need to replant trees take down illegal buildings control pollution and compensate environment-related losses  
The Yellow River is the second longest river in China It originates in the northwestern province of Qinghai and runs through nine provinces and autonomous regions in western central north and eastern China  
!!!!!

```

### 输出样例:


```out
55

```

### Answer ✅

```java
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // 用 HashSet 存储单词（自动去重），存储时统一转为小写（实现大小写不敏感）
        Set<String> wordSet = new HashSet<>();

        // 逐行读取输入，直到遇到 "!!!!!" 终止
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            
            // 终止条件：当前行等于 "!!!!!"（无需 trim，终止符无多余空格）
            if (line.equals("!!!!!")) {
                break;
            }
            
            // 忽略空行或纯空格行（trim 后为空字符串）
            if (line.trim().isEmpty()) {
                continue;
            }
            
            // 按 1个或多个空格 分割单词（正则 \\s+ 匹配任意空白字符序列）
            String[] words = line.split("\\s+");
            
            // 遍历单词，统一转为小写后添加到集合（去重+大小写不敏感）
            for (String word : words) {
                if (!word.isEmpty()) { // 避免极端情况分割出空字符串
                    wordSet.add(word.toLowerCase());
                }
            }
        }
        scanner.close();

        // 输出不重复单词的个数（HashSet 的大小即为去重后的数量）
        System.out.println(wordSet.size());
    }
}
```

## 4.

**背景介绍：** 北宋人贾宪约1050年首先使用“贾宪三角”进行高次开方运算。

南宋数学家杨辉在《详解九章算法》（1261年）记载并保存了“贾宪三角”，故称杨辉三角。杨辉三角是中国数学史上的一个伟大成就。
杨辉三角，是中国古代数学的杰出研究成果之一，它把二项式系数图形化，把组合数内在的一些代数性质直观地从图形中体现出来，是一种离散型的数与形的结合。

中国南宋数学家杨辉1261年所著的《详解九章算法》一书中出现。在欧洲，帕斯卡（1623----1662）在1654年发现这一规律，所以这个表又叫做帕斯卡三角形。帕斯卡的发现比杨辉要迟393年，比贾宪迟600年。

**杨辉三角数字的特点为：**

（1）在三角形的首列和对角线上，数值均为1；

（2）其余数据为：每个数字等于上一行的左右两个数字之和，第n+1行的第i个数等于第n行的第i-1个数和第i个数之和，用公式表示为： C(n+1,i)=C(n,i)+C(n,i-1)。

图示为：

![1.jpg](https://images.ptausercontent.com/833618de-783c-4825-b8c5-d826b7844768.jpg)

**杨辉三角的应用：**(a+b)的n次方，展开式中的各项系数依次对应杨辉三角的第(n+1)行中的每一项。

### 输入格式:
欲打印杨辉三角的行数n（1<=n<=13)。

### 输出格式:
每个数字占据4个字符的位置，数字左对齐，数字不足4位的右边留出空格。

### 输入样例:

```in
13
```

### 输出样例:

```out
1   
1   1   
1   2   1   
1   3   3   1   
1   4   6   4   1   
1   5   10  10  5   1   
1   6   15  20  15  6   1   
1   7   21  35  35  21  7   1   
1   8   28  56  70  56  28  8   1   
1   9   36  84  126 126 84  36  9   1   
1   10  45  120 210 252 210 120 45  10  1   
1   11  55  165 330 462 462 330 165 55  11  1   
1   12  66  220 495 792 924 792 495 220 66  12  1   
```

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt(); // 读取要打印的行数
        scanner.close();

        // 二维数组存储杨辉三角（n行，每行最多n个元素）
        int[][] yanghui = new int[n][n];

        // 填充杨辉三角
        for (int i = 0; i < n; i++) {
            // 每行的首元素和尾元素都是1
            yanghui[i][0] = 1;
            yanghui[i][i] = 1;

            // 填充中间元素（从第2行开始，第2个元素到倒数第2个元素）
            for (int j = 1; j < i; j++) {
                // 当前元素 = 上一行前一列元素 + 上一行同列元素
                yanghui[i][j] = yanghui[i-1][j-1] + yanghui[i-1][j];
            }
        }

        // 打印杨辉三角（每个数字左对齐，占4个字符）
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                // %-4d：左对齐，占4个字符，不足补空格
                System.out.printf("%-4d", yanghui[i][j]);
            }
            // 每行结束换行
            System.out.println();
        }
    }
}
```

## 5.

根据教师的花名册，找到出勤最多的人。

### 输入格式:

出勤记录单行给出，数据直接使用空格分割。

### 输出格式:

单行输出（若有多人，人名直接使用空格分割，结尾处没有空格）。

### 输入样例:

在这里给出一组输入。例如：

```in
zs ls ww ml zs ls ml zs ww
```

### 输出样例:

在这里给出相应的输出。例如：

```out
zs
```

### Answer ✅

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // 读取单行出勤记录，按空格分割为姓名数组
        String[] names = scanner.nextLine().split("\\s+");
        scanner.close();

        // 用 HashMap 统计每个人的出勤次数（键：姓名，值：次数）
        Map<String, Integer> countMap = new HashMap<>();
        for (String name : names) {
            // 若姓名已存在，次数+1；否则初始化为1
            countMap.put(name, countMap.getOrDefault(name, 0) + 1);
        }

        // 找出最大出勤次数
        int maxCount = 0;
        for (int count : countMap.values()) {
            if (count > maxCount) {
                maxCount = count;
            }
        }

        // 收集所有出勤次数等于最大次数的姓名
        List<String> resultList = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() == maxCount) {
                resultList.add(entry.getKey());
            }
        }

        // 按要求格式输出（姓名用空格分割，结尾无空格）
        for (int i = 0; i < resultList.size(); i++) {
            if (i > 0) {
                System.out.print(" ");
            }
            System.out.print(resultList.get(i));
        }
        System.out.println();
    }
}
```

## 6.

1986年，中国实施“863”计划，航天技术列入其中。以载人飞船开始起步，最终建成我国的空间站。 
1992年9月21日，中国实施载人航天工程，并确定了三步走的发展战略：第一步，发射载人飞船，建成初步配套的试验性载人飞船工程。第二步，突破载人飞船和空间飞行器的交会对接技术，利用载人飞船技术改装、发射一个空间实验室。第三步，建造载人空间站。

在长期的奋斗中，我国航天工作者不仅创造了非凡的业绩，而且铸就了特别能吃苦、特别能战斗、特别能攻关、特别能奉献的载人航天精神。载人航天精神，是“两弹一星”精神在新时期的发扬光大，是我们伟大民族精神的生动体现，永远值得全党、全军和全国人民学习。
```

截至2021年4月，历任航天英雄名字如下：
杨利伟（神舟五号）
费俊龙、聂海胜（神舟六号）
翟志刚、景海鹏、刘伯明（神舟七号）
景海鹏、刘旺、刘洋（神舟九号）
聂海胜、张晓光、王亚平（神舟十号）
景海鹏、陈东（神舟十一号）
```

会编程的小伙伴们，请以他们出征太空的先后顺序，统计一下航天英雄们出征太空的次数，以实际行动向航天员们致敬！
### 输入格式:

```
每次航天飞船的编号为一行读入数据，分别读入每次飞上太空的航天英雄的姓名，名字中间有一个空格分隔。
最后一行为“end“，表示输入结束。

提示：目前，中国航天员的数量小于20。
```


### 输出格式:

```
以出征太空的先后顺序，统计航天英雄们出征太空的次数。
每位航天员占一行，航天员姓名与出征次数中间有一个空格。
```

### 输入样例:

```in
杨利伟
费俊龙 聂海胜
翟志刚 景海鹏 刘伯明
景海鹏 刘旺 刘洋
聂海胜 张晓光 王亚平
景海鹏 陈东
end
```

### 输出样例:

```out
杨利伟 1
费俊龙 1
聂海胜 2
翟志刚 1
景海鹏 3
刘伯明 1
刘旺 1
刘洋 1
张晓光 1
王亚平 1
陈东 1
```
提示：
* 对于Java语言，此题有两种解决方案：
  * （1）使用数组来解决；
  * （2）使用java.util.Map接口的实现类LinkedMap来解决。
    * LinkedHashMap是HashMap的子类，保证在遍历map元素时，可以按照添加的顺序实现遍历，对于频繁的遍历操作，它的执 行效率高于HashMap.
 * 对于Python语言，。。。。
 * 对于C语言，。。。。。。。

### Answer ✅

```java
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // LinkedHashMap 保证首次出现顺序（出征先后），同时统计次数
        Map<String, Integer> astronautCount = new LinkedHashMap<>();
        Scanner scanner = new Scanner(System.in);

        // 循环读取输入，直到 "end" 结束
        while (true) {
            String line = scanner.nextLine().trim();
            if ("end".equals(line)) {
                break; // 终止条件
            }
            if (line.isEmpty()) {
                continue; // 忽略空行
            }
            // 按单个空格分割姓名（题目明确分隔规则）
            String[] names = line.split(" ");
            for (String name : names) {
                // 次数统计：不存在则初始为1，存在则+1
                astronautCount.put(name, astronautCount.getOrDefault(name, 0) + 1);
            }
        }
        scanner.close();

        // 按首次出征顺序输出结果
        for (Map.Entry<String, Integer> entry : astronautCount.entrySet()) {
            System.out.printf("%s %d%n", entry.getKey(), entry.getValue());
        }
    }
}
```

