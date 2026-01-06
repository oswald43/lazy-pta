## 1.

### Answer ✅

```sql
 SELECT sname, nation, phone
FROM student
WHERE sname LIKE '李%';
```

## 2.

### Answer ✅

```sql
 SELECT cno, cname
FROM course
LIMIT 3;
```

## 3.

### Answer ✅

```sql
 SELECT sname, class
FROM students
WHERE sname LIKE '%明%' AND ssex = '男';
```

## 4.

### Answer ✅

```sql
 SELECT *
FROM students
WHERE CHAR_LENGTH(sname) = 2;
```

## 5.

### Answer ✅

```sql
 SELECT *
FROM student
WHERE sex = '男' 
  AND birth <= '1997-09-01';
```

## 6.

### Answer ✅

```sql
 SELECT name, category_id, price 
FROM sh_goods 
ORDER BY category_id, price DESC;
```

## 7.

### Answer ✅

```sql
 select id, category_id, name
from sh_goods;
```

## 8.

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

### Answer ✅

```sql
 SELECT id, name, price 
FROM sh_goods 
WHERE price 
BETWEEN 2000 AND 6000;
```

## 10.

### Answer ✅

```sql
 SELECT id, name, price 
FROM goods 
WHERE price IS NULL;
```

## 11.

### Answer ✅

```sql
 SELECT id, name, price FROM goods WHERE name LIKE '%pad%';
```

## 12.

### Answer ✅

```sql
 SELECT id, name, price
FROM sh_goods
WHERE category_id = 3 AND score = 5.00;
```

## 13.

### Answer ✅

```sql
 SELECT name, price, score
FROM sh_goods
WHERE score = 4.5 OR price < 10.00;
```

## 14.

### Answer ✅

```sql
 SELECT DISTINCT DepartmentID 
FROM Teacher;
```

## 15.

### Answer ✅

```sql
 SELECT StudentName, Birth
FROM Student
WHERE Birth = (SELECT MAX(Birth) FROM Student);
```

## 16.

### Answer ✅

```sql
 SELECT ClassID 
FROM Class 
WHERE StudentNum > 5;
```

## 17.

### Answer ✅

```sql
 SELECT MAX(Grade) AS max_grade
FROM Grade
WHERE CourseID = 'Dp010001';
```

## 18.

### Answer ✅

```sql
 SELECT StudentID, Grade
FROM Grade
WHERE CourseID = 'Dp010004'
ORDER BY Grade DESC, StudentID ASC;
```

## 19.

### Answer ✅

```sql
 SELECT sc.sno, sc.score
FROM sc
JOIN course ON sc.cno = course.cno
WHERE course.cname LIKE '%数据库%' 
  AND sc.score BETWEEN 80 AND 90;
```

## 20.

### Answer ✅

```sql
 UPDATE sc
JOIN cou ON sc.cno = cou.cno
SET sc.grade = 60
WHERE cou.cname = '高等数学' AND sc.grade < 60;
```

## 21.

### Answer ✅

```sql
 INSERT INTO warehouse (Wno, City, Size)
VALUES ('D01', '绍兴', 11000);
```

## 22.

### Answer ✅

```sql
 UPDATE orders
JOIN product ON orders.Pid = product.Pid
SET orders.QTY = orders.QTY * 1.4
WHERE product.PName LIKE '%螺母%';
```

## 23.

### Answer ✅

```sql
 DELETE FROM Product
WHERE sale_price >= 100;
```

## 24.

### Answer ✅

```sql
 SELECT *
FROM student
WHERE birth < (SELECT birth birth FROM student WHERE sname = '伍容华');
```

## 25.

### Answer ✅

```sql
 SELECT *
FROM product
WHERE Weight BETWEEN 40 AND 65;
```

## 26.

### Answer ✅

```sql
 SELECT *
FROM supplier
WHERE City NOT IN ('上海', '北京', '天津');
```

## 27.

### Answer ✅

```sql
 SELECT Pid
FROM product
WHERE PName LIKE '%M%' AND Weight > 30;
```

## 28.

### Answer ✅

```sql
 SELECT Eid, EName
FROM employee
WHERE Wno IS NULL;
```

## 29.

### Answer ✅

```sql
 SELECT *
FROM Product
WHERE purchase_price BETWEEN 50 AND 150;
```

## 30.

### Answer ✅

```sql
 SELECT PName, Weight_g / 1000 AS Weight_kg
FROM product;
```

