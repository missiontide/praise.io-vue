<template>
  <div class="App">
    <SongSearchBar
      :allSongs="songs"
      @selectSong="(song) => this.selectedSongs.push(song)"
    />
    <SelectedSongsSidebar
      :selectedSongs="selectedSongs"
      @removeSong="(index) => this.selectedSongs = this.selectedSongs.filter((s, i) => i !== index)"
      @makeSlides="makeSlides()"
    />
  </div>
</template>

<script>
import SongSearchBar from "./SongSearchBar";
import SelectedSongsSidebar from "./SelectedSongsSidebar";
import axios from "axios";

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
      axios.get('http://localhost:8080/song/all').then(response => {
        this.songs = response.data;
      });

    },
    /**
     * Sends all selected songs to slide maker util
     */
    makeSlides() {
      if (selectedSongs.length === 0) return

    }
  },
  mounted() {
    this.loadSongs();
  },
}
</script>

<style scoped>

</style>
