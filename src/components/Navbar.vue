<template>
    <nav>
        <v-toolbar app dark clipped-right color="primary">
            <v-toolbar-side-icon @click="drawerLeft = !drawerLeft"></v-toolbar-side-icon>
            <v-toolbar-title>
                <span>V</span>
                <span class="font-weight-light">yly</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat>
                <span>Logout</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer class="secondary text--light-grey" app v-model="drawerLeft">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
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
        </v-navigation-drawer>

        <v-navigation-drawer class="secondary text--light-grey" app clipped right v-model="drawerRight"></v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawerLeft: false,
            drawerRight: true,
            links: [
                { text: "Home", route: "/", icon: "home" },
                { text: "My Events", route: "/myEvents", icon: "dashboard" },
                { text: "Logout", route: "/logout", icon: "exit_to_app" }
            ]
        };
    }
};
</script>

<style>
</style>
