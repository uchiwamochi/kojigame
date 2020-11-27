<template>
  <div class="Home">
    <h1>VS</h1>
  
    <table align="center" border="1">
      <tr v-for="(rw,i) in field" :key="i">
        <td v-for="(cl,j) in rw" :key="j" align="center">
          <!-- {{cl}} -->
          <Koma v-show="cl != 0" :bgcolor="cellColor(cl)" />
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import Koma from "../components/Koma.vue"

export default {
  name: 'Home',
  components: {
    Koma,
  },
  data(){
    return{
      player1:["a","b","c","d","e"],
      player1Color:"red",
      player2:["f","g","h","i","j"],  
      player2Color:"blue",
      field:[["a",0,0,0,"f"],
             ["b",0,0,0,"g"],
             ["c",0,0,0,"h"],
             ["d",0,0,0,"i"],
             ["e",0,0,0,"j"]]
    
    }
  },
  methods:{
    cellColor(cellname){
      const self = this
      // console.log(cellname)

      if(self.player1.indexOf(cellname) != -1){
        console.log(cellname + "p1")
        return self.player1Color
      }else if(self.player2.indexOf(cellname) != -1){
        console.log(cellname + "p2")
        return self.player2Color
      }else{
        return 0
      }
    }
  },
  computed:{
  }
}
</script>

<style scoped>
  td{
    width:100px;
    height:100px;
  }

    
  </style>




















