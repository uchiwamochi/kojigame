<template>
  <div class="koma">
    <div class="circle">
      <btn class="up" @click="up()">&#9650;</btn>
      <btn class="down" @click="down()">&#9660;</btn>
      <btn class="left" @click="left()">&#9664;</btn>
      <btn class="right" @click="right()">&#9654;</btn>
      {{bgcolor}}
    </div>
    
  </div>
</template>

<script>
export default {
  name:"koma",
  props:["bgcolor"],
  methods:{
    up(){
      alert("up")
    },
    down(){
      alert("down")
    },
    left(){
      alert("left")
    },
    right(){
      alert("right")
    }

  }
}
</script>

<style scoped>
.circle{
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: skyblue;/*背景色*/
  z-index: 0;
}
btn{
  position: absolute;
  z-index:1;
}
.up{
  top: 0px;
  left:42%;
}
.down{
  bottom: 0px;
  left:42%;
}
.left{
  left: 0;
  top: 35%;
}
.right{
  right: 0px;
  top: 35%;
}
</style>