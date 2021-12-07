<template>
  <div>
    <h2> 회원탈퇴 </h2>
    <h3> {{name}} 님 탈퇴하겠습니까 </h3>
    <ul>
     <button @click="formSubmit()">회원탈퇴</button><br>
      <router-link :to="`/index_1/${id_1}`">아니오</router-link>  
    </ul>    
    {{id_1}}
  </div>
</template> 

<script> 
  export default { 
  data(){ 
    return { 
      name: '',      
      id_1: '' ,
    } 
  }, 
    
  created(){ 
    this.id_1  = this.$route.params.id_1,
    this.$http.post(`/api/data/${this.id_1}`)     
    .then((response) => {                    // 이름만 가져옴
      this.name = response.data.name;   
    });           
  } ,
  methods: {
    formSubmit () {    
      this.$http.post(`/api/delete/${this.id_1}`)
      .then((response) => {
         this.output = response.data
         alert(this.name + '님 회원 탈퇴 되었습니다')
         this.$router.push({ name: 'index'})
      })
      .catch((error) => {
        this.output = error
      })
    }
  }
}
</script>
