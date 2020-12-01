<template>
  <div class="Home">
    <h1>VS</h1>
  
    <table align="center" border="1">
      <tr v-for="(rw,i) in field" :key="i">
        <td v-for="(cl,j) in rw" :key="j" align="center">
          <!-- {{cl}} -->
          <Koma v-show="cl != 0" :coord-y="i" :coord-x="j" :bgcolor="cellColor(cl)" @child-event="moveKoma" />
        </td>
      </tr>
    </table>
    {{field}}
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
      player1:["a","b","k1","d","e"],
      player1Color:"red",
      player2:["f","g","k2","i","j"],  
      player2Color:"skyblue",
      field:[["a","0","0","0","f"],
             ["b","0","0","0","g"],
             ["k1","0","0","0","k2"],
             ["d","0","0","0","i"],
             ["e","0","0","0","j"]]
    
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
    },
    moveKoma(payload) {
      if(payload.direction == "up"){
        const self = this
        let i = 1
        while(self.field[Number(payload.coordY) - i][payload.coordX] == 0){
          self.field[Number(payload.coordY) - i].splice(Number(payload.coordX) ,1,self.field[Number(payload.coordY) - i+1][payload.coordX])
          self.field[Number(payload.coordY) -i+1].splice(Number(payload.coordX),1,"0")
          i++
        }
      }else if(payload.direction == "down"){
        const self = this
        let i = 1
        while(self.field[Number(payload.coordY) + i][payload.coordX] == 0){
          self.field[Number(payload.coordY) + i].splice(Number(payload.coordX) ,1,self.field[Number(payload.coordY) + i-1][payload.coordX])
          self.field[Number(payload.coordY) +i-1].splice(Number(payload.coordX),1,"0")
          i++
        }
      }else if(payload.direction == "left"){
        const self = this
        let i = 1
        while(self.field[payload.coordY][Number(payload.coordX) - i] == 0){
          self.field[payload.coordY].splice(Number(payload.coordX) - i,1,self.field[payload.coordY][Number(payload.coordX) - i+1])
          self.field[payload.coordY].splice(Number(payload.coordX) - i+1,1,"0")
          i++
        }
      }else if(payload.direction == "right"){
        const self = this
        let i = 1
        while(self.field[payload.coordY][payload.coordX + i] == 0){
          self.field[payload.coordY].splice(Number(payload.coordX) + i,1,self.field[payload.coordY][Number(payload.coordX) + i-1])
          self.field[payload.coordY].splice(Number(payload.coordX) + i-1,1,"0")
          i++;
        }
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




















