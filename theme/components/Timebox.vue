<script setup lang="ts">
withDefaults(defineProps<{
  minutes: number | string
  reps?: number | string
  unit?: string
}>(), { unit: 'мин' })
</script>

<template>
  <span class="timebox">
    <carbon-timer />
    {{ minutes }} {{ unit }}<template v-if="reps"> × {{ reps }}</template>
  </span>
</template>

<style scoped>
.timebox {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  padding: 0.15em 0.65em;
  border: 1px solid var(--lesson-accent);
  border-radius: 999px;
  color: var(--lesson-accent);
  font-size: 0.85em;
  font-weight: 600;
  white-space: nowrap;
}
</style>
