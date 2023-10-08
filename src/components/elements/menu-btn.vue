<template>
  <v-menu data-test="menu" :location="location">
    <template v-slot:activator="{ props }">
      <v-icon
        data-test="icon"
        :icon="icon"
        :color="color"
        :variant="variant"
        :class="className"
        :size="size"
        v-bind="props"
      ></v-icon>
    </template>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" data-test="items">
         <template v-if="item.icon" v-slot:prepend>
        <v-icon :icon="item.icon" data-test="item-icon" :color="item.color" :size="item.size" class="pa-0" ></v-icon>
         </template>
        <v-list-item-title data-test="item-title">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["icon", "variant", "size","color","className", "items", "location"],
});
</script>