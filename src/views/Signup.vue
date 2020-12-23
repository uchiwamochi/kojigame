<template>
  <div class="signup">
    <h2>Signup</h2>
    <img class="img" src="../assets/logo.png" width="250" />
    <table class="table" align="center" border="0">
        <tr>
          <th>メールアドレス：</th>
        </tr>
        <tr>
          <td ><input type="email" v-model="mailaddress"/></td>
        </tr>
        <tr>
          <th>パスワード：</th>
        </tr>
        <tr>
          <td><input type="password" v-model="password"/></td>
        </tr>
      </table>
      <button @click="signUp">登録</button>
  </div>
</template>

<script>
import firebase from "firebase"
import AssetsImage from "@/assets/logo.png";


export default {
  data() {
    return {
      assetsImage: AssetsImage,
      assetsImage_NG: "../assets/logo.png",
      staticImage: "/logo.png"
    };
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.mailaddress, this.password)
      .then(
        // 成功時の処理
        alert('登録が完了しました、もう一度Remort VSをクリックして下さい')
      )
      .catch(
        // エラー時の処理 
        
      )
    }
  }
}
</script>


