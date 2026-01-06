## 1.

### 题干:
找出所有姓“李”的学生姓名、民族和联系电话。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

### 表样例
上述表结构对应的表样例：

```student```表：

![student.png](https://images.ptausercontent.com/214c212b-d599-4d1b-9c4e-d60f9bb3031d.png)

### 输出样例:
输出样例：

![1-2.png](https://images.ptausercontent.com/6edc0114-9a43-4dba-b00f-15e0992b1de5.png)

### Answer ✅

```sql
 SELECT sname, nation, phone
FROM student
WHERE sname LIKE '李%';
```

## 2.

本题目要求编写SQL语句，
检索出```course```表中前3门课程的课号及课程名称的记录。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE course (
 cno char(7) ,
 cname varchar(20) NOT NULL,
  cpno char(7),
  ccredit int NOT NULL,
  PRIMARY KEY (cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```course```表：

|cno|cname|cpno|ccredit|
|----|------|-----|--------|
|0000001|数据库OCP考证||4|
|0000002|C语言基础|0000027|9|
|0000003|Linux操作系统|0000013|5|
|0000004|C#程序设计|0000002|6|

### 输出样例:

请在这里给出输出样例。例如：

|cno|cname||
|----|------|
|0000001|数据库OCP考证|
|0000002|C语言基础|
|0000003|Linux操作系统|

### Answer ✅

```sql
 SELECT cno, cname
FROM course
LIMIT 3;
```

## 3.

本题目要求编写SQL语句，
检索出```students```表中姓名中含有“明”字的男生的学生姓名和班级。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE students (
 sno char(7) ,
  sname char(8) NOT NULL,
  class char(10),
  ssex char(2),
  bday date ,
  bplace char(10) ,
  IDNum char(18) ,
  sdept char(16),
  phone char(11),
  PRIMARY KEY (sno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```students```表：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1311104|李嘉欣|13英语1|女|1994-05-28|山西太原|330204199405281056|人文学院|15900002211|
|1311105|苏有明|13英语1|男|1995-04-16|内蒙古包头|330204199504162036|人文学院|15900002222|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### 输出样例:

请在这里给出输出样例。例如：

|sname|class|
|-------|-----|
|苏有明|13英语1|

### Answer ✅

```sql
 SELECT sname, class
FROM students
WHERE sname LIKE '%明%' AND ssex = '男';
```

## 4.

本题目要求编写SQL语句，
检索出```students```表中姓名是两个字的学生信息。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE students (
 sno char(7) ,
  sname char(8) NOT NULL,
  class char(10),
  ssex char(2),
  bday date ,
  bplace char(10) ,
  IDNum char(18) ,
  sdept char(16),
  phone char(11),
  PRIMARY KEY (sno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```students```表：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1311104|李嘉欣|13英语1|女|1994-05-28|山西太原|330204199405281056|人文学院|15900002211|
|1311105|苏有明|13英语1|男|1995-04-16|内蒙古包头|330204199504162036|人文学院|15900002222|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### 输出样例:

请在这里给出输出样例。例如：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### Answer ✅

```sql
 SELECT *
FROM students
WHERE CHAR_LENGTH(sname) = 2;
```

## 5.

显示截止到2021年9月1日为止年满24周岁的男学生信息。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

### 表样例

```student```表：

![student.png](https://images.ptausercontent.com/bb501d79-ad5e-4b3b-a24b-7bf630d888fc.png)

### 输出样例:

![5-6.png](https://images.ptausercontent.com/815caa54-8dae-4658-83f5-d89f29051c34.png)

### Answer ✅

```sql
 SELECT *
FROM student
WHERE sex = '男' 
  AND birth <= '1997-09-01';
```

## 6.

本题目要求编写SQL语句，查询`sh_goods`表，先按商品分类`category_id`升序排列，对于相同分类的商品再按商品价格`price`降序排列 。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/17e69781-c3b6-424e-89ec-48dc00ba3d79.PNG)


### 输出样例:

![答案.PNG](https://images.ptausercontent.com/5072deec-3bb6-42f1-8b32-89b1cb0bc7f4.PNG)

### Answer ✅

```sql
 SELECT name, category_id, price 
FROM sh_goods 
ORDER BY category_id, price DESC;
```

## 7.

本题目要求编写SQL语句，查询`sh_goods`表中`id`、`category_id`和`name`字段。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：

![样例1.PNG](https://images.ptausercontent.com/af38f5c4-8594-4adf-a08f-290ee2c02706.PNG)


### 输出样例:


![样例2.PNG](https://images.ptausercontent.com/0582be2f-2df9-4411-b5ab-199372672049.PNG)

### Answer ✅

```sql
 select id, category_id, name
from sh_goods;
```

## 8.

本题目要求编写SQL语句，
在`sh_goods`表中，查询5星好评的商品库存增加850后的值，以及这些商品进行75折促销后的价格。查询结果显示字段依据输出样例设置。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/c67dd734-8b01-4474-856f-e511b0e5af80.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/d8cd14c4-5563-44da-a3f3-21a5f980c7c9.PNG)

### Answer ✅

```sql
 SELECT 
    name, 
    price AS old_price, 
    stock AS old_stock, 
    price * 0.75 AS new_price, 
    stock + 850 AS new_stock 
FROM sh_goods 
WHERE score = 5.00;
```

## 9.

本题目要求编写SQL语句，
查询`sh_goods`表中价格在2000到6000元之间的商品编号、名称和价格，注意此范围包括2000元和6000元的商品。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/a64fa37a-2200-4042-867f-f9894068093a.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/c9a63be5-af8f-4660-9c33-c9b8b74de473.PNG)

### Answer ✅

```sql
 SELECT id, name, price 
FROM sh_goods 
WHERE price 
BETWEEN 2000 AND 6000;
```

## 10.

本题目要求编写SQL语句，
查询`goods`表中价格为NULL的商品信息。

提示：请使用`SELECT`语句作答。

### 表结构:

```
CREATE TABLE goods
 (
    id INT PRIMARY key,         --商品id
    name VARCHAR(32),           --商品名称
    price INT ,                 --商品价格
    description VARCHAR(255)    -- 商品描述
 );
```

### 表样例

`goods`表：

![样例1.PNG](https://images.ptausercontent.com/eff48a76-0e53-4b9e-b7d2-f3da1b1111f6.PNG)


### 输出样例:


![样例2.PNG](https://images.ptausercontent.com/adf4f32d-07a3-4511-abfa-abcb4d801ebe.PNG)

### Answer ✅

```sql
 SELECT id, name, price 
FROM goods 
WHERE price IS NULL;
```

## 11.

本题目要求编写SQL语句，
获取`goods`表中商品名称含有“pad”的商品。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE goods
 (
    id INT PRIMARY key,         --商品id
    name VARCHAR(32),           --商品名称
    price INT ,                 --商品价格
    description VARCHAR(255)    -- 商品描述
 );
```

### 表样例

`goods`表：


![样例1.PNG](https://images.ptausercontent.com/d2238b63-d802-42b0-9039-0f69ad482688.PNG)



### 输出样例:


![样例2.PNG](https://images.ptausercontent.com/178c5afe-5f2a-4c9e-8a83-92cc1f160827.PNG)

### Answer ✅

```sql
 SELECT id, name, price FROM goods WHERE name LIKE '%pad%';
```

## 12.

本题目要求编写SQL语句，
查询`sh_goods`表中商品分类编号（`category_id`）为3，并且用户评分为5星的商品信息。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/7902d0ac-ed6d-4cb4-9f93-af76ae30d3de.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/5cc0cf84-3d89-4407-ad21-63c0a9e866f4.PNG)

### Answer ✅

```sql
 SELECT id, name, price
FROM sh_goods
WHERE category_id = 3 AND score = 5.00;
```

## 13.

本题目要求编写SQL语句，
查询`sh_goods`表中用户评分为4.5或者价格小于10元的商品信息。

提示：请使用`SELECT`语句作答。

### 表结构:


```
CREATE TABLE sh_goods (
  id INT  PRIMARY KEY,                         --商品id
  category_id INT  NOT NULL DEFAULT 0 ,        -- 商品分类id
  name VARCHAR(120) NOT NULL,                  --商品名称
  keyword VARCHAR(255) NOT NULL,               -- 关键词编号
  content TEXT NOT NULL ,                      --商品详情
  price DECIMAL(10, 2)  NOT NULL DEFAULT 0 ,   --价格
  stock INT  NOT NULL DEFAULT 0,               -- 库存
  score DECIMAL(3, 2)  NOT NULL DEFAULT 0 ,    -- 用户评分
  comment_count INT  NOT NULL DEFAULT 0        -- 评论数量
) ;
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/a7e03894-0606-49bf-a0e5-3b4adbec7736.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/41a09c40-73b9-4028-8221-1c6ad199333a.PNG)

### Answer ✅

```sql
 SELECT name, price, score
FROM sh_goods
WHERE score = 4.5 OR price < 10.00;
```

## 14.

本题目要求编写SQL语句，在`Teacher`r表中查询出所有教师所在部门编号，并消除重复记录。

提示：请使用`SELECT`语句作答。

### 表结构:


```
Create table Teacher(
TeacherID   char(8) primary key,     --教师编号
Teachername char(12) not null,       --教师姓名
Sex  char(2) not null check(sex in('男','女')),  --教师性别
Brith datetime ,                                 --出生日期
Profession char(8) check(profession in('教授','副教授','讲师','助教')),  --职称
Telephone varchar(20),                          --联系电话
HomeAddr varchar(50),                           --家庭地址
DepartmentID char(4)                            --系部编号
);
```



### 表样例

`Teacher`表：

![Teacher表.PNG](https://images.ptausercontent.com/e9e1e65f-8459-4174-91d8-7bfaac1f9e3f.PNG)




### 输出样例:

![答案.PNG](https://images.ptausercontent.com/f6db91be-875d-4e19-a563-b833d5caaace.PNG)

### Answer ✅

```sql
 SELECT DISTINCT DepartmentID 
FROM Teacher;
```

## 15.

这是一个SQL编程题模板。本题目要求编写SQL语句，
查询`Student`表中出出生日期最大（即年龄最小）的学生姓名及出生日期。。

提示：请使用`SELECT`语句作答。

### 表结构:


```
Create table Student(
StudentID   char(12) primary key,
StudentName char(8) not null,
Sex  char(2) not null ,
Birth  datetime not null,
HomeAddr varchar(80),
EntranceTime datetime default getdate(),
ClassID char(8) 
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```Student```表：


![Student表.PNG](https://images.ptausercontent.com/6ab3de80-02b1-49d1-875d-07f12ebc8c49.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/b2569ed7-ccee-4736-8e42-b78673900b7b.PNG)

### Answer ✅

```sql
 SELECT StudentName, Birth
FROM Student
WHERE Birth = (SELECT MAX(Birth) FROM Student);
```

## 16.

这是一个SQL编程题模板。本题目要求编写SQL语句，查询`Class`表中学生人数大于5人的班级编号。

提示：请使用SELECT语句作答。

### 表结构:

```
Create table Class(
ClassID   char(8) primary key,    --班级编号
ClassName varchar(20) not null,   --班级名称
Monitor  char(8),                 --班长姓名
StudentNum int ,                  -- 学生人数
DepartmentID char(4)              -- 系部编号
);
```

### 表样例


```Class```表：


![Class表.PNG](https://images.ptausercontent.com/a691ba1c-ed20-4445-8970-0d108c8a73ae.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/8d8e524d-a674-421b-834b-f97a064b1961.PNG)

### Answer ✅

```sql
 SELECT ClassID 
FROM Class 
WHERE StudentNum > 5;
```

## 17.

这是一个SQL编程题模板。本题目要求编写SQL语句，
查询`Grade`表中课程“Dp010001”的最高分。

提示：请使用`SELECT`语句作答。

### 表结构:


```
Create table Grade(
CourseID   char(8) ,    --班级编号
StudentID char(12) ,    --学号
Semester  int not null, --学期
SchoolYear int ,        --学年
Grade numeric(5,1),     --成绩
primary key(CourseID,StudentID)  
);
```

### 表样例


```Grade```表：

![Grade表第1部分.PNG](https://images.ptausercontent.com/4c4c7dfe-1599-48cd-904f-14910295bfa1.PNG)


![Grade表第2部分.PNG](https://images.ptausercontent.com/debe1c14-a547-4366-96be-d5b396c9b809.PNG)


![Grade表第3部分.PNG](https://images.ptausercontent.com/d3d155c2-eb1c-4fe4-9c7c-a71e97fcc465.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/76ec6859-fc7d-46d5-814e-4508108e1a4b.PNG)

### Answer ✅

```sql
 SELECT MAX(Grade) AS max_grade
FROM Grade
WHERE CourseID = 'Dp010001';
```

## 18.

这是一个SQL编程题模板。本题目要求编写SQL语句，
查询`Grade`表中课程“Dp010004”的学生学号和成绩，并按成绩降序排列，成绩相同按学号升序排列。

提示：请使用`SELECT`语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
Create table Grade(
CourseID   char(8) ,
StudentID char(12) ,
Semester  int not null,
SchoolYear int ,
Grade numeric(5,1),
primary key(CourseID,StudentID)
);
```

### 表样例


```Grade```表：


![Grade表第1部分.PNG](https://images.ptausercontent.com/661c3086-9d33-4718-bacb-e38056d1c4e4.PNG)

![Grade表第2部分.PNG](https://images.ptausercontent.com/df85b11c-474b-492b-8174-984f7e9c911b.PNG)

![Grade表第3部分.PNG](https://images.ptausercontent.com/d208a14e-2b4e-4ef7-9220-ba5e3bc4f667.PNG)


### 输出样例:

![答案.PNG](https://images.ptausercontent.com/ac4e30a1-b90d-42ec-bd20-1a2694d4742d.PNG)

### Answer ✅

```sql
 SELECT StudentID, Grade
FROM Grade
WHERE CourseID = 'Dp010004'
ORDER BY Grade DESC, StudentID ASC;
```

## 19.

本题目要求编写SQL语句，
检索出```sc```表、```course```表中选修课名中含有“数据库”三个字的课程且成绩在80～90分之间的学生学号及成绩。

提示：请使用join连接作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE course (
 cno char(7) ,
 cname varchar(20) NOT NULL,
  cpno char(7),
  ccredit int NOT NULL,
  PRIMARY KEY (cno)
) ;

CREATE TABLE sc (
 sno char(7) ,
 cno char(7) ,
 score decimal(4,1),
 point decimal(2,1),
 PRIMARY KEY (sno,cno)
) ;
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```course```表：

|cno|cname|cpno|ccredit|
|----|------|-----|--------|
|0000002|C语言基础|0000027|9|
|0000003|Linux操作系统|0000013|5|
|0000004|C#程序设计|0000002|6|
|0000052|数据库OCP考证|NULL|4|

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1311104|0000011|53.0|0.0|
|1311104|0000027|80.0|1.0|
|1311105|0000027|84.0|1.0|
|1711101|0000052|81.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|sno|score|
|----|------|
|1711101|81.0|

### Answer ✅

```sql
 SELECT sc.sno, sc.score
FROM sc
JOIN course ON sc.cno = course.cno
WHERE course.cname LIKE '%数据库%' 
  AND sc.score BETWEEN 80 AND 90;
```

## 20.

本题目要求编写UPDATE语句，
将```sc```表中“高等数学”课程不及格的成绩全改为60分


### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
)
CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`cno`)
)

```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```cou```表：


![cou.JPG](https://images.ptausercontent.com/9cb5a144-fbe6-4cf7-87c2-4aacb53c6280.JPG)

```sc```表：


![u1.JPG](https://images.ptausercontent.com/3dc111be-28b7-4512-abd8-854c41e17060.JPG)



### 输出样例:

请在这里给出输出样例。例如：


![u2.JPG](https://images.ptausercontent.com/7803263b-de65-4a21-a771-a8bf245dfa17.JPG)

### Answer ✅

```sql
 UPDATE sc
JOIN cou ON sc.cno = cou.cno
SET sc.grade = 60
WHERE cou.cname = '高等数学' AND sc.grade < 60;
```

## 21.

本题目要求编写SQL语句，
增加一个仓库，编号为’D01’，城市为’绍兴’，大小为11000。


### 表结构:

```
CREATE TABLE `warehouse` (
  `Wno` varchar(10),   --仓库编号
  `City` varchar(20),  --所在城市
  `Size` int(11),      --面积
);
```

### 表样例

```warehouse```表：

| Wno  | City | Size |
| ---- | ---- | ---- |
| A01  | 杭州 | 15000 |
| A02  | 建德 | 5000  |
| B01  | 宁波 | 1200  |
| B02  | 奉化 | 7500  |
| C01  | 温州 | 10000 |
| C02  | 乐清 | 8000  |

### 输出样例:

| Wno  | City | Size |
| ---- | ---- | ---- |
| A01  | 杭州 | 15000 |
| A02  | 建德 | 5000  |
| B01  | 宁波 | 1200  |
| B02  | 奉化 | 7500  |
| C01  | 温州 | 10000 |
| C02  | 乐清 | 8000  |
| D01  | 绍兴 | 11000 |

### Answer ✅

```sql
 INSERT INTO warehouse (Wno, City, Size)
VALUES ('D01', '绍兴', 11000);
```

## 22.

本题目要求编写SQL语句，
给所有产品名中含’螺母’的订单的数量增加40%。


### 表结构:

```
CREATE TABLE `orders` (
  `OrdNo` int(11),   --订单编号
  `Sid` varchar(10), --供应商编号
  `Eid` varchar(10), --职工编号
  `Pid` varchar(20), --商品编号
  `Price` decimal(10,2), --价格
  `QTY` int(11),     --订购数量
  `ordDate` date    --订单日期
);
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight` decimal(10, 3)    --重量
);
```

### 表样例
```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P03  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P05  | 60    | 50  | 2022-02-14 |

```product```表：

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |

### 输出样例:


```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P03  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P05  | 60    | 70  | 2022-02-14 |

### Answer ✅

```sql
 UPDATE orders
JOIN product ON orders.Pid = product.Pid
SET orders.QTY = orders.QTY * 1.4
WHERE product.PName LIKE '%螺母%';
```

## 23.

要求编写SQL语句， 删除`Product`表中销售价格大于等于100的商品信息。


### 表结构:


```
CREATE TABLE Product
(product_id      CHAR(4)      NOT NULL, --商品编号
 product_name    VARCHAR(100) NOT NULL, --商品名称
 product_type    VARCHAR(32)  NOT NULL, --商品种类
 sale_price      INTEGER ,              --销售价格
 purchase_price  INTEGER ,              --进货价格
 regist_date     DATE ,                 --登记日期
 PRIMARY KEY (product_id)); 

```

### 删除前查询结果：
`Product`表

![图1.png](https://images.ptausercontent.com/4af9eaea-7a2e-4ee0-adca-6b1383d7c6e3.png)



### 删除后查询结果：
`Product`表

![图2.png](https://images.ptausercontent.com/ed4f36d3-5e44-454e-bc16-b3686f26a004.png)

### Answer ✅

```sql
 DELETE FROM Product
WHERE sale_price >= 100;
```

## 24.

### 题干:
检索出生日期早于伍容华出生日期（不包含此日期）的所有学生信息。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE student (

  sno varchar(6) NOT NULL ,

  sname varchar(10) ,

  sex char(2) ,

  nation char(2) ,

  pnum char(18) ,

  birth date ,

  phone char(11) ,

  dept varchar(20) ,

  PRIMARY KEY (sno)

) ;

CREATE TABLE course (

  cno varchar(6) NOT NULL,

  cname varchar(20) ,

  credit int(11) ,

  attribute varchar(10) ,

  PRIMARY KEY (cno)

) ;

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;


### 表样例
```student```表：


![student.png](https://images.ptausercontent.com/989fcf26-df8b-464b-bab0-c647772ae412.png)

```course```表：


![course.png](https://images.ptausercontent.com/cbcd8de4-a8ac-450f-b316-19a950425c0c.png)

```score```表：


![score.png](https://images.ptausercontent.com/6dceeaa7-09d4-4868-ac59-ac50e498aad0.png)

### 输出样例:

![7-1.png](https://images.ptausercontent.com/02766a54-a7e9-4f63-a652-5e760fd8d17d.png)

### Answer ✅

```sql
 SELECT *
FROM student
WHERE birth < (SELECT birth birth FROM student WHERE sname = '伍容华');
```

## 25.

本题目要求编写SQL语句，
检索出```product```表中所有符合```40 <= Weight <= 65```的记录。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight` decimal(10, 3)    --重量
);
```

### 表样例

```product```表：

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |
| P21  | 螺钉    | 3      |

### 输出样例:

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P02  | M8螺栓  | 40     |
| P05  | 螺母    | 45     |

### Answer ✅

```sql
 SELECT *
FROM product
WHERE Weight BETWEEN 40 AND 65;
```

## 26.

本题目要求编写SQL语句，
检索出```supplier```表中所有符合```既不是’上海’，也不是’北京’和’天津’的供货商信息```的记录。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE `supplier` (
  `Sid` varchar(10),   --供应商编号
  `SName` varchar(50), --供应商名称
  `City` varchar(20)   --供应商地址
);
```

### 表样例

```supplier```表：

| Sid  | SName        | City |
| ---- | ------------ | ---- |
| S01  | 东风机械厂   | 武汉 |
| S02  | 天鹰紧固件厂 | 温州 |
| S05  | 长城机电     | 杭州 |

### 输出样例:

| Sid  | SName        | City |
| ---- | ------------ | ---- |
| S01  | 东风机械厂   | 武汉 |
| S02  | 天鹰紧固件厂 | 温州 |
| S05  | 长城机电     | 杭州 |

### Answer ✅

```sql
 SELECT *
FROM supplier
WHERE City NOT IN ('上海', '北京', '天津');
```

## 27.

本题目要求编写SQL语句，
检索出```product```表中所有符合```包含’M’且重量大于30```产品编号。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight` decimal(10, 3)    --重量
);
```

### 表样例

```product```表：

| Pid  | PName   | Weight |
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |
| P21  | 螺钉    | 3      |


### 输出样例:

| Pid  |
| ---- |
| P02  |
| P03  |

### Answer ✅

```sql
 SELECT Pid
FROM product
WHERE PName LIKE '%M%' AND Weight > 30;
```

## 28.

本题目要求编写SQL语句，
检索出```employee```表中没有分配工作的员工编号、姓名。

提示：请使用SELECT语句作答。

### 表结构:



```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);
```

### 表样例

```employee```表：

| Eid | EName | Wno  | Salary |
| ---- | ---- | ---- | ------ |
| 0010 | 张三  | A01  |  3600  |
| 0011 | 刘勇  | A01  |  2700  |
| 0012 | 张立  | A01  |  8500  |
| 0021 | 刘靖  | A02  |  2500  |
| 0022 | 王强  | A02  |  5600  |
| 0023 | 李军  |      |  5000  |
| 0031 | 王林  |      |  3500  |


### 输出样例:

| Eid | EName 
| ---- | ---- |
| 0023 | 李军  |
| 0031 | 王林  |

### Answer ✅

```sql
 SELECT Eid, EName
FROM employee
WHERE Wno IS NULL;
```

## 29.

要求编写SQL语句，查询`Product`表中进货价格在50至150之间的商品记录。注意：查询结果中应包含50和150元的商品记录。


### 表结构:


```
CREATE TABLE Product
(product_id      CHAR(4)      NOT NULL, --商品编号
 product_name    VARCHAR(100) NOT NULL, --商品名称
 product_type    VARCHAR(32)  NOT NULL, --商品种类
 sale_price      INTEGER ,              --销售价格
 purchase_price  INTEGER ,              --进货价格
 regist_date     DATE ,                 --登记日期
 PRIMARY KEY (product_id)); 

```

### 表样例
`Product`表

![图1.png](https://images.ptausercontent.com/5ac32c55-83e4-4f16-8e58-0d49f8230dd7.png)


### 输出样例:
`Product`表

![图2.png](https://images.ptausercontent.com/2fbb7002-911b-4a4e-9bfc-8c5077666744.png)

### Answer ✅

```sql
 SELECT *
FROM Product
WHERE purchase_price BETWEEN 50 AND 150;
```

## 30.

本题目要求编写SQL语句，
检索出```product```表中每种产品的名称和重量(用kg表示)。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `product` (
  `Pid` varchar(20),   --商品编号
  `PName` varchar(50), --商品名称
  `Weight_g` decimal(10, 3)    --重量
);
```

### 表样例

```product```表：

| Pid  | PName   | Weight_g|
| ---- | ------- | ------ |
| P01  | M6螺栓  | 30     |
| P02  | M8螺栓  | 40     |
| P03  | M16螺栓 | 140    |
| P04  | 螺帽    | 30     |
| P05  | 螺母    | 45     |
| P06  | 垫片    | 10     |
| P07  | 铰链    | 70     |
| P21  | 螺钉    | 3      |

### 输出样例:

| PName   | Weight_kg |
| ------- | ------ |
| M6螺栓  | 0.030  |
| M8螺栓  | 0.040  |
| M16螺栓 | 0.140  |
| 螺帽    | 0.030  |
| 螺母    | 0.045  |
| 垫片    | 0.010  |
| 铰链    | 0.070  |
| 螺钉    | 0.003  |

### Answer ✅

```sql
 SELECT PName, Weight_g / 1000 AS Weight_kg
FROM product;
```

