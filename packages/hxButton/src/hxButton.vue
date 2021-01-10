<template>
  <button class="testBtn">测试按钮</button>
</template>
<script>
export default {
  name: 'hxButton' // 注意这个name是必须的
}
</script>
<style lang="scss" scoped>
.testBtn {
  width: 100px;
  height: 50px;
  margin: 0 10px;
  background-color: #fc297f;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>