## 1.

下面关于try块的说法正确的是?

A.
try块后至少应有一个catch 块

B.
try块后必须有finally块

C.
可能抛出异常的语句应放在try块中

D.
对抛出的异常的处理应放在try块中

## 2.

Java异常类（Exception）是（      ）的子类。

A.
RuntimeException

B.
Exception

C.
Error

D.
Throwable

## 3.

下列程序的运行结果是（   ）。   
```
public class Test {
  public static void main(String[] args) {
    try {
      System.out.println("Welcome to Java");
      int i = 0;
      int y = 2 / i;
      System.out.println("Welcome to HTML");
    }
    finally {
      System.out.println("The finally clause is executed");
    }
  }
}

```

A.
Welcome to Java, 然后是错误信息

B.
Welcome to Java，下一行是 The finally clause is executed , 然后是错误信息.

C.
替换为正确项

D.
替换为错误项

## 4.

给定一个未完成的方法 ，代码如下：
```
//此处添加方法的声明
{
   int success=connect();
   if(success==-1)
      throw new TimedOutException();
}
```
已知TimedOutException不属于RuntimeException，那么在第一行注释位置上填写哪段代码能够正确完成该方法的声明？

A.
public void MyMethod()

B.
public void MyMethod() throws TimedOutException

C.
public void MyMethod() throw TimeOutException

D.
public throws TimedOutException void MyMethod()

## 5.

已知方法test()定义如下，在方法unsafe()运行正常的情况下哪条语句将肯定不会被输出？
```
public void test( ){
try {
   unsafe();
   System.out.println("Test 4");
} catch(SafeException e) {
   System.out.println("Test 3");
}finally{
   System.out.println("Test 2"); 
}
   System.out.println("Test 1"); 
}

```

A.
Test 4

B.
Test 3

C.
Test 2

D.
Test 1

## 6.

已知下列代码，如果方法oneMethod()运行异常，则下列哪个语句肯定不会被输出？
```
public void example(){
   try {
   oneMethod();
   System.out.println("condition1");
}catch(ArrayIndexOutOfBoundsException e) {
   System.out.println("condition2");
}catch(Exception e) {
   System.out.println("condition3");
}finally{
   System.out.println("condition4"); 
}

```

A.
condition1

B.
condition2

C.
condition3

D.
condition4

## 7.

下面程序在fun（ ）方法当出现数组下标超过界限的情况下，被ArrayIndexOutOfBoundsException类型的异常对象e所捕获。程序输出结果是：（   ）。
```
public void test() {
    try {
       fun();
       System.out.print("情况1");
     } catch (ArrayIndexOutOfBoundsException e) {
         System.out.print("情况2");
     } catch (Exception e) {
          System.out.print("情况3");
     } finally {
         System.out.print("finally");
     }
 }
```

A.
情况1

B.
情况2

C.
情况2finally

D.
情况3finally

## 8.

程序代码中包含产生CheckedException受检异常（非运行时异常）的语句时，（         ）。

A.
如果程序错误，就使用try-catch语句处理异常；否则，不必处理

B.
必须进行处理，或使用try-catch语句处理异常，或在调用方法上使用throws将其抛出

C.
只能使用try-catch语句处理

D.
可以置之不理

## 9.

关于Java中异常的叙述，正确的是：（     ）。

A.
异常是程序编写过程中代码的语法错误

B.
异常是程序编写过程中代码的逻辑错误

C.
异常出现后程序的运行马上中止

D.
异常是可以捕获和处理的

## 10.

关于异常，下列说法正确的是 (        )。

A.
程序运行过程中，若产生异常，它是某种异常类型的对象

B.
一旦程序运行，异常对象将被创建

C.
为了保证程序运行速度，要尽量避免异常控制

D.
以上说法都不对

## 11.

Java中用来抛出异常的关键字是：（     ）。

A.
try

B.
catch

C.
throw和throws

D.
finally

## 12.

在异常处理时，将可能发生异常的代码放在（     ）语句块中，后面紧跟着一个或多个（     ）语句块，还可以再跟零个或一个（     ）语句块。

A.
catch、try、finally

B.
try、catch、finally

C.
try、finally、exception

D.
exception、try、finally

## 13.

关于try语句对应的多个catch子句中，若捕获的异常类型有父子类关系时，它们的排列下列哪种是正确的(        ) 。

A.
异常父类在先，异常子类在后

B.
异常子类在先，异常父类在后

C.
有继承关系的异常不能同时出现在同一个try程序段之后

D.
先后顺序无所谓

## 14.

在异常处理中，如释放资源、关闭文件、关闭数据库等由（     ）来完成。

A.
try子句

B.
catch子句

C.
finally子句

D.
throw子句

## 15.

以下描述不正确的有

A.
try块不可以省略

B.
可以使用多重catch块

C.
finally块可以省略

D.
catch块和finally块可以同时省略

## 16.

以下对自定义异常描述正确的是

A.
自定义异常必须继承Exception

B.
自定义异常可以继承自Error

C.
自定义异常可以更加明确定位异常出错的位置和给出详细出错信息

D.
程序中已经提供了丰富的异常类，使用自定义异常没有意义

## 17.

下列哪一项不属于布局管理器? (    )

A.
GridLayout

B.
CardLayout

C.
BorderLayout

D.
BagLayout

## 18.

声明并创建一个按钮对象b，应该使用的语句是（     ）

A.
Button b=new Button( );

B.
button b=new button( );

C.
Button b=new b( );

D.
b.setLabel(“确定”);

## 19.

有如下程序代码， 程序运行的结果是（     ）。
```
String s1 = "sdut";
String s2 = "I love " + s1;
String s3 = "I love " + s1;
System.out.print(s2 == s3);
Sytem.out.println(" "+s2.equals(s3));
```

A.
true false

B.
true true

C.
false false

D.
false true

## 20.

关于字符串的构造方法，如下代码执行结果是（     ）。
```
String str="ABCDEFG";
char[] chars=str.toCharArray(); 
System.out.println(new String(chars,1,3));
```

A.
ABC

B.
BCD

C.
AB

D.
BC

