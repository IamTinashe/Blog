<template>
  <div>
    <t-header/>
    <div class="nopadding" style="width: 100%; margin-right: 0px;">
      <div class="row nopadding" style="width: 100%;">
        <nuxt/>
      </div>
      <footer class="position " style="background: #ffffff; padding-top: 100px; width: 100%;">
        <div class="row" style="width: 80%; margin-left: 10%;">
          <div class="col-md-4">
            <i class="fa fa-code fa-3x"/>
            <h4 class="subtitle">Coding</h4>
            <p class="fonts-three">
              I design fantastic interfaces for web and mobile apps. Click here to see my skill set and some of my work
            </p>
          </div>
          <div class="col-md-4">
            <i class="fa fa-music fa-3x"/>
            <h4 class="subtitle">Music</h4>
            <p class="fonts-three">
              I make beats for fun. Still have a couple of stuff to learn in the field. Click to see my work and let me know what you think.
            </p>
          </div>
          <div class="col-md-4">
            <i class="fa fa-camera fa-3x"/>
            <h4 class="subtitle">Photography</h4>
            <p class="fonts-three">
              I have found myself loving photography for quite a while now. Still new to the field. Click to check my work
            </p>
          </div>
        </div>
        <div class="connect">
          <div class="col-md-12">
            <h4 class="subtitle">Connect with me!</h4>
            <div class="social-icons">
              <a
                href="https://wa.me/905347745196"
                target="_blank"
                title="WhatsApp">
                <i class="fa fa-whatsapp fa-2x"/>
              </a>

              <a
                href="https://www.facebook.com/TinashePride"
                target="_blank"
                title="Facebook">
                <i class="fa fa-facebook fa-2x"/>
              </a>

              <a
                href="https://twitter.com/IamTinashe__"
                target="_blank"
                title="Twitter">
                <i class="fa fa-twitter fa-2x"/>
              </a>

              <a
                href="https://www.linkedin.com/in/tinashepride"
                target="_blank"
                title="LinkedIn">
                <i class="fa fa-linkedin fa-2x"/>
              </a>

              <a
                href="https://github.com/IamTinashe"
                target="_blank"
                title="Github">
                <i class="fa fa-github fa-2x"/>
              </a>

              <a
                href="https://www.instagram.com/iamtinashe_"
                target="_blank"
                title="Instagram">
                <i class="fa fa-instagram fa-2x"/>
              </a>

              <a
                href="https://soundcloud.com/tinashe-zvihwati"
                target="_blank"
                title="Soundcloud">
                <i class="fa fa-soundcloud fa-2x"/>
              </a>

              <a
                href="https://www.youtube.com/user/tinashepride"
                target="_blank"
                title="Youtube">
                <i class="fa fa-youtube fa-2x"/>
              </a>

              <a
                href="https://www.snapchat.com/add/tinashepride"
                target="_blank"
                title="Snapchat">
                <i class="fa fa-snapchat-ghost fa-2x"/>
              </a>

              <a
                href="https://steamcommunity.com/id/iamtinashe"
                target="_blank"
                title="Steam">
                <i class="fa fa-steam fa-2x"/>
              </a>
            </div>
          </div>
        </div>
        <div class="row fonts-four position">
          <p>
            Developed by Tinashe Zvihwati
            <br>Copyright 2018
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: { 't-header': Header },
  head() {
    return {
      title: 'Tinashe\'s Website',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Welcome to Tinashe Zvihwati\'s website. All about sharing experiences, opinions and ideas'
        },
        {
          name: 'author',
          content: 'Tinashe Zvihwati'
        },
        {
          name: 'keywords',
          content: 'Web Development, Nodejs, Vuejs, Mongodb, NGINX, Travel, Zimbabwe, Blogger, Writer, Photography, Tinashe, Zvihwati'
        },
        {
          name: 'google-site-verification',
          content: 'Nvtxn485Uph-S7HHc_RiwvMb6lUkM-43KLCV05xUNZo'
        },
        {
          property: 'og:site_name',
          content: 'iamtinashe.io'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Tinashe\'s Website'
        },
        {
          property: 'og:description',
          content: 'Welcome to Tinashe Zvihwati\'s website. All about sharing experiences, opinions and ideas'
        },
        {
          property: 'og:url',
          content: 'https://www.iamtinashe.io'
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.position {
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.div-spacing {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
}

.wrapper {
  justify-content: center;
  align-items: center;
  text-align: center;
}

.footer {
  margin-bottom: 0px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 28px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

a {
  color: #000000;
}

a:hover {
  color: #000000;
  text-decoration: none;
}

.fonts-one {
  font-weight: 320;
  font-size: 16px;
  color: #526488;
  padding-bottom: 15px;
  text-align: justify;
}

.fonts-two {
  font-weight: 400;
  font-size: 18px;
  color: #000000;
}

.fonts-three {
  font-weight: 320;
  font-size: 18px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.fonts-four {
  font-weight: 320;
  font-size: 12px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  margin-top: 50px;
}

.fonts-six {
  font-weight: 320;
  font-size: 13px;
  color: #526488;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: justify;
}

.fonts-seven {
  font-weight: 400;
  font-size: 13px;
  color: #000000;
}

.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}

.button {
  width: 100%;
  margin-top: 5px;
  background: #4b0082;
  border: none;
  border-radius: 2px 2px 2px 2px;
  color: #ffffff;
  font-size: 13pt;
  padding-top: 2px;
  padding-bottom: 5px;
  font-weight: lighter;
}

.connect {
  margin-top: 20px;
}

.fa {
  margin-left: 2%;
  margin-right: 2%;
}

.fa:hover {

  opacity: 0.2;
}

.fa-whatsapp {
  color: #25d366;
}

.fa-facebook {
  color: #3b5998;
}

.fa-twitter {
  color: #55acee;
}

.fa-linkedin {
  color: #007bb5;
}

.fa-github {
  color: #000000;
}

.fa-youtube {
  color: #bb0000;
}

.fa-instagram {
  color: #125688;
}

.fa-snapchat-ghost {
  color: #fffc00;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.fa-soundcloud {
  color: #ff7700;
}

.fa-steam {
  color: #003367;
}
</style>
