<template>
  <div style="width: 100%;">
    <!-- Page Content https://startbootstrap.com/previews/blog-post/ -->
    <div class="container" style="margin-top: 100px; margin-bottom: 20px;">
      <div class="row">
        <div
          class="col-lg-8"
          style="background-color: #ffffff; margin-top: 25px; border-radius: 2px;"
        >
          <h1 class="mt-4" style="font-size: 28px;">{{post.title}}</h1>
          <p class="lead">by
            <router-link :to="'/profile'" title="Tinashe Zvihwati">{{post.author}}</router-link>
          </p>
          <hr>
          <p>Posted on {{ dateConversion(post.createdAt) }}</p>
          <hr>

          <img
            :src="getImgPath(post.imagename)"
            class="img-fluid rounded"
            data-holder-rendered="true"
            :alt="post.title"
          >

          <hr>

          <!-- Post Content -->
          <p class="lead">{{ post.description }}</p>
          <h2 class="fonts-two">What is Vue JS anyway?</h2>
          <p class="lead" style="font-size: 16px;">
						Vue JS is an open-source progressive JavaScript front-end framework with
						tones of tools for building user interfaces and single page apps. It was
						developed by <a href="https://evanyou.me/" title="Evan You" target="_blank" rel="noopener">Evan You</a>.
						Unlike other monolithic frameworks, Vue JS is designed
						from the ground up to be incrementally adoptable. The core library is focused
						on the view layer only, and is easy to pick up and integrate with other
						libraries or existing projects. On the other hand, Vue JS is also perfectly
						capable of powering sophisticated Single-Page Applications when used in
						combination with modern tooling and supporting libraries.
					</p>
					<p class="lead" style="font-size: 16px;">
						Vue JS has grown rapidly since its release in 2014 and shows no signs
						of dying anytime soon. As of 2018 over 60 000 websites were running on Vue
						JS including major websites like
						<a href="https://www.netflix.com" title="Netflix" target="_blank" rel="noopener">Netflix</a>,
						<a href="https://9gag.com/" title="9gag" target="_blank" rel="noopener">9gag</a>,
						<a href="https://www.buzzfeed.com/" title="Buzzfeed" target="_blank" rel="noopener">BuzzFeed</a>,
						<a href="https://laravel.com/" title="Laravel" target="_blank" rel="noopener">Laravel</a>,
						<a href="https://about.gitlab.com/" title="Gitlab" target="_blank" rel="noopener">Gitlab</a>,
						etc.
					</p>
					<h2 class="fonts-two">Here are 7 of Vue JS' top advantages</h2>
					<ol start="1" class="lead" style="font-size: 16px;">
            <li>
							Vue JS is called a progressive framework, which means it adapts to the needs
							of the developer. This would be the reverse in Angular.
            </li><br>
						<li>
							It is faster in performance than the existing frameworks.
						</li><br>
						<li>
							It is light-weight. The framework is less than 30KB therefore takes
							no time for the user to download and use it.
						</li><br>
						<li>
							Easier to understand and develop application. It has a very simple
							structure therefore saves a lot of time to learn or trace the blocks
							with errors in case of a problem.
						</li><br>
						<li>
							Simple to integrate. Being a JavaScript framework itself, it can easily
							be integrated into other applications built on JavaScript. Integration
							is possible because Vue JS has components for everything.
						</li><br>
						<li>
							Comprehensive documentation. Anyone with a bit of knowledge in JavaScript
							and HTML can easily get started with a Vue JS thanks to the well-written
							and articulate documentation.
						</li><br>
						<li>
							Two-way communication. Vue JS facilitates two way communications because
							of its MVVM architecture which makes it quite easy to handle HTML blocks.
						</li><br>
					</ol>
					<p class="lead" style="font-size: 16px;">
						For more on Vue JS checkout the 
						<a href="https://vuejs.org/" title="Vue JS" target="_blank" rel="noopener">Official Vue JS Website by Clicking</a>
					</p><br><br>

          <!-- Comments Form -->
          <div class="comments">
            <vue-disqus shortname="iamtinashe-io" :identifier="post.slug" :url="post.currenturl"></vue-disqus>
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

          <!-- Search Widget -->
          <div class="card my-4">
            <h5 class="card-header">Recommended</h5>
            <router-link :to="'/blog/' + recommended.slug" :title="recommended.title">
              <div class>
                <img
                  :src="getImgPath(recommended.imagename)"
                  class="card-img-top post-image"
                  data-holder-rendered="true"
                  alt="Blog Image"
                >
                <div class="card-body">
                  <h3 class="fonts-two">{{ recommended.title }}</h3>
                  <p class="fonts-one">{{ recommended.description }}</p>
                  <div class="row">
                    <div class="col-md-6">
                      <i class="fa fa-user fa-x"/>
                      <small class="text-muted">{{ recommended.author }}</small>
                      <br>
                      <i class="fa fa-tags fa-x"/>
                      <small class="text-muted">{{ recommended.category }}</small>
                    </div>
                    <div class="col-md-6" style="text-align: right;">
                      <i class="fa fa-calendar fa-x"/>
                      <small
                        class="text-muted"
                      >Posted on {{ dateConversion(recommended.updatedAt) }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Categories Widget -->
          <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a title="Category" href="#">{{this.post.category.one}}</a>
                    </li>
                    <li>
                      <a title="Category" href="#">{{this.post.category.two}}</a>
                    </li>
                    <li>
                      <a title="Category" href="#">{{this.post.category.three}}</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a title="Category" href="#">{{this.post.category.four}}</a>
                    </li>
                    <li>
                      <a title="Category" href="#">{{this.post.category.five}}</a>
                    </li>
                    <li>
                      <a title="Category" href="#">{{this.post.category.six}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Side Widget -->
          <div class="card my-4">
            <h5 class="card-header">Qoute</h5>
            <div class="card-body">Be the author of your own story</div>
          </div>

          <!-- Side Widget -->
          <div class="card my-4">
            <div class="card-body">
              <Adsense data-ad-client="ca-pub-3817231220206981" data-ad-slot="1234567890"></Adsense>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<style>
.bash {
  background-color: black;
  border-radius: 8px;
  border: 3px solid grey;
  color: white;
  font-family: Consolas, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
}
</style>


<script>
import PostService from '@/components/PostService'
export default {
  data() {
    return {
      post: {
        title: 'Vue JS, What is it anyway',
        author: 'Tinashe Zvihwati',
        description:
          'Different tools and techniques are being used by the developers to launch successful applications. The ever increasing demand for faster, more attractive and user-friendly web-apps is encouraging developers to adopt different tools and techniques. Vue.js is one of the new technologies that is being widely used across the globe for web development.',
        imagename: 'tinashe-zvihwati-vue-js-what-is-it-anyway.png',
        slug: 'vue-js-what-is-it-anyway',
        createdAt: '2019-02-17T01:33:35.871Z',
        updatedAt: '2019-02-17T01:33:35.871Z',
        currenturl: 'https://www.iamtinashe.io/blog/vue-js-what-is-it-anyway',
        category: {
          one: 'Vue.js',
          two: 'Vue JS',
          three: 'Nuxt',
          four: 'Frameworks',
          five: 'JavaScript',
          six: 'Technology'
        }
      },
      recommended: {},
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      var posts = await PostService.getPosts()
      this.recommended = posts[Math.floor(Math.random() * posts.length)]
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    getImgPath(pic) {
      var ImagePath = '/blogs/' + pic
      return ImagePath
    },
    dateConversion(stringDate) {
      var dateFormat = require('dateformat')
      var mydate = new Date(stringDate)
      if (!isNaN(mydate.getTime()))
        return dateFormat(mydate, 'dddd, mmmm dS, yyyy, h:MM TT')
      else return 'unknown'
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'IamTinashe | ' + this.post.title,
      link: [
        {
          hid: 'canonical',
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
          hid: 'author',
          name: 'author',
          content: this.post.author
        },
        {
          hid: 'date',
          name: 'date',
          content: this.post.createdAt
        },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: '#ffffff'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            this.post.category.one +
            ', ' +
            this.post.category.two +
            ', ' +
            this.post.category.three +
            ', ' +
            this.post.category.four +
            ', ' +
            this.post.category.five +
            ', ' +
            this.post.category.six +
            ', ' +
            'Web Development, Nodejs, Vuejs, Mongodb, NGINX, Travel, Zimbabwe, Blogger, Writer, Photography, Tinashe, Zvihwati'
        },
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: 'Nvtxn485Uph-S7HHc_RiwvMb6lUkM-43KLCV05xUNZo'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'iamtinashe.io'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.iamtinashe.io/' + this.post.slug
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en_GB'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/blogs/' + this.post.imagename
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'name',
          itemprop: 'name',
          content: this.post.title
        },
        {
          hid: 'description',
          itemprop: 'description',
          content: this.post.description
        },
        {
          hid: 'image',
          itemprop: 'image',
          content: '/blogs/' + this.post.imagename
        }
      ]
    }
  }
}
</script>
