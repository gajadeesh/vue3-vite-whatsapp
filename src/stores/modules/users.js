export const userStore = {
    state: () => {
        return {
            userList: [],
            filteredUserList: [],
            loading: false
        }
    },
    getters: {
        getLoading: (state) => state.loading,
        getFilteredUsers: (state) => state.filteredUserList
    },
    actions: {
        async addUser(user) {
            this.userList.push(user);
        },
        async getAllUsers() {
            this.loading = true
            await fetch(import.meta.env.VITE_API_URL + '/?results=20&nat=us').then(res => res.json()).then(data => {
                this.loading = false
                this.filteredUserList = data.results
                this.userList = data.results
            }).catch(function (err) {
                console.log('Get all users Error :', err.error);
            });


        },
        async filterUser(e) {
            this.loading = true
            await setTimeout(() => {
                this.loading = false
                this.filteredUserList = Object.assign({}, this.userList.filter(z => z.name.first.toLowerCase().includes(e.toLowerCase()) || z.name.last.toLowerCase().includes(e.toLowerCase())))
            }, 500);
            // await fetch(import.meta.env.VITE_API_URL + `/?results=20&nat=us&name=${e}`).then(res => res.json()).then(data => {
            //     this.loading = false
            //     this.filteredUserList = data.results
            // }).catch(function (err) {
            //     console.log('Get search users Error :', err.error);
            // });

        },
        async resetUsers(){
            this.filteredUserList = Object.assign({}, this.userList)
        }


    },


}