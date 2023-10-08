<template>
  <v-toolbar color="secondary" class="px-3" clipped-left app>
    <v-avatar color="grey" image="https://cdn.vuetifyjs.com/images/john.jpg" />

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-account-group" color="blue-grey-darken-2"></v-btn>
    <v-btn variant="text" icon="mdi-circle-double" color="blue-grey-darken-2"></v-btn>
    <v-btn variant="text" icon="mdi-bank" color="blue-grey-darken-2"></v-btn>
    <v-btn variant="text" icon="mdi-comment-plus" color="blue-grey-darken-2"></v-btn>
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
          variant="text"
          icon="mdi-dots-vertical"
          color="blue-grey-darken-2"
          v-bind="props"
          location-strategy="connected"
        ></v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    
  </v-toolbar>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      items: [
        { title: "New Group" },
        { title: "New Community" },
        { title: "Archived" },
        { title: "Starred messages" },
        { title: "Select chats" },
        { title: "Settings" },
        { title: "Logout" },
      ],
    };
  },
});
</script>
