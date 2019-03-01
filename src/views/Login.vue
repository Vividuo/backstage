<!--  -->
<template>
  <el-container>
    <el-form>
      <el-input disabled placeholder="username"></el-input>
      <el-input disabled placeholder="password"></el-input>
      <el-button @click="login">Login</el-button>
    </el-form>
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions(['login'])
  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
</style>
