## 1.

### Answer ✅

```sql
SELECT pno
FROM spj
GROUP BY pno
HAVING MIN(qty) > (SELECT MAX(qty) FROM spj WHERE pno = 'p6');
```

## 2.

### Answer ✅

```sql
SELECT p.maker
FROM product p
JOIN pc ON p.model = pc.model  -- 关联产品表和PC表，筛选PC类型产品
GROUP BY p.maker               -- 按厂商分组
HAVING COUNT(DISTINCT p.model) >= 3;  -- 统计该厂商的PC型号数，筛选至少3种的
```

## 3.

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

### Answer ✅

```sql
SELECT CAST(COUNT(*) AS SIGNED INTEGER) AS `count(*)`
FROM product
WHERE PName LIKE '%螺母%';
```

## 5.

### Answer ✅

```sql
SELECT MAX(Salary) AS max_Salary, MIN(Salary) AS min_Salary
FROM employee;
```

## 6.

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

### Answer ✅

```sql
SELECT Eid, EName
FROM employee
WHERE Wno = 'A01' 
  AND Salary > (SELECT MAX(Salary) FROM employee WHERE Wno = 'A02');
```

## 8.

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

### Answer ✅

```sql
SELECT Eid, EName
FROM employee
WHERE Wno = 'A01' 
  AND Salary < ANY (SELECT Salary FROM employee WHERE Wno = 'A02');
```

## 13.

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

### Answer ✅

```sql
SELECT sno AS 学号, AVG(grade) AS 平均分
FROM score
GROUP BY sno
HAVING COUNT(*) >= 2
ORDER BY sno;
```

## 15.

### Answer ✅

```sql
DELETE FROM sc
WHERE SCScore3 < 60;
```

