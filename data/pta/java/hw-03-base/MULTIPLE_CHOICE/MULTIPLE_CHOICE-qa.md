## 1.

Which one below is NOT a valid Java identifier?

A.
Int

B.
goto

C.
变量

D.
$0

### Answer ✅

B

## 2.

在Java中，以下程序段的输出结果是。

![222.png](https://images.ptausercontent.com/e1c0eb9a-f221-43ae-8a94-14f42cb1f52b.png)

A.
1,2,3

B.
2,3,4

C.
2,2,3

D.
2,3,3

### Answer ✅

D

## 3.

若有定义:int x=3,y=2;float a=2.5,b=4.5;则下面表达式的值为（）。

(x+y)%2+(int)a/(int)b。

A.
1.0

B.
1

C.
1.5

D.
2

### Answer ✅

B

## 4.

下面那种类型不属于Java的基本数据类型？

A.
byte

B.
int

C.
boolean

D.
String

### Answer ✅

D

## 5.

假设有如下程序：
```
public class Demo {
        public static void main(String args[]) {
                int num = 68 ;
                char c = (char) num ;
                System.out.println(c) ;
        }
}
```
最终的执行结果是什么？

A.
B

B.
C

C.
D

D.
a

### Answer ❌

A

## 6.

以下语句输出的结果是?
```
 String str="123";
 int x=4,y=5;
 str = str + (x + y);
 System.out.println(str);
```

A.
1239

B.
12345

C.
会产生编译错误

D.
123+4+5

### Answer ✅

A

## 7.

一个表达式中有int、byte、long、double型的数据相加，其结果是（  ）类型的值

A.
int

B.
long

C.
byte

D.
double

### Answer ✅

D

## 8.

45 / 4的结果是（  ）?

A.
11

B.
12

C.
10

D.
11.25

### Answer ✅

A

## 9.

当编译并运行下列Java程序段时，将会发生什么情况？
```
class VarInBase{
    int i=10;
    public void print(){
       System.out.println(""i=""+i);
    }
}
class VarInSub extends VarInBase{
    int i=100;
    public void print(){
        int i=1000;
        System.out.println(""i=""+i);
    }
}
public class Main{
    public static void main(String args[]){
        VarInBase m=new VarInSub();
        m.print();
    }
}
```

A.
输出i=10

B.
输出i=100

C.
输出i=1000

D.
编译错误

### Answer ✅

C

## 10.

-1作为int数据类型出现，在内存中的存储形式是：（      ）。

A.
11111111

B.
11111111 11111111

C.
11111111 11111111 11111111 11111111

D.
11111111 11111111 11111111 11111111 11111111 11111111 11111111 11111111

### Answer ✅

C

## 11.

在JAVA中，按精度从小到大的顺序排列，各种基本数据类型自动转换的顺序是：（         ）。

A.
byte-short(char)- int-long-float-double

B.
byte-short(char)- int-float-long-double

C.
byte-short- int(char)-long-float-double

D.
byte(char)-short- int-long-float-double

### Answer ✅

A

## 12.

下列（       ）是合法标识符。

A.
rwkj@163

B.
Java程序设计

C.
8a

D.
e-mail

### Answer ✅

B

## 13.

下面哪些元素不能作为Java标识符的首字符？（   ）

A.
字母

B.
数字

C.
下划线_

D.
$

### Answer ✅

B

## 14.

JAVA中，下面哪个赋值表达式正确：（      ）

A.
float  f=1.3;

B.
char  c="a";

C.
byte  b=257;

D.
int  i=10;

### Answer ✅

D

## 15.

判断两个对象的引用是否相同，使用（       ）方式进行判断。

A.
equals()

B.
hashcode()

C.
toString()

D.
==

### Answer ✅

D

## 16.

在控制台显示消息的语句正确的是（  ）

A.
System.out.println(我是一个Java程序员了！);

B.
System.Out.println("我是一个Java程序员了！");

C.
System.out.println("我是一个Java程序员了！");

D.
System.Out.Println("我是一个Java程序员了！");

### Answer ✅

C

## 17.

下面选项中不是开发Java程序的步骤（  ）

A.
编译

B.
编写源代码

C.
运行

D.
发布

### Answer ✅

D

## 18.

下列关于变量作用域的说法中，正确的是（）

A.
在main()方法中任何位置定义的变量，其作用域为整个main()方法。

B.
代码块中定义的变量，在代码块外也是可以使用的。

C.
变量的作用域为：从定义处开始，到变量所在代码块结束的位置。

D.
变量的作用域不受代码块的限制。

### Answer ✅

C

## 19.

以下标识符中，不合法的是（ ）

A.
user

B.
$inner

C.
class

D.
login_1

### Answer ✅

C

## 20.

下列选项中，不属于Java中关键字的是（）

A.
if

B.
float

C.
Final

D.
try

### Answer ✅

C

## 21.

下列选项中，属于布尔常量的是（）

A.
198

B.
2e3f

C.
true

D.
null

### Answer ✅

C

## 22.

下列选项中，哪一个不能通过编译（ ）

A.
byte a=1;

B.
short b=100;

C.
int c='a';

D.
long d=8888888888888888;

### Answer ✅

D

## 23.

下列浮点数的定义中，正确的是（ ）

A.
float f = 1F;

B.
float f = 1.0;

C.
float f = '1';

D.
float f = "1";

### Answer ✅

A

## 24.

若int a = 7;a %= 2;则执行后，变量a的值是（）

A.
7

B.
1

C.
2

D.
3

### Answer ✅

B

## 25.

下列选项中，不属于比较运算符的是（ ）

A.
=

B.
==

C.
<

D.
<=

### Answer ✅

A

## 26.

执行下列程序后，输出的正确结果是（）。
```
public class Test {
    public static void main(String[] args) {
        System.out.print(100%3);
        System.out.print(",");
        System.out.println(100%3.0);
    }
}
```

A.
1,1

B.
1,1.0

C.
1.0,1

D.
1.0,1.0

### Answer ✅

B

## 27.

假设有以下整型变量赋初值语句：int i=1+1/2+1/4；请问该语句执行后变量i的值为：

A.
1

B.
1.75

C.
2.5

D.
3

### Answer ✅

A

## 28.

下面程序段：
```{JAVA}
boolean a = false;
boolean b = true;
boolean c = (a && b) && (!b);
boolean result = (a & b) & (!b);
```
执行完后，正确的结果是（）。

A.
c=false; result=false;

B.
c=true; result=true;

C.
c=true; result=false;

D.
c=false; result=true;

### Answer ✅

A

## 29.

已知有如下定义：String s = "story";  下面（ ）表达式是合法的。

A.
s += books;

B.
char c = s[1];

C.
int len = s.length;

D.
String t = s.toLowerCase();

### Answer ✅

D

## 30.

下列选项中，合法的String型字符串常量是(  )

A.
'M'

B.
How are you

C.
'#apple'

D.
"apple"

### Answer ✅

D

