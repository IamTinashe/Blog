<template>
    <div style="width: 100%;">
        <div class="row div-spacing position" style="margin-bottom: 10px;">
            <div class="col-md-12" style="text-align: left;">
                <h1 class="display-3" style="font-size: 2.3em; margin-left: 30px;">{{ post.title }}</h1>
            </div>
        </div>
        <div class="row">
          <div class="col-md-9 nopadding wrapper">
            <div class="row">
              <div class="col-md-12">
                <img
                :src="getImgPath(post.imagename)"
                class="image-post"
                data-holder-rendered="true"/>
              </div>
            </div>
            <div class="mid-sec row nopadding">
              <div class="blog-content col-md-12 ">
                <div class="paragraphs">
                  <p class="lead note" style="font-size: 1.2em;">{{ post.content }}</p>
                </div>
                <div class="meta-div col-md-6">
                  <i class="fa fa-user fa-x"/>
                  <small>{{ post.author }}</small>
                </div> 
                <div class="meta-div col-md-6">
                  <i class="fa fa-tags fa-x"/>
                  <small>{{ post.category }}</small>
                </div>
              </div>
            </div>
            <div class="row position div-spacing">
              <div class="col-md-12 comments">
                <div id="disqus_thread"></div>
                <script>

/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://iamtinashe-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>          
              </div>
            </div>
          </div>
          <div class="blog-side-bar col-md-3 nopadding">
            <div class="side-video">
              <iframe
                width="100%"
                :src="getVideoUrl(post.videourl)"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
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
      text: ''
    }
  },
  async created(){
    try{
      this.post = await PostService.getPost(this.$route.params.slug);
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    getImgPath(pic) {
      var ImagePath = '/_nuxt/assets/blogs/' + this.post.imagename
      return ImagePath
   },
   getVideoUrl(video) {
      return video
   },
   getPageUrl() {
     var pageUrl = 'http://159.69.120.82/blog/' + this.post.slug
     console.log(pageUrl)
     return pageUrl
   }
  },
  head() {
    return {
      title: this.post.title,
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
          'content': 'https://www.tinashe.io'
        }
      ],
    }
  }
};
</script>

<style>
.image-post {
  width: 95%;
  border-radius: 2px 2px 2px 2px;
}

.note {
  white-space: pre-line;
  word-wrap: break-word;
  text-align: justify;
}

.mid-sec{
    text-align: left;
    width: 100%;
  }

  .blog-content .lead{
    font-size: 12pt;
    float: left;
  }

  .blog-side-bar{
    float: left;
  }

  .meta-div{
    float: left;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .blog-content label{
    font-size: 8pt;
    font-weight: bold;
    width: 10%;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .blog-content small{
    font-size: 8pt;
    font-weight: lighter;
    margin-top: 0px;
    margin-left: 5px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .paragraphs{
    margin-top: 5%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .side-video{
    margin-top: 40px;
  }
</style>

