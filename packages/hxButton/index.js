// 暴露组件
import hxButton from './src/hxButton'
hxButton.install = vue => {
  vue.component(hxButton.name, hxButton)
}
export default hxButton