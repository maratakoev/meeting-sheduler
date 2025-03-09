<template>
  <div class="home-page">
    <vue-cal 
      :events="formattedEvents" 
      :selected-date="selectedDate" 
      @date-click="handleDateClick"
    />
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import { useTaskStore } from '@/store/index';

export default {
  components: {
    VueCal,
  },
  data() {
    return {
      selectedDate: '2025-03-07',
    };
  },
  computed: {
    // Получаем события из стора и форматируем их
    formattedEvents() {
      const store = useTaskStore();
      return store.meetsList.map(meeting => ({
        start: `${meeting.date} ${meeting.startTime}`,  // Время начала
        end: `${meeting.date} ${meeting.endTime}`,      // Время окончания
        title: meeting.name,  // Название события
        description: meeting.description, // Описание события
      }));
    }
  },
  methods: {
    handleDateClick(date) {
      alert(`Вы выбрали: ${date}`);
    },
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #eae7dc;
  margin: 0 auto;
  padding: 20px;
  height: 600px;
  min-width: 700px;
}
</style>
