<!--  -->
<template>
  <el-header class="header">
    <el-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <el-dropdown class="user-menu">
        <span class="el-dropdown-link">
          <i class="el-icon-bell el-icon--left"></i>
          用户菜单
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>基本信息</el-dropdown-item>
          <el-dropdown-item disabled>身份认证</el-dropdown-item>
          <el-dropdown-item divided>注销登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-container>
  </el-header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  components: {},

  // filters: {},

  // props: {},

  data () {
    return {
    }
  },

  computed: {

  },

  // created () {},

  mounted () {

  },

  methods: {

  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
.header
  border-bottom: 1px solid #ebeef5
  background-color: #fff
  .el-container
    height: 100%
    align-items: center
    .user-menu
      flex: 1
      text-align: right
</style>
