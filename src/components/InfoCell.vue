<template>
  <div>
    <div class="info__row">
      <p>
      {{ info.name }}:
    </p>
      <p>
        {{ info.value }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoCell",
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss"  scoped>
  .info__row {
    display: flex;
    justify-content: space-between;

    &:nth-child(1) {
      text-align: right;
    }
  }
</style>
