<script setup lang="ts">
defineProps<{
  minutes: number | string
  reps?: number | string
  unit?: string
  goal?: string
}>()
</script>

<template>
  <div class="slidev-layout drill">
    <header>
      <div class="lesson-eyebrow">Упражнение</div>
      <Timebox :minutes="minutes" :reps="reps" :unit="unit" />
    </header>

    <div class="steps">
      <slot />
    </div>

    <figure class="reference">
      <slot name="reference" />
    </figure>

    <footer v-if="goal">
      <span class="label">Критерий выполнения:</span> {{ goal }}
    </footer>
  </div>
</template>

<style scoped>
.drill {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.7em;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.steps :deep(h1) {
  font-size: 1.6em;
  margin-bottom: 0.3em;
}

.reference {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 0;
  margin: 0;
}

.reference:empty {
  display: none;
}

.reference :deep(p) {
  display: contents;
}

.reference :deep(img) {
  max-height: 100%;
  max-width: 100%;
  width: auto;
}

footer {
  margin-top: auto;
  border-top: 1px solid var(--lesson-line);
  padding-top: 0.5em;
  font-size: 0.92em;
}

footer .label {
  color: var(--lesson-muted);
}
</style>
