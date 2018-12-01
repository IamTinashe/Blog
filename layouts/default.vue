<template>
  <div>
    <t-header/>
    <div class="container">
      <div class="row">
        <nuxt/>
      </div>
      <footer class="position">
        <div class="row">
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
        <div class="row connect">
          <div class="col-md-6">
            <form>
              <h4 class="subtitle">Subscribe</h4>
              <p class="fonts-three">Receive updates and news directly from me. Enter your email below.</p>
              <div class="input-group">
                <input
                  class="input-group-field form-control"
                  type="email"
                  placeholder="Email"
                  required>
                <button class="button">Subscribe</button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <h4 class="subtitle">Connect with me!</h4>
            <div class="social-icons">
              <a
                href="https://wa.me/905347745196"
                target="_blank"
                title="WhatsApp">
                <i class="fa fa-whatsapp fa-1x"/>
              </a>

              <a
                href="https://www.facebook.com/TinashePride"
                target="_blank"
                title="Facebook">
                <i class="fa fa-facebook fa-1x"/>
              </a>

              <a
                href="https://twitter.com/IamTinashe__"
                target="_blank"
                title="Twitter">
                <i class="fa fa-twitter fa-1x"/>
              </a>

              <a
                href="https://www.linkedin.com/in/tinashepride"
                target="_blank"
                title="LinkedIn">
                <i class="fa fa-linkedin fa-1x"/>
              </a>

              <a
                href="https://github.com/LekkaTinashe"
                target="_blank"
                title="Github">
                <i class="fa fa-github fa-1x"/>
              </a>

              <a
                href="https://www.instagram.com/iamtinashe_"
                target="_blank"
                title="Instagram">
                <i class="fa fa-instagram fa-1x"/>
              </a>

              <a
                href="https://soundcloud.com/tinashe-zvihwati"
                target="_blank"
                title="Soundcloud">
                <i class="fa fa-soundcloud fa-1x"/>
              </a>

              <a
                href="https://www.youtube.com/user/tinashepride"
                target="_blank"
                title="Youtube">
                <i class="fa fa-youtube fa-1x"/>
              </a>

              <a
                href="https://www.snapchat.com/add/tinashepride"
                target="_blank"
                title="Snapchat">
                <i class="fa fa-snapchat-ghost fa-1x"/>
              </a>

              <a
                href="https://steamcommunity.com/id/iamtinashe"
                target="_blank"
                title="Steam">
                <i class="fa fa-steam fa-1x"/>
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
  components: { 't-header': Header }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css';

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

.background-video {
  position: fixed;
  right: 0;
  bottom: 0;
  background-size: cover;
  width: auto;
  height: auto;
  z-index: -100;
  transition: 1s opacity;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nav-bar {
  position: fixed;
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
  font-size: 15px;
  color: #526488;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: justify;
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
  margin-left: 5px;
  margin-right: 5px;
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
