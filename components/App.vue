<template>
  <div class="App">
    <SongSearchBar
      :allSongs="songs"
      @selectedSong="(song) => selectedSongs.push(song)"
    />
    <SelectedSongsSidebar
      :selectedSongs="selectedSongs"
    />
  </div>
</template>

<script>
import SongSearchBar from "./SongSearchBar";
import SelectedSongsSidebar from "./SelectedSongsSidebar";

export default {
  name: "App",
  components: {
    SongSearchBar,
    SelectedSongsSidebar
  },
  data() {
    return {
      songs: [],
      selectedSongs: [],
    }
  },
  methods: {
    /**
     * Loads the songs
     */
    loadSongs() {
      this.songs = require("~/data-temp/songs.json")
    }
  },
  watch: {
    /**
     * if a song is selected, open the SelectedSongs Modal
     * @param oldSongs
     * @param newSongs
     */
    selectedSongs(oldSongs, newSongs) {

    }
  },
  mounted() {
    this.loadSongs();
  },
}
</script>

<style scoped>

</style>
