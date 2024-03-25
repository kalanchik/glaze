<template>
    <div :style="{ marginTop: `${size}px` }">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VSpacing',
    props: {
      size: {
        type: Number,
        default: 16,
      },
    },
  };
  </script>