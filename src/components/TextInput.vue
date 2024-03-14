<template>
  <div>
    <label class="label" for="text">{{ props.label }}</label>
    <textarea
      v-if="props.area"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input form-control area"
      inputmode="text"
      id="text"
      :name="props.label"
      required="true"
      style="height: 100px"
    ></textarea>
    <input
      v-else
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input form-control"
      inputmode="text"
      type="text"
      id="text"
      :name="props.label"
      required="true"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  label: {
    type: String,
    required: true,
  },
  area: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue']);
</script>

<style>
@media screen and (min-height: 576px) {
  .text-input {
    &.area {
      padding-bottom: 4rem;
    }
  }
}
</style>
