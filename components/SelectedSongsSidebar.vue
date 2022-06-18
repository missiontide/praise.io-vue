<template>
  <div>
    <b-button v-b-toggle.sidebar-1>Make Slides</b-button>
    <b-sidebar id="sidebar-1" title="Slide Maker" shadow>
      <div class="px-3 py-2">
        <b-list-group-item variant="secondary">Selected Songs</b-list-group-item>
        <b-list-group v-for="song in selectedSongs">
          <b-list-group-item>
            {{song.title}} - {{song.artist}} <button>X</button>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SelectedSongs",
  props: {
    selectedSongs: [],
  },
  data () {
    return {

    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
