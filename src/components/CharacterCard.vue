<template>
  <div class="character">
    <img :src="character.image" :alt="`Фото персонажа ${character.info[0].value}`">
    <info-cell
      v-for="(info, index) in character.info"
      :key="index"
      :info="info"
      class="character__info"
    />
  </div>
</template>
<script>
  import InfoCell from "@/components/InfoCell.vue";
  export default {
    name: "CharacterCard",
    components: {InfoCell},
    props: {
      character: {
        type: Object,
        required:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .character {
    width: 300px;
  }
</style>
