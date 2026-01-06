## 1.

### Answer ✅

```sql
 SELECT s.sno, s.sname, sc.grade
FROM stu s
JOIN sc ON s.sno = sc.sno
WHERE sc.cno = 'C002'
ORDER BY sc.grade DESC
LIMIT 2;
```

## 2.

### Answer ✅

```sql
 UPDATE sc
SET grade = grade * 1.05
WHERE sno IN (
    SELECT sno 
    FROM stu 
    WHERE sex = 0  -- 假设sex字段中0表示女生
)
AND grade < 75;
```

## 3.

### Answer ✅

```sql
 DELETE sc
FROM sc
JOIN stu ON sc.sno = stu.sno
JOIN cou ON sc.cno = cou.cno
WHERE stu.sex = 0  -- 0表示女生（根据表结构定义）
  AND cou.cname = 'C语言';
```

## 4.

### Answer ✅

```sql
 SELECT ProductID, ProductName
FROM products
WHERE UnitsInStock < UnitsOnOrder;
```

## 5.

### Answer ✅

```sql
 SELECT 
  ReportsTo AS EmployeeID, 
  COUNT(EmployeeID) AS countSub
FROM employees
WHERE ReportsTo IS NOT NULL  -- 排除没有上级的员工（即本身不是下属的情况）
GROUP BY ReportsTo;  -- 按上级编号分组，统计每个上级的下属数量
```

## 6.

### Answer ✅

```sql
 SELECT sname
FROM stu
WHERE birdate > (
    SELECT MAX(birdate)
    FROM stu
    JOIN major ON stu.mno = major.mno
    WHERE major.mname = '网络工程'
);
```

## 7.

### Answer ✅

```sql
 SELECT sname
FROM stu
JOIN major ON stu.mno = major.mno
WHERE major.mname = '软件工程'
AND birdate = (
    SELECT MIN(birdate)
    FROM stu
    JOIN major ON stu.mno = major.mno
    WHERE major.mname = '软件工程'
);
```

## 8.

### Answer ✅

```sql
 SELECT 
    cou.cno AS 课程号 ,
    cou.cname AS 课程名 ,
    MAX(sc.grade) AS 最高成绩,
    MIN(sc.grade) AS 最低成绩,
    AVG(sc.grade) AS 平均成绩
FROM sc
JOIN cou ON sc.cno = cou.cno
GROUP BY cou.cno, cou.cname
HAVING 
    COUNT(*) > 2
    AND COUNT(*) = COUNT(sc.grade)   -- 确保无 NULL 成绩
    AND MIN(sc.grade) > 60;
```

## 9.

### Answer ✅

```sql
 INSERT INTO stu (sno, sname, sex, nation, pnum, birth, phone, dept)
SELECT sno, sname, sex, nation, pnum, birth, phone, dept
FROM student
WHERE dept = '数计学院';
```

## 10.

### Answer ✅

```sql
 SELECT g.gid, g.gname, g.price, g.stock
FROM good g
LEFT JOIN recorder r ON g.gid = r.gid
WHERE r.gid IS NULL;
```

## 11.

### Answer ✅

```sql
 SELECT cno AS 课程号
FROM sc
WHERE sno = 'S001'
AND cno NOT IN (
    SELECT cno
    FROM sc
    WHERE sno = 'S003'
);
```

## 12.

### Answer ✅

```sql
 SELECT 
  s.sname AS 姓名,
  m.mname AS 专业名,
  SUM(c.credit) AS 总学分
FROM stu s
JOIN major m ON s.mno = m.mno
JOIN sc ON s.sno = sc.sno
JOIN cou c ON sc.cno = c.cno
GROUP BY s.sno, s.sname, m.mname
HAVING 
  COUNT(sc.cno) >= 2  -- 选修课程数不少于2门
  AND MIN(sc.grade) >= 80;  -- 所有成绩均不低于80分（最低分>=80）
```

## 13.

### Answer ✅

```sql
 SELECT COUNT(DISTINCT cno) AS 门数
FROM sc;
```

## 14.

### Answer ✅

```sql
 SELECT 
  cno AS 课程号,
  COUNT(sno) AS 选修人数
FROM sc
GROUP BY cno
ORDER BY 选修人数 DESC
LIMIT 3;
```

## 15.

### Answer ✅

```sql
 SELECT sname
FROM students
WHERE sdept = (
    SELECT sdept
    FROM students
    WHERE sname = '陆毅'
)
AND sname != '陆毅';  -- 排除陆毅本人
```

## 16.

### Answer ✅

```sql
 SELECT g.id, g.name
FROM sh_goods g
LEFT JOIN sh_goods_comment c ON g.id = c.goods_id
WHERE c.goods_id IS NULL;
```

## 17.

### Answer ✅

```sql
 SELECT g.name, c.content
FROM sh_goods_comment c
JOIN sh_goods g ON c.goods_id = g.id
WHERE g.score = 5.00;
```

## 18.

### Answer ✅

```sql
 SELECT 
  g.id AS gid,
  g.category_id AS cid,
  c.name AS cname,
  g.score AS score
FROM sh_goods g
LEFT JOIN sh_goods_category c ON g.category_id = c.id
WHERE g.score = 5.00;
```

## 19.

### Answer ✅

```sql
 SELECT
    name
FROM
    sh_goods_category
WHERE
    id IN (SELECT category_id FROM sh_goods WHERE price < 500);
```

## 20.

### Answer ✅

```sql
 SELECT
    s.sno,
    s.sname,
    s.dept
FROM
    student AS s
JOIN
    (
        -- 子查询：统计每个学生选修的课程数
        SELECT
            sno,
            COUNT(cno) AS course_num
        FROM
            score
        GROUP BY
            sno
    ) AS sc ON s.sno = sc.sno
WHERE
    sc.course_num >= 3;
```

## 21.

### Answer ✅

```sql
 SELECT 
  c.cno,
  c.cname,
  COUNT(sc.sno) AS total
FROM course c
LEFT JOIN score sc ON c.cno = sc.cno
WHERE c.attribute = '必修'
GROUP BY c.cno, c.cname;
```

## 22.

### Answer ✅

```sql
 SELECT s.sname, s.dept
FROM student s
JOIN score sc ON s.sno = sc.sno
JOIN course c ON sc.cno = c.cno
WHERE c.cname = '大学语文' AND sc.grade > 80;
```

## 23.

### Answer ✅

```sql
 SELECT 
  e.empno, 
  e.ename, 
  e.sal, 
  s.grade 
FROM emp e
JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal;
```

## 24.

### Answer ✅

```sql
 SELECT 
  e.empno AS 员工编号,
  e.ename AS 员工姓名,
  m.empno AS 上司编号,
  m.ename AS 上司姓名
FROM emp e
LEFT JOIN emp m ON e.mgr = m.empno;
```

## 25.

### Answer ✅

```sql
 SELECT d.DepartmentHeader
FROM Teacher t
JOIN Department d ON t.DepartmentID = d.DepartmentID
WHERE t.TeacherID = 'dep01001';
```

## 26.

### Answer ✅

```sql
 SELECT s.StudentID, s.StudentName, s.Sex
FROM Student s
LEFT JOIN Grade g ON s.StudentID = g.StudentID
WHERE g.StudentID IS NULL;
```

## 27.

### Answer ✅

```sql
 SELECT 
  s.sno,
  s.sname,
  c.cno,
  c.cname,
  sc.term,
  sc.grade
FROM student s
JOIN score sc ON s.sno = sc.sno
JOIN course c ON sc.cno = c.cno;
```

## 28.

### Answer ✅

```sql
 SELECT 
  s1.sno AS 学号,
  c.cname AS 课程名,
  s1.grade AS 成绩
FROM sc s1
JOIN cou c ON s1.cno = c.cno  -- 关联课程表获取课程名
WHERE s1.grade > (
  SELECT AVG(s2.grade)
  FROM sc s2
  WHERE s2.sno = s1.sno  -- 相关子查询：当前学生的平均成绩
);
```

## 29.

### Answer ✅

```sql
 SELECT s.sname
FROM stu s
WHERE NOT EXISTS (
  -- 张老师的课程中，该学生未选修的课程
  SELECT c.cno
  FROM cou c
  WHERE c.teacher = '张老师'  -- 筛选张老师讲授的课程
    AND NOT EXISTS (
      -- 该学生选修了此课程的记录
      SELECT sc.cno
      FROM sc
      WHERE sc.sno = s.sno 
        AND sc.cno = c.cno
    )
);
```

## 30.

### Answer ✅

```sql
 SELECT c.cno, c.cname
FROM course c
LEFT JOIN score sc ON c.cno = sc.cno
WHERE sc.cno IS NULL;
```

## 31.

### Answer ✅

```sql
 SELECT 
  sno AS 学号, 
  ROUND(AVG(grade), 1) AS 平均成绩
FROM score
GROUP BY sno
HAVING COUNT(cno) >= 2;
```

## 32.

### Answer ✅

```sql
 SELECT 
  gid AS 商品编号, 
  SUM(quantity) AS 销售总数量
FROM recorder
GROUP BY gid;
```

## 33.

### Answer ✅

```sql
 SELECT 
  AVG(score) AS 平均分,
  MAX(score) AS 最高分,
  MIN(score) AS 最低分
FROM sc
WHERE cno = '0000001';
```

## 34.

### Answer ✅

```sql
 SELECT 
    sno AS 学号,
    COUNT(cno) AS 选课门数,
    SUM(score) AS 考试总成绩
FROM 
    sc
GROUP BY 
    sno  -- 按学号分组，统计每个学生的信息
ORDER BY 
    选课门数 ASC;  -- 按选课门数升序排列
```

## 35.

### Answer ✅

```sql
 SELECT keyword, COUNT(id) AS goodscount
FROM sh_goods
GROUP BY keyword;
```

## 36.

### Answer ✅

```sql
 SELECT category_id, MAX(price) AS max_price
FROM sh_goods
GROUP BY category_id;
```

## 37.

### Answer ✅

```sql
 SELECT MAX(stock) AS stock1, MIN(stock) AS stock2
FROM sh_goods;
```

## 38.

### Answer ✅

```sql
 SELECT category_id, AVG(price) AS average
FROM sh_goods
GROUP BY category_id
HAVING COUNT(*) > 2;
```

## 39.

### Answer ✅

```sql
 SELECT StudentName, Birth
FROM Student
WHERE Birth = (SELECT MAX(Birth) FROM Student);
```

## 40.

### Answer ✅

```sql
 SELECT ClassID
FROM Class
WHERE StudentNum > 5;
```

