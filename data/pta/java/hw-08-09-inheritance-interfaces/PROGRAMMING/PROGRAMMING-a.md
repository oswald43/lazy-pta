## 1.

### Answer ✅

```java
import java.util.Arrays;
import java.util.Scanner;

class PersonSortable implements Comparable<PersonSortable> {
    private String name;
    private int age;

    public PersonSortable(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + "-" + age;
    }

    @Override
    public int compareTo(PersonSortable o) {
        int nameCompare = this.name.compareTo(o.name);
        if (nameCompare != 0) {
            return nameCompare;
        }
        return Integer.compare(this.age, o.age);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        PersonSortable[] arr = new PersonSortable[n];
        for (int i = 0; i < n; i++) {
            String name = scanner.next();
            int age = scanner.nextInt();
            arr[i] = new PersonSortable(name, age);
        }
        Arrays.sort(arr);
        for (PersonSortable p : arr) {
            System.out.println(p);
        }
        System.out.println(Arrays.toString(PersonSortable.class.getInterfaces()));
        scanner.close();
    }
}
```

## 2.

### Answer ✅

```java
import java.util.*;

// PersonSortable2 类
class PersonSortable2 {
    private String name;
    private int age;

    // 有参构造函数
    public PersonSortable2(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // getter 方法
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    // toString 方法
    @Override
    public String toString() {
        return name + "-" + age;
    }
}

// 按 name 升序排序的比较器
class NameComparator implements Comparator<PersonSortable2> {
    @Override
    public int compare(PersonSortable2 o1, PersonSortable2 o2) {
        return o1.getName().compareTo(o2.getName());
    }
}

// 按 age 升序排序的比较器
class AgeComparator implements Comparator<PersonSortable2> {
    @Override
    public int compare(PersonSortable2 o1, PersonSortable2 o2) {
        return Integer.compare(o1.getAge(), o2.getAge());
    }
}

// 主类
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        PersonSortable2[] people = new PersonSortable2[n];

        // 输入 n 行 name age 并创建对象
        for (int i = 0; i < n; i++) {
            String name = scanner.next();
            int age = scanner.nextInt();
            people[i] = new PersonSortable2(name, age);
        }

        // 按 name 升序排序并输出
        System.out.println("NameComparator:sort");
        Arrays.sort(people, new NameComparator());
        for (PersonSortable2 person : people) {
            System.out.println(person);
        }

        // 按 age 升序排序并输出
          System.out.println("AgeComparator:sort");
        Arrays.sort(people, new AgeComparator());
        for (PersonSortable2 person : people) {
            System.out.println(person);
        }

        // 输出实现的接口
        System.out.println(Arrays.toString(NameComparator.class.getInterfaces()));
        System.out.println(Arrays.toString(AgeComparator.class.getInterfaces()));

        scanner.close();
    }
}
```

## 3.

### Answer ✅

```java
import java.util.Scanner;

abstract class BallMatch {
    protected String result;
    
    // 模板方法，定义比赛流程
    public void compete() {
        checkin();
        start();
        play();
        end();
        announceResult();
    }
    
    // 共同步骤
    private void checkin() {
        System.out.println("now checking in");
    }
    
    private void start() {
        System.out.println("now starting");
    }
    
    private void end() {
        System.out.println("now ending");
    }
    
    // 抽象方法，由子类实现
    protected abstract void play();
    
    // 具体方法，由子类调用
    protected void announceResult() {
        System.out.println("now annoucing result: " + result);
    }
}

class FootballMatch extends BallMatch {
    public FootballMatch(String result) {
        this.result = result;
    }
    
    @Override
    protected void play() {
        System.out.println("now playing football");
    }
}

class BasketBallMatch extends BallMatch {
    public BasketBallMatch(String result) {
        this.result = result;
    }
    
    @Override
    protected void play() {
        System.out.println("now playing basketball");
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // 读取比赛类型和比分
        int type = scanner.nextInt();
        String result = scanner.next();
        
        // 根据类型创建不同的比赛
        BallMatch match;
        if (type == 1) {
            match = new FootballMatch(result);
        } else {
            match = new BasketBallMatch(result);
        }
        
        // 打印比赛过程
        match.compete();
        
        scanner.close();
    }
}
```

## 4.

### Answer ✅

```java
import java.util.*;

// 抽象车类
abstract class Car {
    protected String name;
    protected double pricePerDay;

    public Car(String name, double pricePerDay) {
        this.name = name;
        this.pricePerDay = pricePerDay;
    }

    public abstract int getPassenger(); // 载客量
    public abstract double getCargo();   // 载货量(吨)
    public double getPricePerDay() {
        return pricePerDay;
    }
}

// 客车
class Bus extends Car {
    private int passenger;

    public Bus(String name, int passenger, double pricePerDay) {
        super(name, pricePerDay);
        this.passenger = passenger;
    }

    @Override
    public int getPassenger() {
        return passenger;
    }

    @Override
    public double getCargo() {
        return 0.0;
    }
}

// 货车
class Truck extends Car {
    private double cargo;

    public Truck(String name, double cargo, double pricePerDay) {
        super(name, pricePerDay);
        this.cargo = cargo;
    }

    @Override
    public int getPassenger() {
        return 0;
    }

    @Override
    public double getCargo() {
        return cargo;
    }
}

// 皮卡车
class Pickup extends Car {
    private int passenger;
    private double cargo;

    public Pickup(String name, int passenger, double cargo, double pricePerDay) {
        super(name, pricePerDay);
        this.passenger = passenger;
        this.cargo = cargo;
    }

    @Override
    public int getPassenger() {
        return passenger;
    }

    @Override
    public double getCargo() {
        return cargo;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 初始化车辆列表
        Car[] cars = new Car[11]; // 索引1~10对应车型编号
        cars[1] = new Bus("A", 5, 800);
        cars[2] = new Bus("B", 5, 400);
        cars[3] = new Bus("C", 5, 800);
        cars[4] = new Bus("D", 51, 1300);
        cars[5] = new Bus("E", 55, 1500);
        cars[6] = new Pickup("F", 5, 0.45, 500);
        cars[7] = new Pickup("G", 5, 2.0, 450);
        cars[8] = new Truck("H", 3, 200);
        cars[9] = new Truck("I", 25, 1500);
        cars[10] = new Truck("J", 35, 2000);

        int flag = sc.nextInt();
        if (flag == 0) {
            System.out.println("0 0.00 0");
            sc.close();
            return;
        }

        int N = sc.nextInt();
        int totalPassenger = 0;
        double totalCargo = 0.0;
        int totalCost = 0;

        for (int i = 0; i < N; i++) {
            int id = sc.nextInt();
            int days = sc.nextInt();
            Car c = cars[id];
            totalPassenger += c.getPassenger() * days;
            totalCargo += c.getCargo() * days;
            totalCost += (int)(c.getPricePerDay() * days);
        }

        System.out.printf("%d %.2f %d%n", totalPassenger, totalCargo, totalCost);
        sc.close();
    }
}
```

## 5.

### Answer ✅

```java
import java.util.*;

abstract class Express {  // 去掉 public
    int weight;

    public Express(int weight) {
        this.weight = weight;
    }

    public int getWeight() {
        return weight;
    }

    public abstract int getTotal();
}

class DDExpress extends Express {  // 去掉 public
    public DDExpress(int weight) {
        super(weight);
    }

    @Override
    public int getTotal() {
        int money = 0;
        if (weight == 1) {
            money = 5;
        } else {
            money = 5 + (weight - 1);
        }
        return money;
    }
}

class SLExpress extends Express {  // 去掉 public
    public SLExpress(int weight) {
        super(weight);
    }

    @Override
    public int getTotal() {
        int money = 0;
        if (weight == 1) {
            money = 12;
        } else {
            money = 12 + 2 * (weight - 1);
        }
        return money;
    }
}

public class Main {  // 只有这个是 public
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int money = 0;
        int n = scanner.nextInt(); // 先读次数，避免循环里重复判断

        for (int i = 0; i < n; i++) {
            String type = scanner.next(); // 建议改名 sre -> type，更清晰
            int num = scanner.nextInt();

            if ("SL".equals(type)) {
                SLExpress slExpress = new SLExpress(num);
                money += slExpress.getTotal();
            } else if ("DD".equals(type)) {
                DDExpress ddExpress = new DDExpress(num);
                money += ddExpress.getTotal();
            }
        }
        System.out.println(money);
        scanner.close(); // 建议关闭 Scanner，养成好习惯
    }
}
```

