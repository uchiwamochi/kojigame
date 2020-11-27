<template>
  <div class="Home">
    <h1>VS</h1>
    <table align="center" border="1">
      <tr>
        <td align="center">

          <Koma1 v-show="field[0][0] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[0][0] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[0][1] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[0][1] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[0][2] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[0][2] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[0][3] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[0][3] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[0][4] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[0][4] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
      </tr>
      <tr>
        <td align="center">
          <Koma1 v-show="field[1][0] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[1][0] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[1][1] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[1][1] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[1][2] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[1][2] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[1][3] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[1][3] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[1][4] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[1][4] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
      </tr>
      <tr>
        <td align="center">
          <Koma1 v-show="field[2][0] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[2][0] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[2][1] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[2][1] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[2][2] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[2][2] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[2][3] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[2][3] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[2][4] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[2][4] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
      </tr>
      <tr>
        <td> 
          <Koma1 v-show="field[3][0] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[3][0] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[3][1] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[3][1] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[3][2] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[3][2] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[3][3] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[3][3] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[3][4] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[3][4] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
      </tr>
      <tr>
        <td align="center">
          <Koma1 v-show="field[4][0] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[4][0] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[4][1] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[4][1] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[4][2] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[4][2] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[4][3] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[4][3] == 'f' || 'g' || 'h' || 'i' || 'j'" />
        </td>
        <td align="center">
          <Koma1 v-show="field[4][4] == 'a' || 'b' || 'c' || 'd' || 'e' " />
          <Koma2 v-show="field[4][4] == 'f' || 'g' || 'h' || 'i' || 'j'" />
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




















