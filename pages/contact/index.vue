<template>
  <div style="width: 100%;">
    <div class="container">
      <form @submit="handleSubmit" style="margin-top: 100px;" autocomplete="on">
        <div class="row">
          <div class="col-md-12" style="text-align: left;">
            <h3 class="subtitle" style="color: #ffffff;">Send me a message</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                v-model="contactForm.name"
                name="name"
                class="form-control"
                placeholder="Full Name"
                autocomplete="false"
                value
              >
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="contactForm.email"
                name="email"
                class="form-control"
                placeholder="Email"
                autocomplete="false"
                value
              >
            </div>
            <div class="form-group">
              <input
                type="text"
                v-model="contactForm.phone"
                name="phone"
                class="form-control"
                placeholder="Phone Number"
                autocomplete="false"
                value
              >
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <textarea
                v-model="contactForm.message"
                name="message"
                class="form-control"
                placeholder="Your Message"
                style="width: 100%; height: 150px;"
                autocomplete="false"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input @click="handleSubmit" class="button" value="Send Message" style="cursor: pointer; text-align: center;">
            </div>
          </div>
        </div>
      </form>
      <div class="row" style="margin-bottom: 50px;">
        <div class="col-md-6">
          <div
            style="border-radius: 2px 2px 2px 2px; background: #ffffff; text-align: left; margin-right: 5px; float: left; width: 100%; height: 300px;"
          >
            <div
              class="row prof-blok"
              style="padding-bottom: 0px; padding-top: 0px; margin-bottom: 0px; margin-top: 30px;"
            >
              <div class="md-col-5" style="width: 10%; margin-left: 10%;">
                <p class="fonts-seven">Email</p>
              </div>
              <div class="md-col-6" style="width: 70%;">
                <p class="fonts-six">tinashetp@gmail.com</p>
                <p class="fonts-six">hello@iamtinashe.io</p>
              </div>
            </div>
            <hr style="width: 80%;">
            <div
              class="row prof-blok"
              style="padding-bottom: 0px; padding-top: 0px; margin-bottom: 0px; margin-top: 0px;"
            >
              <div class="md-col-5" style="width: 10%; margin-left: 10%;">
                <p class="fonts-seven">Mobile</p>
              </div>
              <div class="md-col-6" style="width: 70%;">
                <p class="fonts-six">+263778045305</p>
                <p class="fonts-six">+905347745196</p>
              </div>
            </div>
            <hr style="width: 80%;">
            <div
              class="row prof-blok"
              style="padding-bottom: 0px; padding-top: 0px; margin-bottom: 0px; margin-top: 0px;"
            >
              <div class="md-col-5" style="width: 10%; margin-left: 10%;">
                <p class="fonts-seven">Skype</p>
              </div>
              <div class="md-col-6" style="width: 70%;">
                <p class="fonts-six">@Pridetp</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            style="border-radius: 2px 2px 2px 2px; background: #ffffff; text-align: left; margin-left: 5px; float: right; width: 100%; height: 300px;"
          >
            <GmapMap
              :center="{lat: -17.824220, lng: 31.049363}"
              :zoom="18"
              map-type-id="terrain"
              style="width: 100%; height: 100%"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              />
            </GmapMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [{ position: { lat: -17.82422, lng: 31.049363 } }],
      contactForm: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },

  methods: {
    submitToServer() {
      return new Promise((resolve, reject) => {
        fetch('/api/mail', {
          method: 'post',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(this.contactForm)
        }).then(function(response) {
            return response;
        }).catch(err => {
            reject(err)
        })
      })
    },
    handleSubmit() {
      this.submitToServer().then(response => {
        const body = response.json()
        if (Number(response.status) !== 201) {
          console.log('Error submitting the form.')
        } else {
          console.log('Form was submitted!')
          this.$router.push('/contact/thank-you')
        }
      })
    }
  },
  head() {
    return {
      title: 'IamTinashe | Contact',
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.iamtinashe.io/contact'
        }
      ]
    }
  }
}
</script>