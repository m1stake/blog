# 加密通信

##
我们首先以书信通信为例，看看加密的问题是怎么产生的，问题又是怎么解决的。

## 书信通信
我们为什么要通信，因为我们需要在物理上被隔绝的情况下进行信息传递。最开始的时候，我们向第三方口述，由第三方代为传达。之后有了文字，我们不必再以声音的方式传递信息，信息的中转方也再不必知道被传递信息的内容。之后随着社会的发展和人对信息传递的需求，有了邮局系统。我们通过邮局系统传递信件的方式交换信息。

### 最简单的书信通信
我们假设有两个需要通信的人，alice和bob。最简单的情况下，alice写一封信，放进信封里，把信封封上，交给邮差，邮差把信转交给bob（不考虑中间步骤），bob打开信封、读信然后写一封信。这封信又以相同的方式转到alice手中。这个例子已经包含了通信的主要元素，通信主体（alice和bob）、编码（文字）、数据包（信和信封）、信息中转（邮差）。正式因为信息的传递需要中转，我们才有信息加密的需求。

### 简单的信息加密
纸质通信的方式本身已经为通信提供了一定的保障。比如信封和字迹可以一定程度上让你知道信件是否被阅读甚至篡改过。如果alice和bob希望通信是绝对保密的，即使信件被其他人截获，也没有人能知道信件的内容。那么他们可以使用一种只有两个人才懂的语言进行通信。这种“语言”往往是通过变换自然语言得到的。简单的加密方式有如字符移位、字符映射或者简单加密的组合。

字符移位是指将所有字符按照字符表的顺序统一向前或向后移动几位，用位移后对应的字符替换掉原有字符。假设alice的信件内容为"hello bob"，向前位移两位的方式得到的信件内容将是"-_-"(可以自己推算一下)。bob在收到信件之后，将信件内容以向后位移两位的方式解密，即可得到原有的信件内容。如果信件被中间人截获，中间人面对加密后的信件，不能立刻知道信件的内容。密文破解的时间与加密方式和解密的手段和可用资源有关。简单的加密方式容易被破解，但是这不影响加密的本质。

字符位移可以被认为是最简单的字符映射加密。最简单的字符映射以一个字符代替另一个字符的方式完成加密。为保证所有字符都能找到对应关系，字符和加密字符是一一对应的关系。为了增加破解的难度，我们可以用多个字符替换一个字符，或者使用不等长的映射。比如"xy"代表"h"，"zcc"代表"e"等。映射表越复杂，破解就越困难。alice和bob要嘛把整个对应表都记住，要嘛就分别保留一份对应表，以便查阅。不管哪一种方式都是操作难度大而且极其不方便的。

有一些数学方法提供一种方式，可以在保留少量私密信息的情况下提供足够大强度的加密，而不用记住整个映射表。这种情况下，映射表和加解密算法往往是公开的，只有少量因子是私密的。以字符位移为例，字符表相当于映射表，位移相当于加解密算法，而位移步数和位移方向是私密的因子。我们一般称私密因子为密钥。

## 网络通信
通过邮局系统的书信通信和现代基于网络的通信是类似的。不同的是，网络可以认为是一个完全公开的信息交换平台。网络上的信息可能被任何人获取、截断或者篡改。

### 对称加密
比较容易想到的加密算法是，使用相同的密钥进行加解密，这种算法我们称之为对称加密。以字符位移为例，对字符表位移计算加解密的字符是加密算法，位移的位数是双方商定好的密钥。对称加密可以以同样的两把钥匙对应一把锁类比。
```
// D是加密前的信息，称为明文
// E是加密后的信息，称为密文
// K是通信双方约定的，对其他人保密的加密因子，称为密钥
// encode是加密算法，decode是解密算法
E = encode(D, K)  // 加密
D = decode(E, K)  // 解密
```

对称加密虽然可以提供足够的加密强度，但是存在一个严重的问题，使得它不能直接用于信息传输加密。对称加密需要一个双方商定的密钥，但是这个商定过程需要通过网络进行，密钥也会通过网络传输。这就像是把自家门的钥匙的模子发到了网上，锁门将变得没有意义。

### 非对称加密
非对称加密指使用不同的密钥加解密的加密算法。非对称加密为我们提供了一种能力来解决对称加密的问题，那就是密钥的商定过程中的信息不足以解密被加密的信息，但是通信双方的保留信息（不进行网络传输的信息）可以帮助完成加解密。

非对称加密算法的效率比对称加密要低很多。所以，一般使用对称加密结合非对称加密的方式完成加密通信。首先进行非对称加密的商定，商定完成之后使用非对称加密的加密通信完成对称加密的密钥商定，之后使用商定好的密钥进行对称加密的通信。

非对称加密其实是基于一些数学问题的逆向不可解实现的。例如，RSA依赖大整数因式分解极其困难的现有事实。目前没有快速因式分解的算法，只能通过穷举的方式求解。大整数的计算本身就是非常慢的（对计算机也是如此），所以足够大的整数可以认为在一定的时间内不可解。只要这个时间是可接受的我们就认为通信是足够安全的。



### 前向保密
