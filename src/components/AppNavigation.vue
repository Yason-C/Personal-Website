<template>
    <span>
        <v-navigation-drawer fixed app v-model="drawer" class="grey lighten-1" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index" route :to="item.route">
                        <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
                        <v-list-tile-content>
                            {{ item.title }}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed app :clipped-left="clipped" color="grey lighten-1" dark>
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">Jason Croddy</v-toolbar-title>
            </router-link>
        </v-toolbar>
    </span>
</template>


<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Home', route: '/', icon: 'home'},
                { title: 'Resume', route: '/resume' },
                { title: 'Projects', route: '/projects' },
                { title: 'Experience', route: '/experience'}
            ]
        };
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>