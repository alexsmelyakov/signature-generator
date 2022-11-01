<script setup lang="ts">
import { reactive } from 'vue'
import SignaturePreview from '@/components/SignaturePreview.vue'
import ProfileForm from '@/components/ProfileForm.vue'

import type { Profile } from '@/types'

const model = reactive<Profile>({
  name: '',
  email: '',
  position: '',
  phone: '',
})
</script>

<template>
  <h1 class="title">Генератор подписи</h1>
  <ProfileForm class="form" v-model.sync="model" />

  <SignaturePreview :model="model" />
</template>

<style scoped>
.title {
  font-size: 32px;
  margin: 0 0 4rem;
}
.form {
  margin-bottom: 3rem;
}
</style>
