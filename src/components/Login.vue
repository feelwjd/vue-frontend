<template>
<div>
  <h1> 로그인 </h1>
  <p><input type="text" v-model="id" /></p>
  <p><input type="password" v-model="pwd" /></p>
  <button @click="formSubmit()">로그인</button>
</div>
</template> 

<script>
export default {
  name: 'Login',
  data() {
    return {
    id: '',
    pwd: '',
    id_1:''
    };
 },

 methods: {
   formSubmit () {     
     this.$http.post('/api/login', {  
       id: this.id,
       pwd: this.pwd,
     })
    .then((response) => {
      this.output = response.data
      if(this.output == -1) {
        alert('로그인 실패하였어요')  // 스크립트            
        this.$router.push({ name: 'index'})
      }
      else {
        alert(this.output.name + ' 님 로그인 하였습니다.')  // 스크립트
        this.id_1 = this.output.id_1                        // primary key

        // 페이지 이동 및 파라메터(primary key) 전송
        this.$router.push({ name: 'index_1', params: {id_1: this.id_1}})
      }
    })
    .catch((error) => {
      this.output = error
    })
  }
  }
}
</script>