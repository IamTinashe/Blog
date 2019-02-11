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
          <p>
            Among hundreds if not thousands of interesting facts about flying and aeroplanes,
            I have decided to compile 11 facts that may freak you out. But do not be moved, for
            there is a calming side to each of the facts.
          </p>
          <p>Here are 11 facts about flying that might freak you:</p>

          <ol start="1">
            <li>
              Landing is nothing more than a controlled crash landing. In other words, technically
              you are crashing. The good news though is that it’s controlled.
            </li>
            <br>
            <li>
              Aeroplanes get hit by lighting on a regular basis. The good news though is that
              Aeroplanes are designed to be lighting-proof, and no plane has ever crashed due to a
              lighting.
            </li>
            <br>
            <li>
              Turbulence is the wobbly movement of air which causes a plane to tremor or swerve
              unsteadily. It happens very often and is the number one cause for flight anxiety.
              Good news however is, that it is perfectly normal, and almost never puts the aircraft
              in danger.
            </li>
            <br>
            <li>
              There is no row 13 aboard an aircraft. Most countries consider 13 an unlucky number.
              We’re not superstitious, but you can never be too sure, right?
            </li>
            <br>
            <li>
              On passenger planes fuel tanks are integrated on the wings. Sometimes (if not many times)
              planes offload the fuel in mid-air in a process called fuel jettison. I have witnessed
              this on 2 occasions. The first time I saw it, I thought it was a leak and I was terrified.
            </li>
            <br>
            <li>
              Do pilots sleep during a flight? The simple answer is yes they sleep. In pilot terms they
              call it controlled rest and they can sleep for up to 45 minutes. This has proven to
              improve their alertness levels during periods of high workload e.g. descend, approach and
              landing.
            </li>
            <br>
            <li>If you sit at the back of an aeroplane, your chances of surviving a crash are 40% higher.</li>
            <br>
            <li>
              Pilots aren’t allowed to share – food as a safety precaution. Pilots order and eat
              different crew meals while on flight.
            </li>
            <br>
            <li>
              Aeroplanes’ engines vary from 2 to 6 engines. In case of failure, planes can fly with one
              engine, and land with none.
            </li>
            <br>
            <li>
              Research shows that the first 3 minutes after take-off and the final 8 minutes before landing
              are when 80% of plane crashes happen. While this may freak you out, flying is the safest mode
              of transport in the world.
            </li>
            <br>
            <li>The fear for flying is called aviophobia.</li>
            <br>
          </ol>
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
            <router-link :to="'/blog/' + recommended.slug">
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

          <!-- Side Widget -->
          <div class="card my-4" style="height: 200px;">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LVYRclVjP2U?autoplay=1"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
  data() {
    return {
      post: {
        title: '11 facts about flights and planes that may freak you',
        author: 'Tinashe Zvihwati',
        description:
          'For the last 7 years, I have flown a total of about 80 000km on 9 different airlines (that’s about 2 times Earth’s circumference). But with all the experience and the fact that flying is the safest mode of transport in the world I still get nervous about flying every now and then. Here is why.',
        imagename:
          'tinashe-zvihwati-facts-about-flights-and-planes-that-may-freak-you.jpg',
        slug: '11-facts-about-flights-and-planes-that-may-freak-you',
        createdAt: '2019-02-10T13:37:26.031Z',
        updatedAt: '2019-02-10T13:37:26.031Z',
        currenturl: '',
        category: {
          one: 'Travel',
          two: 'Photography',
          three: 'Flight',
          four: 'Flying',
          five: 'Facts',
          six: 'Aviation'
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
      this.post.currenturl = 'https://www.iamtinashe.io/' + post.slug
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