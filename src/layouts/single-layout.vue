<template>
  
    <v-sheet width="400" class="mx-auto">
      <v-card class="mx-auto px-8 py-8" max-width="400" rounded>
        <h1 class="text-center pb-4">Login</h1>
        <v-form v-model="form" @submit.prevent="login">
          <v-text-field
            v-model="username"
            :readonly="auth.loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Username"
            hint="admin"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :readonly="auth.loading"
            :rules="[required]"
            clearable
            label="Password"
            placeholder="Enter your password"
            hint="admin"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="!form"
            :loading="auth.loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
</template>

<script setup>
import { useAuthStore } from "@/stores";
import { ref } from "vue";

const auth = useAuthStore();
const username = ref("");
const password = ref("");
const form = ref(false);

function login() {
  if (!auth.isAuthenticated) {
    
     auth.login({
      username: username.value,
      password: password.value,
    });
  }
}
function required(v) {
  return !!v || "Field is required";
}
</script>