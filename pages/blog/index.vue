<template>
  <div class="position" style="width: 100%;">
    <div
      class="row position"
      style="padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; margin-top: 0px;"
    >
      <div
        class="row position"
        style="background-image: url('/background2.jpeg'); background-position: center; background-size: cover; background-repeat: no-repeat; position: fixed; padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; height: 100%; z-index: -1; top: 0px;"
      ></div>
      <div method="post" style="width: 80%; padding: 100px 0px 50px 0px; margin-top: 100px;">
        <div class="row">
          <div class="col-md-12" style="text-align: left;">
            
          </div>
        </div>
        <div class="row">
					<div class="album py-5">
						<div v-if="error" class="error div-spacing">
							<p class="lead">{{ error }}</p>
						</div>
						<div class="container">
							<div
								v-for="(post, index) in posts"
								:item="post"
								:index="index"
								:key="post._id"
								class="post col-md-4"
							>
								<router-link :to="'/blog/' + post.slug">
									<div class="card mb-4 shadow-sm">
										<img
											:src="getImgUrl(post.imagename)"
											class="card-img-top post-image"
											data-holder-rendered="true"
										>
										<div class="card-body">
											<h3 class="fonts-two">{{ post.title }}</h3>
											<p class="fonts-one">{{ post.description }}</p>
											<div class="row">
												<div class="col-md-6">
													<i class="fa fa-user fa-x"/>
													<small class="text-muted">{{ post.author }}</small>
													<br>
													<i class="fa fa-tags fa-x"/>
													<small class="text-muted">{{ post.category }}</small>
												</div>
												<div class="col-md-6" style="text-align: right;">
													<i class="fa fa-calendar fa-x"/>
													<small
														class="text-muted"
													>{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</small>
													<br>
													<i class="fa fa-clock-o fa-x"/>
													<small
														class="text-muted"
													>{{ `${post.createdAt.getHours()}:${post.createdAt.getMinutes()}:${post.createdAt.getSeconds()}` }}</small>
												</div>
											</div>
										</div>
									</div>
								</router-link>
							</div>
						</div>
					</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '@/components/PostService'

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      markers: [
        {position: {lat: 38.3141088, lng: 26.6340546}}
      ]
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../../assets/blogs/' + pic)
    }
  }
}
</script>