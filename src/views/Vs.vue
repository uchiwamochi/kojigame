<template>
  <div class="Home">
    <h1>VS</h1>
    <table align="center" border="1">
      <tr>
        <td align="center"><Koma v-show="field[0][0] != 0" /></td>
        <td align="center"><Koma v-show="field[0][1] != 0" /></td> 
        <td align="center"><Koma v-show="field[0][2] != 0" /></td> 
        <td align="center"><Koma v-show="field[0][3] != 0" /></td> 
        <td align="center"><Koma v-show="field[0][4] != 0" /></td> 
      </tr>
      <tr>
        <td align="center"><Koma v-show="field[1][0] != 0" /></td>
        <td align="center"><Koma v-show="field[1][1] != 0" /></td> 
        <td align="center"><Koma v-show="field[1][2] != 0" /></td> 
        <td align="center"><Koma v-show="field[1][3] != 0" /></td> 
        <td align="center"><Koma v-show="field[1][4] != 0" /></td>
      </tr>
      <tr>
        <td align="center"><Koma v-show="field[2][0] != 0" /></td>
        <td align="center"><Koma v-show="field[2][1] != 0" /></td> 
        <td align="center"><Koma v-show="field[2][2] != 0" /></td> 
        <td align="center"><Koma v-show="field[2][3] != 0" /></td> 
        <td align="center"><Koma v-show="field[2][4] != 0" /></td>
      </tr>
      <tr>
        <td align="center"><Koma v-show="field[3][0] != 0" /></td>
        <td align="center"><Koma v-show="field[3][1] != 0" /></td> 
        <td align="center"><Koma v-show="field[3][2] != 0" /></td> 
        <td align="center"><Koma v-show="field[3][3] != 0" /></td> 
        <td align="center"><Koma v-show="field[3][4] != 0" /></td>
      </tr>
      <tr>
        <td align="center"><Koma v-show="field[4][0] != 0" /></td>
        <td align="center"><Koma v-show="field[4][1] != 0" /></td> 
        <td align="center"><Koma v-show="field[4][2] != 0" /></td> 
        <td align="center"><Koma v-show="field[4][3] != 0" /></td> 
        <td align="center"><Koma v-show="field[4][4] != 0" /></td>
      </tr>
    </table>

  </div>
</template>

<script>
import Koma from "../components/Koma.vue"
export default {
  name: 'Home',
  components: {
    Koma
  },
  data(){
    return{
      field:[["a","b","c","d","e"],
             [0,0,0,0,0],
             [0,0,0,0,0],
             [0,0,0,0,0],
             ["f","g","h","i","j"]]
    
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







