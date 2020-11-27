<template>
  <div class="Home">
    <h1>VS</h1>
  
    <table align="center" border="1">
      <tr v-for="(rw,i) in field" :key="i">
        <td v-for="(cl,j) in rw" :key="j" align="center">
          <!-- {{cl}} -->
          <Koma1 v-show="player1.indexOf(cl) != -1" />
          <Koma2 v-show="player2.indexOf(cl) != -1" />
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import Koma1 from "../components/Koma1.vue"
import Koma2 from "../components/Koma2.vue"

export default {
  name: 'Home',
  components: {
    Koma1,
    Koma2
  },
  data(){
    return{
      player1:["a","b","c","d","e"],
      player2:["f","g","h","i","j"],  
      field:[["a",0,0,0,"f"],
             ["b",0,0,0,"g"],
             ["c",0,0,0,"h"],
             ["d",0,0,0,"i"],
             ["e",0,0,0,"j"]]
    
    }
  }
}
</script>

<style scoped>
  td{
    width:100px;
    height:100px;
  }

    
  </style>




















