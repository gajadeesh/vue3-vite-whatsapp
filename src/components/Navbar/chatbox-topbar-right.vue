<template>
 <v-app-bar
      flat
      
    >
      <v-toolbar class="px-3" color="secondary">
      <v-avatar color="grey"  :image="avatarImage"/>

      <v-toolbar-title>{{fullname}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify" color="blue-grey-darken-2"></v-btn>

      <menu-btn variant="text" icon="mdi-dots-vertical" color="blue-grey-darken-2" :items="menuBtnItems" location="end"/>
    </v-toolbar>
    </v-app-bar>
  
</template>

<script>
import { defineComponent } from 'vue'
import menuBtn from '@/components/elements/menu-btn.vue'
export default defineComponent({
  props:{
    selectedUser: {
      type: Object,
    },
  },
  computed:{
    fullname(){
      return this.selectedUser.hasOwnProperty('name') ? this.selectedUser.name.first+ ' '+ this.selectedUser.name.last : ''
    },
    avatarImage(){
      return this.selectedUser.hasOwnProperty('picture') ? this.selectedUser.picture.thumbnail : ''
    }
  },
  components: { menuBtn },
    data() {
    return {
      menuBtnItems:[
        { title: 'Contact info' },
        { title: 'Select messages' },
        { title: 'Close chat' },
        { title: 'Mute notifications' },
        { title: 'Disappearing messages' },
        { title: 'Clear chat' },
        { title: 'Delete chat' },
        { title: 'Report' },
        { title: 'Block' }
      ]
    }
  }
})
</script>