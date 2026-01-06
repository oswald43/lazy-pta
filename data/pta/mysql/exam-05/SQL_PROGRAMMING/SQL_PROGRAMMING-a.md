## 1.

### Answer ✅

```sql
 SELECT * FROM Teacher ORDER BY TeacherID ASC;
```

## 2.

### Answer ✅

```sql
 SELECT id, name, price FROM goods WHERE name LIKE '%pad%';
```

## 3.

### Answer ✅

```sql
 SELECT id, category_id, name FROM sh_goods;
```

## 4.

### Answer ✅

```sql
 SELECT sno, sname, class FROM students WHERE sno NOT IN (SELECT sno FROM sc);
```

## 5.

### Answer ✅

```sql
 SELECT ProductID, ProductName FROM products WHERE UnitsInStock < UnitsOnOrder;
```

## 6.

### Answer ✅

```sql
 SELECT cno AS '课程号' FROM sc WHERE sno = 'S001' EXCEPT SELECT cno FROM sc WHERE sno = 'S003';
```

## 7.

### Answer ✅

```sql
 SELECT DISTINCT e.Eid, e.EName FROM employee e WHERE e.Eid <> '0011' AND NOT EXISTS (SELECT p.Pid FROM orders p WHERE p.Eid = '0011' AND NOT EXISTS (SELECT 1 FROM orders o WHERE o.Eid = e.Eid AND o.Pid = p.Pid));
```

## 8.

### Answer ✅

```sql
 SELECT Eid, EName FROM employee WHERE Wno = 'A01' AND Salary < ANY (SELECT Salary FROM employee WHERE Wno = 'A02');
```

## 9.

### Answer ✅

```sql
 SELECT g.name, c.content
FROM sh_goods g
JOIN sh_goods_comment c ON g.id = c.goods_id
WHERE g.score = 5.00;
```

## 10.

### Answer ✅

```sql
 DELETE sc FROM sc JOIN stu ON sc.sno = stu.sno JOIN cou ON sc.cno = cou.cno WHERE cou.cname = 'C语言' AND stu.sex = 0;
```

