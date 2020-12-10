<template>
  <div class="Home">
    <h1>VS</h1>
    
    <div class="user1" style="float:left">
      <h1>Player1</h1>
      <br><br><button @click="moveCount1()">END</button>
      <br><br> <h2>{{count1}}</h2>
    </div> 


    <div class="user2" style="float:right">
      <h1>Player2</h1>
      <br><br><button @click="movecount2()">END</button>
      <br><br><h2>{{count2}}</h2>
    </div> 
   
    
    <table align="center" border="1">
      <tr v-for="(rw,i) in field" :key="i">
        <td v-for="(cl,j) in rw" :key="j" align="center">
          <!-- {{cl}} -->
          <Koma v-show="cl != 0" :coord-y="i" :coord-x="j" :bgcolor="cellColor(cl)" @child-event="moveKoma" />
        </td>
      </tr>
    </table>

    <button class="btn btn--orange btn--radius" @click="reset()"><h3>reset</h3></button>
    <!-- {{field}} -->
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
      player1:["a","b","d","e"],
      player1Color:"red",
      player1King:"k1",
      king1Color:"orange",
      player2:["f","g","i","j"],  
      player2Color:"skyblue",
      player2King:"k2",
      king2Color:"blue",
      field:[["a","0","0","0","f"],
             ["b","0","0","0","g"],
             ["k1","0","1","0","k2"],
             ["d","0","0","0","i"],
             ["e","0","0","0","j"]],
      count1:0,
      count2:0
    }
  },
  methods:{
    cellColor(cellname){
      const self = this
      console.log(cellname)

      if(self.player1.indexOf(cellname) != -1){
        // console.log(cellname + "p1")
        return self.player1Color
      }else if(self.player2.indexOf(cellname) != -1){
        // console.log(cellname + "p2")
        return self.player2Color
      }else if(self.player1King.indexOf(cellname) != -1){
        return self.king1Color
      }else if(self.player2King.indexOf(cellname) != -1){
        return self.king2Color
      }else{
        return 0
      }
    },
    moveKoma(payload) {
      if(payload.direction == "up"){
        const self = this
        let i = 1
        while(self.field[Number(payload.coordY) - i][payload.coordX] == 0 || self.field[Number(payload.coordY) - i][payload.coordX] == 1){
          self.field[Number(payload.coordY) - i].splice(Number(payload.coordX) ,1,self.field[Number(payload.coordY) - i+1][payload.coordX])
          self.field[Number(payload.coordY) -i+1].splice(Number(payload.coordX),1,"0")
          i++
        }
      }else if(payload.direction == "down"){
        const self = this
        let i = 1
        while(self.field[Number(payload.coordY) + i][payload.coordX] == 0 || self.field[Number(payload.coordY) + i][payload.coordX] == 1){
          self.field[Number(payload.coordY) + i].splice(Number(payload.coordX) ,1,self.field[Number(payload.coordY) + i-1][payload.coordX])
          self.field[Number(payload.coordY) +i-1].splice(Number(payload.coordX),1,"0")
          i++
        }
      }else if(payload.direction == "left"){
        const self = this
        let i = 1
        while(self.field[payload.coordY][Number(payload.coordX) - i] == 0 || self.field[payload.coordY][Number(payload.coordX) - i] == 1){
          self.field[payload.coordY].splice(Number(payload.coordX) - i,1,self.field[payload.coordY][Number(payload.coordX) - i+1])
          self.field[payload.coordY].splice(Number(payload.coordX) - i+1,1,"0")
          i++
        }
      }else if(payload.direction == "right"){
        const self = this
        let i = 1
        while(self.field[payload.coordY][payload.coordX + i] == 0 || self.field[payload.coordY][payload.coordX + i] == 1){
          self.field[payload.coordY].splice(Number(payload.coordX) + i,1,self.field[payload.coordY][Number(payload.coordX) + i-1])
          self.field[payload.coordY].splice(Number(payload.coordX) + i-1,1,"0")
          i++;
        }
      }
    },
    reset(){
      this.field = [["a","0","0","0","f"],
                    ["b","0","0","0","g"],
                    ["k1","0","0","0","k2"],
                    ["d","0","0","0","i"],
                    ["e","0","0","0","j"]]
      this.count1 = 0
      this.count2 = 0
    },
    moveCount1(){
      this.count1 += 1
    },
    movecount2(){
      this.count2 += 1
    },
    

  },
  
  
  // watch: {
  //     field:function () {
  //       this.count += 1
  //     }
  // },

  computed:{
  }
}
</script>

<style scoped>
  td{
    width:90px;
    height:100px;
  }

  .user1{
    width:30%;
  }

  .user2{
    width:30%;
  }

  .btn--orange,
a.btn--orange {
  color: #fff;
  background-color: #eb6100;
}
.btn--orange:hover,
a.btn--orange:hover {
  color: #fff;
  background: #f56500;
}

a.btn--radius {
   border-radius: 100vh;
}
    
  </style>




















