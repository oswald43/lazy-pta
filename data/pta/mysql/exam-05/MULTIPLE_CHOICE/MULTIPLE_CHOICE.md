## 1.

数据库的三级模式结构中最接近用户的是：

A.
内模式

B.
外模式

C.
概念模式

D.
用户模式

## 2.

下列四项中，不属于数据库系统的主要特点的是(      )

A.
数据结构化

B.
数据的冗余度小

C.
较高的数据独立性

D.
程序的标准化

## 3.

在数据库中,产生数据不一致的根本原因是：

A.
数据存储量过大

B.
缺乏数据保护机制

C.
数据冗余

D.
缺乏数据安全性控制

## 4.

有三个关系S、R、T如下，则由S、R得到T的运算是（      ）。

![微信截图_20200326074552.png](https://images.ptausercontent.com/79ed77e8-fc94-4625-9900-c6e67e745c15.png)

A.
投影

B.
交

C.
自然联接

D.
笛卡尔积

## 5.

下面是一部门职工情况数据库，现有如下关系： 

职工（职工号，姓名，性别，职务，家庭地址，部门编号） 主键：职工号

部门（部门编号，部门名称，地址，电话） 主键：部门编号

保健（保健卡编号，职工号，检查身体日期，健康状况）主键：保健卡编号

select 姓名, 家庭地址

from 职工

where 职务='科长' and 性别='女’

请将上述查询转换为相应的关系代数表达。

A.
π姓名,家庭地址(σ职务 = '科长' and 性别 = '女' (职工))

B.
σ姓名,家庭地址(π职务 = '科长' ∧ 性别 = '女' (职工))

C.
π姓名,家庭地址(σ职务 = '科长' ∧ 性别 = '女' (职工))

D.
σ职务 = '科长' ∧ 性别 = '女' (π姓名,家庭地址(职工))

## 6.

SQL语句中修改表结构的命令是：

A.
`MODIFY TABLE`

B.
`MODIFY STRUCTURE`

C.
`ALTER TABLE`

D.
`ALTER STRUCTURE`

## 7.

设有Teachers表，该表的定义如下：
```
CREATE TABLE Teachers(
	  Tno CHAR(8) PRIMARY KEY,
      Tname VARCHAR(10) NOT NULL,
      Age TINYINT CHECK(Age BETWEEN 25 AND 65) )

```
下列插入语句中，不能正确执行的是：

A.
```
INSERT INTO Teachers VALUES('T100','张鸿',NULL)
```

B.
```
INSERT INTO Teachers(Tno,Tname,Age) VALUES('T100','张鸿',30)
```

C.
```
INSERT INTO Teachers(Tno,Tname) VALUES('T100','张鸿')
```

D.
```
INSERT INTO Teachers VALUES('T100','张鸿')
```

## 8.

欲将表“学生”中的信息先按“学号”升序排序，再按“成绩”降序排列，SQL 语句能正确完成的是：

A.
SELECT * FROM 学生 ORDER BY 学号 , 成绩

B.
SELECT * FROM 学生 ORDER BY 学号 , 成绩 DESC

C.
SELECT * FROM 学生 ORDER BY 学号 ASC, AND 成绩 DESC

D.
SELECT * FROM 学生 ORDER BY 成绩 DESC，学号 ASC

## 9.

在SQL语言中的视图VIEW是数据库的：

A.
外模式

B.
存储模式

C.
模式

D.
内模式

## 10.

下列SQL语句中，用于收回已授予用户权限的语句是：

A.
DROP

B.
DELETE

C.
REVOKE

D.
ALTER

## 11.

如果事务T获得了数据项A上的排他锁，则其他事务对A：

A.
只能读不能写

B.
只能写不能读

C.
可以写也可以读

D.
不能读也不能写

## 12.

在CREATE  TABLE语句中可以用（    ）短语来定义元组上的约束条件。

A.
CLUSTER

B.
ALTER

C.
WITH GRANT OPTION

D.
CHECK

## 13.

数据库设计可划分为六个阶段，每个阶段都有自己的设计内容，“为哪些关系，在哪些属性上建什么样的索引”这一设计内容应该属于（）设计阶段。

A.
概念设计

B.
逻辑设计

C.
物理设计

D.
全局设计

## 14.

在下列关于规范化理论的叙述中，不正确的是_________。

A.
任何一个关系模式一定有键。

B.
任何一个包含两个属性的关系模式一定满足3NF。

C.
任何一个包含三个属性的关系模式一定满足2NF

D.
任何一个包含两个属性的关系模式一定满足BCNF

## 15.

有关系模式A（C，T，H，R，S），基中各属性的含义是：C：课程T：教员H：上课时间R：教室S：学生。函数依赖集： F={C→T，（H，R）→C，（H，T）→R，（H，S）→R}，若将关系模式A分解为两个关系模式A1（C，T），A2（H，R，S），则其中A1的规范化程度达到。

A.
1NF

B.
2NF

C.
3NF

D.
BCNF

## 16.

关系R(X，Y，Z，W，Q)，函数依赖集合F={X→Y，Y→Z，Z→W，WQ→Z，ZQ→Y}，关系R的候选码(   )

A.
XQ

B.
YZ

C.
WY

D.
XW

## 17.

在score数据表中给math字段添加名称为math_score索引的语句中，正确的是（ ）。

A.
CREATE INDEX index_name ON score(math);

B.
CREATE INDEX score ON score(math_score);

C.
CREATE INDEX math_score ON studentnfo(math);

D.
CREATE INDEX math_score ON score(math);

## 18.

现有关系:学生(学号,姓名,系号,系名),为消除数据冗余,至少需要分解为：

A.
1个表

B.
2个表

C.
3个表

D.
4个表

## 19.

设有关系模式R（A,B,C,D,E），R中的属性均不可再分解，函数依赖集F=｛CD→A，CD→B，AB→E｝,若只基于函数依赖进行讨论，R最高属于第几范式。

A.
1NF

B.
2NF

C.
3NF

D.
BCNF

## 20.

删除列的命令是______。

A.
ALTER TABLE … DELETE …

B.
ALTER TABLE … DELETE COLUMN…

C.
ALTER TABLE … change …

D.
ALTER TABLE … DROP COLUMN…

