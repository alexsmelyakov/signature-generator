<script lang="ts" setup>
import { computed } from 'vue'

type Props = {
  modelValue?: string
  label: string
  optional?: boolean
  required?: boolean
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
    <input class="text-field__input" type="text" v-model="value" />
  </div>
</template>

<style lang="scss" scoped>
.text-field {
  text-align: left;
}

.text-field__label {
  display: inline-block;
  margin: 0 0 8px;
}

.text-field__input {
  font-size: 100%;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.75rem 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
