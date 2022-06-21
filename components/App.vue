<template>
  <div class="App">
    <Logo />
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
import Logo from './Logo';
import SongSearchBar from "./SongSearchBar";
import SelectedSongsSidebar from "./SelectedSongsSidebar";
import axios from "axios";
import makeSlides from "~/utils/makeSlides";

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
     * Loads the songs from hosted yii API
     */
    loadSongs() {
      axios.get(process.env.API_HOST + '/song/all').then(response => {
        this.songs = response.data;
      });

    },
    /**
     * Gets the selected Song objects from hosted yii API
     * Then Song objects to slide maker util
     * The created PowerPoint Presentation is then downloaded
     */
    makeSlides() {
      if (this.selectedSongs.length === 0) return
      const selectedIds = []
      this.selectedSongs.forEach(song => selectedIds.push(song.id))

      axios.get(
          process.env.API_HOST + '/song/lyrics?ids=' + selectedIds.join(',')
      ).then(response => {
        makeSlides(selectedIds, response.data);
      });
    }
  },
  mounted() {
    this.loadSongs();
  },
}
</script>

<style scoped>

</style>
