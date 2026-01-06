## 1.

### Answer ✅

```java
 import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    static class Person {
        private String name;
        private boolean gender;
        private int age;
        private int id;
        private static int count = 0;

        static {
            System.out.println("This is static initialization block");
        }

        {
            id = count;
            System.out.println("This is initialization block, id is " + id);
            count++;
        }

        public Person() {
            System.out.println("This is constructor");
        }

        public Person(String name, boolean gender, int age) {
            this.name = name;
            this.gender = gender;
            this.age = age;
        }

        @Override
        public String toString() {
            return "Person [name=" + name + ", age=" + age + ", gender=" + gender + ", id=" + id + "]";
        }

        // 添加getter方法用于访问私有属性
        public String getName() { return name; }
        public int getAge() { return age; }
        public boolean isGender() { return gender; }
        public int getId() { return id; }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();

        List<Person> persons = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            String[] parts = scanner.nextLine().split(" ");
            String name = parts[0];
            int age = Integer.parseInt(parts[1]);
            boolean gender = Boolean.parseBoolean(parts[2]);
            persons.add(new Person(name, gender, age));
        }

        // 逆序输出
        for (int i = persons.size() - 1; i >= 0; i--) {
            System.out.println(persons.get(i));
        }

        // 无参构造函数创建对象
        Person p = new Person();
        // 使用getter方法访问私有属性
        System.out.println(p.getName() + "," + p.getAge() + "," + p.isGender() + "," + p.getId());
        System.out.println(p);

        scanner.close();
    }
}
```

## 2.

### Answer ✅

```java
 import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        List<int[]> list = new ArrayList<>();
        
        // 读取所有选手的漂亮值和力量值
        for (int i = 0; i < T; i++) {
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            list.add(new int[]{x, y});
        }
        
        // 找出最小的漂亮值
        int minX = Integer.MAX_VALUE;
        for (int[] pair : list) {
            if (pair[0] < minX) {
                minX = pair[0];
            }
        }
        
        // 统计最小漂亮值的人数并计算力量和
        int count = 0;
        long sumY = 0; // 使用long避免力量值过大导致溢出
        for (int[] pair : list) {
            if (pair[0] == minX) {
                count++;
                sumY += pair[1];
            }
        }
        
        // 输出结果
        System.out.println(count + " " + sumY);
        scanner.close();
    }
}
```

## 3.

### Answer ✅

```java
 import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // 读取身份证数量
        int n = Integer.parseInt(scanner.nextLine());
        List<String> ids = new ArrayList<>();
        // 读取n个身份证号
        for (int i = 0; i < n; i++) {
            ids.add(scanner.nextLine());
        }
        // 处理指令
        while (true) {
            String cmd = scanner.nextLine();
            if (cmd.equals("sort1")) {
                // 处理sort1：提取并格式化出生日期，排序后输出
                List<String> birthdays = new ArrayList<>();
                for (String id : ids) {
                    String ymd = id.substring(6, 14);
                    String birth = ymd.substring(0, 4) + "-" + ymd.substring(4, 6) + "-" + ymd.substring(6, 8);
                    birthdays.add(birth);
                }
                Collections.sort(birthdays);
                for (String b : birthdays) {
                    System.out.println(b);
                }
            } else if (cmd.equals("sort2")) {
                // 处理sort2：按出生日期对身份证号排序后输出
                List<String> sortedIds = new ArrayList<>(ids);
                sortedIds.sort(Comparator.comparing(id -> id.substring(6, 14)));
                for (String id : sortedIds) {
                    System.out.println(id);
                }
            } else {
                // 其他输入，输出exit并退出
                System.out.println("exit");
                break;
            }
        }
        scanner.close();
    }
}
```

