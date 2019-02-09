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
                rel="noopener"
                title="WhatsApp">
                <i class="fa fa-whatsapp fa-2x"/>
              </a>

              <a
                href="https://www.facebook.com/TinashePride"
                target="_blank"
                rel="noopener"
                title="Facebook">
                <i class="fa fa-facebook fa-2x"/>
              </a>

              <a
                href="https://twitter.com/IamTinashe__"
                target="_blank"
                rel="noopener"
                title="Twitter">
                <i class="fa fa-twitter fa-2x"/>
              </a>

              <a
                href="https://www.linkedin.com/in/tinashepride"
                target="_blank"
                rel="noopener"
                title="LinkedIn">
                <i class="fa fa-linkedin fa-2x"/>
              </a>

              <a
                href="https://github.com/IamTinashe"
                target="_blank"
                rel="noopener"
                title="Github">
                <i class="fa fa-github fa-2x"/>
              </a>

              <a
                href="https://www.instagram.com/iamtinashe_"
                target="_blank"
                rel="noopener"
                title="Instagram">
                <i class="fa fa-instagram fa-2x"/>
              </a>

              <a
                href="https://soundcloud.com/tinashe-zvihwati"
                target="_blank"
                rel="noopener"
                title="Soundcloud">
                <i class="fa fa-soundcloud fa-2x"/>
              </a>

              <a
                href="https://www.youtube.com/user/tinashepride"
                target="_blank"
                rel="noopener"
                title="Youtube">
                <i class="fa fa-youtube fa-2x"/>
              </a>

              <a
                href="https://www.snapchat.com/add/tinashepride"
                target="_blank"
                rel="noopener"
                title="Snapchat">
                <i class="fa fa-snapchat-ghost fa-2x"/>
              </a>

              <a
                href="https://steamcommunity.com/id/iamtinashe"
                target="_blank"
                rel="noopener"
                title="Steam">
                <i class="fa fa-steam fa-2x"/>
              </a>
            </div>
          </div>
        </div>
        <div class="row fonts-four position">
          <p>
            Developed by
            <router-link
              :to="'/'" title="Home">
              Tinashe Zvihwati
            </router-link>
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
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Tinashe Zvihwati\'s Website',
    }
  }
}
</script>