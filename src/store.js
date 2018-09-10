import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    effectImg: null,
    uploadedImages: [],
    pages: {
      register: true,
      explore: false,
      profile: false,
      effectify: false,
      upload: false,
      home: false
    },
    profile: {
      name: "",
      pic: "https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png",
      description: "I love VueJs"
    }
  },
  mutations: {
    setEffectImg(state, data) {
      state.effectImg = data;
    },
    setName(state, name) {
      state.profile.name = name;
    },
    saveImage(state, passedEffect) {
      state.uploadedImages.push({
        img: state.effectImg,
        effect: passedEffect
      });
    },
    pageSwitch(state, page) {
      Object.keys(state.pages).forEach(
        (key) => {
          key == page ? state.pages[key] = true : state.pages[key] = false
        }
      );
    }
  }
})