

export const userAuth = {
    state : () => {
        return {
            admin: {
                username: "admin",
                password: "admin"
            },
            isAdmin: false,
            loading: false
        }
    },
    getters: {
        isAuthenticated: (state) => state.isAdmin
    },
    actions: {
        login(credendial) {
            if (!this.isAuthenticated) {
                this.loading = true
                setTimeout(() => {
                   if (credendial.username && credendial.password) {
                    if ((this.admin.username === credendial.username) && (this.admin.password === credendial.password)) {
                        this.isAdmin = true
                        this.loading = false
                        this.router.push('/home')
                    } else {
                        this.isAdmin = false
                        this.loading = false
                        throw new Error('User is not authenticated!')
                    }
                } else {
                    this.isAdmin = false
                    this.loading = false
                    throw new Error('Please enter the credentials!')
                } 
                }, 3000);
                
            }

        }
    }

}