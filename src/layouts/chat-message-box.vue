<template>
  <v-col style="max-height: 100%" class="chat-background fill-height overflow-y-auto">
    <v-list
      v-for="(item, i) in messages"
      :key="i"
      style="background: transparent"
    >
     <v-list-item  v-if="item.from != 'You'" >
      <template v-slot:prepend>
      <v-list-item-avatar>
          <v-avatar size="40">
            <v-img :src="selectedUser.picture.thumbnail"></v-img>
          </v-avatar>
        </v-list-item-avatar>
      
        <v-list-item-content class=" pa-4 rounded-lg pa-4 rounded-lg">
          <v-container fluid class="message-tile">
            <v-row>
              <v-col class="ma-0 pa-0">
                {{ item.message }} <label class="tiny text-disabled">{{item.time}}</label>
              </v-col>
            </v-row>
          </v-container>
        </v-list-item-content>
        </template>
        
      </v-list-item>
      <v-list-item  v-else >
         <template v-slot:append>
        <v-list-item-content class="pa-4 rounded-lg message-tile">
          {{ item.message }} <label class="tiny text-disabled">{{item.time}}</label></v-list-item-content
        >
        
        <v-list-item-avatar>
          <v-avatar size="40">
            <v-img :src="item.avatar"></v-img>
          </v-avatar>
        </v-list-item-avatar>
         </template>
      </v-list-item>
     
    </v-list>
  </v-col>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    messages: {
      type: Array,
    },
    selectedUser: Object
  }
});
</script>