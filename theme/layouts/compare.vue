<template>
  <div class="slidev-layout compare">
    <div class="heading">
      <slot />
    </div>

    <div class="columns">
      <section class="wrong">
        <div class="tag">Так не надо</div>
        <slot name="wrong" />
      </section>
      <section class="right">
        <div class="tag">Так надо</div>
        <slot name="right" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.compare {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.7em;
}

.heading :deep(h1) {
  font-size: 1.6em;
}

.heading :deep(p) {
  color: var(--lesson-muted);
}

.columns {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  min-height: 0;
}

section {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  min-height: 0;
}

section :deep(p) {
  display: contents;
}

section :deep(img) {
  flex: 1;
  min-height: 0;
  width: 100%;
  object-fit: contain;
  object-position: top;
}

.tag {
  font-size: 0.85em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.wrong .tag {
  color: var(--lesson-wrong);
}

.right .tag {
  color: var(--lesson-right);
}
</style>
