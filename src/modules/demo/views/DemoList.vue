<!--  -->
<template>
  <div>
    <transition-group
      enter-active-class="animated slideInRight slow"
      leave-active-class="animated slideOutLeft slow"
    >
      <div v-for="(tag,key) in tableData" :key="key">
        <el-tag @click="clickTag(tag)">{{tag.date}}</el-tag>
      </div>
    </transition-group>
    <el-table ref="filterTable" :data="tableData" style="width: 100%" @row-click="clickRow">
      <el-table-column prop="date" label="日期" sortable width="180" column-key="date"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="tag" label="标签" width="100">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  components: {},

  // filters: {},

  // props: {},

  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }]
    }
  },

  computed: {},

  // created () {},

  mounted () { },

  methods: {
    clickTag (tag) {
      this.tableData = _.reject(this.tableData, { date: tag.date })
    },
    clickRow (row) {
      console.log('click')
      const debounce = _.debounce(() => {
        console.log('debounce')
      }, 3000)
      // setInterval(() => {
      //   debounce()
      //   console.log('1')
      // }, 1000)
      // const throttle = _.throttle(() => {
      //   console.log('throttle')
      // }, 3000)
      // setInterval(throttle, 1000)
      // this.tableData = _.reject(this.tableData, { date: row.date })
    }
  }
}

</script>
<style lang='stylus'  rel='stylesheet/stylus' scoped>
</style>
