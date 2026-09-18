<template>
  <div class="slidev-layout checkpoint">
    <div class="list">
      <slot />
    </div>

    <aside class="fallback">
      <div class="lesson-eyebrow">Если критерий не выполнен</div>
      <slot name="fallback" />
    </aside>
  </div>
</template>

<style scoped>
.checkpoint {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.8em;
}

.list {
  flex: 1;
  min-height: 0;
}

.list :deep(h1) {
  font-size: 1.6em;
  margin-bottom: 0.5em;
}

.list :deep(ul) {
  list-style: none;
  padding-left: 0;
}

.list :deep(li) {
  position: relative;
  padding-left: 1.7em;
  margin-bottom: 0.5em;
}

.list :deep(li)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.22em;
  width: 1em;
  height: 1em;
  border: 1.5px solid var(--lesson-ink);
  border-radius: 3px;
}

.fallback {
  border-top: 1px solid var(--lesson-line);
  padding-top: 0.6em;
  font-size: 0.92em;
  color: var(--lesson-muted);
}
</style>
