## 1.

有如下程序代码： 
```
class Dog{ }
class Cat { }
public class Test{
 public static void main(String[] args) {
  Dog dog=new Dog();
  Cat cat=new Cat();
  System.out.println(cat instanceof Dog);    //A
  System.out.println(dog instanceof Dog);   //B
 }  
 }
```
关于A、B两段代码，下列哪种说法是正确的？（     ）

A.
输出：
```
false
true
```

B.
输出：
```
true
true
```

C.
输出：
```
false
false
```

D.
出现语法编译错误，程序不能执行

## 2.

有如下程序代码，执行的结果是（      ）。
```
class Father {
	int a = 100;
	int b = 200;

	public void print() {
		System.out.println(a + " " + b);
	}
}

class Child extends Father {
	int b = 300;
	int c = 400;

	public void print() {
		System.out.println(a + " " + b + " " + c);
	}

	public void printExtend() {
		System.out.println(c);
	}

}

public class Main {
	public static void main(String[] a) {
		  Father obj=new Child();
		  System.out.println(obj.a+" "+obj.b);   
		  obj.print();  
	}
}
```

A.
```
100 200
100 200 400
```

B.
```
100 300
100 300 400
```

C.
```
100 300
100 200 400
```

D.
```
100 200
100 300 400
```

## 3.

有如下父类、子类及测试类的定义，程序执行结果是：（     ）。
```
class Father {
 int a =100;
 public void print() {
  System.out.println(a);
 }
}
class Child1 extends Father {
 int a =200;
 public void print() {
  System.out.println(a);
 }
}
class Child2 extends Father {
 int a =300;
 public void print() {
  System.out.println(a);
 }
}
public class Main {
	public static void main(String[] a) {
		Father obj1;
		  obj1=new Child1();
		  System.out.println(obj1.a);
		  obj1.print(); 
		  
		  obj1=new Child2();
		  System.out.println(obj1.a);
		  obj1.print(); 
	}
}
```

A.
```
200
200
300
300
```

B.
```
100
200
300
300
```

C.
```
200
200
100
300
```

D.
```
100
200
100
300
```

## 4.

有如下代码，程序执行结果是：（       ）。
```
abstract class Person {
 public abstract void eat();
}
public class Main {
	public static void main(String[] a) {

		  Person p = new Person() {
		   public void eat() {
		    System.out.println("eat something");
		   }
		  };
		  p.eat();
	}
}
```

A.
空字符串

B.
编译错误

C.
eat something

D.
运行错误

## 5.

有如下代码，程序的执行结果是（     ）。  
```
interface Person {
 public void eat();
}

public class Main {
	public static void main(String[] a) {

		  Person p = new Person() {
		   public void eat() {
		    System.out.println("eat something");
		   }
		  };
		  p.eat();
	}
}
```

A.
空字符串

B.
编译错误

C.
eat something

D.
运行时错误

## 6.

下面关于JAVA面向对象的理解，说法中不正确的是：（     ）。

A.
Java中，一个类只允许实现一个接口

B.
抽象类中允许有非抽象方法的存在

C.
静态的成员变量可以直接用类名调用

D.
通过super可以调用父类的构造函数

## 7.

以下关于继承的叙述正确的是（      ）。

A.
在Java中类只允许单一继承

B.
在Java中,一个类只能实现一个接口

C.
在Java中，一个类不能同时继承一个类和实现一个接口

D.
在Java中，接口也具有单继承性

## 8.

以下对接口描述错误的有

A.
接口没有提供构造方法

B.
接口中的方法默认使用public、abstract修饰

C.
接口中的属性默认使用public、static、final修饰

D.
接口不允许多继承

## 9.

以下描述错误的有

A.
abstract 可以修饰类、接口、方法

B.
abstract修饰的类主要用于被继承

C.
abstract 可以修饰变量

D.
abstract修饰的类，其子类也可以是abstract修饰的

## 10.

下列选项中关于java中super关键字的说法错误的是

A.
super关键字是在子类对象内部指代其父类对象的引用

B.
super关键字不仅可以指代子类的直接父类，还可以指代父类的父类

C.
子类可以通过super关键字调用父类的方法

D.
子类可以通过super关键字调用父类的属性

## 11.

已知类的继承关系如下：
```
class Employee{}
class Manager extends Employee{}
class Director extends Employee{}
```
则下列语句通过编译的有哪些？（    ）

A.
Employee e=new Manager();

B.
Director d= new Manager();

C.
Director d= new Employee();

D.
Manager m=new Director();

## 12.

在Java中，要想让一个类继承另一个类，可以使用以下哪个关键字？（    ）

A.
inherits

B.
implements

C.
extends

D.
modifies

## 13.

如下代码，程序的输出结果将是：（      ）。

```
class A {
	int a = 11;
	int b = 12;

	public void print() {
		System.out.println(a + " " + b);
	}
}

class B extends A {
	int a = 20;

	public void print() {
		System.out.println(a + " " + b);
	}
}

public class Main {
	public static void main(String[] args) {
		A aObj = new A();
		aObj.print();
		B bObj = new B();
		bObj.print();
	}
}
```

A.
```
11 12
20 0
```

B.
```
20 12
20 12
```

C.
```
11 12
11 12
```

D.
```
11 12
20 12
```

## 14.

关于抽象类，下面叙述错误的是（） 。

A.
包含抽象方法的类必须是抽象类

B.
抽象方法只需要声明，不需要实现

C.
抽象类可以实例化

D.
抽象类中可以没有抽象方法

## 15.

关于接口的声明，错误的是(  ) 。

A.
接口中所有的成员属性都是public static final修订的常量

B.
接口中的成员属性在声明时可以省略修订关键字

C.
接口中所有的方法都是public abstract final修订的

D.
接口中所有的方法都是public abstract修订的

## 16.

关于接口，下面的叙述错误的是（）。

A.
一个接口可以多继承多个接口

B.
一个类可以实现多个接口

C.
抽象类在实现接口时，可以不实现该接口中声明的所有方法

D.
抽象类在实现接口时，必须实现该接口中声明的所有方法

## 17.

以下代码运行输出是。
```
public class Person{
    private String name=”Person”;
    int age=0;
}
public class Child extends Person{
    public String grade;

    public static void main(String[] args){
        Person p = new Child();
        System.out.println(p.name);
    }
}
```

A.
输出：Person

B.
没有输出

C.
编译出错

D.
运行出错

## 18.

在使用super 和this关键字时，以下描述正确的是

A.
在子类构造方法中使用super（）显示调用父类的构造方法，super（）必须写在子类构造方法的第一行，否则编译不通过

B.
this（）和super（）可以同时出现在一个构造函数中

C.
super（）和this（）不一定要放在构造方法内第一行

D.
this（）和super（）可以在static环境中使用，包括static方法和static语句块

## 19.

以下对抽象类的描述正确的是

A.
抽象类没有构造方法

B.
抽象类必须提供抽象方法

C.
有抽象方法的类一定是抽象类

D.
抽象类可以通过new关键字直接实例化

## 20.

在Java中，以下（）类的对象是以键-值的方式存储对象。

A.
List

B.
ArrayList

C.
HashMap

D.
LinkedList

