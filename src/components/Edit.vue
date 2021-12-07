<template>
  <div class="container">
    <h2>회원수정</h2>  
    <input type="text" v-model="name" /><br><br>
    <input type="text" v-model="id" /><br><br>
    <input type="password" v-model="pwd" /><br><br>
    <input type="text" v-model="tel" /><br><br>
    <input type="text" v-model="job" /><br><br>
    <div>
      <input type="radio" value="여자" v-model="gender"> 여자
      <input type="radio" value="남자" v-model="gender"> 남자
    </div> <br>
    <div>
      <input type="radio" value="테니스" v-model="hobby"> 테니스
      <input type="radio" value="영화감상" v-model="hobby"> 영화감상
      <input type="radio" value="여행" v-model="hobby"> 여행
    </div>
    <button @click="formSubmit()">회원수정</button>
    <h3> {{data}} </h3>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      id: '',
      pwd: '',
      tel: '',
      job: '',   
      hobby: false,
      gender: false,
      id_1: '',   
      };
   },
  created () {            // 컴포넌트가 생성될 때 실행
    this.id_1  = this.$route.params.id_1,      // 파라미터(primary key) 받음                      
    this.$http.post(`/api/data/${this.id_1}`)     // post 전송  
    .then((response) => {               // 정보를 가져와서 뿌려줌
      this.data = response.data;  
      this.name = this.data.name;
      this.id = this.data.id;
      this.pwd = this.data.pwd;
      this.tel = this.data.tel;          
      this.job = this.data.job;
      this.gender = this.data.gender;              
      this.hobby = this.data.hobby;                                        
    })
  },

  methods: {
    formSubmit () {     // 버튼 클릭
      this.$http.post(`/api/edit/${this.id_1}`, {  
        name: this.name,
        id: this.id,
        pwd: this.pwd,
        tel: this.tel,
        job: this.job,   
        gender: this.gender,
        hobby: this.hobby,
      })
      .then((response) => {
        this.output = response.data
        this.$router.push({ name: 'index_1', params: {id_1: this.id_1}})
      })
      .catch((error) => {
        this.output = error
      })
    }
  }
}
</script>