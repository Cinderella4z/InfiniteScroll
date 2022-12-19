<template>

  <ul class="infinite-list" v-infinite-scroll="load" infinite-scroll-delay="200" infinite-scroll-immediate="true" infinite-scroll-disabled="false">
    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
  
</template>
<script  setup>
import { ref, reactive,onMounted} from 'vue';
const count = ref(50)

const load=()=>{
  count.value+=5
}


// 参数	说明	类型	可选值	默认值
// infinite-scroll-disabled	是否禁用	boolean	-	false
// infinite-scroll-delay	节流时延，单位为ms	number	-	200
// infinite-scroll-immediate	是否立即执行加载方法，以防初始状态下内容无法撑满容器。	boolean	-	true


</script>
<style  scoped>
.infinite-list{
  height: 200px;
  background-color: pink;
  overflow: auto;
  
}
</style>