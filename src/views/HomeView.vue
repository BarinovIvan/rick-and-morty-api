<template>
  <div class="home">
    <div class="container">
      <div class="card-list">
        <character-card
          v-for="character in characters"
          :key="character.id"
          :character="character"
        />
      </div>
    </div>
  </div>
</template>

<script>
// https://rickandmortyapi.com/api/character
  import Characters from '@/services/classes/characters.js'
  import CharacterCard from "@/components/CharacterCard.vue";

  export default {
    name: 'HomeView',
    components: { CharacterCard },
    data() {
      return {
        characters: []
      }
    },
    async created() {
     await this.fetchCharacters()
    },
    methods: {
      async fetchCharacters() {
        const { results } = await fetch('https://rickandmortyapi.com/api/character').then(response => response.json())
        this.characters = results.map(character => new Characters(character))
        console.log(this.characters[0].info)
      }
    }
  }
</script>

<style scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 20px;
  }
</style>