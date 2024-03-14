<template>
  <div>
    <label class="label" for="emailInput">Email address</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input form-control"
      inputmode="email"
      type="email"
      id="emailInput"
      name="email"
      required="true"
    />
  </div>
</template>

<script setup lang="ts">
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>
