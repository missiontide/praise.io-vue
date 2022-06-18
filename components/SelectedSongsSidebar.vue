<template>
  <div>
    <b-button v-b-toggle.selected-songs-sidebar>Make Slides</b-button>
    <b-sidebar id="selected-songs-sidebar" title="Slide Maker" backdrop shadow>
      <div class="px-3 py-2">
        <b-list-group-item variant="secondary">Selected Songs</b-list-group-item>

        <b-list-group v-for="(song, index) in selectedSongs">
          <b-list-group-item>
            {{song.title}} - {{song.artist}} <button @click="removeSong(index)">X</button>
          </b-list-group-item>
        </b-list-group>

        <button v-b-toggle.selected-songs-sidebar>
          {{selectedSongs.length > 0 ? "Add more songs >" : "Add a song >"}}
        </button>
      </div>
      <template #footer>
        <button @click="makeSlides()">Make Slides</button>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SelectedSongs",
  props: {
    selectedSongs: Array,
  },
  emits: ['removeSong', 'makeSlides'],
  data () {
    return {

    }
  },
  methods: {
    /**
     * Emits index of song-to-remove to parent App
     * @param song
     */
    removeSong(index) {
      this.$emit('removeSong', index)
    },
    /**
     * Emits trigger to make slides in parent App
     */
    makeSlides() {
      this.$emit('makeSlides')
    }
  },
}
</script>

<style scoped>

</style>
