<template>

<div class="signout">
  <img class="img" src="../assets/logo.png" />
  <h3>ログアウトしますか？</h3>
  <br><button class="button" @click="signout">ログアウト</button>
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
    signout() {
      firebase.auth().signOut().then(function(){
          alert("ログアウトしました");
        })
        .catch(function(error) {
          alert(error);
        });
    }
  }
}
</script>

<style scoped>
.signout{
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
.button{
    background-color:#9bddbf;
    border-radius: 100vh;
}
</style>