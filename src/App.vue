<template>
  <div>
    <home-view/>
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';
export default {
  components: { HomeView },
  data () {
    return {
      name: []
    };
  },
  methods: {
    name () {
      //
    }
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>