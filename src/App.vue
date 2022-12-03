<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

import { defaultValues } from '@/config';
import { ProfileForm, SettingsLinks, Signature, Support } from '@/widgets';

import type { Profile } from '@/types';

const model = useLocalStorage<Profile>('profile', {
  ...defaultValues,
});
</script>

<template>
  <div class="app">
    <h1 class="title">Генератор подписи</h1>

    <ProfileForm class="form" v-model="model" />

    <Signature :model="model" />

    <SettingsLinks />

    <Support class="support" />
  </div>
</template>

<style lang="scss" scoped>
.app {
  padding: 2rem 1rem;

  @include respond-to(768px) {
    padding: 2rem;
  }
}

.title {
  font-size: 32px;
  margin: 0 0 2rem;

  @include respond-to(768px) {
    margin: 0 0 4rem;
  }
}

.form {
  margin-bottom: 2rem;

  @include respond-to(768px) {
    margin-bottom: 3rem;
  }
}

.support {
  margin-top: 4rem;
}
</style>
