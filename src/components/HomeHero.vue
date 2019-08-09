<template>
        <v-container fluid fill-height class="home-hero" rel='stylesheet' style="max-height: 100vh;">        
            <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center"><c>Jason Croddy</c></div>
            <div class="display-2 font-weight-bold white--text text-xs-center"><c>Purdue Cybersecurity</c></div>
            <div class="display-.75 font-weight-bold white--text text-xs-center"><c>6125 Central Ave</c></div>
            <div class="display-.75 font-weight-bold white--text text-xs-center"><c>Indianapolis, IN, 46220</c></div>
            <div class="display-.75 font-weight-bold white--text text-xs-center"><c>(317)-987-7069</c></div>
            <div class="display-.75 font-weight-bold white--text text-xs-center"><c>jcroddy@purdue.edu</c></div>
            <v-btn fab class="amber lighten-1">
            <v-icon large color="black">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/1200px-Purdue_Boilermakers_logo.svg.png');
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center center;
			background-repeat:  no-repeat;
			background-attachment: fixed;
			background-size:  cover;
}
c{
 text-shadow: 2px 2px 4px #000000;
}
</style>