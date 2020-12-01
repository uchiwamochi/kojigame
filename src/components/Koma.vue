<template>
  <div class="koma">
    <div class="circle" v-bind:style="{background:bgcolor}">
      <btn class="up" @click="emit2vs(coordX,coordY,'up')">&#9650;</btn>
      <btn class="down" @click="emit2vs(coordX,coordY,'down')">&#9660;</btn>
      <btn class="left" @click="emit2vs(coordX,coordY,'left')">&#9664;</btn>
      <btn class="right" @click="emit2vs(coordX,coordY,'right')">&#9654;</btn>
      <!-- {{bgcolor}} -->
    </div>
    
  </div>
</template>

<script>
export default {
  name:"koma",
  props:["bgcolor","coordX","coordY"],
  methods:{
    emit2vs(x,y,dirc) {
      this.$emit('child-event',{"coordX":x, "coordY":y, "direction":dirc});
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
  left:41%;
}
.down{
  bottom: 0px;
  left:41%;
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