<template>
  <div class="position" style="width: 100%;">
    <div class="position nopadding" style="width: 100%;">
      <div class="row" style="padding: 100px 50px 50px 50px; margin: 50px;">
				<div class="col-md-4">
					<div style="background-color: #ffffff; margin-bottom: 20px; -webkit-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); -moz-box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.50); border-radius: 2px 2px 2px 2px;">
						<Adsense
							data-ad-client="ca-pub-3817231220206981"
							data-ad-slot="1234567890">
						</Adsense>
					</div>
				</div>
				<div class="col-md-8">
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
									:title="post.title"
									class="post col-md-6"
								>
									<router-link :to="'/blog/' + post.slug">
										<div class="card mb-4 shadow-sm">
											<img
												:src="getImgUrl(post.imagename)"
												class="card-img-top post-image"
												data-holder-rendered="true"
												alt="Blog Image"
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