<template>
  <div>
    <t-header/>
    <div class="nopadding" style="width: 100%; margin-right: 0px;">
      <div class="row nopadding" style="width: 100%;">
        <nuxt/>
      </div>
      <footer class="position" style="background: #ffffff; padding-top: 100px; width: 100%;">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div id="mc_embed_signup">
                <form
                  action="https://iamtinashe.us20.list-manage.com/subscribe/post?u=894ab7106081ed108c704476f&amp;id=754b95eeab"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <div id="mc_embed_signup_scroll">
                    <h4 class="">Subscribe</h4>
                    <div class="indicates-required">
                      <span class="asterisk">*</span> indicates required
                    </div>
                    <div class="form-group">
                      <label for="mce-EMAIL">
                        Email
                        <span class="asterisk">*</span>
                      </label>
                      <input type="email" value name="EMAIL" class="form-control input-sm input-inverse my-2" id="mce-EMAIL">
                    </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                      <input
                        type="text"
                        name="b_894ab7106081ed108c704476f_754b95eeab"
                        tabindex="-1"
                        value
                      >
                    </div>
                    <div class="clear">
                      <input
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="button"
                        style="background-color: blue"
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-4">
              <div class="validate">
                <p style="margin-top: 50px; font-size: 12px; text-align-center;">
                  All materials on this website are owned or were developed by Tinashe Zvihwati.
                  In the event that you copy material from this site, please back-link to this
                  site or give credits. Thanks :)
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img style="border-radius: 8px;" src="/tinashe-zvihwati-avatar.png" alt="Tinashe Zvihwati">
            </div>
          </div>
        </div>
        <div class="connect">
          <div class="col-md-12">
            <h4 class="subtitle">Connect with me!</h4>
            <div class="social-icons">
              <a href="https://wa.me/905347745196" target="_blank" rel="noopener" title="WhatsApp">
                <i class="fa fa-whatsapp fa-2x"/>
              </a>
              
              <a
                href="https://www.facebook.com/TinashePride"
                target="_blank"
                rel="noopener"
                title="Facebook"
              >
                <i class="fa fa-facebook fa-2x"/>
              </a>
              
              <a
                href="https://twitter.com/IamTinashe__"
                target="_blank"
                rel="noopener"
                title="Twitter"
              >
                <i class="fa fa-twitter fa-2x"/>
              </a>
              
              <a
                href="https://www.linkedin.com/in/tinashepride"
                target="_blank"
                rel="noopener"
                title="LinkedIn"
              >
                <i class="fa fa-linkedin fa-2x"/>
              </a>
              
              <a href="https://github.com/IamTinashe" target="_blank" rel="noopener" title="Github">
                <i class="fa fa-github fa-2x"/>
              </a>
              
              <a
                href="https://www.instagram.com/iamtinashe_"
                target="_blank"
                rel="noopener"
                title="Instagram"
              >
                <i class="fa fa-instagram fa-2x"/>
              </a>
              
              <a
                href="https://soundcloud.com/tinashe-zvihwati"
                target="_blank"
                rel="noopener"
                title="Soundcloud"
              >
                <i class="fa fa-soundcloud fa-2x"/>
              </a>
              
              <a
                href="https://www.youtube.com/user/tinashepride"
                target="_blank"
                rel="noopener"
                title="Youtube"
              >
                <i class="fa fa-youtube fa-2x"/>
              </a>
              
              <a
                href="https://www.snapchat.com/add/tinashepride"
                target="_blank"
                rel="noopener"
                title="Snapchat"
              >
                <i class="fa fa-snapchat-ghost fa-2x"/>
              </a>
              
              <a
                href="https://steamcommunity.com/id/iamtinashe"
                target="_blank"
                rel="noopener"
                title="Steam"
              >
                <i class="fa fa-steam fa-2x"/>
              </a>
            </div>
          </div>
        </div>
        <div class="row fonts-four position">
          <p>
            Developed by
            <a
              href="https://www.iamtinashe.io"
              title="Tinashe Zvihwati"
            >Tinashe Zvihwati</a>
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
        lang: 'en'
      },
      title: "Tinashe Zvihwati's Website"
    }
  },
  mounted() {
    this.setupMailchimpPopup()
  },
  methods: {
    setupMailchimpPopup() {
      var mailchimpConfig = {
        baseUrl: 'mc.us20.list-manage.com',
        uuid: '894ab7106081ed108c704476f',
        lid: '754b95eeab'
      }
      // No edits below this line are required
      var chimpPopupLoader = document.createElement('script')
      chimpPopupLoader.src =
        '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js'
      chimpPopupLoader.setAttribute(
        'data-dojo-config',
        'usePlainJson: true, isDebug: false'
      )
      var chimpPopup = document.createElement('script')
      chimpPopup.appendChild(
        document.createTextNode(
          'require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +
            mailchimpConfig.baseUrl +
            '", "uuid": "' +
            mailchimpConfig.uuid +
            '", "lid": "' +
            mailchimpConfig.lid +
            '"})});'
        )
      )

      chimpPopupLoader.onload = function() {
        document.body.appendChild(chimpPopup)
      }
      document.body.appendChild(chimpPopupLoader)
    }
  }
}
</script>

<style>
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
</style>
