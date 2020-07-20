<template>
    <div id="all">
      <p id="header"><span>ㄑ</span>
      <span>历史记录</span>
        <span>. . .</span>
      </p>
      <historyBody
        v-for="item in items"
        :title="item.title"
        :time="item.time"
        :key="item.key">
      </historyBody>
    </div>
</template>

<script>
import historyBody from '../components/historyBody'

export default {
  name: 'list.vue',
  data () {
    return {
      items: []
    }
  },
  components: {
    historyBody
  },
  created () {
    this.$http.get('/api/organs').then((res) => {
      this.items = res.body.data
    })
  }
}
</script>

<style scoped>
#all{
}
  #header{
    line-height: 30px;
    padding-top: 0px;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
  }
#header span:nth-of-type(2){
  font-size: 20px;
  font-family: '黑体';

}
  #header span:nth-of-type(1) {
    float: left;
    color: deepskyblue;
    padding-left: 20px;
  }
  #header span:nth-of-type(3) {
    float: right;
    padding-right: 20px;
    font-weight: bold;
  }
</style>
