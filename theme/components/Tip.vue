<script setup lang="ts">
defineProps<{
  source?: string
}>()
</script>

<template>
  <aside class="tip">
    <div class="label">Совет мастера</div>
    <div class="body"><slot /></div>
    <div v-if="source" class="source">{{ source }}</div>
  </aside>
</template>

<style scoped>
.tip {
  border-left: 2px solid var(--lesson-accent);
  background: rgba(180, 83, 10, 0.06);
  padding: 0.6em 0.8em;
  border-radius: 0 4px 4px 0;
}

.label {
  font-size: 0.8em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--lesson-accent);
  margin-bottom: 0.25em;
}

.body {
  line-height: 1.45;
}

.source {
  margin-top: 0.35em;
  font-size: 0.85em;
  color: var(--lesson-muted);
}
</style>
