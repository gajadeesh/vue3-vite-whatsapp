<template>
  <v-btn data-test="btn" :icon="icon" :color="color" :variant="variant" :size="size" />
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
props: ['icon','variant','size', "color"],
 
})
</script>