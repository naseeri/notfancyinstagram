<template>
  <v-layout class="mb-3">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <picture-input v-if="picInput" ref="pictureInput" @change="onChange" width="600" height="600" margin="16" accept="image/jpeg,image/png"
          size="10" buttonClass="btn" :customStrings="{upload: '<h1>Bummer!</h1>', drag: 'Drag an image'}">
        </picture-input>
        <v-btn @click="done()" fab class="primary">
          <v-icon>done</v-icon>
        </v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PictureInput from "vue-picture-input";

export default {
  components: {
    PictureInput
  },
  data() {
    return {
      picInput: true
    };
  },
  methods: {
    onChange(image) {
      if (image) {
        this.$store.commit("setEffectImg", image);
      }
    },
    done() {
      this.$store.commit("pageSwitch", "effectify");
    }
  }
};
</script>