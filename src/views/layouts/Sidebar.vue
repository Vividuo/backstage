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
            router
            :collapse="collapsed"
            background-color="#00142a"
            text-color="#bfcbd9"
            active-text-color="#ffffff"
          >
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">Dashboard</span>
            </el-menu-item>

            <el-submenu v-for="(module, key) in modules" :key="key" index="key">
              <template slot="title">
                <i :class="module.icon"></i>
                <span>{{ module.title }}</span>
              </template>
              <el-menu-item
                :index="route.path"
                v-for="(route, key) in module.routes"
                :key="key"
              >{{ route.meta.title }}</el-menu-item>
            </el-submenu>
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
import modules from '@/modules'
export default {
  components: {},

  // filters: {},

  // props: {},

  data () {
    return {
      modules
    }
  },

  computed: {
    ...mapState({
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

  mounted () {
    console.log('mounted sidebar')
  },

  methods: {
    ...mapMutations([
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
