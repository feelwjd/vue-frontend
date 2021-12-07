<template>
  <div class="container">
    <h2>회원가입</h2>  
    <input type="text" placeholder="Input Name" v-model="name" /><br>
    <input type="text" placeholder="Input id" v-model="id" /><br>
    <input type="password" placeholder="Input pwd" v-model="pwd" /><br>
    <input type="text" placeholder="Input tel" v-model="tel" /><br>
    <input type="text" placeholder="Input jod" v-model="job" /><br>

    <div>
      <input type="radio" value="여자" v-model="gender"> 여자
      <input type="radio" value="남자" v-model="gender"> 남자
    </div> 
    
    <div>
      <input type="radio" value="테니스" v-model="hobby"> 테니스
      <input type="radio" value="영화감상" v-model="hobby"> 영화감상
      <input type="radio" value="여행" v-model="hobby"> 여행
    </div><br>

    <button @click="formSubmit()">회원가입</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {                  // 현재 페이지에서 사용할 데이터
    return {      
    name: '',
    id: '',
    pwd: '',
    tel: '',
    job: '',   
    hobby: false,
    gender: false,
    };
 },

 methods: {              // 메서드 들
   formSubmit () {       // 버튼 클릭
     this.$http.post('/api/register', {        // Post 전송
       name: this.name,                  // 데이터 전송하여 -> 데이터베이스에 저징
       id: this.id,
       pwd: this.pwd,
       tel: this.tel,
       job: this.job,   
       gender: this.gender,
       hobby: this.hobby,
     })
     .then((response) => {                      // 서버의 응답(회원정보) - 사용 안함
       this.response = response.data
       alert(this.name + '님 회원가입되었어요')  // 스크립트
       this.$router.push({ path: '/login' })        // 자동 라우팅(이동)
     })
     .catch((error) => {                         // 에러 발생시
       this.output = error
     })
   }
 }
}
</script>