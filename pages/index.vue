<template>
  <div>
    <div class="row position" style="padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; margin-top: 100px;" >
      <div class="cover-img" style="padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; height: 80%; z-index: -1; margin-top: 0px;">
      </div>
      <div class="position" style=" margin-top: 50px; padding-bottom: 0px; margin-bottom: 0px;">
        <h1 class="title" style="color: #ffffff;">Hi there, I'm Tinashe</h1>
      </div>
      <div class="position" style=" padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0px; ">
        <h2 class="subtitle" style="color: #ffffff;">Welcome to my portfolio</h2>
      </div>
      <div class="profile-image position" style=" padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 40px;">
        <img class="image-circular" src="@/assets/tinashe.png" alt="Tinashe Zvihwati">
      </div>
      <div class="row position" style="padding-bottom: 80px;">
        <div class="col-md-6">
          <router-link
            :to="'/profile'"
            class="button1"
            title="Résumé">
            Résumé
          </router-link>
        </div>
        <div class="col-md-6">
          <router-link
            :to="'/connect'"
            class="button1"
            title="Contact">
            Contact
          </router-link>
        </div>
      </div>
    </div>

    <div class="position" style="height: 50px; background: #ffffff;">
    </div>

    <div class="position div-spacing row nopadding" style="background: #ffffff;">
      <div class="col-md-6">
        <p class="lead">
          Hello there, I'm Tinashe. Born in Marondera and grew up in Harare, I'm currently
          based in Izmir, Turkey. I like to write about my experiences, opinions and ideas.
          Interests and hobbies include, coding, sport, photography, making music, travelling,
          and writing. Last but not least, I like to taste and take pictures of different
          beers around the world.
        </p>
        <p class="lead">
          You probably guessed right already, Yes, I am a developer.  I have been learning
          JavaScript Frameworks lately so I decided to make this website as my first project in
          VueJS.
        </p>
        <p class="lead">Have fun browsing through, and let me know if you find anything interesting!</p>
      </div>
      <div class="col-md-6 prof-container">
        <div
          class="loc-event"
          style="margin-bottom: 20px; -webkit-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); -moz-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); border-radius: 2px 2px 2px 2px;">
          <div class="row nopadding" style="text-align: center;">
            <div class="col-md-3" style="border-right: 1px solid #eeeeee">
              <p style="font-weight: 550; font-size: 22px; color: #9400D3; padding-top: 10px;">Today</p>
              <p style="font-weight: 300; font-size: 14px; color: #ffffff; border-radius: 10px 10px 10px 10px; background-color: #9400D3;">Work</p>
            </div>
            <div class="col-md-6">
              <p style="font-weight: 550; font-size: 22px; color: #9400D3; padding-top: 10px;">Izmir, Turkey</p>
              <p style="font-weight: 300; font-size: 14px; color: #9400D3;">
                <i class="fa fa-map-marker" aria-hidden="true"/>
                İzmir Teknoloji Geliştirme Bölgesi
              </p>
            </div>
            <div class="col-md-3" style="background: #9400D3; padding-top: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; height: 100%;">
              <p style="font-size: 42px; margin-bottom: 0px; color: #ffffff;"> {{ new Date().getDate() }} </p>
              <p style="font-size: 16px; margin-top: 0px; color: #ffffff;"> {{monthConv()}} </p>
            </div>
          </div>
          <div class="row nopadding" style="text-align: center;">
            <div class="col-md-12 nopadding" style="width: 100%; height: 200px;">
              <GmapMap :center="{lat: 38.3141088, lng: 26.6340546}" :zoom="16" map-type-id="terrain" style="width: 100%; height: 100%">
                <GmapMarker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position"
                />
              </GmapMap>
            </div>
          </div>
        </div>
        <div
          class="loc-event"
          style="margin-bottom: 20px; -webkit-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); -moz-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); border-radius: 2px 2px 2px 2px;">
          <div class="row nopadding" style="text-align: center;">
            <div class="col-md-3" style="border-right: 1px solid #eeeeee">
              <p style=" float: left; font-weight: 550; font-size: 22px; color: #9400D3; padding-top: 10px;">{{dateDifference(new Date("1/16/2019"), new Date())}}</p>
              <p style="font-weight: 300; font-size: 12px; color: #9400D3; padding-top: 20px;">
                <i class="fa fa-clock-o" aria-hidden="true"/>
                Days Ago
              </p>
              <p style="font-weight: 300; font-size: 14px; color: #ffffff; border-radius: 10px 10px 10px 10px; background-color: #9400D3;">Travel</p>
            </div>
            <div class="col-md-6">
              <p style="font-weight: 550; font-size: 22px; color: #9400D3; padding-top: 10px;">Doha, Qatar</p>
              <p style="font-weight: 300; font-size: 14px; color: #9400D3;">
                <i class="fa fa-map-marker" aria-hidden="true"/>
                Hamad International Aiport
              </p>
            </div>
            <div class="col-md-3" style="background: #9400D3; padding-top: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; height: 100%;">
              <p style="font-size: 42px; margin-bottom: 0px; color: #ffffff;"> 16 </p>
              <p style="font-size: 16px; margin-top: 0px; color: #ffffff;"> January </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="album py-5" style=" background-image: url('/background2.jpeg'); background-position: center; background-size: cover; background-repeat: no-repeat; padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; position: relative; padding-top: 50px;">
      <div v-if="error" class="error div-spacing">
        <p class="lead">{{ error }}</p>
      </div>
      <div class="container">
        <div
          v-for="(post, index) in posts"
          :item="post"
          :index="index"
          :key="post._id"
          :title="post.title"
          class="post col-md-4"
        >
          <router-link :to="'/blog/' + post.slug">
            <div class="card mb-4 shadow-sm">
              <img
                :src="getImgUrl(post.imagename)"
                class="card-img-top post-image"
                data-holder-rendered="true"
                alt="Blog Image"
              >
              <div class="card-body">
                <h3 class="fonts-two">{{ post.title }}</h3>
                <p class="fonts-one">{{ post.description }}</p>
                <div class="row">
                  <div class="col-md-6">
                    <i class="fa fa-user fa-x"/>
                    <small class="text-muted">{{ post.author }}</small>
                    <br>
                    <i class="fa fa-tags fa-x"/>
                    <small class="text-muted">{{ post.category }}</small>
                  </div>
                  <div class="col-md-6" style="text-align: right;">
                    <i class="fa fa-calendar fa-x"/>
                    <small
                      class="text-muted"
                    >{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</small>
                    <br>
                    <i class="fa fa-clock-o fa-x"/>
                    <small
                      class="text-muted"
                    >{{ `${post.createdAt.getHours()}:${post.createdAt.getMinutes()}:${post.createdAt.getSeconds()}` }}</small>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import PostService from '@/components/PostService'

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      markers: [
        {position: {lat: 38.3141088, lng: 26.6340546}}
      ]
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../static/blogs/' + pic)
    },
    monthConv() {
      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";

      var d = new Date();
      var n = month[d.getMonth()];
      return n.toUpperCase();
    },
    dateDifference(date1, date2) {
      const difference = date2 - date1;
      return ((difference/3600000)/24).toFixed(0);
    }
  }
}
</script>

<style>

.image-circular {
  border-radius: 300px 300px 300px 300px;
  width: 15%;
}
.profile-image {
  width: 100%;
}

a.button1{
  float: left;
  padding: 0.35em 2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 15em;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;
}
a.button1:hover{
  color:#000000;
  background-color:#FFFFFF;
  font-weight: 400;
}

</style>
