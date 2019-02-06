import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

import colors from 'vuetify/es5/util/colors';

const purpleTheme = {
  primary: '#9c27b0',
  secondary: colors.purple.lighten5,
  ternery: colors.grey,
};

const cyanTheme = {
  primary: colors.cyan.darken1,
  secondary: colors.blueGrey.lighten5,
  ternery: colors.grey,
};


Vue.use(Vuetify, {
  iconfont: 'md',
  theme: purpleTheme,
});
