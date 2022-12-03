<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss">
.card {
  position: relative;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0.25rem 0.5rem;
  border-radius: 10px 10px 0 0;
}
</style>
