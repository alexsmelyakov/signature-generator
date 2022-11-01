<script lang="ts" setup>
type Props = {
  text: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="signature-preview">
    <div ref="preview" v-html="props.text" />
  </div>
</template>

<style lang="scss" scoped>
.signature-preview {
  position: relative;
  padding: 2rem;
  margin: 0 auto;
}
</style>
