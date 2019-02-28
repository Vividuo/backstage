<!--  -->
<template>
  <el-aside :class="classes" :width="width">
    <el-container>
      <el-header>
        <i class="logo el-icon-menu"></i>
        <span class="title">管理后台</span>
      </el-header>
      <el-scrollbar class="vertical-scroll">
        <el-main>
          <el-menu
            :collapse="collapsed"
            background-color="#00142a"
            text-color="#bfcbd9"
            active-text-color="#ffffff"
          >
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>-->
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-main>
      </el-scrollbar>
      <el-footer>
        <i class="el-icon-arrow-left" @click="toggleSidebar"></i>
      </el-footer>
    </el-container>
  </el-aside>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {},

  // filters: {},

  // props: {},

  data () {
    return {

    }
  },

  computed: {
    ...mapState('app', {
      collapsed: state => state.sidebarCollapsed
    }),

    width () {
      return this.collapsed ? '64px' : '200px'
    },

    classes () {
      let classes = ['aside']
      if (this.collapsed) {
        classes.push('collapsed')
      }
      return classes
    }
  },

  // created () {},

  // mounted () {},

  methods: {
    ...mapMutations('app', [
      'toggleSidebar'
    ])
  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
.aside
  font-size: 16px
  transition: width ease 0.25s
  .el-container
    height: 100%
    background: #00142a
    color: #fff
  .el-header
    color: #0076D4
    background-color: #002140
    display: flex
    align-items: center
    justify-content: center
    .logo
      font-size: 24px
    .title
      margin-left: 10px
  .el-main
    padding: 20px 0
    overflow: hidden
    .el-menu
      border: none
  .el-footer
    height: 40px !important
    background-color: #002140
    display: flex
    align-items: center
    justify-content: flex-end
    .el-icon-arrow-left
      font-size: 20px
      cursor: pointer
  &.collapsed
    .el-header
      .title
        display: none
</style>
