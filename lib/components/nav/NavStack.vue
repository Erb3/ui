<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;

  :deep(.btn) {
    position: relative;
    width: 100%;

    &.selected {
      background-color: var(--color-button-bg);
      font-weight: bold;
    }
  }
}
</style>
