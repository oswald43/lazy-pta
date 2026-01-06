## 1.

本题目要求编写SQL语句，在```SPJ```数据库中，查询在供应工程项目零件时，比```p6```零件每次的供应数量都高的零件```pno```。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `j` (  --  工程项目表
  `jno` char(3) NOT NULL,-- 工程项目号
  `jname` varchar(10) DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`jno`)
);
CREATE TABLE `p` (  -- 零件表
  `pno` char(3) NOT NULL,  -- 零件号
  `pname` varchar(10) DEFAULT NULL,
  `color` char(2) DEFAULT NULL,
  `weight` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`pno`)
);
CREATE TABLE `s` (  -- 供应商表
  `sno` char(3) NOT NULL,  -- 供应商号
  `sname` varchar(10) DEFAULT NULL,
  `status` char(2) DEFAULT NULL,
  `city` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`sno`)
);
CREATE TABLE `spj` (  -- 零件供应表
  `sno` char(3) NOT NULL,
  `pno` char(3) NOT NULL,
  `jno` char(3) NOT NULL,
  `qty` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`sno`,`pno`,`jno`),
  CONSTRAINT `fk_jno` FOREIGN KEY (`jno`) REFERENCES `j` (`jno`),
  CONSTRAINT `fk_pno` FOREIGN KEY (`pno`) REFERENCES `p` (`pno`),
  CONSTRAINT `fk_sno` FOREIGN KEY (`sno`) REFERENCES `s` (`sno`)
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```s```表：


![s.JPG](https://images.ptausercontent.com/c73d9251-aae3-41a4-bf69-53ce1ad449e2.JPG)

```p```表：

![p.JPG](https://images.ptausercontent.com/380bc506-c0b8-4e9c-b232-18bd9c1f6557.JPG)

```j```表：


![j.JPG](https://images.ptausercontent.com/4b3256f6-dc2c-476e-aa49-ac0721662110.JPG)

```spj```表：



![sc.JPG](https://images.ptausercontent.com/e8f1c1f6-ce38-41c4-981b-d71b48287fc9.JPG)





### 输出样例:

请在这里给出输出样例。例如：


![12.JPG](https://images.ptausercontent.com/b010f077-913c-4970-af65-969eb1f08d00.JPG)

### Answer ✅

```sql
 SELECT pno
FROM spj
GROUP BY pno
HAVING MIN(qty) > (SELECT MAX(qty) FROM spj WHERE pno = 'p6');
```

## 2.

本题目要求编写SQL语句，
查询生产```三```种不同型号的```PC```的厂商。


### 表结构:


```
CREATE TABLE product
( maker CHAR(20) ,          --制造商
  model CHAR(20) NOT NULL,  --产品型号
  type CHAR(20),            --产品类型
  PRIMARY KEY(model)
);
CREATE TABLE pc
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  cd CHAR(4),                 --光驱
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model)
);
```

### 表样例


```product```表：

|maker|model|type|
|--|----|----|
|D|2003|便携式电脑|
|D|3001|打印机|
|A|1001|个人电脑|
|A|1002|个人电脑|
|A|1003|个人电脑|
|B|1004|个人电脑|
|C|1005|个人电脑|

```pc```表：

|model|speed|ram|hd|cd|price|
|--|----|---|---|----|----|
|1001|133.00|16|1.60|6X|1595|
|1002|120.00|16|1.60|6X|1399|
|1003|166.00|24|2.00|6X|1899|
|1004|166.00|32|2.50|8X|1999|
|1005|166.00|16|2.00|8X|1999|



### 输出样例:

|maker|
|--|
|A|

### Answer ✅

```sql
 SELECT p.maker
FROM product p
JOIN pc ON p.model = pc.model  -- 关联产品表和PC表，筛选PC类型产品
GROUP BY p.maker               -- 按厂商分组
HAVING COUNT(DISTINCT p.model) >= 3;  -- 统计该厂商的PC型号数，筛选至少3种的
```

## 3.

本题目要求编写SQL语句，
检索出```students```表和```sc```表中所有学生的选课情况（包括学号，姓名，课号，成绩），结果中包括没有选课的学生。

提示：请使用join连接作答。

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

```students```表：

|sno|sname|class|ssex|bday|bplace|IDNum|sdept|phone|
|----|-------|-----|-----|-----|--------|-------|-------|-------|
|1311104|李嘉欣|13英语1|女|1994-05-28|山西太原|330204199405281056|人文学院|15900002211|
|1311105|苏有明|13英语1|男|1995-04-16|内蒙古包头|330204199504162036|人文学院|15900002222|
|1711101|赵薇|17物流1|女|1999-02-11|安徽合肥|330203199902110925|经管学院|15900001177|
|1711102|董洁|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1311104|0000011|53.0|0.0|
|1311104|0000027|80.0|1.0|
|1311105|0000027|84.0|1.0|
|1711101|0000052|71.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|sno|sname|cno|score|
|----|-------|----|------|
|1311104|李嘉欣|0000011|53.0|
|1311104|李嘉欣|0000027|80.0|
|1311105|苏有明|0000027|84.0|
|1711101|赵薇|0000052|71.0|
|1711102|董洁|NULL|NULL|

### Answer ✅

```sql
 SELECT 
    s.sno,
    s.sname,
    sc.cno,
    sc.score
FROM 
    students s
LEFT JOIN 
    sc ON s.sno = sc.sno;  -- 关联条件：学生学号 = 选课记录学号
```

## 4.

本题目要求编写SQL语句，
检索出```product```表中所有产品名中包含’螺母’的产品种类数。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

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

请在这里给出输出样例。例如：

|count(*)|
|--|
|1|

### Answer ✅

```sql
 SELECT CAST(COUNT(*) AS SIGNED INTEGER) AS `count(*)`
FROM product
WHERE PName LIKE '%螺母%';
```

## 5.

本题目要求编写SQL语句，
检索出```employee```表中所有员工中最高工资和最低工资。

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

请在这里给出输出样例。例如：

|max_Salary|min_Salary|
|--|--|
|8500|2500|

### Answer ✅

```sql
 SELECT MAX(Salary) AS max_Salary, MIN(Salary) AS min_Salary
FROM employee;
```

## 6.

本题目要求编写SQL语句，
检索出```employee```表中每个仓库的编号及员工数量。

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

请在这里给出输出样例。例如：

|Wno|Count_Eid|
|--|--|
|A01|3|
|A02|2|

### Answer ✅

```sql
 SELECT 
    Wno, 
    COUNT(Eid) AS Count_Eid
FROM 
    employee
WHERE 
    Wno IS NOT NULL  -- 过滤掉仓库编号为 NULL 的记录
GROUP BY 
    Wno;
```

## 7.

本题目要求编写嵌套查询SQL语句，
查询’A01’仓库中的职工中比’A02’所有职工薪水都高的职工编号与姓名。

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
| 0012 | 张立  |

### Answer ✅

```sql
 SELECT Eid, EName
FROM employee
WHERE Wno = 'A01' 
  AND Salary > (SELECT MAX(Salary) FROM employee WHERE Wno = 'A02');
```

## 8.

本题目要求编写嵌套查询SQL语句，
查询销售数量最多的供应商编号。

提示：请使用SELECT语句作答。

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
```

### 表样例

```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P01  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P03  | 60    | 55   | 2022-02-14 |

### 输出样例:

| Sid | 
| ---- |
| S03|

### Answer ✅

```sql
 SELECT Sid
FROM orders
GROUP BY Sid
HAVING SUM(QTY) = (SELECT MAX(total_qty) 
                   FROM (SELECT SUM(QTY) AS total_qty 
                         FROM orders 
                         GROUP BY Sid) AS temp);
```

## 9.

本题目要求编写SQL语句，
查询销售过’0011’号员工销售的所有产品的其他员工编号和姓名。

提示：请使用SELECT语句作答。

### 表结构:

```
CREATE TABLE `employee` (
  `Eid` varchar(10),   --职工编号
  `EName` varchar(30), --职工姓名
  `Wno` varchar(10),   --所在仓库
  `Salary` int(11)     --职工工资
);

CREATE TABLE `orders` (
  `OrdNo` int(11),   --订单编号
  `Sid` varchar(10), --供应商编号
  `Eid` varchar(10), --职工编号
  `Pid` varchar(20), --商品编号
  `Price` decimal(10,2), --价格
  `QTY` int(11),     --订购数量
  `ordDate` date    --订单日期
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


```orders```表：

| OrdNo | Sid  | Eid  | Pid  | Price | QTY  | ordDate    |
| ----- | ---- | ---- | ---- | ----- | ---- | ---------- |
| 1     | S01  | 0011 | P01  | 11    | 23   | 2022-02-13 |
| 2     | S02  | 0012 | P01  | 12    | 25   | 2022-02-14 |
| 3     | S03  | 0012 | P03  | 60    | 55   | 2022-02-14 |


### 输出样例:


| Eid | EName | 
| ---- | ---- | 
| 0012 | 张立  |

### Answer ✅

```sql
 SELECT DISTINCT e.Eid, e.EName
FROM employee e
JOIN orders o ON e.Eid = o.Eid
WHERE o.Pid IN (
    -- 子查询：获取'0011'号员工销售过的所有产品编号
    SELECT DISTINCT Pid 
    FROM orders 
    WHERE Eid = '0011'
)
AND e.Eid != '0011'; -- 排除'0011'号员工自身
```

## 10.

本题目要求编写SQL语句，
 查询在具有最小内存容量的所有PC中具有最快处理器的PC制造商。

提示：请使用SELECT语句作答。

### 表结构:


```
CREATE TABLE product
( maker CHAR(20) ,          --制造商
  model CHAR(20) NOT NULL,  --产品型号
  type CHAR(20),            --产品类型
  PRIMARY KEY(model)
);
CREATE TABLE pc
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  cd CHAR(4),                 --光驱
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model)
);
```

### 表样例

```product```表：

|maker|model|type|
|--|----|----|
|D|2003|便携式电脑|
|D|3001|打印机|
|A|1001|个人电脑|
|A|1002|个人电脑|
|A|1003|个人电脑|
|B|1004|个人电脑|



```pc```表：

|model|speed|ram|hd|cd|price|
|--|----|---|---|----|----|
|1001|133.00|16|1.60|6X|1595|
|1002|120.00|16|1.60|6X|1399|
|1003|166.00|24|2.50|6X|1899|
|1004|166.00|32|2.50|8X|1999|


### 输出样例:



|maker|
|--|
|A|

### Answer ✅

```sql
 SELECT DISTINCT p.maker
FROM product p
JOIN pc ON p.model = pc.model
WHERE pc.ram = (SELECT MIN(ram) FROM pc)
  AND pc.speed = (SELECT MAX(speed) 
                  FROM pc 
                  WHERE ram = (SELECT MIN(ram) FROM pc));
```

## 11.

本题目要求编写SQL语句，
查询至少生产两种不同型号的计算机(```PC```或```便携式电脑```)且机器速度至少为```133```的厂商，输出结果按照制造商升序排列。

提示：

本题有三种情况:
（1）	至少生产两种不同PC的厂商 
（2）	至少生产两种不同便携式电脑的厂商
（3）	至少生产一种PC且至少生产一种便携式电脑的厂商。

### 表结构:
```
CREATE TABLE product
( maker CHAR(20) ,          --制造商
  model CHAR(20) NOT NULL,  --产品型号
  type CHAR(20),            --产品类型
  PRIMARY KEY(model)
);
CREATE TABLE pc
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  cd CHAR(4),                 --光驱
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model)
);
CREATE TABLE laptop
( model CHAR(20) NOT NULL,    --型号
  speed  DECIMAL(6,2),        --速度 
  ram  INT,                   --内存
  hd DECIMAL(6,2),            --硬盘容量
  screen DECIMAL(6,2),        --屏幕大小
  price INT,                  --价钱
  PRIMARY KEY(model),
  FOREIGN KEY(model) REFERENCES product(model) 
);
```

### 表样例


```product```表：

|maker|model|type|
|--|----|----|
|D|2001|便携式电脑|
|D|2002|便携式电脑|
|E|2004|便携式电脑|
|D|3001|打印机|
|B|3002|打印机|
|A|1001|个人电脑|
|A|1002|个人电脑|
|A|1003|个人电脑|
|D|1008|个人电脑|


```pc```表：

|model|speed|ram|hd|cd|price|
|--|----|---|---|----|----|
|1001|133.00|16|1.60|6X|1595|
|1002|120.00|16|1.60|6X|1399|
|1003|166.00|32|2.50|8X|1999|
|1008|180.00|32|2.00|8X|3699|



```laptop```表：

|model|speed|ram|hd|screen|price|
|--|----|---|----|----|----|
|2001|100.00|20|1.10|9.50|1999|
|2002|133.00|12|0.75|11.30|2499|
|2004|133.00|16|1.10|11.20|3499 |



### 输出样例:


|maker |
|--|
|A|
|D|

### Answer ✅

```sql
 SELECT maker
FROM (
    -- 筛选速度≥133的PC制造商及型号
    SELECT p.maker, p.model
    FROM product p
    JOIN pc ON p.model = pc.model
    WHERE pc.speed >= 133
    UNION ALL
    -- 筛选速度≥133的便携式电脑制造商及型号
    SELECT p.maker, p.model
    FROM product p
    JOIN laptop ON p.model = laptop.model
    WHERE laptop.speed >= 133
) AS temp
GROUP BY maker
HAVING COUNT(DISTINCT model) >= 2  -- 至少两种不同型号
ORDER BY maker ASC;  -- 按制造商升序排列
```

## 12.

本题目要求编写嵌套查询SQL语句，
查询’A01’仓库中的职工中比’A02’任意一个职工薪水少的职工编号与姓名。

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
| 0010 | 张三  |
| 0011 | 刘勇  |

### Answer ✅

```sql
 SELECT Eid, EName
FROM employee
WHERE Wno = 'A01' 
  AND Salary < ANY (SELECT Salary FROM employee WHERE Wno = 'A02');
```

## 13.

### 题干:
统计每个学院的学生总人数，并按人数降序排列。

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

![student.png](https://images.ptausercontent.com/5ba2c268-ccb2-45c0-9f90-abc1bb915712.png)

```course```表：

![course.png](https://images.ptausercontent.com/aed71a58-8b5f-431c-8456-8627d6f6275d.png)

```score```表：

![score.png](https://images.ptausercontent.com/43cc116d-5ab4-4363-91dc-16d79c515e6b.png)

### 输出样例:

![6-4.png](https://images.ptausercontent.com/51aba08c-3080-412d-9fbf-f6add6358c95.png)

### Answer ✅

```sql
 SELECT
    dept AS 院部,
    CAST(COUNT(*) AS SIGNED INTEGER) AS 总人数
FROM
    student
GROUP BY
    dept
ORDER BY
    总人数 DESC;
```

## 14.

### 题干:
查询选修了2门以上课程的学生学号和平均成绩。

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

![student.png](https://images.ptausercontent.com/5ba2c268-ccb2-45c0-9f90-abc1bb915712.png)

```course```表：

![course.png](https://images.ptausercontent.com/aed71a58-8b5f-431c-8456-8627d6f6275d.png)

```score```表：

![score.png](https://images.ptausercontent.com/43cc116d-5ab4-4363-91dc-16d79c515e6b.png)

### 输出样例:


![6-6.png](https://images.ptausercontent.com/bc08cdd8-5087-41d7-8ae8-f6a1e8b2a34f.png)

### Answer ✅

```sql
 SELECT sno AS 学号, AVG(grade) AS 平均分
FROM score
GROUP BY sno
HAVING COUNT(*) >= 2
ORDER BY sno;
```

## 15.

本题目要求编写SQL语句，删除所有期末成绩小于60分的选课记录。
#### 现有教务管理系统的关系描述如下：
* 每个院系（部门）有多个班级和多名教师，每名教师各自开设有多门课程。
* 每位教师管理多个班级（班主任），每个班级只能被一位老师管理。
* 每名学生属于一个班级，可以选修多门课程。
* 每门课程可被多位老师讲授，并且有些课程具有先导课程，每门课程的成绩由平时成绩、期中成绩、期末成绩组成，最终计算总评成绩。
* 课程信息表供教师和学生查询，包含课程信息、任课教师、上课班级、上课教室、上课日期（周几）、上课时间（第几节课）、上课学期学年等信息。
##### 1.选课表sc
######  表结构
![sc-1.png](https://images.ptausercontent.com/5053c0e1-61b9-4a7e-a906-32d4ffac3223.png)
######  表数据
![sc-2.png](https://images.ptausercontent.com/16ba66d5-0702-4fad-87f6-dea6f3abd027.png)

### Answer ✅

```sql
 DELETE FROM sc
WHERE SCScore3 < 60;
```

