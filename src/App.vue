<script setup lang="ts">
import { reactive } from 'vue'
import SignaturePreview from '@/components/SignaturePreview.vue'

import type { Profile } from '@/types'

const model = reactive<Profile>({
  name: '',
  email: '',
  position: '',
  phone: '',
})
</script>

<template>
  <h1>Генератор подписи</h1>
  <div>
    <label>Имя</label>
    <input type="text" v-model="model.name" />
  </div>

  <div>
    <label>Электронная почта</label>
    <input type="text" v-model="model.email" />
  </div>

  <div>
    <label>Должность</label>
    <input type="text" v-model="model.position" />
  </div>

  <div>
    <label>Номер телефона (не обязятельно)</label>
    <input type="text" v-model="model.phone" />
  </div>

  <SignaturePreview :model="model" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
