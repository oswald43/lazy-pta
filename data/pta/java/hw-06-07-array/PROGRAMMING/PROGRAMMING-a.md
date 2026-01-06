## 1.

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

