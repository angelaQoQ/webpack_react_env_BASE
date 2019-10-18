// 1 接受创建元素方法
const e = React.createElement

// 2 创建标签组件类,继承自React组件
class LikeButton extends React.Component {
  constructor(props) {
    super(props)  // 实例继承父类原型方法
    this.state = { liked: false } // 实例共有属性state
  }

  // render函数 返回 e加工成功的虚拟标签?
  /**
   * React.createElement()
   * 参数
   * 标签名   string
   * 标签属性 object
   * 标签内容 string?或者别的组件
   * 
   * 属性对象中可以注册事件: 事件处理函数中this是? 
   * 事件处理函数中setState?
   * 
   * */
  render() {
    if (this.state.liked) {
      return 'U liked this?'
    }

    return e(

      'button', // 标签名

      {
        onClick: () => { // 标签属性
          console.log(this);
          this.setState({ liked: true })
        }
      },

      "Like"  // 标签内容
    )
  }
}

// 获取容器
const domContainer = document.querySelector('#like_button_container')

ReactDOM.render(e(LikeButton), domContainer)