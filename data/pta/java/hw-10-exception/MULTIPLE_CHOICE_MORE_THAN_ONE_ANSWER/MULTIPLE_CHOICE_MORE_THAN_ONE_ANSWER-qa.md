## 1.

在程序中利用throw或throws抛出异常，下列说法正确的是：（    ）。

A.
throw代表动作，表示抛出一个异常的动作；throws代表一种状态，代表方法可能有异常抛出

B.
throw用在方法实现中，而throws用在方法声明中

C.
throw只能用于抛出一种异常，而throws可以抛出多个异常

D.
当调用抛出异常的方法时，需要进行捕获处理或者继续利用thows向上抛出。

### Answer 🍋

A
B
D

## 2.

这是一个多选题的样例。答案为AC，分值为2分。

A.
异常是程序中出现的不正常情况，而不是指Java虚拟机本身比较严重的错误。

B.
程序中出现异常不进行处理，则程序中断执行。

C.
Java程序利用try-catch或者try-catch-finally结构处理异常。

D.
Java程序利用throw和throws来处理异常。

### Answer 🍋

A
C

## 3.

关于Java异常的处理的catch语句块，哪些说法是正确的？（     ）

A.
catch语句块可以有一个，也可以有多个

B.
多个catch语句块所捕获的异常类型如果有父子类关系，则父类在前，子类在后

C.
多个catch语句块可能有0个或1个执行到

D.
catch语句块必须和try语句块配合使用，不能独立存在

### Answer ✅

A
C
D

## 4.

关于Java异常的处理的finally语句块，哪些说法是正确的？（     ）

A.
finally语句块可有可无。

B.
如果finally语句块存在，它一定会执行。

C.
finally语句块通常用于一些收尾性的工作，如数据库断开连接、关闭系统资源等等。

D.
finally语句块必须和try-catch结构一起配合来进行处理异常

### Answer 🍋

A
B
C

## 5.

利用命令：`java MultiCatch`  执行下面的程序，说法**错误**的是 (      )。

```
public class MultiCatch
	{
	      public static void main(String args[])
	     {
	           try
	           {
	               int a=args.length;
	               int b=42/a;
	               int c[]={1};
	               c[42]=99;     //第10行
	               System.out.println(“b=”+b);
	            }
	           catch(ArithmeticException e)
	           {
	                 System.out.println(“除0异常：”+e);       //第15行
	           }
	           catch(ArrayIndexOutOfBoundsException e) {
	                System.out.println(“数组超越边界异常：”+e);     //第18行
	           }
	     }
	}
```

A.
程序将输出第15行的异常信息

B.
程序第10行出错

C.
程序将输出b=42

D.
程序将输出第15和18行的异常信息

### Answer ❌

B
C
D

