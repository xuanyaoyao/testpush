<template>
<v-show :text="msg" @clickFun="clickShowName"></v-show>
</template>

<script>
import Show from '../components/showBtn.vue'
export default {
  name: 'test',
  components: {
    'v-show': Show
  },
  data () {
    return {
      msg: '宣瑶44瑶'
    }
  },
  methods: {
    clickShowName (data) {
      this.msg = data
    }
  }
}
</script>

<style scoped>

</style>
