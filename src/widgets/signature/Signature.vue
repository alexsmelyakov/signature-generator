<script lang="ts" setup>
import { computed } from 'vue';

import { Button, Card } from '@/shared';

import { companyName, logoUrl, websiteAddress, websiteUrl } from './config';
import { useSignature } from './lib';
import { SignaturePreview } from './ui';

import type { Profile } from '@/types';

const props = defineProps<{
  model: Profile;
}>();

const signature = computed(() =>
  useSignature(props.model, {
    companyName,
    logoUrl,
    websiteAddress,
    websiteUrl,
  })
);

const copy = () => {
  try {
    const blob = new Blob([signature.value], {
      type: 'text/html',
    });
    navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
  } catch (error) {
    console.error(error);
  }
};

const copyAsHTML = () => {
  try {
    navigator.clipboard.writeText(signature.value);
  } catch (error) {
    console.error(error);
  }
};

const shouldDisplayCopy = computed<boolean>(() =>
  Boolean(props.model.email && props.model.name && props.model.position)
);
</script>

<template>
  <Card class="preview-card">
    <SignaturePreview :text="signature" />

    <div class="preview-card__actions">
      <Button v-if="shouldDisplayCopy" class="copy-button" @click="copy">
        Копировать
      </Button>

      <Button v-if="shouldDisplayCopy" class="copy-button" @click="copyAsHTML">
        Копировать как HTML
      </Button>
    </div>
  </Card>
</template>

<style lang="scss">
.preview-card__actions {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.copy-button {
  & + & {
    margin-left: 0.5rem;
  }
}

.preview-card {
  margin-bottom: 2rem;

  @include respond-to(768px) {
    margin-bottom: 3rem;
  }
}
</style>
