import React, {Component} from "react";
import {Header} from "semantic-ui-react";

const header2Style = {
    fontFamily: "STFangSong, Helvetica, Arial, Vernada, Tahoma, STXihei, 'Microsoft YaHei', 'Songti SC', SimSun, Heiti, sans-serif",
    fontSize: 22
}

const contentStyle = {
    textAlign: "left",
    padding: "0 2em",
    fontSize: "18px",
    marginTop: "2em",
    paddingBottom: "1em",
    fontFamily: '"lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif'
}


class Paragraph extends Component {

    render () {
        return (
            <div style={contentStyle}>
                <Header style={header2Style}>{ this.props.header }</Header>
                <hr/>
                <div style={{marginTop: "1.5em"}}>
                    {
                        [
                            this.props.ps
                        ]
                    }
                </div>
            </div>
        )
    }

}
const p = `
<Header style={header2Style}>
    原生类型与引用类型
</Header>
<hr/>
<div style={{marginTop: "1.5em"}}>
    <p>
    埃里克森的积分卡就是打开了埃里克森的积分，卡就是打开了埃里克森的积分卡就是打开了。
    埃里克森的积分卡就是打，开了埃里克森的积分卡就是打开。
    </p>
    <p>
    了埃里克森的积分卡就是打开了，
    埃里克森的积分卡就是打开了埃里。克森的积分卡就是打开了埃里克森的积分卡就是打开了。
    </p>
</div>
`
export default Paragraph