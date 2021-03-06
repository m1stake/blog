import React, {Component} from "react"
import Title from '../component/title'
import Paragraph from '../component/paragraph'
import ReactSVG from 'react-svg'


const title = "Java基本类型的拆装箱"

const codeStyle = {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    fontSize: '.85em',
    padding: '.8em',
    overflow: 'auto',
    borderRadius: '3px',
    background: '#f5f5f5'
}

class Content extends Component {

    render () {

        return [
            <Title key="0" title={title}></Title>,
            <Paragraph key="1" header="基本类型与引用类型" ps={
                [
                    <p key="0">首先，我们需要明确的是，Java是强类型语言，而基本类型和与它相关的引用类型（例如int和Integer）是两种类型并且没有继承关系。</p>,
                    <p key="1">也就是说，基本类型的变量不能持有对应引用类型实例的引用，而引用类型的变量也不能持有对应基本类型的值。可以理解为，int类型的变量不能持有Integer类型实例的引用，Integer类型的变量也不能持有int类型的值。每种类型的变量只能持有明确和它的变量类型相关的值（子类型或接口实现）。</p>
                ]
            }/>,
            <Paragraph key="2" header="类型转换" ps={
                [
                    <p key="0" >Java标准库为每种基本类型提供两个方法用于基本类型和引用类型相互转换。</p>,
                    <pre key="1" >
                        <code className="java" style={codeStyle}>
{ `
static Ref valueOf(primitive p)     // 将引用类型转换为基本类型
primitive xxxValue(Ref r)           // 将基本类型转换为引用类型
` }
                        </code>
                    </pre>,
                    <p key="2">
                        考虑到这种类型转换比较频繁，每次都要明确调用太麻烦。所以Java可以隐式的进行这种转换（因为Java的所有变量都是明确类型的，所以可以推断是否需要这种类型转换）。
                        这就解释了，为什么将空的引用类型赋值给基本类型的时候是报空指针异常。
                    </p>,
                    <p key="3">
                        这种转换是由编译器完成的。一旦进入运行时，变量只能被一致的类型值赋值，这也是为什么在使用反射的代码中，所有的基本类型和引用类型都要明确进行类型转换。
                    </p>,
                    <p key="4">我们可以看一段代码和它编译后的字节码：</p>,
                    <pre key="5">
                        <code className="java" style={codeStyle}>
{
`// 编译前的代码
Integer i = null;
int j = i;
Integer k = j;

// 编译后的字节码
0: aconst_null
1: astore_1
2: aload_1
3: invokevirtual #2         // Method java/lang/Integer.intValue:()I
6: istore_2
7: iload_2
8: invokestatic  #3         // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
11: astore_3
12: return`
}
                        </code>
                    </pre>,
                    "可以看到编译器已经加上类型转换相关的操作。",

                ]
            }/>,
            <Paragraph key="3" header="强制类型转换" ps={
                [
                    "我们再看一个强制类型转换的例子。",
                    <pre key="0">
                        <code className="java" style={codeStyle}>
{
`//隐式转换的代码：
int m = (Integer) 1;

// 生成的字节码：
0: iconst_1
1: invokestatic  #2            // Method java/lang/Integer.valueOf:(I)Ljava/lang/Integer;
4: invokevirtual #3            // Method java/lang/Integer.intValue:()I
7: istore_1
8: return`
}
                        </code>
                    </pre>,
                    "这与：",
                    <pre key="2">
                        <code className="java" style={codeStyle}>
{ `int m = Integer.valueOf(1).intValue();` }
                        </code>
                    </pre>,
                    "生成的字节码是完全一样的。",
                ]
            }/>
        ]
    }
}

const article = {
    title: title,
    content: Content
}

export { article }
