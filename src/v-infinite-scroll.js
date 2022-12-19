export default  {
  // 参数	说明	类型	可选值	默认值
// infinite-scroll-disabled	是否禁用	boolean	-	false
// infinite-scroll-delay	节流时延，单位为ms	number	-	200
// infinite-scroll-immediate	是否立即执行加载方法，以防初始状态下内容无法撑满容器。	boolean	-	true

  mounted(el, binding, vnode, prevVnode) {
    const delay=el.getAttribute('infinite-scroll-delay')
    const immediate=el.getAttribute('infinite-scroll-immediate')
    const isDisabled=el.getAttribute('infinite-scroll-disabled')
    const callback=binding.value
    immediate && callback()
    !JSON.parse(isDisabled) && el.addEventListener('scroll',throttle((e)=>{
      var scrollHight = e.target.scrollHeight;
      var clientHeight = e.target.clientHeight;
      if(scrollHight<=e.target.scrollTop+clientHeight){
        callback()
      }
    },delay||200))

  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) {}
}

function throttle(fn,delay){
  let timer=null
  return function (e){
    if(!timer){
      timer = setTimeout(() => {
        timer = null
        fn(e)
      }, delay)
    }
  }
}