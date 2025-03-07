<template>
  <div class="saved-meetings">
    <h3>Saved meetings</h3>
    <ul class="saved-meetings__list">
      <li class="saved-meetings__item" v-for="(meet, ) in meetsList" :key="meet.id">
      <span class="saved-meetings__name">{{ meet.name }}</span>
      <!-- <span class="saved-meetings__date">{{ meet.data }}</span> -->
      <!-- <span>{{ meet.startTime }} - {{ meet.endTime }}</span> -->
      <button @click="removeMeeting(meet.id)">Remove</button>
    </li>
    </ul>

  </div>
</template>

<script>
import { useTaskStore } from '@/store/index';

export default {
  computed: {
    meetsList() {
      const store = useTaskStore();
      return store.meetsList; 
    }
  },
  data () {
    return {
      
    };
  },
  methods: {
    removeMeeting(id) {
      const store = useTaskStore();
      store.removeTask(id); // Удаляем встречу по id
    }
  }
};
</script>

<style scoped>
.saved-meetings {
  padding: 10px;
  background-color: #8e8d8a;
  display: flex;
  flex-direction: column;
  height: 300px;
  color: #eae7dc;

  /* align-items: center; */
}

.saved-meetings__list {
  padding-left: 0;
  width: 280px;
}
.saved-meetings__item {
  list-style: none;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.saved-meetings__name {
  width: 130px;
}


</style>