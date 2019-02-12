<template>
  <div style="width: 100%;">
    <div class="container" style="margin-top: 100px; margin-bottom: 20px;">
      <div class="row">
        <div class="col-lg-8" style="background-color: #ffffff; margin-top: 25px; border-radius: 2px;">
          <p class="lead">{{ error }}</p>
          <div
            class="row"
            v-for="(post, index) in posts"
            :item="post"
            :index="index"
            :key="post._id"
            :title="post.title"
						style="border-bottom: 1px solid #eeeeee; padding-bottom: 20px; padding-top: 10px;"
          >
            <div class="col-md-7">
              <img
                :src="getImgUrl(post.imagename)"
                class="img-fluid rounded mb-3 mb-md-0"
                data-holder-rendered="true"
                :alt="post.title"
              >
            </div>
            <div class="col-md-5">
              <h3 style="font-size: 18px;">{{post.title}}</h3>
              <p style="font-size: 14px;">{{post.description.substring(0, 273)}}</p>
              <router-link class="btn btn-primary" :to="'/blog/' + post.slug">Read More</router-link>
            </div>
          </div>
          <!-- /.row -->

          <!-- Pagination -->
          <!--
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
          -->
        </div>

        <!-- Sidebar Widgets Column -->
        <div class="col-lg-4">
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

<script>
import PostService from '@/components/PostService'

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
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
      var ImagePath = '/blogs/' + pic
      return ImagePath
    }
	},
	head() {
		return {
			link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.iamtinashe.io/blog'
        }
      ],
		}
	}
}
</script>