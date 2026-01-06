## 1.

Given the following code:
```
public class TestClass {
    public static void main(String args[]) {
        String str = new String("World");
        char[] ch = { 'H', 'e', 'l', 'l', 'o' };
        change(str, ch);
        System.out.println(str + " and " + new String(ch));
    }

    public static void change(String str, char ch[])
    {
		    str="Changed"; ch[0]='C';
    }
}
```
What is the result after execution?

A.
World and Hello

B.
World and Cello

C.
Changed and Hello

D.
Changed and Cello

### Answer ✅

B

## 2.

关于字符串的方法，如下代码执行结果是（     ）。
```
String fileName = "sdut@sdut.edu.cn"; 
System.out.println(fileName.lastIndexOf("."));
```

A.
9

B.
10

C.
13

D.
12

### Answer ✅

C

## 3.

关于字符串的方法，如下代码执行结果是（     ）。
```
String fileName = "中国China"; 
System.out.println(fileName.indexOf("国"));
```

A.
0

B.
1

C.
2

D.
3

### Answer ✅

B

## 4.

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

### Answer ✅

B

## 5.

关于字符串的方法，如下代码执行结果是（     ）。
```
String str1 = "sdut@sdut.edu.cn";
String str2 = str1.toLowerCase();
System.out.println(str2);
System.out.println(str1);
System.out.println(str1 == str2);
```

A.
```
sdut@sdut.edu.cn
sdut@sdut.edu.cn
true
```

B.
```
sdut@sdut.edu.cn
sdut@sdut.edu.cn
false
```

C.
```
sdut@sdut.edu.cn
SDUT@SDUT.EDU.CN
true
```

D.
```
sdut@sdut.edu.cn
SDUT@SDUT.EDU.CN
false
```

### Answer ✅

A

## 6.

关于字符串的方法，如下代码执行结果是（     ）。
```
String str1 = "abcd"; 
String str2="sdut";
System.out.println(str1.compareTo(str2)>0);
```

A.
true

B.
false

C.
1

D.
-1

### Answer ✅

B

## 7.

关于字符串的方法，如下代码执行结果是（     ）。
```
String str1 = "sdut12"; 
String str2="sDut12";
System.out.println(str1.equalsIgnoreCase(str2));
```

A.
true

B.
false

C.
0

D.
1

### Answer ✅

A

## 8.

关于字符串的方法，如下代码执行结果是（     ）。
```
String str = "    abcd123";
  str.toUpperCase();
  str.trim();
  System.out.println(str);
```

A.
abcd123

B.
abcd123

C.
ABCD123

D.
`ABCD123`

### Answer ❌

B

## 9.

关于字符串的相关操作，如下代码执行后输出的结果是：（     ）。
```
String str1="abc";
String str2=str1.toUpperCase();
String str3=str1.toLowerCase();
System.out.println(str1==str2);
 System.out.println(str1==str3);
```

A.
```
false
true
```

B.
```
false
false
```

C.
```
true
true
```

D.
```
true
false
```

### Answer ❌

B

## 10.

关于字符串对象的比较，==用于比较字符串对象的（      ）是否相同；equals()方法用于比较字符串对象的（      ）是否相同。

A.
存储地址    字符序列

B.
存储地址   存储地址

C.
字符序列  存储地址

D.
字符序列   字符序列

### Answer ✅

A

## 11.

执行如下两行代码之后，则内存中存在几个字符串对象?（    ）
```
String str="abc"; 
str+="def";
```

A.
1

B.
2

C.
3

D.
4

### Answer ✅

C

## 12.

Given code below:
```
String s1 = "Hello";
String s2 = "Hell"+"o";
String s3 = "Hell";
s3 = s3+"o";
```
Which one below is correct?

A.
`s1 == s2` is true, `s1 == s3` is true

B.
`s1 == s2` is true, `s1 == s3` is false

C.
`s1 == s2` is false, `s1 == s3` is false

D.
`s1 == s2` is false, `s1 == s3` is true

### Answer ✅

B

## 13.

阅读下面的程序段，以下表达式的值为true的是哪个?（     ）
```
		String str1=new String("java");
		String str2=new String("java");
		StringBuffer str3=new StringBuffer("java");
		StringBuffer str4=new StringBuffer("java");
```

A.
str1==str2

B.
str1.equals(str2)

C.
str3==str4

D.
str3.equals(str4)

E.
str1==str3

F.
str1.equals(str4)

### Answer ❌

A

## 14.

对String类型的字符串  `String str="abcdefg";`   调用str对象的(       )方法，得到byte类型的数组`[97, 98, 99, 100, 101, 102, 103]`?

A.
getBytes()

B.
getChars()

C.
toBytes()

D.
toChars()

### Answer ✅

A

## 15.

对String类型的字符串`String str="abcd"`，调用str对象的(      )方法，得到char类型的数组`['a','b','c','d'] `?

A.
toCharArray()

B.
toChars()

C.
getChars()

D.
getBytes()

### Answer ✅

A

## 16.

执行以下语句后，str2的值是（  ）。
```
String str1 = "abc";
String str2 = str1.concat("cde");

```

A.
abcde

B.
abccde

C.
cdeabc

D.
edccba

### Answer ✅

B

## 17.

下列选项中，可以正确实现String初始化的是（    ）2分。

A.
String str=abcd;

B.
String str="hello";

C.
String str=1234;

D.
String str='good';

### Answer ✅

B

## 18.

有如下程序代码， 程序运行的结果是（ ）。
String s1 = "中国";
String s2 = "我爱 " + s1;
String s3 = "我爱 " + s1;
System.out.print(s2 == s3);
System.out.println(" "+s2.equals(s3));

A.
true false

B.
true true

C.
false false

D.
false true

### Answer ✅

D

## 19.

如下代码输出（ ）。
```
public class TestStringBuilder {
	public static void main(String[] args) {
		String s = "Hello";
	    StringBuilder buffer = new StringBuilder(s);
	    buffer.append(" World!");
	    System.out.println(buffer);	    
	  }
}
```

A.
Hello

B.
World!

C.
Hello World!

D.
无输出

### Answer ✅

C

## 20.

以下代码段将创建几个对象?
<pre>
String s1="bc";
String s2="bc";
</pre>

A.
2

B.
3

C.
0

D.
1

### Answer ✅

D

## 21.

Given code below:
```Java
String s1 = "Hello";
String s2 = "Hell"+"o";
String s3 = "Hell";
s3 = s3+"o";
```
Which one below is correct?

A.
s1 == s2 is true, s1 == s3 is true

B.
s1 == s2 is true, s1 == s3 is false

C.
s1 == s2 is false, s1 == s3 is false

D.
s1 == s2 is false, s1 == s3 is true

### Answer ✅

B

## 22.

请选择下面程序正确的输出结果（	）   
```
public class Main{
		public static void main(String args[ ]){
			String a = new String("A");
			String b = new String("B");
			mb_operate(a,b);
			System.out.println(a + "." + b);
}
static void mb_operate(String x,String y){
	x.concat(y);
	y=x;
}
}
```

A.
A.B

B.
A.A

C.
AB.AB

D.
AB.B

### Answer ❌

D

## 23.

如下程序输出（   ）   
```
public class Test {  
  public static void main(String[] args) {
    String s = "Java";
    StringBuilder buffer = new StringBuilder(s);
    change(s);
    System.out.println(s);
  }
  
  private static void change(String s) {
    s = s + " and HTML";
  }
}
```

A.
Java

B.
Java and HTML

C.
and HTML

D.
什么都不显示

### Answer ✅

A

## 24.

关于以下程序段，正确的说法是（   ）。
```
1. String s1 = "abc"+"def";
2. String s2 = new String(s1);
3. if (s1==s2) {
4.    System.out.println("==succeeded");
5. }
6. if (s1.equals(s2)) {
7.    System.out.println(".equals() succeeded");
8. }
```

A.
行4与行7都将执行

B.
行4执行，行7不执行

C.
行7执行，行4不执行

D.
行4、行7都不执行

### Answer ✅

C

## 25.

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

### Answer ✅

D

## 26.

有如下代码，程序执行的结果是（      ）。
```
String str1 = "sdut@sdut.edu.cn";
String[] strings = str1.split("u");
System.out.println(Arrays.toString(strings));
```

A.
`sd, t@sd, t.ed, .cn`

B.
`[sd, t@sd, t.ed, .cn]`

C.
`[sdu, t@sdu, t.edu, .cn]`

D.
`sdu, t@sdu, t.edu, .cn`

### Answer ✅

B

## 27.

有如下程序代码，程序执行的结果是（     ）。
```
String str1 = "\t sdut@sdut.edu.cn \t ";
System.out.println(str1.trim());
```

A.
sdut@sdut.edu.cn

B.
\tsdut@sdut.edu.cn

C.
替换为正确项

D.
替换为错误项

### Answer ✅

A

## 28.

有如下程序代码，程序执行的结果是（ ）。
```
int i= 110; 
String str2=i+2+"lucky";
System.out.println(str2);
```

A.
1102lucky

B.
112lucky

C.
lucky1102

D.
lucky112

### Answer ✅

B

## 29.

有如下代码，程序执行的结果是（      ）。
```
int i= 110;	
String str2="lucky"+i+2;	
System.out.println(str2);	
```

A.
lucky1102

B.
lucky112

C.
1102lucky

D.
112lucky

### Answer ✅

A

## 30.

在下面的代码中，程序执行的结果将是：（     ）。
```
public class Test {
  public static void main(String[] args) {
         String str = "123";
         System.out.println(str);
         change(str);
         System.out.println(str);
     }
    public static void change(String str){
      str = "456";
    }
}
```

A.
```
456
123
```

B.
```
456
456
```

C.
```
123
456
```

D.
```
123
123
```

### Answer ✅

D

