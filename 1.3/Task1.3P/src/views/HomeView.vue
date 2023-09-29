<script setup>
  import { ref } from 'vue'
  const finished = ref(false)

</script>

<template>
  <main>
    <h1>Welcome to my portfolio site</h1> 
    Here you can learn more about who i am and my interest in the IT field and where i would like it to take me. I have also included information about the Units i have completed during my studies.
    <br><br><br>
    <div>
      <button @click="finished = !finished">Finished viewing?</button>

      <h3 v-if="finished">Thank you for taking the time to learn about me!</h3>
      <h3 v-else>Please continue to look around until you are done</h3>
    </div>
  
  </main>

  

</template>
