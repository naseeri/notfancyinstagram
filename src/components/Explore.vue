<template>
    <v-flex xs12 sm6 offset-sm3 column fill-height class="mb-3">
      <v-card>
        <v-container grid-list-xl fluid >
          <v-layout row wrap class="scroll-y">
            <v-flex v-for="n in 18" :key="n" xs4 d-flex>
              <v-card flat tile class="d-flex">
                <v-img :ref="'img'+n" :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1" class="grey lighten-2">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
</template>