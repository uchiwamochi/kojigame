<template>
<div>
  <a1>ログアウトしますか？</a1>
  <button @click="signout">ログアウト</button>
</div>
</template>




<script>
import firebase from "firebase"

export default {
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