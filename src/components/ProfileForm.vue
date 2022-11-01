<script lang="ts" setup>
import { computed } from 'vue'

import type { Profile } from '@/types'
import TextField from './TextField.vue'

type Props = {
  modelValue: Profile
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="profile-form">
    <TextField
      label="Имя"
      placeholder="например, Николай Иванов"
      required
      v-model="model.name"
    />

    <TextField
      label="Электронная почта"
      placeholder="example@example.com"
      required
      v-model="model.email"
    />

    <TextField
      label="Должность"
      placeholder="например, ведущий инженер"
      required
      v-model="model.position"
    />

    <TextField
      label="Номер телефона"
      placeholder="в формате +7-xxx-xxx-xxxx"
      optional
      v-model="model.phone"
    />
  </div>
</template>

<style lang="scss" scoped>
.profile-form {
  display: grid;
  gap: 1.5rem;

  @include respond-to(768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
