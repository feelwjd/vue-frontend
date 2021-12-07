
<template>
  <div>
    <h2> <a href='/'> 회원수정 / 회원탈퇴 </a> </h2>
    <ul>
      <router-link :to="`/edit/${id_1}`">회원수정</router-link><br>
      <router-link :to="`/delete/${id_1}`"> 회원탈퇴</router-link>  
    </ul>    

  </div>
</template> 

<script> 
  export default { 
    data(){ 
      return { 
        id_1: '' ,
       } 
    }, 
    
    created(){   // 콤포넌트 생성하면서 제일 먼저 실행
      // 파라미터(primary key) 전송 받음
      this.id_1  = this.$route.params.id_1
    } 
  } 
</script>
