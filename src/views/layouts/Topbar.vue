<!--  -->
<template>
  <el-container>
    <i class="el-icon-menu" @click="toggleSidebar"></i>
  </el-container>
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
    ...mapMutations('app', [
      'toggleSidebar'
    ])
  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
</style>
