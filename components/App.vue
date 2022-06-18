<template>
  <div class="App">
    <SongSearchBar :allSongs="songs" />
    <SelectedSongs />
  </div>
</template>

<script>
import SongSearchBar from "./SongSearchBar";
import SelectedSongs from "./SelectedSongs";

export default {
  name: "App",
  components: {
    SongSearchBar,
    SelectedSongs
  },
  data() {
    return {
      songs: this.loadSongs(),
    }
  },
  methods: {
    loadSongs() {
      return require("~/data-temp/songs.json")
    }
  }
}
</script>

<style scoped>

</style>
