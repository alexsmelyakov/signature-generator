<script setup lang="ts">
import { computed, reactive } from 'vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import ProfileForm from '@/components/ProfileForm.vue'
import SignaturePreview from '@/components/SignaturePreview.vue'
import SettingsLinks from '@/components/SettingsLinks.vue'
import { useSignature } from '@/composables'
import { defaultValues } from '@/config'

import type { Profile } from '@/types'

const model = reactive<Profile>({
  name: defaultValues.name,
  email: defaultValues.email,
  position: defaultValues.position,
  phone: '',
})

const signature = computed(() => useSignature(model))

const copy = () => {
  try {
    const blob = new Blob([signature.value], {
      type: 'text/html',
    })
    navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })])
  } catch (error) {
    console.error(error)
  }
}

const shouldDisplayCopy = computed<boolean>(() =>
  Boolean(model.email && model.name && model.position)
)
</script>

<template>
  <h1 class="title">Генератор подписи</h1>
  <ProfileForm class="form" v-model="model" />

  <Card class="preview-card">
    <SignaturePreview :text="signature" />
    <Button v-if="shouldDisplayCopy" class="copy-button" @click="copy">
      Копировать
    </Button>
  </Card>

  <SettingsLinks />
</template>

<style scoped>
.title {
  font-size: 32px;
  margin: 0 0 4rem;
}
.form {
  margin-bottom: 3rem;
}

.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.preview-card {
  margin-bottom: 3rem;
}
</style>
