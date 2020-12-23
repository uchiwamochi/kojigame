<template>
  <div class="signin">

    <h1>Welcome to SLIPE!</h1>
      <img class="img" src="../assets/pazzle.png" width="200" /><br>
    <a1>オンライン対戦にはログインが必要です</a1>
    <table class="table" align="center" border="0">
        <tr>
          <th>メールアドレス：</th>
        </tr>
        <tr>
          <td><input type="email" v-model="mailaddress"/></td>
        </tr>
        <tr>
          <th>パスワード：</th>
        </tr>
        <tr>
          <td><input type="password" v-model="password"/></td>
        </tr>
      </table>
      <button @click="login">ログイン</button>
      <p>新しいアカウントを作成する場合はこちら
        <router-link to="/signup">新規登録</router-link>
      </p>
  </div>
</template>

<script>
import firebase from "firebase"
import AssetsImage from "@/assets/pazzle.png";

export default {
  data() {
    return {
      assetsImage: AssetsImage,
      assetsImage_NG: "../assets/pazzle.png",
      staticImage: "/pazzle.png"
    };
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.mailaddress, this.password)
      .then(function(){
           alert("ログインしました　もう一度Remort VSをクリックして下さい")
      })
      .catch(function(){
          alert("メールアドレスかパスワードが間違っています")
      })
    }
  }
}
</script>

<style scoped>
button{
    background-color:#9bddbf;
    border-radius: 100vh;
}
h1{
    color: #42b983;
}

</style>