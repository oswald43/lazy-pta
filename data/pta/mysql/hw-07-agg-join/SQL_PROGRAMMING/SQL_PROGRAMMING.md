## 1.

本题目要求编写SQL语句，
检索C002号课程的成绩最高的二人学号，姓名与成绩



### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
);

CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` stu```表：


![stu.JPG](https://images.ptausercontent.com/bbf57a3f-bfff-4cc3-b175-6e34f9658519.JPG)


``` sc```表：


![sc.JPG](https://images.ptausercontent.com/a88f12a4-f199-4034-b2f7-013aadcaf8b5.JPG)



### 输出样例:

请在这里给出输出样例。例如：


![l225.JPG](https://images.ptausercontent.com/6bd95adb-d82c-4b8e-869e-b08829194b99.JPG)

## 2.

本题目要求编写UPDATE语句，
把所有低于７５分的女生成绩提高5%;



### 表结构:

请在这里写定义表结构的SQL语句。例如：

```

CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`)
);
CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
)


```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` stu```表：


![stu.JPG](https://images.ptausercontent.com/d1009ca4-e96f-4400-81b7-aee761cf0861.JPG)


``` sc```表：


![sc.JPG](https://images.ptausercontent.com/7c9724c4-82b9-4073-be6b-5a921d90c20a.JPG)

### 输出样例:

例如：
修改女生成绩后的```sc```表如下：

![u2b.JPG](https://images.ptausercontent.com/507ca0d9-bb8b-497f-ba38-e9130b99471f.JPG)

## 3.

本题目要求编写DELETE语句，删除选修’C语言’课程的女生的选课记录。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL, 
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,  --0为女生，1为男生。
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`)
);
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
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
)

```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` stu```表：


![stu1.JPG](https://images.ptausercontent.com/fcad1d1f-9d5c-45a9-9533-e19c0c6a5fa6.JPG)

```cou```表：


![cou.JPG](https://images.ptausercontent.com/bb3c9397-96a3-4521-8cff-6b8c1b13a273.JPG)


```sc```表：


![sc1.JPG](https://images.ptausercontent.com/c0c78e29-ffc1-406e-a62f-ce67b8661b29.JPG)




### 输出样例:

删除记录后，```sc```表如下：



![sc2.JPG](https://images.ptausercontent.com/97d96f20-6559-4eed-b062-089c504f5bf0.JPG)

## 4.

在```产品表(products)```中找出```库存量(UnitsInStock)```小于```订购量(UnitsOnOrder)```的产品的```产品编号（ProductID）```和```产品名称（ProductName）```
提示：请使用SELECT语句作答。

### 表结构:

|列名|数据类型|长度|主码|说明|
|---|---|---|---|---|
|ProductID|int|11|√|产品编号|
|ProductName|varchar|40||产品名称|
|SupplierID|int|11||供应商编号|
|CategoryID|int|11||种类编号|
|QuantityPerUnit|varchar|20||数量|
|UnitPrice|decimal|10,4||单价|
|UnitsInStock|smallint|2||库存数量|
|UnitsOnOrder|smallint|2||订购数量|
|ReorderLevel|smallint|2||再次订购量|
|Discontinued|bit|1||中止|


### 表样例


```products```表：

|ProductID|ProductName|UnitsInStock|UnitsOnOrder|
|---|---|---|---|
|1|Chai|39|0|
|2|Chang|17|40|
|3|Aniseed Syrup|13|70|
|4|Chef Anton's Cajun Seasoning|53|0|
|5|Chef Anton's Gumbo Mix|0|0|
|6|Grandma's Boysenberry Spread|120|0|
|7|Uncle Bob's Organic Dried Pears|15|0|
|8|Northwoods Cranberry Sauce|6|0|
|9|Mishi Kobe Niku|29|0|
|10|Ikura|31|0|

### 输出样例:

|ProductID|ProductName|
|---|---|
|2|Chang|
|3|Aniseed Syrup|

## 5.

查询每位领导的直接下属数量，显示：领导的```员工编号（EmployeeID）```，下属数量（重命名为（```countSub```））

提示：请使用SELECT语句作答。

### 表结构:

|列名|数据类型|长度|主码|说明|
|---|---|---|---|---|
|EmployeeID| int|11|√|员工编号|
|LastName| varchar|20||姓|
|FirstName| varchar|10||名|
|Title| varchar|30||职务|
|TitleOfCourtesy| varchar|25||礼貌称号|
|BirthDate| datetime,|||出生日期|
|HireDate| datetime,|||入职日期|
|Address| varchar|60||地址|
|City| varchar|15||城市|
|Region| varchar|15||区域|
|PostalCode| varchar|10||邮政编码|
|Country| varchar|15||国家|
|HomePhone| varchar|24||住宅电话|
|Extension| varchar|4||范围|
|Photo| longblob,|||照片|
|ReportsTo| int|11||直接上级|
|PhotoPath| varchar|255||照片|



### 表样例


```employees```表：

|EmployeeID|LastName|FirstName|Title|TitleOfCourtesy|BirthDate|HireDate|Address|City|Region|PostalCode|Country|HomePhone|Extension|ReportsTo|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|1|Davolio|Nancy|Sales Representative|Ms.|1948/12/8 00:00:00|1992/5/1 00:00:00|507 - 20th Ave. E.Apt. 2A|Seattle|WA|98122|USA|(206) 555-9857|5467|2|
|2|Fuller|Andrew|Vice President, Sales|Dr.|1952/2/19 00:00:00|1992/8/14 00:00:00|908 W. Capital Way|Tacoma|WA|98401|USA|(206) 555-9482|3457||
|3|Leverling|Janet|Sales Representative|Ms.|1963/8/30 00:00:00|1992/4/1 00:00:00|722 Moss Bay Blvd.|Kirkland|WA|98033|USA|(206) 555-3412|3355|2|


### 输出样例:

|EmployeeID|countSub|
|---|---|
|2|2|

## 6.

本题目要求编写SQL语句，
查询比“网络工程”专业所有学生年龄都小的学生姓名。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
  KEY `fk_stu_mno` (`mno`),
  CONSTRAINT `fk_stu_mno` FOREIGN KEY (`mno`) REFERENCES `major` (`mno`)
);
CREATE TABLE `major` (
  `mno` char(2) NOT NULL,
  `mname` varchar(20) NOT NULL,
  PRIMARY KEY (`mno`)
)
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：

![stu.JPG](https://images.ptausercontent.com/c9ad805e-7792-4269-ba0a-4be483aaac81.JPG)

```major```表：

![major.JPG](https://images.ptausercontent.com/e5b27180-f435-461d-b599-d857eabeeab1.JPG)


### 输出样例:

请在这里给出输出样例。例如：


![midt01.JPG](https://images.ptausercontent.com/37a7b467-6f08-410a-8dd8-b25906c81710.JPG)

## 7.

本题目要求编写SQL语句，
查询软件工程专业中年龄最大的同学姓名.

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `major` (
  `mno` char(2) NOT NULL,
  `mname` varchar(20) NOT NULL,
  PRIMARY KEY (`mno`)
);
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
  KEY `fk_stu_mno` (`mno`),
  CONSTRAINT `fk_stu_mno` FOREIGN KEY (`mno`) REFERENCES `major` (`mno`)
)
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：


![stu.JPG](https://images.ptausercontent.com/b3ed8aa7-449f-4c5d-b202-f51d145e4a86.JPG)

```major```表：

![major.JPG](https://images.ptausercontent.com/246cf1c2-00c5-4558-84e2-96ae3f562214.JPG)



### 输出样例:

请在这里给出输出样例。例如：


![midt01b.JPG](https://images.ptausercontent.com/11a1b3d7-ec24-4e25-8081-c01bd7d9a5f9.JPG)

## 8.

本题目要求编写SQL语句，查询选修人数超过2人且成绩都在60分以上的课程的课程名、最高成绩、最低成绩和平均成绩。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `major` (
  `mno` char(2) NOT NULL,
  `mname` varchar(20) NOT NULL,
  PRIMARY KEY (`mno`)
);
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`),
  KEY `fk_stu_mno` (`mno`),
  CONSTRAINT `fk_stu_mno` FOREIGN KEY (`mno`) REFERENCES `major` (`mno`)
);

CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
)；

CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  KEY `fk_sc_cno` (`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`cno`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
)


```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：


![stu.JPG](https://images.ptausercontent.com/b3ed8aa7-449f-4c5d-b202-f51d145e4a86.JPG)

```major```表：

![major.JPG](https://images.ptausercontent.com/246cf1c2-00c5-4558-84e2-96ae3f562214.JPG)

```cou```表：

![cou.JPG](https://images.ptausercontent.com/933f8460-affd-428c-b663-5beb3b9d0da5.JPG)


```sc```表：

![sc.JPG](https://images.ptausercontent.com/b27c21ce-8969-4dbc-9d89-727f338c84e6.JPG)



## 输出样例:

请在这里给出输出样例。例如：


![midt05b.JPG](https://images.ptausercontent.com/477adc02-9ee8-4fab-8eb7-254d2af1173a.JPG)

## 9.

### 题干:
将student表中的数计学院的学生信息插入到stu表中。

提示：请使用INSERT语句作答，stu数据表已存在，结构同student一样。

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

```stu```表：

![3-3.png](https://images.ptausercontent.com/d0fe9800-fdc2-43b9-bc3f-e06bffa9c0c8.png)

## 10.

### 题干:
没有被购买过的商品信息。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE good(

gid CHAR(4) PRIMARY KEY,

gname VARCHAR(40) NOT NULL,

price FLOAT(10,2),

stock INT

);

CREATE TABLE recorder(

id INT PRIMARY KEY  AUTO_INCREMENT,

cid CHAR(4),

gid CHAR(4),

quantity INT NOT NULL,

sale_date DATETIME,

CONSTRAINT recorder_gid_fk FOREIGN KEY (gid) REFERENCES good(gid)

);

### 表样例
上述表结构对应的表样例：

```good```表：

![good.png](https://images.ptausercontent.com/19c47604-68d2-49f0-9196-42b8f8416c98.png)

```recorder```表：

![recorder.png](https://images.ptausercontent.com/27c2014d-8b65-4a05-857e-497d01d67e71.png)


### 输出样例:
输出样例：

![4-6.png](https://images.ptausercontent.com/485d30b0-f75d-431d-bfe4-1e5ff8e4a859.png)

## 11.

本题目要求编写SQL语句，
检索出``` sc```表中学号为S001的学生选修的而S003学号学生未选修的课程号。
注意：查询结果忽略顺序只对比数据。

提示：MSSQLServer 评测SQL语句。


### 表结构:

定义表结构的SQL语句如：

```
-- 学生选课成绩表
CREATE TABLE  sc  (  
   sno  char(4) NOT NULL,  -- 学生学号
   cno  char(4) NOT NULL,  -- 课程号
   grade  decimal(4,1) DEFAULT NULL,
  PRIMARY KEY ( sno , cno )
)
```

### 表样例

上述表结构对应的表样例如

``` sc```表：


![sc.JPG](https://images.ptausercontent.com/e4451831-395f-44fd-b378-9426ddcff5ce.JPG)


### 输出样例:

输出样例如：


![l218.JPG](https://images.ptausercontent.com/93a8f9d5-7eb2-45bb-a5d0-fd4ab34b16a6.JPG)

## 12.

查询选修课程数在2门以上（含2门）且所有选课成绩都在80分以上（含80分）的学生的姓名、专业名及总学分。

提示：MSSQLServer 评测SQL语句。

### 表结构:

定义表结构的SQL语句如：

```
-- 专业表
CREATE TABLE major (  
  mno char(2) NOT NULL,
  mname nvarchar(20) NOT NULL,
  PRIMARY KEY (mno)
);
-- 学生表
CREATE TABLE stu (    
  sno char(4) NOT NULL,
  sname nvarchar(8) NOT NULL,
  sex smallint DEFAULT NULL,
  mno char(2) DEFAULT NULL,
  birdate datetime DEFAULT NULL,
  memo ntext,
  PRIMARY KEY (sno),
  CONSTRAINT  fk_stu_mno FOREIGN KEY (mno) REFERENCES major (mno)
);
-- 课程表
CREATE TABLE  cou  (  
   cno  char(4) NOT NULL,
   cname  nvarchar(30) NOT NULL,
   credit  smallint DEFAULT NULL,
   ptime  char(5) DEFAULT NULL,
   teacher  nvarchar(10) DEFAULT NULL,
  PRIMARY KEY ( cno )
);
-- 学生选课成绩表
CREATE TABLE  sc  (  
   sno  char(4) NOT NULL,  -- 学生学号
   cno  char(4) NOT NULL,  -- 课程号
   grade  decimal(4,1) DEFAULT NULL,
  PRIMARY KEY ( sno , cno ),
  CONSTRAINT  fk_sc_cno  FOREIGN KEY ( cno ) REFERENCES  cou  ( cno ),
  CONSTRAINT  fk_sc_sno  FOREIGN KEY ( sno ) REFERENCES  stu  ( sno )
)
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：

![stu表.PNG](https://images.ptausercontent.com/e0eef1b9-75cc-47ef-a678-aa3edbd702a5.PNG)

```major```表：

![major表.PNG](https://images.ptausercontent.com/5d0d470d-392b-4714-ae6a-692da9c0367d.PNG)

```cou```表：

![cou表.PNG](https://images.ptausercontent.com/3cdc6e02-b2f5-4a5e-bffd-286e7f289342.PNG)


```sc```表：


![sc表.PNG](https://images.ptausercontent.com/bb6c39e6-c800-45a1-bc42-7dca06d8ed3a.PNG)



### 输出样例:

输出样例如：


![result.PNG](https://images.ptausercontent.com/0511f054-cb54-40a4-b61e-7d54337c1710.PNG)

## 13.

本题目要求编写SQL语句，
统计``sc```表中有学生选修的课程的门数，多人选修同一门只算一门，要求结果中列名显示“门数”
提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
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

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1711202|0000011|53.0|0.0|
|1711202|0000027|80.0|1.0|
|1911201|0000027|84.0|1.0|
|1911201|0000052|71.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|门数|
|-----|
|3|

## 14.

本题目要求编写SQL语句，\
统计出`sc`表中选修人数最多的3门课，要求结果中列名分别显示“课程号”、“选修人数”。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
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

`sc`表：

| sno | cno | score | point |
| ----- | ----- | ----- | ----- |
| 1711202 | 0000011 | 53\.0 | 0\.0 |
| 1711202 | 0000027 | 80\.0 | 1\.0 |
| 1911201 | 0000027 | 84\.0 | 1\.0 |
| 1911201 | 0000052 | 71\.0 | 2\.0 |

### 输出样例:

请在这里给出输出样例。例如：

| 课程号 | 选修人数 |
| ----- | ----- |
| 0000027 | 2 |
| 0000011 | 1 |
| 0000052 | 1 |

## 15.

本题目要求编写SQL语句，
检索出```students```表中与“陆毅”同一个系的同学姓名。

提示：请使用嵌套查询语句作答。

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
|1711102|陆毅|17物流1|女|1999-02-17|上海|330203199902170017|经管学院|15900001188|

### 输出样例:

请在这里给出输出样例。例如：

|sname|
|-------|
|赵薇|

## 16.

本题目要求编写SQL语句，
结合`sh_goods`表和`sh_goods_comment`表，查询在`sh_goods_comment`表中没有任何评论信息的商品记录。

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

```
CREATE TABLE sh_goods_comment (
 id INT  PRIMARY KEY,                  -- 评论id
 user_id INT  NOT NULL DEFAULT 0,      -- 用户id
 goods_id INT  NOT NULL DEFAULT 0 ,    -- 商品id
 content TEXT NOT NULL ,               -- 评论内容
 is_show TINYINT  NOT NULL DEFAULT 0,  -- 是否显示
 create_time INT  NOT NULL DEFAULT 0   -- 创建时间
) ;
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/b5305518-2aab-4a1c-87db-2cf240d7ca2b.PNG)


`sh_goods_comment`表

![sh_goods_comment表数据.PNG](https://images.ptausercontent.com/3a6ec02c-c125-4963-b452-071f647b3787.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/6d4941b7-f6f2-480c-9d0e-b0c35f1bf946.PNG)

## 17.

本题目要求编写SQL语句，
结合`sh_goods`表和`sh_goods_comment`表，查询用户评分为5星的商品对应的评论信息。

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

```
CREATE TABLE sh_goods_comment (
 id INT  PRIMARY KEY,                  -- 评论id
 user_id INT  NOT NULL DEFAULT 0,      -- 用户id
 goods_id INT  NOT NULL DEFAULT 0 ,    -- 商品id
 content TEXT NOT NULL ,               -- 评论内容
 is_show TINYINT  NOT NULL DEFAULT 0,  -- 是否显示
 create_time INT  NOT NULL DEFAULT 0   -- 创建时间
) ;

```


### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/6a740e3d-2d6d-499b-9cc6-3d712c2333b2.PNG)

`sh_goods_comment`表：

![sh_goods_comment表数据.PNG](https://images.ptausercontent.com/af844572-5d17-436b-b66d-108324ca1b75.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/727ed681-84ff-470c-8697-375127b3ce80.PNG)

## 18.

本题目要求编写SQL语句，
结合`sh_goods`表和`sh_goods_category`表，查询所有用户评分为5分的商品对应的商品id、商品id、分类id和分类名称和用户评分。注意，查询结果显示字段依据输出样例设置。

提示：以`sh_goods`表为主表。

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


```
CREATE TABLE sh_goods_category (
id INT  PRIMARY KEY ,-- 分类id
parent_id INT  NOT NULL DEFAULT 0, --上级分类id
name VARCHAR(120) NOT NULL  --分类名称
);
```

### 表样例

`sh_goods`表：

![sh_goods表数据.PNG](https://images.ptausercontent.com/df3945e2-ace1-4cff-bbd4-b1a56a70d565.PNG)


`sh_goods_category`表


![sh_goods_category表数据.PNG](https://images.ptausercontent.com/32474b4b-94c3-45df-ba79-33833525c0bb.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/2b83c9df-7299-4fc1-b34d-2c48e390590a.PNG)

## 19.

本题目要求编写SQL语句，
从`sh_goods_category`表中获取分类中商品价格小于500的商品对应的分类名称。

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

```
CREATE TABLE sh_goods_category (
id INT  PRIMARY KEY ,-- 分类id
parent_id INT  NOT NULL DEFAULT 0, --上级分类id
name VARCHAR(120) NOT NULL  --分类名称
);
```


### 表样例

`sh_goods`表：


![sh_goods表数据.PNG](https://images.ptausercontent.com/542e1021-ae5a-4922-b475-6625caef0e86.PNG)


`sh_goods_category`表：


![sh_goods_category表数据.PNG](https://images.ptausercontent.com/3c6eba1c-9fc4-42e8-8785-524ea75ce34b.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/726ffd31-ce25-4432-98cd-1f671c8d9155.PNG)

## 20.

### 题干:
检索选修了三门课以上的学生学号、姓名、院部。

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

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:


![7-4.png](https://images.ptausercontent.com/0c3eaa41-6a3f-4085-90d9-a696992948ac.png)

## 21.

### 题干:
查询每门必修课的课程编号，课程名称和选修人数。

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

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:

![7-5.png](https://images.ptausercontent.com/bb0cdb94-4fa1-4bb9-98ae-615ad64986d3.png)

## 22.

### 题干:
查找所有“大学语文”分数在80以上的学生的姓名，所在院系。

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

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:

![7-7.png](https://images.ptausercontent.com/3bc62764-3458-4f72-b4b7-a174045de6cc.png)

## 23.

### 题干:
显示每位员工的编号，姓名，工资及工资级别。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE  emp(

empno INT(4) ,

ename VARCHAR(20),

job VARCHAR(9),

mgr INT(4),

hiredate DATE,

sal FLOAT(7, 2),

comm FLOAT(7, 2),

deptno INT(2),

PRIMARY KEY(empno)

);

CREATE TABLE salgrade (  

grade  int, 

losal  int,  

hisal  int,

PRIMARY KEY (grade)

) ;

### 表样例
```emp```表：

![emp.png](https://images.ptausercontent.com/e05e97b7-8dd8-4958-a317-b217b2df0970.png)

```salgrade```表：

![salgrade.png](https://images.ptausercontent.com/e62d06dd-2441-43b3-8a2a-4c9bbad025d6.png)


### 输出样例:
![8-4.png](https://images.ptausercontent.com/852c8085-c27b-4117-b77a-eb39da10f533.png)

## 24.

### 题干:
显示每位员工的编号，姓名及其上级领导的编号和姓名（要求显示出所有的员工）。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE  emp(

empno INT(4) ,

ename VARCHAR(20),

job VARCHAR(9),

mgr INT(4),

hiredate DATE,

sal FLOAT(7, 2),

comm FLOAT(7, 2),

deptno INT(2),

PRIMARY KEY(empno)

);


### 表样例
```emp```表：

![emp.png](https://images.ptausercontent.com/bf5a793e-60e9-439a-8da8-0b2699cfc205.png)

### 输出样例:
![8-5.png](https://images.ptausercontent.com/1e576503-deca-492c-bad7-4f5e1333a4f7.png)

## 25.

本题目要求编写SQL语句，
基于`Teacher表`和`Department`表，查询编号‘dep01001’教师的系主任名称。

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


```
Create table Department(
DepartmentID char(4) primary key,           -- 系部编号
DepartmentName varchar(20) NOT NULL unique, -- 系部名称
DepartmentHeader varchar(8) NOT NULL,       -- 系主任
TeacherNum int                              -- 教师数量
);
```

### 表样例


```Teacher```表：

![Teacher表.PNG](https://images.ptausercontent.com/876ad264-49b5-49a6-8253-c68d8b823d6f.PNG)


`Department`表：


![Department表.PNG](https://images.ptausercontent.com/d39fcc00-2b13-4f1c-8efd-e3bf9093b872.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/e4e80c0a-c7cc-4aef-89a3-0e45f1162fff.PNG)

## 26.

本题目要求编写SQL语句，
基于`Student`表和`Grade`表，查询没有课程成绩的学生对应的学号、姓名、性别。

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

```Student```表：

![Student表.PNG](https://images.ptausercontent.com/d25c480d-1311-4cd6-9d73-3b2e1984a38a.PNG)


`Grade`表


![Grade表第1部分.PNG](https://images.ptausercontent.com/70b044bb-ac37-4560-bd28-387711ecb378.PNG)

![Grade表第2部分.PNG](https://images.ptausercontent.com/2219a912-6d08-481f-a001-bb72c6f4d1c2.PNG)

![Grade表第3部分.PNG](https://images.ptausercontent.com/24e83f48-1899-4f61-a003-45ec1ad3416c.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/37eaf0e5-de28-4a97-aa70-f9e9f5944f06.PNG)

## 27.

### 题干:
查询出学生的选课情况，结果集包括学号、姓名、课号、课名、开设学期和成绩。

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

![student.png](https://images.ptausercontent.com/b8ba91ec-53bf-43ea-8438-24c3495a5ff1.png)

```course```表：

![course.png](https://images.ptausercontent.com/9e62794e-c903-4bb1-ac3b-6e8ad2f7ceaf.png)

```score```表：

![score.png](https://images.ptausercontent.com/93058cac-ae56-41d0-95e8-64c62995a472.png)


### 输出样例(部分数据):

![8-3.png](https://images.ptausercontent.com/dd3b6d49-ef81-4a77-a187-691ae942ccd7.png)

## 28.

本题目要求编写SQL语句，
查询每个同学超过他选修的平均成绩的课程。

请使用：
1）用相关子查询实现
2）使用派生表实现。

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
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`CNO`),
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

``` cou```表：


![cou.JPG](https://images.ptausercontent.com/df90a6cc-4834-40ac-a471-7801804310bc.JPG)

``` sc```表：


![sc.JPG](https://images.ptausercontent.com/3d6f8240-9eb5-4184-86a0-8fdaf69c77ec.JPG)

### 输出样例:

请在这里给出输出样例。例如：
 

![l220.JPG](https://images.ptausercontent.com/3d792c3b-2c9f-4c0b-94e0-fe2c36bd90b2.JPG)

## 29.

本题目要求编写SQL语句，
查询选修了张老师所讲授的所有课程的学生。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
CREATE TABLE `stu` (
  `sno` char(4) NOT NULL,
  `sname` char(8) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `mno` char(2) DEFAULT NULL,
  `birdate` datetime DEFAULT NULL,
  `memo` text,
  PRIMARY KEY (`sno`)
);
CREATE TABLE `cou` (
  `cno` char(4) NOT NULL,
  `cname` varchar(30) NOT NULL,
  `credit` smallint(6) DEFAULT NULL,
  `ptime` char(5) DEFAULT NULL,
  `teacher` char(10) DEFAULT NULL,
  PRIMARY KEY (`cno`)
);

CREATE TABLE `sc` (
  `sno` char(4) NOT NULL,
  `cno` char(4) NOT NULL,
  `grade` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`sno`,`cno`),
  CONSTRAINT `fk_sc_cno` FOREIGN KEY (`cno`) REFERENCES `cou` (`CNO`),
  CONSTRAINT `fk_sc_sno` FOREIGN KEY (`sno`) REFERENCES `stu` (`sno`)
);
```

### 表样例

请在这里给出上述表结构对应的表样例。例如

```stu```表：

![stu.JPG](https://images.ptausercontent.com/aa2d96b0-a8da-4250-892b-fa817eb7b9da.JPG)

```cou```表：


![cou.JPG](https://images.ptausercontent.com/eb717bfc-e2e7-4336-bd2d-cf406c775497.JPG)

```sc```表：


![sc.JPG](https://images.ptausercontent.com/624a7728-e0dd-4937-b611-a3bb192f82b8.JPG)


### 输出样例:

请在这里给出输出样例。例如：

![l226.JPG](https://images.ptausercontent.com/3cf414af-387b-418a-b85c-fcc2c9efd6a9.JPG)

## 30.

### 题干:
检索没被学生选修的课程编号和课程名称。

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

![student.png](https://images.ptausercontent.com/fc0ee9a4-816d-418e-a9d0-0e5b88f1c0c3.png)

```course```表：

![course.png](https://images.ptausercontent.com/faa091af-6618-44c6-8030-bdb1d7bd0d79.png)

```score```表：

![score.png](https://images.ptausercontent.com/48c9b210-cdfd-4afd-9276-bd3c7d0972b4.png)

### 输出样例:

![7-3.png](https://images.ptausercontent.com/6b265bf6-c48d-4779-9b7a-76a5a4e9f1b7.png)

## 31.

### 题干:
查询选修了2门以上课程的学生学号和平均成绩。

提示：请使用SELECT语句作答，平均成绩四舍五入，保留1位有效数字。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE score (

  sno varchar(6) NOT NULL,

  cno varchar(6) NOT NULL,

  term varchar(15),

  grade int(11),

  PRIMARY KEY (sno,cno)

) ;

### 表样例
上述表结构对应的表样例，部分数据如下：

```score```表：

![score.png](https://images.ptausercontent.com/636db679-91b8-4842-a248-beca695aea5c.png)

### 输出样例:
输出样例：

![2-3.png](https://images.ptausercontent.com/288b54a8-d3c1-4716-b104-2a06a4202ef5.png)

## 32.

### 题干:
统计每种商品的销售数量。

提示：请使用SELECT语句作答。

### 表结构:

定义表结构的SQL语句如下：

CREATE TABLE recorder(

id INT PRIMARY KEY  AUTO_INCREMENT,

cid CHAR(4),

gid CHAR(4),

quantity INT NOT NULL,

sale_date DATETIME,

CONSTRAINT salrecorder_cid_fk FOREIGN KEY (cid) REFERENCES customer(cid),

CONSTRAINT salrecorder_gid_fk FOREIGN KEY (gid) REFERENCES good(gid)

);

### 表样例
上述表结构对应的表样例：

```recorder```表：

![recorder.png](https://images.ptausercontent.com/12197a3e-1964-4ad0-b5e1-383ace95b6a2.png)

### 输出样例:
输出样例：

![4-4.png](https://images.ptausercontent.com/873f25be-5526-4997-8659-4b417f3efb66.png)

## 33.

本题目要求编写SQL语句，
计算``sc```表中“0000001”课程的平均分、最高分和最低分，要求结果中列名分别显示“平均分”、“最高分”、“最低分”。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
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

```sc```表：

|sno|cno|score|point|
|----|----|------|------|
|1711202|0000001|53.0|0.0|
|1711202|0000027|80.0|1.0|
|1911201|0000001|84.0|1.0|
|1911201|0000052|71.0|2.0|

### 输出样例:

请在这里给出输出样例。例如：

|平均分|最高分|最低分|
|-------|-------|-------|
|68.50000|84.0|53.0|

## 34.

本题目要求编写SQL语句，\
统计\`\`sc\`\`表中，每个学生的选课门数和考试总成绩，并按选课门数升序排列，要求结果中列名分别显示“学号”、“选课门数”、“考试总成绩”。

提示：请使用SELECT语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

```
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

`sc`表：

| sno | cno | score | point |
| ----- | ----- | ----- | ----- |
| 1711202 | 0000011 | 53\.0 | 0\.0 |
| 1711202 | 0000027 | 80\.0 | 1\.0 |
| 1711202 | 0000052 | 77\.0 | 1\.0 |
| 1911201 | 0000027 | 84\.0 | 1\.0 |
| 1911201 | 0000052 | 71\.0 | 2\.0 |

### 输出样例:

请在这里给出输出样例。例如：




| 学号 | 选课门数 | 考试总成绩 |
| ----- | ----- | ----- |
| 1411101 | 1 |  |
| 1401102 | 3 | 156\.0 |
| 1811102 | 4 | 296\.8 |
| 1411201 | 7 | 501\.6 |
| 1511211 | 7 | 487\.0 |
| 1711101 | 7 | 525\.6 |
| 1711202 | 7 | 510\.0 |
| 1911201 | 7 | 532\.2 |
| 1701102 | 8 | 635\.7 |
| 1701101 | 8 | 704\.1 |
| 1711102 | 9 | 705\.7 |

## 35.

本题目要求编写SQL语句，
检索出`sh_goods`表中每项`keyword`对应的商品数量，查询结果显示字段依据输出样例设置。

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

![sh_goods表数据.PNG](https://images.ptausercontent.com/2ff8eac2-7c7b-4476-b5ec-eb26c0fc0584.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/e7c1c6e1-6ef8-40f7-80f7-e881862092ca.PNG)

## 36.

本题目要求编写SQL语句，
获取`sh_goods`表中每个分类下商品的最高价格。查询结果显示字段依据输出样例设置。

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


![sh_goods表数据.PNG](https://images.ptausercontent.com/96eb7e48-6573-4004-99de-4ee42dc6df0c.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/ef8652a3-51b5-4e9f-85e7-4cb89d2843a6.PNG)

## 37.

本题目要求编写SQL语句，
查询`sh_goods`表中商品库存`stock`的最高和最低值。

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

![sh_goods表数据.PNG](https://images.ptausercontent.com/09c2a1d6-1f93-4ca3-8c5e-bbb854b0b9c6.PNG)



### 输出样例:


![答案.PNG](https://images.ptausercontent.com/a77370ac-c68b-4504-bac1-346f6a4b95ee.PNG)

## 38.

本题目要求编写SQL语句，
在`sh_goods`表中查询不同商品分类（`category_id`）下商品数量大于2的商品的平均价格。查询结果显示字段依据输出样例设置。

提示：请使用`SELECT`语句作答。

### 表结构:

请在这里写定义表结构的SQL语句。例如：

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


![sh_goods表数据.PNG](https://images.ptausercontent.com/7dd0ff9a-0621-4670-8ee0-814e943673d7.PNG)


### 输出样例:


![答案.PNG](https://images.ptausercontent.com/aebd22da-0b3b-4a63-b75d-e25abab04dc2.PNG)

## 39.

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

## 40.

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

