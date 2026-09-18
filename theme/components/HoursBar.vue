<script setup lang="ts">
const props = withDefaults(defineProps<{
  done?: number
  session?: number
  goal?: number
}>(), { done: 0, session: 0, goal: 20 })

const clamp = (value: number) => Math.min(Math.max(value, 0), props.goal)
const donePercent = () => (clamp(props.done) / props.goal) * 100
const sessionPercent = () => (clamp(props.done + props.session) - clamp(props.done)) / props.goal * 100
</script>

<template>
  <div class="hours-bar">
    <div class="track">
      <div class="done" :style="{ width: `${donePercent()}%` }" />
      <div class="session" :style="{ width: `${sessionPercent()}%` }" />
    </div>
    <div class="legend">
      <span>{{ done }} ч пройдено</span>
      <span v-if="session">+{{ session }} ч этот урок</span>
      <span>цель {{ goal }} ч</span>
    </div>
  </div>
</template>

<style scoped>
.hours-bar {
  width: 100%;
}

.track {
  display: flex;
  height: 6px;
  border-radius: 999px;
  overflow: hidden;
  background: var(--lesson-line);
}

.done {
  background: var(--lesson-ink);
}

.session {
  background: var(--lesson-accent);
}

.legend {
  display: flex;
  justify-content: space-between;
  margin-top: 0.35em;
  font-size: 0.85em;
  color: var(--lesson-muted);
}
</style>
