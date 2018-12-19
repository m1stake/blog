# Java基本类型的拆装箱

## 基本类型与引用类型
首先，我们需要明确的是，Java是强类型语言，而基本类型和与它相关的引用类型（例如int和Integer）是两种类型并且没有继承关系。

也就是说，基本类型的变量不能持有对应引用类型实例的引用，而引用类型的变量也不能持有对应基本类型的值。可以理解为，int类型的变量不能持有Integer类型实例的引用，Integer类型的变量也不能持有int类型的值。每种类型的变量只能持有明确和它的变量类型相关的值（子类型或接口实现）。

## 类型转换
Java标准库为每种基本类型提供两个方法用于基本类型和引用类型相互转换。
```java
static Ref valueOf(primitive)   // 将基本类型转换为引用类型
```
```java
primitive xxxValue(Ref)         // 将引用类型转换为基本类型
```

考虑到这种类型转换比较频繁，每次都要明确调用太麻烦。所以Java可以隐式的进行这种转换（因为Java的所有变量都是明确类型的，所以可以推断是否需要这种类型转换）。这就解释了，为什么将空的引用类型赋值给基本类型的时候是报空指针异常。

这种转换是由编译器完成的。一旦进入运行时，变量只能被一致的类型值赋值，这也是为什么在使用反射的代码中，所有的基本类型和引用类型都要明确进行类型转换。

我们可以看一段代码和它的字节码。
```java
Integer i = null;
int j = i;
Integer k = j;
```

编译后的字节码：
```
0: aconst_null
1: astore_1
2: aload_1
3: invokevirtual #2                  // Method java/lang/Integer.intValue:()I
6: istore_2
7: iload_2
8: invokestatic  #3                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
11: astore_3
12: return

```
可以看到编译器已经加上类型转换相关的操作。

## 强制类型转换
我们再看一个强制类型转换的例子。
隐式转换的代码：
```java
int m = (Integer) 1;
```
生成的字节码：
```
0: iconst_1
1: invokestatic  #2                  // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
4: invokevirtual #3                  // Method java/lang/Integer.intValue:()I
7: istore_1
8: return
```
这与：
```java
int m = Integer.valueOf(1).intValue();
```
生成的字节码是完全一样的。
