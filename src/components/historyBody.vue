<template>
<div id="all">
  <router-link to="/HelloWorld" class="dl-line">
  <div id="image">L</div>
  <P>{{title}}</P>
  <P>{{time}}</P>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'history-body',
  props: ['title', 'time']

}
</script>

<style scoped>
#all{
  margin: 0 auto;
  width: 90%;
}
.dl-line{
  text-decoration: none;
}
#image{
  color:white;
  float: left;
  width: 30px;
  height: 30px;
  background: url("../assets/circle.png") no-repeat;
  background-size: 25px;
}
p{
  padding-left: 40px;
  text-align: left;
}
  p:first-of-type{
    font-size: 14px;
    color: black;
  }
  p:nth-of-type(2){
    color:grey;
    line-height: 1px;
    font-size: 12px;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgrey;
  }
</style>
