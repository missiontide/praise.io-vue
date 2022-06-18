<template>
  <div>
    <!-- Search Bar -->
    <div>
      <input v-model="searchInput" placeholder="type a song or artist..." />
    </div>
    <!-- Table of matching songs-->
    <div v-if="matchedSongs.length > 0">
      <Table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in matchedSongs">
            <td>{{song.title}}</td>
            <td>{{song.artist}}</td>
            <td>+</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'

export default {
  name: "SongSearchBar",
  props: {
    allSongs: Array,
  },
  data() {
    return {
      searchInput: '',
      matchedSongs: [],
    }
  },
  watch: {
    searchInput() {
      this.searchSongs();
    }
  },
  methods: {
    /**
     * Gets called when a user inputs text into search bar
     * Utilizes fuzzy search to match on song's title and artist and sets matchedSongs
     */
    searchSongs() {
      // Fuse search options
      const options = {
        keys: [
          {name: 'title', weight: 0.65},
          {name: 'artist', weight: 0.35}],
        threshold: 0.4,
      }

      const allSongs = this.allSongs;
      const fuseSearch = new Fuse(allSongs, options)
      const searchResult = fuseSearch.search(this.searchInput)

      // fuse returns objects sorted by match .score, the object is in .item
      this.matchedSongs = searchResult.map(result => result['item'])
    }
  }
}
</script>

<style scoped>

</style>
