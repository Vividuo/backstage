<template>
  <el-container id="app">
    <Sidebar></Sidebar>
    <el-container>
      <el-header class="header">
        <Topbar></Topbar>
      </el-header>
      <el-main>
        <el-scrollbar class="vertical-scroll">
          <router-view/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from '@/views/layouts/Sidebar'
import Topbar from '@/views/layouts/Topbar'
export default {
  components: {
    Sidebar,
    Topbar
  }
}
</script>

<style lang="stylus" scoped>
#app
  height: 100vh
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif
  font-size: 14px
  color: #606266
.header
  border-bottom: 1px solid #ebeef5
  background-color: #fff
  /deep/ .el-container
    height: 100%
    align-items: center
    .el-icon-menu
      cursor: pointer
      font-size: 20px
/deep/ .vertical-scroll
  height: 100%
  .el-scrollbar__wrap
    overflow-x: hidden
</style>
