
<template>
    <v-container fluid>
        <v-layout column>
            <v-flex>
                <div class="display-1 black--text">The Polis Center Internship</div>
            </v-flex>
            <v-flex>
                <p class="subheading mt-3">At The Polis Center, I was given the opportunity to conduct research and development for an ongoing project called 'Digital Encyclopedia of Indianapolis' (DEOI). 
                    The project scope included digitalizing the pre-existing paper version of the encyclopedia onto a website. While working on DEOI, I obtained valuable knowledge of systems design, and a large array of skills. These include (but are not limited to):</p>
                <div class="headline mt-3">MongoDB</div>
                <p class="subheading mt-3">The database we are using for the DEOI, MongoDB, is a non-relational, document based database. We chose this because our data comes in the form of documents containing 
                    multiple fields of data for each encyclopedia entry, including the author, title, body, ID, summary, and editor. I learned how to input, query, and manage the encyclopedia data within MongoDB,
                     and how to interact with that data through external Python and Go scripts. <a href="https://github.com/Yason-C/My-NLP-Script" target="_blank">Here is my Python script that transfers my MongoDB data to a JSON-LD file.</a></p>
                <div class="headline mt-3">Cayley</div>
                <p class="subheading mt-3">In order to visualize this data for analysis purposes, we used Google's Cayley graph database. Through a Python script, I was able to query, format, and send data from 
                    MongoDB to Cayley, and then visualize it as a graph.</p>
                <div class="headline mt-3">Vue.js</div>
                <p class="subheading mt-3">For the client-side of the DEOI project, we chose to use the Vue.js framework to design and code the HTML for our website. While assisting in this process, I learned how to create 
                    and format a website, such as this one! The code for this website can be found here.</p>
            </v-flex>
            <v-flex>
                <div class="display-1 black--text">Purdue Projects</div>
                </v-flex>
            <v-flex>
                <div class="headline mt-3">RAID Storage Architecture</div>
                <p class="subheading mt-3">In the Spring 2019 semester I took Information Technology Architectures (CNIT17600). I was assigned a project where I had to create/do something using a Rapsberry Pi
                    which would demonstrate my knowledge of the hardware. I chose to set up a RAID (Redundant Array of Independent Disks) storage volume on my Raspberry Pi using USB drives. A RAID Architecture
                    combines the storage multiple disks or drives in order to better protect data in the case of a disk/drive failure and to improve performance. I was able to successfully do this and earned 
                    an A on the project. My project report was requested in video format:</p>
                <iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/983291/sp/98329100/embedIframeJs/uiconf_id/29134031/partner_id/983291?iframeembed=true&playerId=kaltura_player&entry_id=1_87ezxb68&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_ryf0o4j7" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" frameborder="0" title="Kaltura Player"></iframe>                <div class="headline mt-3">Digital Contact Book</div>
                <p class="subheading mt-3">Also in the Spring 2019 semester, I took Introduction To Software Development Concepts (CNIT15501). The final project for this course was a C# group project demonstrating
                    what we have learned throughout the semester. My group and I decided to create a digital contact book for an imaginary company. The <a href="https://github.com/Yason-C/CNIT15501-Group-Project" target="_blank">code can be found here</a>, and our final report may be found below.
                    I also earned an A on this project :).</p>
                    <iframe src="https://docdro.id/0qrdae4" height="800" width="100%"></iframe>
            </v-flex>
            <v-flex>
                <div class="display-1 black--text">Personal Project</div>
                </v-flex>
            <v-flex>
                <div class="headline mt-3">ArcGIS</div>
                <p class="subheading mt-3">I designed ArcGIS maps showing IMPD patrol beats with all locations of homicides from 2017 and 2018 on IMPD jurisdiction:</p>
                <div class="embed-container"><iframe width="500" height="400" frameborder="15" scrolling="no" marginheight="0" marginwidth="10" title="2017/2018 Homicides w/ Beat Map" src="//yason-c.maps.arcgis.com/apps/Embed/index.html?webmap=f78c88a9d089424f864800a74486beb7&extent=-86.6163,39.5932,-85.6021,40.0462&zoom=true&previewImage=false&scale=true&disable_scroll=false&theme=dark"></iframe><iframe width="500" height="400" frameborder="15" scrolling="no" marginheight="0" marginwidth="10" title="2017-2018 Homicides Heat Map" src="//yason-c.maps.arcgis.com/apps/Embed/index.html?webmap=2b809c43cf604070980075817b2aafc9&extent=-86.3927,39.6766,-85.8856,39.9032&zoom=true&previewImage=false&scale=true&disable_scroll=false&theme=dark"></iframe></div>
                <p class="subheading mt-3">Sources: <a href="http://data.indy.gov/datasets/impd-ucr-2018-data" target="_blank">2018 UCR IMPD Crime Data</a> and <a href="http://data.indy.gov/datasets/impd-ucr-2018-data" target="_blank">2017 UCR IMPD Crime Data</a>.</p>
                </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Projects',
    data()  {
        return{
            drawer: false
        }
    }
};
</script>
<style scoped>
    iframe { margin: 15px; }
</style>
