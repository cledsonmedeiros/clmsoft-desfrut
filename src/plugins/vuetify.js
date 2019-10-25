import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#5b1136",
        secondary: "#7f184d",
        info: "#FFFFFF",
        background: "#FFFFFF",
      },
    },
  },
});
