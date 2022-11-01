<template>
  <button class="button" v-bind="$attrs"><slot /></button>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;

  &:hover {
    color: rgba(0, 0, 0, 0.75);
    background: rgba(0, 0, 0, 0.05);
  }
}
</style>
