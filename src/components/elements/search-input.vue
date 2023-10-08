<template>
  <!-- <v-responsive class="ma-2 pl-3"> -->
    <v-text-field
      v-model="search"
      data-test="search"
      @input="$emit('searchTypedEmit', $event)"
      variant="solo-filled"
      :label="placeholder"
      clearable
      density="compact"
      rounded="lg"
      color="blue-grey-darken-2"
      class="ma-2"
      flat
      single-line
      hide-details
      prepend-inner-icon="mdi-magnify"
      @click:clear="$emit('resetEmit')"
    />
  <!-- </v-responsive> -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props:{
    placeholder: String
  },
   data () {
    return {
      search: ''
    }
  },
});
</script>