<template>
  <div class="position" style="width: 100%;">
    <div
      class="row position"
      style="padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; margin-top: 0px;"
    >
      <div
        class="row position"
        style="padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; width: 100%; height: 100%; z-index: -1; top: 0px;"
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
							:style="{ backgroundImage: 'url(' + image.href + ')', width: '300px', height: '200px' }"
              :alt="image.title"
              :title="image.title"
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
          {
            title: 'Sunrise on Flight to Qatar',
            description: 'Just before landing in Doha, Qatar, the sun rises and I captured this photo',
            href: '/photography/tinashe-zvihwati-doha-sunset.png',
          },
          {
            title: 'Fly Emirates',
            description: 'Taken at Harare International Airport',
            href: '/photography/tinashe-zvihwati-fly-emirates-harare-zimbabwe.jpg',
          },
          {
            title: 'Chinhoyi Caves',
            description: 'Spectacular site to see.',
            href: '/photography/tinashe-zvihwati-chinhoyi-caves-chinhoyi-zimbabwe.jpg',
          },
          {
            title: 'Church',
            description: 'St. Therese Catholic Church in Rusape, Zimbabwe',
            href: '/photography/tinashe-zvihwati-church-st-therese-rusape-zimbabwe.jpg',
          },
          {
            title: 'Blue Lagoon',
            description: 'While paragliding in Fethiye, Turkey I captured this spectacular photo of the blue lagoon.',
            href: '/photography/tinashe-zvihwati-bluelagoon-fethiye-turkey.jpg',
          },
          {
            title: 'Graffiti',
            description: 'Went to a notoriously know gheto in Harare and I found this',
            href: '/photography/tinashe-zvihwati-graffiti-mbare-harare-zimbabwe.jpg',
          },
          {
            title: 'Sun through the curtains',
            description: 'The ever beautiful mornings at Burlahan Hotel in Izmir, Turkey',
            href: '/photography/tinashe-zvihwati-sunrise-burlahan-hotel-izmir-turkey.jpg',
          },
          {
            title: 'Calm Sea',
            description: 'Calm Sea just after heavy rains in Güzelbahçe, Izmir, Turkey',
            href: '/photography/tinashe-zvihwati-sea-izmir.png',
          },
          {
            title: 'South African Airways',
            description: 'SAA at OR Tambo International Airport in Johannesburg, South Africa',
            href: '/photography/tinashe-zvihwati-south-african-airways-johannesburg.png',
          },
          {
            title: 'Sunrise over the Aegean Sea',
            description: 'Sunrise on a Thursday morning at Burlahan Hotel in Izmir, Turkey',
            href: '/photography/tinashe-zvihwati-sunrise-over-sea-izmir-turkey.jpeg',
          },
          {
            title: 'Ethiopian Airlines',
            description: 'Taken at Harare International Airport, Zimbabwe in 2018',
            href: '/photography/tinashe-zvihwati-ethiopian-airlines-harare-zimbabwe.jpg',
          },
          {
            title: 'Ship in the Mediterranean Sea',
            description: 'Taken in Antalya, Turkey in August 2017',
            href: '/photography/tinashe-zvihwati-ship-antalya-turkey.jpg',
          },
          {
            title: 'Sunset in Güzelbahçe',
            description: 'Sunset in Güzelbahçe, Izmir, Turkey. September 2017',
            href: '/photography/tinashe-zvihwati-sunset-guzelbahce-izmir-turkey.jpg',
          },
          {
            title: 'Turkish Airlines',
            description: 'Turkish Airlines Flight to Istanbul in December 2018',
            href: '/photography/tinashe-zvihwati-turkish-airlines-wing.jpg',
          },
          {
            title: 'Zamabezi Lager',
            description: 'Taken on new year 2019 at Paramount Night Club in Harare',
            href: '/photography/tinashe-zvihwati-zambezi-lager-harare-zimbabwe.jpg',
          },
          {
            title: 'Istanbul Airport',
            description: 'Set to be the largest airport in the world after its completion, I had to see it with my own eyes',
            href: '/photography/tinashe-zvihwati-istanbul-new-airport-istanbul-turkey.jpg',
          },
          {
            title: 'Mango',
            description: 'How I like to eat my Mango',
            href: '/photography/tinashe-zvihwati-how-to-eat-a-mango.jpg',
          },
          {
            title: 'Fly Emirates',
            description: 'My favourite airline as of yet. Taken on a trip to Harare, Zimbabwe in 2015',
            href: '/photography/tinashe-zvihwati-fly-emirates-wing.jpg',
          },
          {
            title: 'Eastgate Harare',
            description: 'Known to have a sophisticated natural ventilation and cooling system. It\'s said be the first building in the world to use natural cooling to this level of sophistication',
            href: '/photography/tinashe-zvihwati-eastgate-harare-zimbabwe.jpg',
          },
          {
            title: 'View of Bursa',
            description: 'Taken in February 2018',
            href: '/photography/tinashe-zvihwati-bursa-view-bursa-turkey.jpg',
          },
          {
            title: 'Beach',
            description: 'Beach in Kuşadası, Turkey',
            href: '/photography/tinashe-zvihwati-beach-kusadasi-turkey.jpg',
          },
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