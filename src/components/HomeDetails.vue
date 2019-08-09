
<template>
    <v-container>
        <v-layout column>
            <v-flex  class="display-2 text-xs-center my-5">Welcome to My Website!</v-flex>
        </v-layout>
        <v-layout row wrap>

            <v-flex md4>

                    <img src="https://i.ibb.co/gFFHJs5/IMG-2983.jpg" alt="IMG-2983" border="0" align=center>

            </v-flex>

        </v-layout>
        <v-layout column>
            <v-flex>
                <div class="headline mt-3">About Me</div>
                </v-flex>
            <v-flex>
                <p class="subheading mt-3">As of Fall 2019, I am a sophomore in the Class of 2022 at Purdue University. I am currently working towards a bachelor's in cybersecurity, along with both Forensic Sciences and Military Science minors. Despite my Cybersecurity major, most of my professional experience currently lies in software engineering. Knowing how a system works from top to bottom is important for being able to fully protect it from outside threats, which is why I decided to first understand system architecture before focusing specifically on security.</p>
                <div class="headline mt-3">What I have to offer</div>
                <p class="subheading mt-3">I am seeking out internship/lab assistant positions in which I will be able to both contribute and sharpen my current skills. I have experience coding in the languages C#, Python, Go, HTML, and Javascript. Additionally, I have worked with and managed both mySQL and MongoDB databases. My professional experience includes nearly 250 hours doing an internship at <a href="https://polis.iupui.edu/" target="_blank">The Polis Center</a>, an applied research unit at IUPUI (Indiana University - Purdue University Indianapolis). My resume, projects, and more detailed experience are located in the interactive resume below.</p>
                <div class="headline mt-3">This Website</div>
                <p class="subheading mt-3">I created this website myself using Vue.js, Vuex, and Vuetify. The code can be found here.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    name: 'HomeDetails'
};
</script>

<style scoped>
</style>