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
            July 2017 I went on an adventure to celebrate my 24th birthday. I was up for a
            thrill that would give me an adrenaline rush. 2 weeks prior to my birthday, I
            made a booking at
            <a
              href="https://thegreenvalleyhotel.reservehotel.net/"
              target="_blank"
              rel="noopener"
              title="Green Valley Hotel"
            >Green Valley Hotel</a>,
            which was fantastically affordable at that
            time. The whole trip was for three days in Fethiye. I didn’t have a ride so I
            hopped on a bus and made my way from Izmir to Fethiye on a 6 hour journey. I was
            with my homie from Tanzania. Upon arrival we got a taxi to the hotel where we
            spent the rest of the day resting due to the fatigue from long journey.
          </p>
          <p>
            The following day we went out to explore. The beauty, energy and vibe in that
            town cannot be described in words. Everyone was friendly. There were mostly English
            speakers, which made the whole trip much easier and more fun. Night life was on
            point and everything was lit. As a student at that time however Fethiye did appear
            though to be a rich people’s town as everything seemed pretty expensive (well, for
            my budget). Anyway let’s get back to the story.
          </p>
          <p>
            I asked for prices and boy; was it expensive to paraglide (well for my budget)!
            I began having second thoughts about paragliding. We went down to the beach, known
            locally as Ölüdeniz. The site was so beautiful it can best be described by David
            Livingstone’s quotes on Victoria Falls:
          </p>
          <p></p>
          <blockquote class="blockquote">
            <p class="mb-0">“Scenes so lovely must have been gazed upon by angels in their flight.”</p>
            <footer class="blockquote-footer">
              -
              <a
                href="https://www.bbc.co.uk/history/historic_figures/livingstone_david.shtml"
                target="_blank"
                rel="noopener"
                title="David Livingstone"
              >
                <cite title="David Livingstone">David Livingstone</cite>
              </a>
            </footer>
          </blockquote>
          <p>
            The parachutes in the blue skies, the ever cheerful
            people on the beach, the blue sea, the blue lagoon, and the yon orange sun. Of course,
            I had to change my mind. Surely I couldn’t return without doing the one thing that I
            travelled all the way for.
          </p>
          <p>
            And so it began. I made my reservation to paraglide. After booking I became ambivalent.
            This was my first experience to do such a risky adrenaline sport. I was excited, but
            anxiety began tiptoeing. At 15:00 we got into a minibus, to a mountain from which we
            would jump. Notoriously known as Babadağ (Father of Mountains). As we drove up the
            mountain (I’m talking about 2km above sea level) the more amplified my emotions became.
            The excitement but then the anxiety. The adventurer’s whispers became my anthem for the
            day, “You Only Live Once!”
          </p>
          <p>In case you do not know what paragliding is:</p>
          <blockquote class="blockquote">
            <p class="mb-0">
              It is the recreational and competitive adventure sport of flying paragliders: lightweight,
              free-flying, foot-launched glider aircraft with no rigid primary structure. The pilot sits
              in a harness suspended below a fabric wing.
            </p>
            <footer class="blockquote-footer">
              Source
              <a
                href="https://en.wikipedia.org/wiki/Paragliding"
                target="_blank"
                rel="noopener"
                title="Paragliding"
              >
                <cite title="Wikipedia">Wikipedia</cite>
              </a>
            </footer>
          </blockquote>
          <p>
            As I stood on top of the mountain, I could barely see where we had come from. We were
            quite far and way up!
          </p>
          <p>
            <strong>“Do I really want to do this?”</strong>
          </p>
          <p>
            Behind me was a couple that had just decided not to jump and would return. The thought
            of returning began creeping. But the road we drove through wasn’t that pleasant as well,
            so I was now locked in a fight or flight situation. Return down the crazy scary road or
            jump 6500ft down.
          </p>
          <p>
            For any adventurer, the choice to make was pretty obvious. The pilot tied on the belts
            to the parachute and off we jumped. 1969m above the sea we glided and I couldn’t believe
            myself. For the first few minutes it was quite a terrifying experience. The friendly pilot
            began a conversation to ease the flight and then abruptly began shouting, “I’m losing
            control, we are falling, we are going die, we are going to die!” You can imagine how
            terrified I must have been. Upon realising that it was a prank I immediately burst
            out in laughter. Quite a spectacular one he pulled there! “If you weren’t the pilot,
            I would have killed you my friend,” I roared.
          </p>
          <img
            src="/blogs/tinashe-zvihwati-paragliding-fethiye-two.jpg"
            class="img-fluid rounded"
            data-holder-rendered="true"
            alt="Paragliding in Fethiye"
          >
          <br>
          <br>
          <br>
          <p>
            Mid-air he began showing me some cool tricks and flips and that’s when the real fun
            began. He could rotate, flip, swing, and fly up and down again. Suddenly I didn’t
            want to land anymore. The more the tricks the more the thrill became. I couldn’t stop
            gazing down the marvelous aerial view of Fethiye’s Ölüdeniz. It was a satisfying scene
            to watch.
          </p>
          <p>
            After quite some time in the air, we finally landed. The experience became one of my
            greatest memories. And as they say, some memories are meant to last a lifetime.
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

          <!-- Side Widget -->
          <div class="card my-4" style="height: 200px;">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0X7XscvFjTg?autoplay=1"
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
        title: 'Paragliding Experience in Fethiye, Turkey',
        author: 'Tinashe Zvihwati',
        description: 'I’m thrilled to share my paragliding experience in Fethiye, Turkey. It was one of my most adventurous experinces therefore definitely worth the share. And as they say, some memories are meant to last a lifetime.',
        imagename: 'tinashe-zvihwati-paragliding-fethiye.jpg',
        slug: 'paragliding-experience-in-fethiye-turkey',
        createdAt: '2019-02-09T23:16:40.871Z',
        updatedAt: '2019-02-09T23:16:40.871Z',
        currenturl: 'https://www.iamtinashe.io/blog/paragliding-experience-in-fethiye-turkey',
        category: {
          one: 'Travel',
          two: 'Photography',
          three: 'Turkey',
          four: 'Fethiye',
          five: '',
          six: ''
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
            'Web Development, Nodejs, Vuejs, Mongodb, NGINX, Travel, Zimbabwe, Blogger, Writer, Photography, Tinashe, Zvihwati, Paragliding, Fethiye, Turkey'
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