<template>
  <div class="home-page">
    <div class="home-page__left-part">
      <create></create>
      <list></list>
    </div>

    <div class="home-page__calendar">
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
  max-width: 865px;
}

.home-page__left-part {
  display: flex;
  flex-direction: column;
  width: 300px;
}





.home-page__calendar {
  background-color: #eae7dc;
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 570px;
  height: 640px;
  overflow-y: auto

}

</style>