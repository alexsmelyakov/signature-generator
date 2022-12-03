<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

type Props = {
  modelValue?: string
  label: string
  optional?: boolean
  required?: boolean
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  optional: false,
  required: false,
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <div class="text-field">
    <label class="text-field__label">
      {{ props.label }}
      <template v-if="props.required"> * </template>
      <template v-if="props.optional && !props.required">
        (не обязательно)
      </template>
    </label>
    <input
      class="text-field__input"
      v-bind="$attrs"
      type="text"
      :placeholder="placeholder"
      v-model="value"
    />
  </div>
</template>

<style lang="scss" scoped>
.text-field__label {
  display: inline-block;
  margin: 0 0 8px;
}

.text-field__input {
  font-size: 100%;
  display: block;
  width: 100%;
  margin: 0;
  padding: 1rem;
  border: 1px solid transparent;
  background-color: rgba(0, 0, 0, 0.025);
  border-radius: 10px;
  outline: none;

  &:focus {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  &::placeholder {
    font-style: italic;
    font-size: 85%;
  }
}
</style>
