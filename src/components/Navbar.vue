<template>
    <nav>
        <v-toolbar app clipped-left clipped-right flat dark class="primary">
            <v-toolbar-side-icon @click="drawerLeft = !drawerLeft"></v-toolbar-side-icon>
            <v-toolbar-title class="display-2 cursive">
                <span>V</span>
                <span class="font-weight-light">yly</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat>
                <span>Logout</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer class="ternery text--light-grey" app clipped dark width="220" v-model="drawerLeft">
            <v-img
                height="100%"
                src="https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
                gradient="to top right, rgba(0,0,0,.8), rgba(0,0,0,.9)"
            >
                <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                        <v-list-tile avatar router :to="{ name: 'profile' }" exact>
                            <v-list-tile-avatar>
                                <img src="https://randomuser.me/api/portraits/men/85.jpg">
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title>Keith Abramo</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <v-divider light></v-divider>
                <v-list>
                    <v-list-tile
                        active-class="primary text--light"
                        ripple
                        v-for="link in links"
                        :key="link.text"
                        router
                        :to="{ name: link.route }"
                        exact
                    >
                        <v-list-tile-action>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                <span>{{ link.text }}</span>
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-img>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawerLeft: true,
            links: [
                {
                    text: "Home",
                    route: "home",
                    icon: "home"
                },
                {
                    text: "Host Dashboard",
                    route: "dashboard",
                    icon: "dashboard"
                }
            ]
        };
    }
};
</script>

<style scoped>
.cursive {
    font-family: "Tangerine", cursive !important;
}
</style>
