<template>
  <v-progress-linear
    v-if="loading"
    color="primary"
    indeterminate
  ></v-progress-linear>
    <v-list-item-group bg-color="white">
    <template v-for="(n,i) in items" :key="n">
      <v-list-item 
      height="72"
      :title="n.name.first + 'n' +n.name.last"
      :subtitle="n.historyShort"
      :prepend-avatar="n.picture.thumbnail"
      @click="$emit('menuActionClicked', n)"
      >
        <template v-slot:append>
        <menu-btn
          size="small"
          variant="text"
          icon="mdi-chevron-down"
          :items="menuBtnItems"
          location="end"
        />
      </template>
      </v-list-item>
      <v-divider
        class="ml-12"
          v-if="i < items.length - 1"
          :key="`${i}-divider`"
      ></v-divider>
    </template>
  </v-list-item-group>
  <!-- <v-list lines="two">
    <v-list-item
      v-for="n in items"
      :key="n"
      :title="n.name.first + 'n' +n.name.last"
      :subtitle="n.historyShort"
      :prepend-avatar="n.picture.thumbnail"
      @click="$emit('menuActionClicked', n)"
    >
      <template v-slot:append>
        <menu-btn
          size="small"
          variant="text"
          icon="mdi-chevron-down"
          :items="menuBtnItems"
          location="end"
        />
      </template>
      <v-divider class="mt-5"/>
    </v-list-item>
    
  </v-list> -->

</template>

<script>
import Btn from "@/components/elements/btn.vue";
import MenuBtn from "@/components/elements/menu-btn.vue";
import { defineComponent, toRef } from "vue";
export default defineComponent({
  props: {
    loading: Boolean,
    items: {
      type: Array,
    },
  },

  components: {
    Btn,
    MenuBtn,
  },
  data() {
    return {
      menuBtnItems: [
        { title: "Archive chat" },
        { title: "Mute notifications" },
        { title: "Delete chat" },
        { title: "Pin chat" },
        { title: "Mark as unread" },
        { title: "block" },
      ],
    };
  },
});
</script>