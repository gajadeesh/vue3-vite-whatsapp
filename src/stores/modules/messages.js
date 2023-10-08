export const msgStore = {
    state: () => {
        return {
            messages: [
                {
                  from: "John Doe",
                  message: `Sure, I'll see you later.`,
                  time: "10:42am",
                  avatar: ""
                },
                {
                  from: "John Doe",
                  message: "Yeah, sure. Does 1:00pm work?",
                  time: "10:37am",
                  avatar: "https://via.placeholder.com/50"
                }
              ],
            sendMessages: [],
        }
    },
    getters: {
        getMessages: (state) => state.sendMessages
    },
    actions: {
        async addMessage(msg) {
           await this.sendMessages.push(msg)
        },
        async getAllMessages() {
          await Object.assign(this.sendMessages,this.messages);
        },
        async resetMessages(){
          this.sendMessages.length = 2
        }


    },


}