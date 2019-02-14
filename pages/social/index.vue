<template>
  <div style="width: 100%;">
    <div class="container">
      <div class="row album py-5" style="position: relative; margin: 10px;">
        <div class="widget col-md-4 position" style="float: left; margin-top: 20px;">
          <div class="card mb-4 shadow-sm">
            <github-feed login="IamTinashe"></github-feed>
          </div>
        </div>
        <div class="widget col-md-4" style="float: left; margin-top: 20px;">
          <div class="mb-4">
            <a
              class="twitter-timeline"
              data-height="620"
              data-chrome="nofooter"
              data-link-color="#820bbb"
              data-border-color="#a80000"
              href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
            >Tweets by TwitterDev</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
        <div class="widget col-md-4" style="float: left; margin-top: 20px;">
          <div class="mb-4">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAmatuer-Traveler-231036197780436&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=259708828017658"
              width="340"
              height="620"
              style="border:none;overflow:hidden border-radius: 4px;"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="album py-5" style="position: relative; margin: 10px;">
        <div class="widget col-md-4" style="float: left; margin-top: 20px;">
          <div class="mb-4">
            <iframe
              src="http://www.youtube.com/embed/?listType=user_uploads&list=tinashepride"
              width="100%"
              height="600"
            ></iframe>
          </div>
        </div>
        <div class="widget col-md-4" style="float: left; margin-top: 20px;">
          <div class="card mb-4 shadow-sm">
            <iframe
              src="https://open.spotify.com/embed/user/iamtinashe/playlist/0dIqxVdl3eDNUX9rD6Nxfx"
              width="100%"
              height="600"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Spotify"
            />
          </div>
        </div>
        <div class="widget col-md-4" style="float: left; margin-top: 20px;">
          <div class="card mb-4 shadow-sm">
            <iframe
              width="100%"
              height="600"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              title="Soundcloud"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/514850361&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'IamTinashe | Social',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.iamtinashe.io/social'
        }
      ]
    }
  }
}
</script>