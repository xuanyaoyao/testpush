<template>
  <button @click="clickBtn">{{text}}</button>
</template>

<script>
export default {
  name: 'show-btn',
  data () {
    return {

    }
  },
  props: [
    'text'
  ],
  methods: {
    clickBtn () {
      this.$emit('clickFun', 'i change the context')
    }
  }
}
</script>

<style scoped>

</style>
