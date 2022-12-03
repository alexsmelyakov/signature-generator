<script lang="ts" setup>
import { supportLink } from './config';
</script>

<template>
  <div class="support">
    <a :href="supportLink" class="support__link" target="_blank">
      Сообщить об ошибке
    </a>
  </div>
</template>

<style lang="scss" scoped>
.support {
  font-size: 14px;
}

.support__link {
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid transparent;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
    border-bottom-color: rgba(0, 0, 0, 0.25);
  }
}
</style>
