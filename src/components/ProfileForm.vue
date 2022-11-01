<script lang="ts" setup>
import { computed } from 'vue'

import { defaultValues } from '@/config'
import TextField from './TextField.vue'

import type { Profile } from '@/types'

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
      name="name"
      label="Имя"
      :placeholder="`например, ${defaultValues.name}`"
      required
      v-model="model.name"
    />

    <TextField
      name="email"
      label="Электронная почта"
      :placeholder="`например, ${defaultValues.email}`"
      required
      v-model="model.email"
    />

    <TextField
      label="Должность"
      :placeholder="`например, ${defaultValues.position}`"
      required
      v-model="model.position"
    />

    <TextField
      name="phone"
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
