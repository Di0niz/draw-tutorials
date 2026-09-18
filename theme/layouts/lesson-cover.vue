<script setup lang="ts">
defineProps<{
  lesson?: string | number
  skill?: string
  sessionHours?: number
  doneHours?: number
}>()
</script>

<template>
  <div class="slidev-layout lesson-cover">
    <div class="lesson-eyebrow">
      <span v-if="lesson">Урок {{ lesson }}</span>
      <span v-if="skill"> · {{ skill }}</span>
    </div>

    <div class="cover-body">
      <slot />
    </div>

    <HoursBar v-if="doneHours != null" :done="doneHours" :session="sessionHours" />
  </div>
</template>

<style scoped>
.lesson-cover {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cover-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cover-body :deep(h1) {
  font-size: 2.6em;
  margin-bottom: 0.3em;
}

.cover-body :deep(p) {
  font-size: 1.05em;
  color: var(--lesson-muted);
  max-width: 34ch;
}
</style>
