## 1.

## 1.定义一个Person类
**属性：**`String name`, `boolean gender`, `int age`, `int id` ,所有的变量必须为私有(private)。  
**无参构造函数:**`Person()`, **功能：**打印**This is constructor**  。  
**有参构造函数:**`Person(name, gender, age) `  ，**功能：**给属性赋值。  
建议：使用Eclipse自动生成toString方法  
 
## 2.定义类的初始化块
为Person类加入**初始化块**，在初始化块中对`id`属性赋值，并且要保证每次的值比上次创建的对象的值`+1`。然后在下一行打印`This is initialization block, id is ...`  其中`...`是id的值。  
**提示：**可为`Person`类定义一个`static`属性来记录所创建的对象个数。

## 3.编写静态初始化块
打印`This is static initialization block`

## 4.编写main方法  
- 首先输入n，代表要创建的对象数量。  
- 然后从控制台分别读取n行的`name age gender`, 并调用有参构造函数`Person(name, age, gender)`新建对象 。
- 将创建好的n个对象逆序输出(即输出`toString()`方法)。
- 使用无参构造函数新建一个Person对象，然后直接打印该对象。

## 思考
初始化类与对象有几种方法，构造函数、初始化块、静态初始化块。这三种方法执行的先后顺序是什么？各执行几次。

### 输入样例:
```in
3
a 11 false
b 12 true
c 10 false

```
### 输出样例:
```out
This is static initialization block
This is initialization block, id is 0
This is initialization block, id is 1
This is initialization block, id is 2
Person [name=c, age=10, gender=false, id=2]
Person [name=b, age=12, gender=true, id=1]
Person [name=a, age=11, gender=false, id=0]
This is initialization block, id is 3
This is constructor
null,0,false,3
Person [name=null, age=0, gender=false, id=3]

```

## 2.

众所周知，一年一度的女汉子大赛又来啦。由于最近女汉子比较流行，所以参加女汉子比赛的人数变得很多很多。所以赛事组找来了你，让你写一个程序找出谁是最强的女汉子。

大家都知道，越是不漂亮的女生就越容易成为女汉子（漂亮的怎么会成为汉子？）,而越是力量大的女生也越成为女汉子（毕竟女汉子还是比较有力量的）。

所以，就给女汉子两个属性，一个是漂亮值x，一个是力量值y。当然x的值越大，就代表这个女生就越漂亮。现在想让你求出来最不漂亮的女生有多少个，她们的力量和是多少。
### 输入格式:

先输入一个T，代表有T个人（T<10000）。

接下来T行，每行有两个数字x,y，分别代表这个女汉子的漂亮值和力量值（x,y<2*$$10^{9}$$) 。中间有1个空格分隔。

### 输出格式:

输出一行，有两个数字，分别代表最强的女汉子的数量，和她们的力量和。中间用1个空格分隔。

### 输入样例:

```in
5
1 1
2 2
1 4
2 10
10 100
```

### 输出样例:

```out
2 5
```

## 3.

1. 输入n，然后连续输入n个身份证号。  
2. 然后根据输入的是**sort1**还是**sort2**，执行不同的功能。输入的不是sort1或sort2，则输出`exit`并退出。    
    输入**sort1**，将每个身份证的年月日抽取出来，按**年-月-日**格式组装，然后对组装后的**年-月-日**升序输出。  
    输入**sort2**，将所有身份证按照里面的年月日升序输出。

**注意：**处理输入的时候，全部使用`Scanner`的`nextLine()`方法，以免出错。

### 输入样例:
```in
6
410425198309308225
320203197206115011
431227196108033146
330226196605054190
34080019810819327X
320111197112301539
sort1
sort2
e

```

### 输出样例:
```out
1961-08-03
1966-05-05
1971-12-30
1972-06-11
1981-08-19
1983-09-30
431227196108033146
330226196605054190
320111197112301539
320203197206115011
34080019810819327X
410425198309308225
exit

```

