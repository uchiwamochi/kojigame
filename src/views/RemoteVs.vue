<template>
  <div class="Home">
    <h1>Remote VS</h1>
    <!-- <button class="btn btn--orange btn--radius" @click="getData()"><h3>get</h3></button> -->
   
    <div class="user1" style="float:left">
      <h1>Player1</h1>
      <br><br> <h2>{{count1}}</h2>
    </div> 


    <div class="user2" style="float:right">
      <h1>Player2</h1>
      <br><br><h2>{{count2}}</h2>
    </div> 
   
    
    <table class="table" align="center" border="1">
      <tr v-for="(rw,i) in field" :key="i">
        <td v-for="(cl,j) in rw" :key="j" align="center">
          <!-- {{cl}} -->
          <Koma v-show="cl != 0" :coord-y="i" :coord-x="j" :bgcolor="cellColor(cl)" :king="isKing(cl)" :turn="isTurn(cl) == turn" @child-event="moveKoma" />
        </td>
      </tr>
    
    </table>
    

    <button class="btn btn--orange btn--radius" @click="reset()"><h3>reset</h3></button>
    <!-- {{field}} -->
    
    <div>
      {{field}}
    </div>

  </div>
</template>

<script>
import Koma from "../components/Koma.vue"
import firebase from "firebase"


export default {
  name: 'Home',
  components: {
    Koma,
  },
  data(){
    return{
      player1:["a","b","k1","d","e"],
      player1Color:"red",
      player1King:"k1",
      player2:["f","g","k2","i","j"],  
      player2Color:"skyblue",
      player2King:"k2",
      field:[["a","0","0","0","f"],
             ["b","0","0","0","g"],
             ["k1","0","0","0","k2"],
             ["d","0","0","0","i"],
             ["e","0","0","0","j"]],
      count1:0,
      count2:0,
      turn:1,
      alteri:null,
    }
  },
  methods:{
    send(){
      firebase.database().ref("/test").set({
        field: this.field
      });
    },
    getData(){
      const self = this
      firebase.database().ref('test').on('value', snapshot => {
        if (snapshot) {
          const rootList = snapshot.val()
          // データオブジェクトを配列に変更する
          Object.keys(rootList).forEach((val) => {
            rootList[val].id = val
            console.log(rootList[val])
          })
        }
      })
    },

    cellColor(cellname){
      const self = this
      //console.log(cellname)
      if(self.player1.indexOf(cellname) != -1){
        // console.log(cellname + "p1")
        return self.player1Color
      }else if(self.player2.indexOf(cellname) != -1){
        // console.log(cellname + "p2")
        return self.player2Color
      }else{
        return 0
      }
    },
    isKing(cellname){
      const self = this
      if(self.player1King.indexOf(cellname) != -1 || self.player2King.indexOf(cellname) != -1 ){
        return true
      }else{
        return false
      }
    },
    isTurn(cellname){
      const self = this
      if(self.player1.indexOf(cellname) != -1){
        return 1
      }else if(self.player2.indexOf(cellname) != -1){
        return 2
      }
        return 0
    },
    moveKoma(payload) {
      if(payload.direction == "up"){
        const self = this
        for(let i=1; -1 < payload.coordY - i ; i++){
          if(self.field[payload.coordY - i][payload.coordX] != 0){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[payload.coordY - i + 1].splice(Number(payload.coordX),1,tmp)
            self.alteri = i
            break
          }else if(payload.coordY - i == 0){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[0].splice(Number(payload.coordX),1,tmp)
            break
          }
        }
        if(self.alteri != 1){
          self.changeTurn()
        }
      }else if(payload.direction == "down"){
        const self = this
        for(let i=1; payload.coordY + i < 5; i++){
          if(self.field[payload.coordY  + i][payload.coordX] != 0){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[payload.coordY + i - 1].splice(Number(payload.coordX) ,1,tmp)
            self.alteri = i
            break
          }else if(i + payload.coordY == 4){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[4].splice(Number(payload.coordX),1,tmp)
            break
          }
          
        }
        if(self.alteri != 1){
          self.changeTurn()
        }
        
      }else if(payload.direction == "left"){
        const self = this
        for(let i=1; -1 < payload.coordX - i  ; i++){
          if(self.field[payload.coordY][payload.coordX - i] != 0){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[payload.coordY].splice(Number(payload.coordX) - i + 1 ,1,tmp)
            self.alteri = i
            break
          }else if(payload.coordX - i == 0){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[payload.coordY].splice(0,1,tmp)
            break
          }
          
        }
        if(self.alteri != 1){
          self.changeTurn()
        }
        
      }else if(payload.direction == "right"){
        const self = this
        for(let i=1; i + payload.coordX < 5; i++){
          if(self.field[payload.coordY][payload.coordX + i] != 0){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[payload.coordY].splice(Number(payload.coordX) + i - 1 ,1,tmp)
            self.alteri = i
            break
          }else if(i + payload.coordX == 4){
            const tmp = self.field[payload.coordY][payload.coordX]
            self.field[payload.coordY].splice(Number(payload.coordX) ,1,"0")
            self.field[payload.coordY].splice(4,1,tmp)
            break
          }
          
        }
        if(self.alteri != 1){
          self.changeTurn()
        }
      }
      this.alteri = null
    },
    reset(){
      this.field = [["a","0","0","0","f"],
                    ["b","0","0","0","g"],
                    ["k1","0","0","0","k2"],
                    ["d","0","0","0","i"],
                    ["e","0","0","0","j"]]
      this.count1 = 0
      this.count2 = 0
      this.turn = 1
    },
    
    changeTurn(){
      console.log("change")
      const self = this
      if(self.turn == 1){
        self.turn = 2
        this.count1 += 1
      }else if(self.turn == 2){
        self.turn = 1
        this.count2 += 1
      }
      this.send()
      this.getData()
    }
  }, 
  watch: {
    field:function () {
      if(this.field[2][2] == "k1"){
        alert("Player1 win!")
      }else if(this.field[2][2] == "k2"){
        alert("Player2 win!")
      }
    }
  },
  computed:{
  },
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