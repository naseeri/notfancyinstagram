<template>
  <v-layout class="mb-5">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <div ref="imgHolder" :class="currentEffect">
          <v-img :src="this.$store.state.effectImg">
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </div>
        <v-btn @click="done()" fab class="warning">
          <v-icon>done</v-icon>
        </v-btn>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-btn v-for="el in effects" round class="primary" :key="el.name" @click="effectify(el.effect)">{{el.name}}</v-btn>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      currentEffect: "",
      effects: [
        {
          name: "Aden",
          effect: "filter-aden"
        },
        {
          name: "Brooklyn",
          effect: "filter-brooklyn"
        },
        {
          name: "Inkwell",
          effect: "filter-inkwell"
        },
        {
          name: "LoFi",
          effect: "filter-lofi"
        },
        {
          name: "Mayfair",
          effect: "filter-mayfair"
        },
        {
          name: "Perpetua",
          effect: "filter-perpetua"
        },
        {
          name: "Valencia",
          effect: "filter-valencia"
        },
        {
          name: "Willow",
          effect: "filter-willow"
        },
        {
          name: "X-Pro II",
          effect: "filter-xpro-ii"
        }
      ]
    };
  },
  methods: {
    effectify(effect) {
      this.currentEffect = effect;
    },
    done() {
      this.$store.commit("saveImage", this.currentEffect);
      this.$store.commit("pageSwitch", "profile");
    }
  }
};
</script>

<style>
@import "../assets/instagram.min.css";
</style>