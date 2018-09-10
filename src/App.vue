<template>
  <v-app>
    <Register v-if="this.$store.state.pages.register" style="overflow: hidden;" />
    <Upload v-if="this.$store.state.pages.upload" />
    <Effectify v-if="this.$store.state.pages.effectify" />
    <Profile v-if="this.$store.state.pages.profile" />
    <Explore class="mb-10" v-if="this.$store.state.pages.explore" />
    <Home v-if="this.$store.state.pages.home" />
    <BottomMenu v-if="!this.$store.state.pages.register" />
  </v-app>
</template>

<script>
import Register from "./components/Register";
import BottomMenu from "./components/BottomMenu";
import Upload from "./components/Upload";
import Effectify from "./components/Effectify";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Register,
    BottomMenu,
    Upload,
    Effectify,
    Profile,
    Explore,
    Home
  }
};
</script>