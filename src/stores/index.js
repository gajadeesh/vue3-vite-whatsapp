import { defineStore } from 'pinia';
import { userStore } from './modules/users'
import { userAuth } from './modules/auth'
import { msgStore } from './modules/messages';

export const useUsersStore = defineStore('users', userStore);
export const useAuthStore = defineStore('auth', userAuth);
export const useMsgStore = defineStore('msg', msgStore);


