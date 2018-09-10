<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="mt-3">
      <v-card>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="this.$store.state.profile.pic">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="this.$store.state.profile.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="this.$store.state.profile.description"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex v-for="image in this.$store.state.uploadedImages" :key="image" xs4 d-flex>
              <v-card flat tile class="d-flex">
                <div :class="image.effect">
                  <v-img :src="image.img" :lazy-src="image.img" aspect-ratio="1" class="grey lighten-2">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>