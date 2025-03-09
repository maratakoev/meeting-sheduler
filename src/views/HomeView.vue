<template>
  <div class="home-page">
    <div class="home-page__left-part">
      <create></create>
      <list></list>
    </div>
    <div class="home-page__right-part">
      <cal/>  
    </div>
  </div>
</template>

<script>
import Cal from '@/components/Cal.vue';
import Create from '@/components/Create.vue';
import List from '@/components/List.vue';
export default {
  components: { Cal, Create, List },
  data () {
    return {
      name: []
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.home-page {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1050px;
}

.home-page__left-part {
  display: flex;
  flex-direction: column;
  width: 300px;
}

</style>