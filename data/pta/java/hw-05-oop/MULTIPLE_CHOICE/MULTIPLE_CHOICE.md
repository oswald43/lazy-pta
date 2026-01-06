## 1.

关于下面的类描述中正确的是：
```
class Test{
    void test(int i){
        System.out.println("I am an int.");
    }
    void test(String s){
        System.out.println("I am a char");
    }
    public static void main(String args[]){
        Test t=new Test();
        t.test('a');
    }
}
```

A.
编译出错

B.
编译通过，运行出错

C.
编译通过，运行时输出“I am an int”

D.
编译通过，运行时输出“I am a char"

## 2.

关于类和对象的关系，下列说法哪种说法是错误的？

A.
类和对象都是具体的。

B.
类是抽象的，对象是具体的。

C.
一般情况下，在定义类之后，能创建无数个对象，可以说，类能化身千万。

D.
类是引用型数据类型。

## 3.

关于构造方法定义与作用，下列说法**错误**的是：（    ）。

A.
用来创建类的实例时调用的方法

B.
调用该方法时，对实例变量赋值

C.
定义时，方法名称与类名相同，返回值类型可以不写，也可以写成void

D.
一个类的构造方法可以定义多个，多个构造方法的参数有明显区别。

## 4.

以下有关构造方法的说法，正确的是： ____。

A.
一个类的构造方法可以有多个

B.
构造方法在类定义时被调用

C.
构造方法只能由对象的其它方法调用

D.
构造方法可以和类同名，也可以和类名不同

## 5.

关于以下代码的说明，正确的是（ ）。
```
class Main {
	static int x = 10;
	static {
		x += 5;
		System.out.println("x=" + x);
	}
	public static void main(String args[ ])
	{
		System.out.println("x=" + x);
	}
	static {
		x /= 3;
		System.out.println("x=" + x);
	}
}
```

A.
不能通过编译，因为缺少方法名和返回类型

B.
不能通过编译，因为只能有一个静态初始化器

C.
编译通过，执行结果为：
```
x=15
x=5
x=5
```

D.
编译通过，执行结果为：
```
x=3
x=8
x=8
```

## 6.

在Java中，针对类和成员提供了4种访问级别，以下控制级别由小到大的顺序是：（    ）。

A.
private< 默认 < protected < public

B.
默认 < private< protected < public

C.
protected < 默认 < private < public

D.
protected < private< 默认  < public

## 7.

在成员方法的访问控制修饰符中，规定访问权限只包含该类自身作用域和同包作用域的修饰符是（       ）。

A.
protected

B.
public

C.
默认

D.
private

## 8.

下列关于修饰符使用的说法，错误的是（      ）。

A.
abstract不能与final并列修饰同一个类

B.
abstract类中可以有private的成员

C.
abstract方法必须在abstract类中

D.
static方法中能访问非static的属性

## 9.

在非静态成员方法中，可以使用关键字（    ）指代当前对象，访问类的其他非静态成员。

A.
this

B.
super

C.
static

D.
public

## 10.

有如下程序代码，哪处出现编译错误？（     ）
```
class Father {
 int a = 100;    // A
 final public void print() { // B
  System.out.println(a);
 }
}

class Child extends Father { 
 int a = 200;                // C
 public void print() {       // D
  System.out.println(a);  
 }
}
```

A.
A处

B.
B处

C.
C处

D.
D处

