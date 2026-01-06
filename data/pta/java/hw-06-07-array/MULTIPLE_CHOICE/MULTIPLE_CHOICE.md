## 1.

执行完以下代码int[ ] x = new int[25]；后，以下哪项说明是正确的(   )

A.
x[24]为0

B.
x[24]未定义

C.
x[25]为0

D.
x[0]没有数值存在

## 2.

下列程序代码运行结果是：（    ）。	
```
import java.util.*;	
public class Test {	 
    public int hashCode() {	    
         return 1;	 
    }	 
    public boolean equals(Object b) {	    
        return true;	
   }	
    public static void main(String args[]) {	    
        Set set = new HashSet();	    
        set.add(new Test());	    
        set.add(new String("ABC"));	    
        set.add(new Test());	    
        System.out.println(set.size());	 
    }
}
```

A.
1

B.
2

C.
3

D.
4

## 3.

若int a[][]={{123,345,334},{1,2},{3,4}};  则 a[2][1]=（    ）。

A.
1

B.
3

C.
2

D.
4

## 4.

如下语句执行结果是：（      ）。
```
int[] intArr=new int[10];
System.out.println(intArr[0]);
```

A.
编译错误

B.
会报运行错误

C.
0

D.
null

## 5.

如下语句执行结果是：（     ）。
```
int[] intArr=new int[10];	
System.out.println(intArr[10]);	
```

A.
编译错误

B.
会报运行错误

C.
0

D.
null

## 6.

设有数组的定义int[] a = new int[3]，则下面对数组元素的引用错误的是（    ）。

A.
a[0]=8;

B.
a[a.length-1]=90;

C.
a[3]=9;

D.
```
int i=1;
a[i]=0;
```

## 7.

数组的定义为：`int[] arr=new int[10];`
如何获得数组的长度？

A.
arr.length()

B.
arr.size()

C.
arr.length

D.
arr.size

## 8.

执行完以下代码`int[ ] x = new int[25]；`后，以下哪项说明是正确的（      ）。

A.
x[24]为0

B.
x[25]为0

C.
x[0]为空

D.
x[24]未定义

## 9.

下列程序代码运行结果是：（ ）。	
```
import java.util.ArrayList;
	import java.util.List;
public class Test {
	 public static void main(String args[]) {
	    List list = new ArrayList();
	    list.add(new Test());
	    list.add(new String(""ABC""));
	    list.add(new Test());
	    System.out.println(list.size());
	 }
	}
```

A.
1

B.
2

C.
3

D.
4

## 10.

欲构造ArrayList类的一个实例，此类实现了List接口，下列哪个写法是正确的 ？

A.
ArrayList myList=new Object()；

B.
List myList=new ArrayList()；

C.
ArrayList myList=new List()；

D.
List myList=new List();

