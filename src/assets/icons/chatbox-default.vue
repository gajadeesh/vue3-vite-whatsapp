<template>
    <v-sheet class="fill-height mx-auto">
    <chatbox-default />
    <v-row>
        <v-col align-self="center">
            <div class="text-h5 primary-text">Whatsapp Web</div>
            <small class="text-caption text-medium-emphasis">Send and receive messages without keeping your phone online.<br />Use WhatsApp on up to 4 linked devices and 1 phone at the same time</small>
        </v-col>
    </v-row>
    <v-row >
        <v-col align-self="center">
            <v-icon icon="mdi-lock" size="sm" color="blue-grey-lighten-1"/>
            <small class="text-disabled"> Your personal messsages are end to end encrypted</small>
        </v-col>
    </v-row>
    </v-sheet>
</template>

<script>
import ChatboxDefault from '@/assets/images/chatbox-default.svg'
import { defineComponent } from 'vue'
export default defineComponent({
    components:{
        ChatboxDefault
    }
})
</script>