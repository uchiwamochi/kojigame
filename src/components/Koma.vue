<template>
  <div class="koma">
    <div class="circle">
      <btn class="up" @click="up()">&#9650;</btn>
      <btn class="down" @click="down()">&#9660;</btn>
      <btn class="left" @click="left()">&#9664;</btn>
      <btn class="right" @click="right()">&#9654;</btn>
    </div>
    
  </div>
</template>
<script>
export default {
    methods:{
      up(){
        
      },
      down(){

      },
      left(){

      },
      right(){
        
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
}
.down{
  bottom: 0px;
}
.left{
  
  left: 0px;
}
.right{
  right: 0px;
}
</style>