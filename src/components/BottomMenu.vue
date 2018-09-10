<template>
  <v-layout justify-center style="bottom: 0; overflow: hidden; position: fixed; width: 100%;">
    <v-flex xs12 sm12 md4>
      <v-toolbar color="white">
        <v-btn icon class="ma-auto" @click="setPage('home')">
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn icon class="ma-auto" @click="setPage('explore')">
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon class="ma-auto" @click="setPage('upload')">
          <v-icon>add_box</v-icon>
        </v-btn>
        <v-btn icon class="ma-auto" @click="setPage('profile')">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon class="ma-auto" @click="setPage('profile')">
          <v-avatar size="22" color="grey lighten-4" class="ma-auto">
            <img :src="this.$store.state.profile.pic" alt="avatar">
          </v-avatar>
        </v-btn>
      </v-toolbar>
    </v-flex>
    <span id="audio">
      <audio autoplay><source src="../assets/Rusalka.mp3" /></audio>
    </span>
  </v-layout>

</template>

<script>
export default {
  name: "BottomMenu",
  methods: {
    setPage(page) {
      this.$store.commit("pageSwitch", page);
    }
  }
};
</script>