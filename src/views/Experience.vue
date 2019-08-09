<template>
  <v-container fluid>
    <v-layout column>
      <v-flex class="display-2 text-xs-center my-5">Software/Languages I have used:</v-flex>
      <v-flex>
        <div class="headline mt-3 text-xs-center">Languages -</div>
        <div class="box">
          <ul>
            <li v-for="skill in langs">
              <div class="lang">{{skill.lang}}</div>
              <div class="bar">
                <div
                  class="progress"
                  v-bind:style="{'background':skill.color, 'width':skill.percent+'%'}"
                ></div>
                <span class="percent">{{skill.percent}}%</span>
              </div>
            </li>
          </ul>
        </div>
      </v-flex>
      <v-flex>
        <div class="headline mt-3 text-xs-center">Databases -</div>
        <div class="box">
          <ul>
            <li v-for="skill in dbs">
              <div class="lang">{{skill.db}}</div>
              <div class="bar">
                <div
                  class="progress"
                  v-bind:style="{'background':skill.color, 'width':skill.percent+'%'}"
                ></div>
                <span class="percent">{{skill.percent}}%</span>
              </div>
            </li>
          </ul>
        </div>
      </v-flex>
      <v-flex>
        <div class="headline mt-3 text-xs-center">Coding Software -</div>
        <div class="box">
          <ul>
            <li v-for="skill in software">
              <div class="lang">{{skill.app}}</div>
              <div class="bar">
                <div
                  class="progress"
                  v-bind:style="{'background':skill.color, 'width':skill.percent+'%'}"
                ></div>
                <span class="percent">{{skill.percent}}%</span>
              </div>
            </li>
          </ul>
        </div>
      </v-flex>
      <v-flex>
        <div class="headline mt-3 text-xs-center">Other Software -</div>
        <div class="box">
          <ul>
            <li v-for="skill in other">
              <div class="lang">{{skill.app}}</div>
              <div class="bar">
                <div
                  class="progress"
                  v-bind:style="{'background':skill.color, 'width':skill.percent+'%'}"
                ></div>
                <span class="percent">{{skill.percent}}%</span>
              </div>
            </li>
          </ul>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
    name: 'Experience',
    el: '.box',
    data() {
        return{
        langs: [
            { lang: 'HTML5', percent: 75, color: '#ec407a' },
            { lang: 'CSS3', percent: 70, color: '#f4511e' },
            { lang: 'Javascript', percent: 60, color: '#512da8' },
            { lang: 'Python', percent: 80, color: '#f57c00' },
            { lang: 'Vue', percent: 70, color: '#0288d1' },
            { lang: 'C#', percent: 95, color: '#fcc717'}
            ],
        dbs: [
            {db: 'MongoDB', percent: 90, color: '#fc4117'},
            {db: 'MySQL', percent: 75, color: '#78c914'},
            {db: 'Microsoft Access', percent: 80, color: '#d62da9'},
            {db: 'Cayley', percent: 70, color: '#e33030'}
        ],
        software: [
          {app: 'SpaCy (Python)', percent: 90, color: '#a1b3a5'},
          {app: 'Vuetify/Vue (HTML/Javascript)', percent: 80, color: '#9aa8ed'},
          {app: 'CayleyGraph/Cayley.io', percent: 60, color: '#f2e933'},
          {app: 'Prose (Golang)', percent: 85, color: '#f26033'}
        ],
        other: [
          {app: 'ArcGIS/ArcGIS Online', percent: 70, color: '#6f33f2'},
          {app: 'Adobe Photoshop', percent: 85, color: '#f2337c'},
          {app: 'Adobe Premiere Pro', percent: 95, color: '#32f0ba'},
          {app: 'Visual Paradigm', percent: 70, color: '#fffb00'},
          {app: 'Microsoft Visual Studio/Code', percent: 90, color: '#99986e'}
        ]
        }
    }
};
</script>
<style scoped>
body {
    font-family: sans-serif;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.box {
    width: 800px;
    padding: 40px;
    margin: 50px auto;
    background: #f3f3f3;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.1);
}

ul li {
    list-style-type: none;
    padding: 10px;
}

.lang {
    margin: 5px;
    font-size: 20px;
}

.bar {
    width: 100%;
    background: #dfdfdf;
    overflow: hidden;
    padding: 5px;
}

.progress {
    float: left;
    padding: 15px;
}

.percent {
    float: right;
    font-weight: 600;
    height: 30px;
    line-height: 30px;
}
</style>