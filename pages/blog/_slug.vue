<template>
    <div style="width: 100%;">
        <div class="row div-spacing position">
            <div class="col-md-12" style="text-align: left;">
                <h1 class="display-3" style="font-size: 2.3em;">{{ post.title }}</h1>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12 nopadding">
            <!--<img
              :src='getImgUrl(post.imagename)'
              class="image-post"
              data-holder-rendered="true"/> -->
          </div>
        </div>
        <div class="mid-sec row nopadding">
          <div class="blog-content col-md-9 ">
            <div class="paragraphs">
              <p class="lead note" style="font-size: 1.2em;">{{ post.content }}</p>
            </div>
            <div class="meta-div col-md-6"><i class="fa fa-user fa-x"></i><small>{{ post.author }}</small></div> 
            <div class="meta-div col-md-6"><i class="fa fa-tags fa-x"></i><small>{{ post.category }}</small></div>
          </div>
          <div class="blog-side-bar col-md-3 nopadding">
            <div class="side-video">
              <iframe width="100%" :src="getVideoUrl(post.videourl)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    getImgUrl(pic) {
      return require('../../assets/blogs/'+pic)
   },
   getVideoUrl(video) {
      return video
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
  width: 100%;
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

