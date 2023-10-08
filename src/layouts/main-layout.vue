<template>
   <v-sheet class="mx-auto panel fill-height">
    
  <v-card
        width="100%"
        height="100%"
        :elevation="6"
      > 
<char-box />
  </v-card>
   </v-sheet>
</template>

<script>
import charBox from './chatbox.vue'

export default{
  components:{
    charBox
  }
}

</script>