<template>
    <nav>
        <v-toolbar app clipped-left clipped-right flat dark class="transparent">
            <v-toolbar-title>
                <router-link
                    :to="{ name: 'home' }"
                    exact
                    class="v-toolbar__title display-2 cursive"
                >
                    <span>V</span>
                    <span class="primary--text">yl</span>
                    <span>y</span>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
                flat
                v-for="link in links"
                :key="link.id"
                router
                :to="{ name: link.route }"
                exact
            >
                <span>{{ link.text }}</span>
                <v-icon right>{{ link.icon }}</v-icon>
            </v-btn>
            <v-menu  bottom left offset-y >
                <v-btn slot="activator" icon>
                    <v-icon>person</v-icon>
                </v-btn>

                <v-card>
                    <v-list>
                        <v-list-tile avatar router :to="{ name: 'profile' }" exact>
                            <v-list-tile-content>
                                <v-list-tile-title>Keith Abramo</v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-avatar>
                                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Keith">
                            </v-list-tile-avatar>
                        </v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile @click="">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    <span>LOGOUT</span>
                                    <v-icon right>exit_to_app</v-icon>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-menu>
        </v-toolbar>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Dashboard',
          route: 'dashboard',
          icon: 'dashboard',
        },
      ],
    };
  },
};
</script>

<style scoped>
.cursive {
    font-family: "Tangerine", cursive !important;
}

.v-toolbar__title {
    color: white;
    text-decoration: none;
}
</style>
