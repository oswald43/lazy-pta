## 1.

有如下TestA类的定义：
```
public class TestA {
    static int a=10;
}
```
用该类创建2个对象：testA1和testA2，现将类变量（静态变量）a的数值变为100，则正确的方式是：（    ）。

A.
TestA.a=100;

B.
testA1.a=100;

C.
testA2.a=100;

D.
以上都不对

## 2.

下面关于构造方法的描述，正确的有哪些？（    ）   (2.0分)

A.
方法名必须和类名相同

B.
在方法中不能return语句返回一个值

C.
方法名的前面有返回值类型的声明

D.
当定义了带参数的构造方法，系统默认的不带参数的构造方法依然存在

## 3.

下面关于变量及其作用域范围的陈述哪些是正确的（    ）。

A.
实例变量是类的成员变量

B.
实例变量用关键字static声明

C.
在方法中定义的局部变量，在该方法被执行时创建

D.
局部变量在使用前必须被初始化

## 4.

若在cn.sdut包中有A、B类，在cn.sdut.cs包中有C、D类，在default package中如果要使用到A、B、C、D 4个类时，引入方式为：(    )。

A.
```
import cn.sdut.A;
import cn.sdut.B;
import cn.sdut.cs.C;
import cn.sdut.cs.D;
```

B.
```
import cn.sdut.*;

```

C.
```
import cn.sdut.*;
import cn.sdut.cs.*;
```

D.
```
import cn.sdut.cs.*;
```

## 5.

类中哪些访问权限修饰的成员，在子类访问时不受限制?（     ）

A.
private

B.
默认

C.
protected

D.
public

