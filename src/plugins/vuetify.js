import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

import colors from 'vuetify/es5/util/colors';


Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#9c27b0',
    secondary: colors.grey.lighten2,
    ternery: colors.grey,
  },
});
