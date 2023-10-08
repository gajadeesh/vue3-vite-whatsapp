<template>
<v-toolbar color="secondary">
      <menu-btn icon="mdi-plus" className="px-8" color="blue-grey-darken-2" variant="text" location="top" :items="pinItems" />

     <v-text-field
        ref="msg"
        density="compact"
        variant="solo"
        flat
        rounded="lg"
        label="  Type a message"
        prepend-inner-icon="mdi-emoticon-outline"
        @keydown.enter="msgSend"
        single-line
        hide-details
      ></v-text-field>

       <btn icon="mdi-microphone" color="blue-grey-darken-2" variant="text"></btn>
    </v-toolbar>
</template>

<script>
import { defineComponent } from "vue";
import btn from "../elements/btn.vue";
import MenuBtn from "../elements/menu-btn.vue";
export default defineComponent({
  components: { btn, MenuBtn },
  data() {
    return {
      pinItems: [
        { title: "Document", icon: "mdi-file-document", color: "purple-darken-1", size:"large" },
        { title: "Photo & Videos" , icon: "mdi-image-multiple" , color: "indigo-accent-4", size:"large" },
        { title: "Camera",icon: "mdi-camera" ,color: "pink-darken-1", size:"large" },
        { title: "Contact" ,icon: "mdi-account",  color: "purple-darken-1", size:"large"},
        { title: "Poll" ,icon: "mdi-poll", color: "purple-darken-1", size:"large"},
        { title: "New Sticker",icon: "mdi-star-half-full", color: "teal-lighten-1", size:"large" }
      ],
    };
  },
  methods:{
    msgSend(e){
        this.$emit('msgSend', e)
        this.$refs.msg.reset();

    }
  }
});
</script>
