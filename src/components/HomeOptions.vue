<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Interactive Resume</v-flex>
        </v-layout>
        <v-layout row wrap>
            
            <v-flex xs12 sm12 md4>
                <router-link to="/resume">
                <v-card height="125%" hover color="amber lighten-1">
                    

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Resume PDF</h3>
                            <div>View and/or download my resume as a PDF.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <router-link to="/projects">
                <v-card height="125%" hover color="amber lighten-1">

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Projects</h3>
                            <div>View the coding projects I have worked on.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
                </router-link>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <router-link to="/experience">
                <v-card height="125%" hover color="amber lighten-1">
                    
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Experience</h3>
                            <div>View my work experience, knowledge, and skills.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
                </router-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeOptions'
};
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}
</style>