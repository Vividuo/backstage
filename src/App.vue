<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
#app
  height: 100vh
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif
  font-size: 14px
  color: #606266
/deep/ .vertical-scroll
  height: 100%
  .el-scrollbar__wrap
    overflow-x: hidden
</style>
