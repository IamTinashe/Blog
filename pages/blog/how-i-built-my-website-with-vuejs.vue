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
            This is how built my site, and how you can build yours. Optionally
            you can pull the project from
            <a
              href="https://github.com/IamTinashe/Blog"
              target="_blank"
              rel="noopener"
              title="Github IamTinashe">my github
            </a>. It is free and public. Please report any issues via Git. Or you
            can get straight on and develop using the following steps!
          </p>
					<h2 class="subtitle">Technologies</h2>
          <p>
            <a href="https://vuejs.org/" title="Vue JS" target="_blank" rel="noopener">Vue JS</a>,
            <a href="https://nodejs.org/en/" title="Node JS" target="_blank" rel="noopener">Node JS</a>,
            <a href="https://getbootstrap.com/" title="Bootstrap" target="_blank" rel="noopener">Bootstrap</a>,
            <a href="https://www.npmjs.com/" title="Node Package Manager" target="_blank" rel="noopener">NPM</a>,
            <a href="https://nuxtjs.org/" title="Nuxt" target="_blank" rel="noopener">Nuxt</a>,
            <a href="https://www.mongodb.com/" title="Mongodb" target="_blank" rel="noopener">Mongodb</a>,
            <a href="https://www.nginx.com/" title="NGINX High Performace Web Server" target="_blank" rel="noopener">NGINX</a>,
            <a href="https://www.digitalocean.com/" title="Digital Ocean VPS" target="_blank" rel="noopener">VPS - Ubuntu 16</a>,
            <a href="http://pm2.keymetrics.io/" title="production process manager for Node.js" target="_blank" rel="noopener">pm2 (Production)</a>,
          </p>

          <h2 class="subtitle">For Development</h2>

          <h3 class="lead" style="padding: 20px 0 20px 0;">Install Nodejs</h3>
          <pre class="bash">
            <code >
              curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
              apt-get install -y nodejs
              npm i -g n
              n 10.13.0
            </code>
          </pre>

          <h3 class="lead" style="padding: 20px 0 20px 0;">Mongodb</h3>
          <p>I used
            <a
              href="https://mlab.com/"
              target="_blank"
              rel="noopener"
              title="Mlab">Mlab
            </a>as my Database. Mlab provides Database-as-a-Service for MongoDB
          </p>

          <h3 class="lead" style="padding: 20px 0 20px 0;">Create your Nuxt Application</h3>
          <p>
            Nuxt.js presets all the configuration needed to make your development of a Vue.js.
            This includes server side rendering, which is very important for website and in SEO.
          </p>
          <pre class="bash">
            <code >
              create-nuxt-app Your_Project_Name
            </code>
          </pre>
          <ol start="1" class="fonts-seven">
            <li>Enter Project Name</li>
            <li>Enter Project Description</li>
            <li>Select Server Framework in my case Express</li>
            <li>Select UI Framework in my case Bootstrap</li>
            <li>Choose rendering mode in my case Universal</li>
            <li>The rest should be a piece of cake</li>
          </ol>
          <p>Allow it to install the modules when you are done</p>

          <h3 class="lead" style="padding: 20px 0 20px 0;">Let's start the App</h3>
          <pre class="bash">
            <code >
              cd Your_Project_Name
              npm run dev
            </code>
          </pre>

          <p>Your app should start and run on port 3000. Go to the browser on http://localhost:3000</p>
          <p>At this point, you are setup and ready to develop. Watch out for more on development in vuejs</p>

          <h2 class="subtitle">For Production</h2>
          <h3 class="lead" style="padding: 20px 0 20px 0;">PM2</h3>
          <p>
            PM2 is an advanced, production process manager for Node.js. It allows your app to
            continuously, i.e. when it crashes or when the server reboots it automatically starts your app.
          </p>
          <pre class="bash">
            <code >
              npm i -g pm2@latest
            </code>
          </pre>
          <p>And then to start the app</p>
          <pre class="bash">
            <code >
              pm2 start npm --name "Your_App_Name" -- start
            </code>
          </pre>

          <h3 class="lead" style="padding: 20px 0 20px 0;">NGINX</h3>
          <p>
            Nginx is a high performance web server that is popularly used around the world. It is more
            resource-friendly than Apache in most cases and can be used as a web server or a reverse proxy.
          </p>
          <pre class="bash">
            <code >
              sudo apt-get install nginx
              sudo ufw allow 'Nginx HTTP'
              service nginx start
            </code>
          </pre>

          <p>Setting Up NGINX</p>
          <pre class="bash">
            <code >
              sudo mkdir -p /var/www/html/site_name

              Copy Your Project to the folder

              sudo chown www-data:www-data /var/www/html
              sudo chmod -R 755 /var/www/html

              sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/site_name
              sudo vi /etc/nginx/sites-available/site_name
            </code>
          </pre>
          <p> Save the following in the file</p>

          <pre>
            <code >
              upstream my_nodejs_upstream {
                  server 127.0.0.1:3000;
                  keepalive 64;
              }

              server {
                  listen 80;
                  server_name your_server_name;
                  root /var/www/html/site_name;
                  
                  location / {
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header Host $http_host;
                    proxy_set_header X-NginX-Proxy true;
                    proxy_http_version 1.1;
                    proxy_set_header Upgrade $http_upgrade;
                    proxy_set_header Connection "upgrade";
                    proxy_max_temp_file_size 0;
                    proxy_pass http://your_server_name/;
                    proxy_redirect off;
                    proxy_read_timeout 240s;
                  }
              }
            </code>
          </pre>

          <p>Finish off the config with the following commands</p>

          <pre class="bash">
            <code >
              sudo rm /etc/nginx/sites-enabled/default
              sudo ln -s /etc/nginx/sites-available/site_name /etc/nginx/sites-enabled/
              sudo nginx -t
              sudo systemctl reload nginx
            </code>
          </pre>

          <h2 class="subtitle">Hurray! Setup Complete!</h2>
          <br><br>

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
  font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;
}
</style>


<script>
import PostService from '@/components/PostService'
export default {
  data() {
    return {
      post: {
        title: 'How I built my website with vuejs',
        author: 'Tinashe Zvihwati',
        description:
          'As a developer I figured that I needed a website of my own. One where I would play around with new technologies and share my experiences in the industry. After hearing a lot about Node and Vue JS I finally decided to build my website using the 2 JavaScript Frameworks. Here is how I did it.',
        imagename: 'tinashe-zvihwati-how-I-built-my-website-with-vuejs.jpg',
        slug: 'how-i-built-my-website-with-vuejs',
        createdAt: '2019-02-09T23:16:40.871Z',
        updatedAt: '2019-02-09T23:16:40.871Z',
        currenturl:
          'https://www.iamtinashe.io/blog/how-i-built-my-website-with-vuejs',
        category: {
          one: 'Node JS',
          two: 'Vue JS',
          three: 'Nuxt',
          four: 'Mongdb',
          five: 'JavaScript',
          six: 'Ubuntu'
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
