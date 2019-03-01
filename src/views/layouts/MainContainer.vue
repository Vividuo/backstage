<!--  -->
<template>
  <el-container id="app">
    <Sidebar></Sidebar>
    <el-container class="main-container">
      <Topbar></Topbar>
      <el-main>
        <el-scrollbar class="vertical-scroll">
          <transition
            mode="out-in"
            enter-active-class="animated fadeIn faster"
            leave-active-class="animated fadeOut faster"
          >
            <router-view class="page"/>
          </transition>
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
  },

  // filters: {},

  // props: {},

  data () {
    return {
    }
  },

  computed: {},

  // created () {},

  mounted () { },

  methods: {}
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
.main-container
  flex-direction: column
</style>
