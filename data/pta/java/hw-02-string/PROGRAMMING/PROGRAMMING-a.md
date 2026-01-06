## 1.

### Answer ✅

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // 读取所有输入行
        while (scanner.hasNextLine()) {
            String line = scanner.nextLine();
            System.out.println(isValidIdentifier(line));
        }
        
        scanner.close();
    }
    
    // 判断字符串是否为合法的Java标识符
    private static boolean isValidIdentifier(String s) {
        // 空字符串不是合法标识符
        if (s.isEmpty()) {
            return false;
        }
        
        // 检查首字符
        char firstChar = s.charAt(0);
        if (!isValidFirstCharacter(firstChar)) {
            return false;
        }
        
        // 检查剩余字符
        for (int i = 1; i < s.length(); i++) {
            char c = s.charAt(i);
            if (!isValidCharacter(c)) {
                return false;
            }
        }
        
        return true;
    }
    
    // 检查是否为合法的首字符
    private static boolean isValidFirstCharacter(char c) {
        // 首字符可以是字母、下划线或美元符号，但不能是数字
        return Character.isLetter(c) || c == '_' || c == '$';
    }
    
    // 检查是否为合法的非首字符
    private static boolean isValidCharacter(char c) {
        // 其他字符可以是字母、数字、下划线或美元符号
        return Character.isLetterOrDigit(c) || c == '_' || c == '$';
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
        
        while (scanner.hasNextLine()) {
            String choice = scanner.nextLine().trim();
            System.out.println("choice=" + choice);
            
            if (choice.equals("double")) {
                // 处理double类型输入
                String[] doubles = scanner.nextLine().split("\\s+");
                double d1 = Double.parseDouble(doubles[0]);
                double d2 = Double.parseDouble(doubles[1]);
                double d3 = Double.parseDouble(doubles[2]);
                
                // 右侧填充空格，左侧填充空格，直接输出，均保留2位小数，宽度5
                System.out.printf("%.2f ,%5.2f,%.2f%n", d1, d2, d3);
            } 
            else if (choice.equals("int")) {
                // 处理int类型输入
                String[] integers = scanner.nextLine().split("\\s+");
                int sum = 0;
                for (String num : integers) {
                    sum += Integer.parseInt(num);
                }
                System.out.println(sum);
            } 
            else if (choice.equals("str")) {
                // 处理字符串类型输入
                String[] strings = scanner.nextLine().split("\\s+");
                // 去除空格并倒序输出
                StringBuilder sb = new StringBuilder();
                for (int i = strings.length - 1; i >= 0; i--) {
                    sb.append(strings[i].replaceAll("\\s+", ""));
                }
                System.out.println(sb.toString());
            } 
            else if (choice.equals("line")) {
                // 处理一行字符串
                String line = scanner.nextLine();
                System.out.println(line.toUpperCase());
            } 
            else {
                // 其他情况
                System.out.println("other");
                // 如果输入是end，退出循环
                if (choice.equals("end")) {
                    break;
                }
            }
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
        // 读取输入的图书信息
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        scanner.close();
        
        // 按分号分割字符串，得到每本图书的信息
        String[] bookEntries = input.split(";");
        
        int totalPrice = 0;
        
        // 处理每本图书的信息
        for (String entry : bookEntries) {
            // 去除前后空格
            entry = entry.trim();
            if (entry.isEmpty()) {
                continue; // 跳过可能的空字符串
            }
            
            // 按冒号分割得到书名和价格部分
            String[] parts = entry.split(":", 2);
            if (parts.length < 2) {
                continue; // 格式不正确，跳过
            }
            
            // 提取书名并去除可能的空格
            String bookName = parts[0].trim();
            
            // 提取价格并去除可能的空格，转换为整数
            String priceStr = parts[1].trim();
            int price = Integer.parseInt(priceStr);
            
            // 累加总价格
            totalPrice += price;
            
            // 输出当前图书信息
            System.out.println(bookName + "--" + price);
        }
        
        // 输出总价格
        System.out.println("总价格--" + totalPrice);
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
        
        // 循环读取每行输入
        while (true) {
            String line = scanner.nextLine();
            
            // 如果输入"end"，则结束程序
            if (line.equals("end")) {
                break;
            }
            
            int sum = 0;
            // 遍历字符串中的每个字符
            for (int i = 0; i < line.length(); i++) {
                char c = line.charAt(i);
                // 检查是否为数字字符
                if (Character.isDigit(c)) {
                    // 将字符转换为对应的数字并累加
                    sum += Character.getNumericValue(c);
                }
            }
            
            // 输出当前行的数字之和
            System.out.println(sum);
        }
        
        scanner.close();
    }
}

```

