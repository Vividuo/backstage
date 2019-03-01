<!--  -->
<template>
  <div class="demo-detail">Demo Detail
    <el-button>
      <router-link :to="{name: 'demos.demo-detail.pop'}">Pop</router-link>
    </el-button>
    <transition
      appear
      enter-active-class="animated slideInRight faster"
      leave-active-class="animated slideOutRight faster"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},

  // filters: {},

  // props: {},

  data () {
    return {
    }
  },

  computed: {},

  // created () {},

  mounted () { },

  methods: {

  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
</style>
