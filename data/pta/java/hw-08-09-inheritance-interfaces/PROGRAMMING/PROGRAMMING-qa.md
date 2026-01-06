## 1.

编写实现**Comparable**接口的`PersonSortable`类，使其按name以及age排序

## 1.编写PersonSortable类
属性：`private name(String)`、`private age(int)`  
有参构造函数：参数为name,age  
toString函数：返回格式为：name-age  
实现**Comparable**接口：实现先对name升序排序，如果name相同则对age进行升序排序

## 2.main方法中
1. 首先输入n  
2. 输入n行name age，并创建n个对象放入数组
3. 对数组进行排序后输出。
4. 最后一行使用`System.out.println(Arrays.toString(PersonSortable.class.getInterfaces()));`输出PersonSortable所实现的所有接口

### 输入样例:
```in
5
zhang 15
zhang 12
wang 14
Wang 17
li 17

```
### 输出样例:
```out
Wang-17
li-17
wang-14
zhang-12
zhang-15
// 这行是标识信息，应替换为**2.main方法中**中的第4点要求。

```

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

Arrays.sort可以对所有实现Comparable的对象进行排序。但如果有多种排序需求，如有时候需对name进行降序排序，有时候只需要对年龄进行排序。使用Comparable无法满足这样的需求。可以编写不同的`Comparator`来满足多样的排序需求。

## 1.编写PersonSortable2类
属性：`private name(String)`、`private age(int)`  
有参构造函数：参数为name,age  
toString方法：返回格式`name-age`

## 2 编写Comparator类
1. 编写`NameComparator`类，实现对name进行**升序排序**
2. 编写`AgeComparator`类，对age进行**升序排序**

## 3.main方法中
1. 输入n
2. 输入n行name age，并创建n个对象放入数组
3. 对数组按照name进行升序排序后输出。
4. 在3的基础上对数组按照age进行升序排序后输出。
5. 最后最后两行使用如下代码输出NameComparator与AgeComparator所实现的所有接口。

```
System.out.println(Arrays.toString(NameComparator.class.getInterfaces()));
System.out.println(Arrays.toString(AgeComparator.class.getInterfaces()));

```
  

### 输入样例:
```in
5
zhang 15
zhang 12
wang 14
Wang 17
li 17


```
### 输出样例:
```out
NameComparator:sort
Wang-17
li-17
wang-14
zhang-15
zhang-12
AgeComparator:sort
zhang-12
wang-14
zhang-15
Wang-17
li-17
//最后两行是标识信息

```

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

利用模板方法来构造相关类实现下述过程：
各种球类的玩法虽然不同，但是球类比赛的过程是类似的，都包含如下几个步骤：
1球员报道-->2比赛开始-->3比赛-->4比赛结束-->5公布比赛成绩，且其中1 2 4步相同 第3步根据球类不同，玩法不同，第5步根据得分不同，公布方式结果不同
构造类BallMatch表示球类比赛，包含方法compete表示真个比赛过程
构造各个比赛过程的函数checkin,start,play,end,annouceResult
打印信息如下：
now checking in
now starting
now playing football
now ending
now annoucing result: 2-3
构造类FootballMatch和BasketBallMatch，实现具体的比赛过程。

在main函数中，读入整数i，如果为1，则构造一个足球比赛过程，如果为2则构造一个篮球比赛过程
打印比赛过程

### 输入格式:

比赛类型 比分

### 输出格式:

比赛过程信息

### 输入样例:

在这里给出一组输入。例如：

```in
1 2-3
```

### 输出样例:

在这里给出相应的输出。例如：

```out
now checking in
now starting
now playing football
now ending
now annoucing result: 2-3
```

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

各位面向对象的小伙伴们，在学习了面向对象的核心概念——类的封装、继承、多态之后，答答租车系统开始营运了。

请你充分利用面向对象思想，为公司解决智能租车问题，根据客户选定的车型和租车天数，来计算租车费用，最大载客人数，最大载载重量。

公司现有三种车型（客车、皮卡车、货车），每种车都有名称和租金的属性；其中：客车只能载人，货车只能载货，皮卡车是客货两用车，即可以载人，也可以载货。

下面是答答租车公司的可用车型、容量及价目表：

![007.jpg](https://images.ptausercontent.com/d462b296-09af-4762-b762-28fb5bb2a05b.jpg)

要求：根据客户输入的所租车型的序号及天数，计算所能乘载的总人数、货物总数量及租车费用总金额。

### 输入格式:
首行是一个整数：代表要不要租车 1——要租车（程序继续），0——不租车（程序结束）；

第二行是一个整数，代表要租车的数量N；

接下来是N行数据，每行2个整数m和n，其中：m表示要租车的编号，n表示租用该车型的天数。


### 输出格式:
若成功租车，则输出一行数据，数据间有一个空格，含义为：
    载客总人数 载货总重量（保留2位小数） 租车金额（整数）
若不租车，则输出： 
    0 0.00 0（含义同上）


### 输入样例:

```in
1
2
1 1
2 2

```

### 输出样例:

在这里给出相应的输出。例如：

```out
15 0.00 1600
```

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

现需要编写一个简易快递计价程序。具体来说：

1、**抽象**快递类`Express`，其包含一个属性`int weight`表示快递重量（单位为kg），一个方法`getWeight()`用于返回快递重量和一个**抽象方法**`getTotal()`用于计算快递运费。

2、两个类继承`Express`，分别是：
（a）顺路快递`SLExpress`：计价规则为首重(1kg)12元，每增加1kg费用加2元。
（b）地地快递`DDExpress`：计价规则为首重(1kg)5元，每增加1kg费用加1元。

3、Main：
接收用户通过控制台输入的N行信息，自动计算所有快递的运费总和。


### 输入样例:

```in
6
SL 2
DD 2
SL 1
SL 1
SL 1
DD 3
```

### 输入解释:

第1行n表示需要计算的快递件数
第2至n+1表示每个快递信息，即选哪家快递公司 以及快递的重量（单位kg）

### 输出样例:

```out
63

```

### 输出解释:

所有快递总运费。

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

