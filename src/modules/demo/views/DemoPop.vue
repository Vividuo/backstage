<!--  -->
<template>
  <div class="pop" @click="clickPop">Demo Pop</div>
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

  mounted () {
    console.log(this.$route)
  },

  methods: {
    clickPop () {
      this.$router.push({ name: 'demos.demo-detail' })
    }
  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
.pop
  color: #ffffff
  font-size: 36px
  text-align: center
  position: fixed
  width: 100%
  height: 100%
  left: 0
  top: 0
  background-color: rgba(0, 0, 0, 0.54)
</style>
