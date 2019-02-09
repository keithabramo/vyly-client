import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

import colors from 'vuetify/es5/util/colors';

const purpleTheme = {
  primary: colors.purple.lighten2,
  secondary: colors.purple.lighten5,
  warning: colors.yellow,
  info: '#00ffc5',
};

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: purpleTheme,
  options: {
    customProperties: true,
  },
});
