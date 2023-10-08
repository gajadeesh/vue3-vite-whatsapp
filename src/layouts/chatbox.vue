<template>
  <v-layout class="rounded rounded-md fill-height">
    <v-navigation-drawer :rail="false" width="420" permanent>
      <template v-slot:prepend>
        <chatbox-topbar-left />
        <v-row>
          <v-col sm="12">
            <search-input
              data-test="search-input"
              @searchTypedEmit="searchTypedUser"
              @resetEmit="resetSearch"
              placeholder="Search or start new chat"
            />
          </v-col>
        </v-row>
        <v-divider color="secondery" />
      </template>

      <user-list
        :items="getFilteredUsers"
        :loading="getLoading"
        @menuActionClicked="menuClicked"
      />
    </v-navigation-drawer>

    <v-container fluid v-if="selectedUser.hasOwnProperty('name')" class="pa-0">
      <chatbox-topbar-right :selectedUser="selectedUser" />
      <v-main align="center" style="height: 100vh">
        <chat-message-box :messages="getMessages" :selectedUser="selectedUser"/>
      </v-main>
      <v-footer absolute inset app height="65" class="ma-0 pa-0">
        <chatbox-bottom-right @msgSend="msgSend" />
      </v-footer>
    </v-container>
    <v-main align="center" v-else>
      <chatbox-default />
    </v-main>
  </v-layout>
</template>

<script>
import SearchInput from "@/components/elements/search-input.vue";
import ChatboxTopbarLeft from "@/components/Navbar/chatbox-topbar-left.vue";
import btn from "@/components/elements/btn.vue";
import UserList from "@/layouts/user-list.vue";
import { useUsersStore, useMsgStore } from "@/stores";
import { storeToRefs } from "pinia";
import { defineAsyncComponent, defineComponent, onMounted } from "vue";
import MenuBtn from "@/components/elements/menu-btn.vue";
import ChatboxBottomRight from "@/components/Navbar/chatbox-bottom-right.vue";
import ChatboxTopbarRight from "@/components/Navbar/chatbox-topbar-right.vue";
import ChatMessageBox from "./chat-message-box.vue";
import ChatboxDefault from "@/assets/icons/chatbox-default.vue";
export default defineComponent({
  setup() {
    const userStore = useUsersStore();
    const msgStore = useMsgStore();
    let { getLoading, getFilteredUsers } = storeToRefs(userStore);
    let { getMessages } = storeToRefs(msgStore);

    console.log(getMessages);
    onMounted(() => {
      userStore.getAllUsers();
      msgStore.getAllMessages();
    });

    return { userStore, msgStore, getLoading, getFilteredUsers, getMessages };
  },
  data() {
    return {
      selectedUser: {},
    };
  },
  components: {
    SearchInput,
    btn,
    UserList,
    MenuBtn,
    ChatboxBottomRight,
    ChatboxTopbarRight,
    ChatboxTopbarLeft,
    ChatMessageBox,
    ChatboxDefault,
  },
  methods: {
    searchTypedUser(e) {
      this.getUser = this.userStore.filterUser(e.target.value);
    },
    resetSearch() {
      this.userStore.resetUsers();
    },
    menuClicked(e) {
      this.msgStore.resetMessages();
      this.selectedUser = Object.assign({}, e);
    },
    currentTime() {
      const current = new Date();
      const date = `${current.getHours()}: ${current.getMinutes()} ${current.getHours() >= 12 ? 'pm' : 'am'}`;
      return date;
    },
    msgSend(e) {
      const object = {
        from: "You",
        message: e.target.value,
        time: this.currentTime(),
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
      };
      this.msgStore.addMessage(object);
    },
  },
});
</script>