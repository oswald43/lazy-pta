## 1.

Java中的数组在声明并分配了空间之后，关于其数组元素，哪些说法是正确的？（     ）

A.
数组元素未人为赋值之前不能进行访问

B.
数组元素都有默认值

C.
基本数据类型中数值类型数组，元素默认值为0；布尔类型数组，元素默认值为false。

D.
引用数据类型的数组，其数组元素默认值为null

## 2.

List类型的对象list可以以几种形式输出其内容（    ）？

A.
```
System.out.println(list.toString());

```

B.
```
for (int i = 0; i < list.size(); i++)
{
    System.out.println(list.get(i));  
}
```

C.
```
for (Object obj : list)
{
    System.out.println(obj);  
}
```

D.
```
Iterator it = list.iterator();   
while (it.hasNext())
{ 
     System.out.println(it.next());  
}
```

## 3.

迭代器接口（Iterator）所定义的方法有（     ）。

A.
hasNext()

B.
next()

C.
remove()

D.
nextElement()

## 4.

对于Set类型的对象set，可以以几种形式输出其内容（ ）？

A.
```
System.out.println(set.toString());
```

B.
```
for (int i = 0; i < set.size(); i++)
{ 
    System.out.println(set.get(i)); 
}
```

C.
```
for (Object obj : set) 
{
    System.out.println(obj);
}
```

D.
```
Iterator it = set.iterator();  
while (it.hasNext()) 
{  
    System.out.println(it.next());
}
```

## 5.

在JAVA集合框架中，下面哪些类型所表示的对象是有序的？（       ）

A.
HashMap

B.
HashSet

C.
TreeMap

D.
LinkedList

E.
LinkedHashMap

