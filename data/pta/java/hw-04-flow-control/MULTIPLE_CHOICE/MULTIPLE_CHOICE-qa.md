## 1.

下面的方法，当输入为2的时候返回值是多少?（     ）
<pre>
public int getValue(int i) {
         int result = 0;
         switch (i) {
            case 1:
                result = result + i;
            case 2:
                result = result + i * 2;
            case 3:
                result = result + i * 3;
        }
        return result;
 }
</pre>

A.
0

B.
2

C.
4

D.
10

### Answer ✅

D

## 2.

在下面的代码段中，下列m的（  ）值将引起“default”的输出。
```
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
        int m = input.nextInt();
        switch(m) {
            case 0: System.out.println("case 0");
            case 1: System.out.println("case 1");break;
            case 2:
            default:System.out.println("default");
        }
    }
}

```

A.
0

B.
1

C.
2

D.
以上答案都不正确

### Answer ✅

C

## 3.

下列语句序列执行后，k 的值是(    )   
```
int x=6, y=10, k=5;
switch( x%y ){ 
        case 0: k=x*y;
  	case 6: k=x/y;
  	case 12: k=x-y;
  	default: k=x*y-x;
}
```

A.
60

B.
5

C.
0

D.
54

### Answer ✅

D

## 4.

以下选项中没有语法错误的是（       ） 。

A.
<pre>
while (int  i<7) {
       i++;
       System.out.println(“i is “+i);
}
</pre>

B.
<pre>
int  j=3; while(j) {
       System.out.println(“ j  is “+j);
}
</pre>

C.
<pre>
int  j=0;
for(int  k=0; j + k !=10; j++,k++) {
        System.out.println(“ j  is “+ j + “k  is”+ k);
}
</pre>

D.
<pre>
int  j=0;
do{
      System.out.println( “j  is “+j++);
     if (j == 3) {
        continue  loop;
     }
}while  (j<10);
</pre>

### Answer ✅

C

## 5.

在JAVA中，给定代码片段如下所示，则编译运行后，输出结果是（）。
```
for (int i = 0; i < 10; i++) {
    if (i == 10 - i) {
        break;
    }

    if (i % 3 != 0) {
        continue;
    }
    System.out.print(i + " ");
}
```

A.
0

B.
0 3

C.
0 3 6

D.
0 3 6 9

### Answer ✅

B

## 6.

下面代码将输出（    ）行 "Welcome to Java"?。
```
int count = 0;
do {
     System.out.println("Welcome to Java");
} while (count++ < 10);
```

A.
10

B.
11

C.
9

D.
1

### Answer ✅

B

## 7.

分析下列代码的运行结果是什么？

void looper(){
    
		int x=0;
		one:
		while(x<20) {
		    two:
				System.out.print(++x);
				if(x>3)
				  break two;
		}
}

A.
编译错误

B.
0

C.
1

D.
2

### Answer ✅

A

## 8.

当编译并运行下列程序段时，运行结果是什么？
 
 public class Test {
 
		public static void main(String[ ] args) {
            int i=0;
            while (i--<0){
                 System.out.println("The value of i is "+i);
             }
             System.out.println("The end");
		 }
	}

A.
编译时错误

B.
运行时错误

C.
The end

D.
The value of i is 0

### Answer ✅

C

## 9.

下列选项中不属于本段代码输出结果的是（      ）

	public class Main{
		public static void main(String args[]) {
		  one:
		  two:
		  for(int i=0; i<3; i++) {
		      three:
		      for(int j=10; j<30; j+=10) {
		         System.out.println(i+j);
				 if(i>0)
				    break one;
		      }
		  }
		}
	}

A.
10

B.
20

C.
11

D.
21

### Answer ✅

D

## 10.

关于类和对象的关系，下列说法哪种说法是错误的？

A.
类和对象都是具体的。

B.
类是抽象的，对象是具体的。

C.
一般情况下，在定义类之后，能创建无数个对象，可以说，类能化身千万。

D.
类是引用型数据类型。

### Answer ✅

A

