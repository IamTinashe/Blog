<template>
  <div>
    <div class="row position div-spacing">
      <div class="position">
        <h1 class="title">Hi there, I'm Tinashe</h1>
      </div>
      <div class="position">
        <h2 class="subtitle">Welcome to my portfolio</h2>
      </div>
      <div class="profile-image position">
        <img class="image-circular" src="@/assets/tinashe.png">
      </div>
    </div>
    <div class="position div-spacing row nopadding">
      <div class="col-md-6">
        <p class="lead">
          Yes, I am a developer. Welcome to my website! I am a full-stack developer based in Turkey.
          I like to write about my experiences so be sure to check out my blog. It's packed with interesting
          experiences and a whole bunch of cool tricks and flips that I have had along the way.
        </p>
        <p class="lead">
          I have been learning JavaScript Frameworks lately so I decided to make this website as my first
          project in VueJS. If you are interested in how I made it,
          <router-link :to="'/how-i-developed-my-website'">Click Here</router-link>
        </p>
        <p class="lead">Have fun browsing through, and let me know if you find anything interesting!</p>
      </div>
      <div class="col-md-6 prof-container">
        <h2 class="subtitle">Profile</h2>
        <hr>
        <div class="row prof-blok">
          <div class="md-col-5" style="width: 20%; margin-left: 15px;">
            <p class="fonts-two">Current</p>
          </div>
          <div class="md-col-6" style="width: 70%;">
            <p class="fonts-six">Support Engineer</p>
            <p class="fonts-six">Comstice Inc.</p>
            <p class="fonts-six">Izmir, Turkey</p>
            <p class="fonts-six">March 2018 - Present</p>
          </div>
        </div>
        <hr>
        <div class="row prof-blok">
          <div class="md-col-5" style="width: 20%; margin-left: 15px;">
            <p class="fonts-two">Education</p>
          </div>
          <div class="md-col-6" style="width: 70%;">
            <p class="fonts-six">Bsc. in Computer Engineering</p>
            <p class="fonts-six">Izmir Institute of Technology</p>
            <p class="fonts-six">August 2018</p>
          </div>
        </div>
        <hr>
        <div class="row prof-blok">
          <div class="md-col-5" style="width: 20%; margin-left: 15px;">
            <p class="fonts-two">Skillset</p>
          </div>
          <div class="md-col-6" style="width: 70%;">
            <Skillset/>
          </div>
        </div>
      </div>
    </div>
    <div class="album py-5">
      <div v-if="error" class="error div-spacing">
        <p class="lead">{{ error }}</p>
      </div>
      <div class="container">
        <div
          v-for="(post, index) in posts"
          :item="post"
          :index="index"
          :key="post._id"
          class="post col-md-4"
        >
          <router-link :to="'/blog/' + post.slug">
            <div class="card mb-4 shadow-sm">
              <img
                :src="getImgUrl(post.imagename)"
                class="card-img-top post-image"
                data-holder-rendered="true"
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
    <div class="row position div-spacing">
     <div class="widget col-md-4">
       <div class="card mb-4 shadow-sm">
          <github-feed login="IamTinashe"></github-feed>
        </div>
     </div>
     <div class="widget col-md-4">
       <div class="card mb-4 shadow-sm">
          <iframe src="https://open.spotify.com/embed/user/iamtinashe/playlist/0dIqxVdl3eDNUX9rD6Nxfx" width="100%"
            height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
     </div>
     <div class="widget col-md-4">
       <div class="card mb-4 shadow-sm">
          Microposts Here!
        </div>
     </div>
    </div>
    <div class="row position div-spacing" >
      <form method="post" style="width: 100%;">
        <div class="row">
          <div class="col-md-12" style="text-align: left;">
            <h3 class="subtitle" >Send me a message</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" name="name" class="form-control" placeholder="Full Name" value="" />
            </div>
            <div class="form-group">
              <input type="text" name="email" class="form-control" placeholder="Email" value="" />
            </div>
            <div class="form-group">
              <input type="text" name="phone" class="form-control" placeholder="Phone Number" value="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <textarea name="message" class="form-control" placeholder="Your Message" style="width: 100%; height: 150px;"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input type="submit" name="btnSubmit" class="button" value="Send Message" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PostService from '@/components/PostService'
import Skillset from '@/components/skillsetchart'

export default {
  name: 'PostComponent',
  components: { Skillset: Skillset },
  data() {
    return {
      posts: [],
      error: '',
      text: ''
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
      return require('../assets/blogs/' + pic)
    }
  },
  head() {
    return {
      title: 'Tinashe Zvihwati',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I am a Web Developer, beatmaker and photographer'
        },
        {
          name: 'author',
          content: 'Tinashe Zvihwati'
        },
        {
          name: 'keywords',
          content: 'Web Development, Nodejs, Vuejs, Mongodb, NGINX'
        },
        {
          property: 'og:site_name',
          content: 'Tinashe Zvihwati'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Tinashe Zvihwati'
        },
        {
          property: 'og:description',
          content: 'I am a Web Developer, beatmaker and photographer'
        },
        {
          property: 'og:url',
          content: 'https://www.tinashe.io'
        }
      ]
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
.error {
  color: red;
}

.card {
  -webkit-box-shadow: 11px -12px 15px -2px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: 11px -12px 15px -2px rgba(0, 0, 0, 0.95);
  box-shadow: 11px -12px 15px -2px rgba(0, 0, 0, 0.95);
}

.post-image {
  height: 225px;
  width: 100%;
  display: block;
}

.prof-container {
  text-align: left;
}

.prof-blok {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
