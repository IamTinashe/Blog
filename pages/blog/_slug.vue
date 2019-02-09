<template>
    <div style="width: 100%;">
        <!-- Page Content https://startbootstrap.com/previews/blog-post/ -->
      <div class="container" style="margin-top: 100px; margin-bottom: 20px;">
        <div class="row">
          <div class="col-lg-8" style="background-color: #ffffff; margin-top: 25px; border-radius: 2px;">
            <h1 class="mt-4">{{post.title}}</h1>
            <p class="lead">
              by
              <router-link
                :to="'/profile'"
                title="Tinashe Zvihwati">
                Tinashe Zvihwati
              </router-link>
            </p>
            <hr>
            <p>Posted on {{ post.createdAt }}</p>
            <hr>

            <img
              :src="getImgPath(post.imagename)"
              class="img-fluid rounded"
              data-holder-rendered="true"
              :alt="post.title"
            />

            <hr>

            <!-- Post Content -->
            <p class="lead">{{ post.description }}</p>
            <p>{{ post.content }}</p>

            <!-- Comments Form -->
            <div class="comments">
              <vue-disqus shortname="iamtinashe-io" :identifier="post.slug" :url="currenturl"></vue-disqus>
            </div>
          </div>

          <!-- Sidebar Widgets Column -->
          <div class="col-md-4">
            <!-- Search Widget -->
            <div class="card my-4">
              <h5 class="card-header">Search</h5>
              <div class="card-body">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for...">
                  <span class="input-group-btn">
                    <button class="btn btn-secondary" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>

            <!-- Categories Widget -->
            <div class="card my-4">
              <h5 class="card-header">Categories</h5>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Side Widget -->
            <div class="card my-4">
              <h5 class="card-header">Qoute</h5>
              <div class="card-body">
                Be the author of your own story
              </div>
            </div>

            <!-- Side Widget -->
            <div class="card my-4">
              <div class="card-body">
                <Adsense
                  data-ad-client="ca-pub-3817231220206981"
                  data-ad-slot="1234567890">
                </Adsense>
              </div>
            </div>

            <!-- Side Widget -->
            <div class="card my-4">
              <h5 class="card-header">Qoute</h5>
              <div class="card-body">
                Be the author of your own story
              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->

    </div>
</template>

<script>
import PostService from '@/components/PostService'

export default {
  name: 'PostComponent',
  data(){
    return{
      post: {},
      error: '',
      text: '',
      currenturl: ''
    }
  },
  async created(){
    try{
      this.post = await PostService.getPost(this.$route.params.slug);
      this.currenturl = window.location.pathname;
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    getImgPath(pic) {
      var ImagePath = '/blogs/' + this.post.imagename
      return ImagePath
   },
   getVideoUrl(video) {
      return video
   }
  },
  head() {
    return {
      title: this.post.title,
      link: [
        {
          rel: 'canonical',
          href: 'https://www.iamtinashe.io/' + this.post.slug
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        },
        {
          name: 'author',
          content: 'Tinashe Zvihwati'
        },
        {
          name: 'keywords',
          content: this.post.category + ', Web Development, Nodejs, Vuejs, Mongodb, NGINX'
        },
        {
          name: 'google-site-verification',
          content: 'Nvtxn485Uph-S7HHc_RiwvMb6lUkM-43KLCV05xUNZo'
        },
        {
          'property': 'og:site_name',
          'content': 'Tinashe Zvihwati'
        },
        {
          'property': 'og:type',
          'content': 'website'
        },
        {
          'property': 'og:title',
          'content': this.post.title
        },
        {
          'property': 'og:description',
          'content': this.post.description
        },
        {
          'property': 'og:url',
          'content': 'https://www.iamtinashe.io'
        }
      ],
    }
  }
};
</script>