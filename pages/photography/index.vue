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
						<no-ssr>
            	<gallery :images="images" :index="index" @close="index = null"></gallery>
						</no-ssr>
						<div
							class="image"
							v-for="(image, imageIndex) in images"
							:key="imageIndex"
							@click="index = imageIndex"
							:style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
						></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data () {
      return {
        images: [
          '/background4.jpg',
          '/background3.jpg',
          '/background2.jpeg',
					'/background.jpg',
        ],
        index: null
      };
    }
  }
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>