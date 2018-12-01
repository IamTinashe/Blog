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
        ['', 'Java', 'PHP', 'JavaScript'],
        [' ', 0.8, 0.60, 0.50]
      ]
    }
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'percent' },
        height: 110,
        colors: ['#0ab928', '#eeee00', '#ff0000' ]
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
