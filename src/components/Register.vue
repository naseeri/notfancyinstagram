<template>
  <v-layout align-center justify-center column fill-height lg2 sm2 md2>
    <img src='https://www.edigitalagency.com.au/wp-content/uploads/best-instagram-logo-gif.gif' class="mb-2" style="width: 100px;" />
    <span class="headline">Not Fancy</span>
    <img src='https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png' style="width: 200px;"
      class="mb-2" />
    <v-form v-model="valid">
      <v-text-field v-model="name" label="Your Name" :rules="rules"></v-text-field>
      <v-btn :disabled="!valid" @click="submit" class="mt-3" color="info" style="width: 200px;">
        Login
      </v-btn>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    valid: false,
    rules: [v => !!v || "Name please..."],
    name: ""
  }),
  methods: {
    submit() {
      this.$store.commit("setName", this.name);
      this.$store.commit("pageSwitch", "upload");
    }
  }
};
</script>

<style>
</style>