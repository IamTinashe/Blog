<template>
    <div style="width: 100%;">
        <!-- Page Content https://startbootstrap.com/previews/blog-post/ -->
      <div class="container" style="margin-top: 100px; margin-bottom: 20px;">
        <div class="row">
          <div class="col-lg-8" style="background-color: #ffffff; margin-top: 25px; border-radius: 2px;">
            <h1 class="mt-4" style="font-size: 28px;">{{post.title}}</h1>
            <p class="lead">
              by
              <router-link
                :to="'/profile'"
                title="Tinashe Zvihwati">
                {{post.author}}
              </router-link>
            </p>
            <hr>
            <p>Posted on {{ dateConversion(post.createdAt) }}</p>
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
            <p>
							As a junior developer I meet and work with many other developers. Some of them
							have just started learning how to develop, some have a bit of experience in the
							field and in some cases may even know much more than I do and some develop at a
							very senior level with years of experience.
						</p>
						<p>
							I have noticed that every developer - senior developers in particular; has their
							own taste of acceptable hacks. Nevertheless, one thing that has been undeniably
							true to me is that working with senior developer makes the whole process of coding
							much more appreciable. Coding becomes fun and simple.
						</p>
						<p>
							The world of coding can have so much magic concealed in it. As a junior developer,
							you will need a senior to unravel some hacks to aid you through. Based on my experiences,
							seniors are always enthused to share some cool hacks to their junior folk. And it’s
							amazing the thrill you get when you finally lay your hands on a cool hack especially
							if you have been stuck on a bug for ages. If you are a junior developer, I am sure you
							can testify to this.
						</p>
						<p>
							Bugs can be very difficult to spot, but seniors always seem to pick them at a glance.
							It’s that magic that never seizes to amaze me. As I was developing this site, I had
							trouble pulling each blog from Mongodb. One of my APIs wasn’t pulling data and I just
							couldn’t understand why. It took me a while to figure out until I asked one of the senior
							developers at work. After inspecting element he told me to check my config file and boom
							there it was. A bug! I had written an incorrect URL in my function from the one that was
							in my proxy. Small as it sounds, believe me it took me ages to figure out. He went on to
							say, “When connecting to Mongodb, it’s advisable to use Mongoose rather that to connect
							directly. Code in neater and cleaner with Mongoose. And also use a URL slug rather than
							the id.” This was just one out of many other experiences that made me realise the
							importance of working with an expert if you are a junior. I draw inspiration from
							those willing to teach.
						</p>
						<p>
							I am a junior developer (for now), a proud one, eager to work with as many people as I
							can and grasp as many concepts as I can.
						</p>

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
export default {
  data(){
    return{
      post: {
        title: "Working with a Senior Developer",
        author: "Tinashe Zvihwati",
        description: "Bugs can be very difficult to spot, but seniors always seem to pick them at a glance. It’s that magic that never seizes to amaze me. ",
        category: "Dev",
        imagename: "tinashe-blog-working-with-a-senior-developer.jpg",
        slug: "working-with-a-senior-developer",
        createdAt: "2018-11-14T16:58:41.234Z",
				updatedAt: "2018-11-15T13:26:32.276Z",
				currenturl: "",
        category: {
            one: "Web Design",
            two: "JavaScript",
            three: "Tech",
            four: "Tutorials",
            five: "HTML",
            six: "CSS"
        },
      },
    }
  },
  async created(){
    try{
      this.post.currenturl = 'https://www.iamtinashe.io/'+ post.slug;
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    getImgPath(pic) {
      var ImagePath = '/blogs/' + this.post.imagename
      return ImagePath
	 },
	 dateConversion(stringDate){
		 var mydate = new Date(stringDate);
		 var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
			var str = month + ' ' + mydate.getDate() + ', ' + mydate.getFullYear();
		 return str;
	 }
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en',
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
          content: this.post.category.one + ' ' + this.post.category.two + ' ' + this.post.category.three + ' ' + this.post.category.four + ' ' + this.post.category.five + ' ' + this.post.category.six + ' ' + 'Web Development, Nodejs, Vuejs, Mongodb, NGINX, Travel, Zimbabwe, Blogger, Writer, Photography, Tinashe, Zvihwati'
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
        },
      ]
    }
  }
};
</script>