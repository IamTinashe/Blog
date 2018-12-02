<template>
  <div id="app" class="SkillChart">
    <GChart
      :settings="{packages: ['bar']}"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.charts.Bar(el)"
      @ready="onChartReady"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'App',
  components: {
    GChart
  },
  data() {
    return {
      chartsLib: null,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['', 'HTML', 'CSS', 'PHP', 'JavaScript', 'Bootstrap', 'Git', 'Java'],
        [' ', 0.85, 0.75, 0.60, 0.50, 0.55, 0.65, 0.8]
      ]
    }
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'percent' },
        height: 250,
        colors: ['#0ab928', '#eeee00', '#ff0000', '#000000', '#ff0000', '#eeee00', '#0ab928' ]
      })
    }
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google
    }
  }
}
</script>
