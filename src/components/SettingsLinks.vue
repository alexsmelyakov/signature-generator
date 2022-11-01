<script lang="ts" setup>
import { gmailSettingsUrl, yandexMailSettingsUrl } from '@/config'

import GmailIcon from '@/assets/icons/gmail-icon.svg'
import YandexMailIcon from '@/assets/icons/yandex-mail-icon.svg'
</script>

<template>
  <div class="settings-links">
    <h3 class="settings-links__title">Настроить подпись</h3>
    <div class="settings-links__icons">
      <a :href="gmailSettingsUrl" target="_blank">
        <span class="settings-links__icon">
          <img
            :src="GmailIcon"
            class="settings-links__icon-img settings-links__icon-img_gmail"
          />
        </span>
      </a>

      <a :href="yandexMailSettingsUrl" target="_blank">
        <span class="settings-links__icon">
          <img :src="YandexMailIcon" class="settings-links__icon-img" />
        </span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.settings-links__title {
  font-weight: normal;
}

.settings-links__icons {
  display: grid;
  align-items: center;
  justify-content: flex-start;
  grid-auto-flow: column;
  gap: 1rem;
}

.settings-links__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: rgb(72, 113, 251);
  }
}

.settings-links__icon-img {
  max-width: 100%;

  &_gmail {
    padding: 4px;
  }
}
</style>
