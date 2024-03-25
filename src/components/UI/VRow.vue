<template>
  <div
    class="v-row"
    :class="{
      'v-row--no-gutters': noGutters,
      [`v-row--align-${align}`]: align,
      [`v-row--justify-${justify}`]: justify,
    }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  noGutters: {
    type: Boolean,
  },
  align: {
    type: String,
  },
  justify: {
    type: String,
  },
});
</script>

<style>
.v-row {
  display: flex;
  flex-flow: row wrap;
}

.v-row--no-gutters {
  margin-left: 0;
  margin-right: 0;
}

.v-row--align-center {
  align-items: center;
}

.v-row--align-start {
  align-items: start;
}

.v-row--justify-center {
  justify-content: center;
}

.v-row--justify-beetwen {
  justify-content: space-between;
}

.v-row--justify-end {
  justify-content: end;
}
</style>
