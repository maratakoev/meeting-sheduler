<template>
  <div class="home-page">
    <vue-cal 
      :events="events" 
      :selected-date="selectedDate" 
      @date-click="handleDateClick"
    />
  </div>
</template>

<script>
// Импортируем компонент Vue Cal
import VueCal from 'vue-cal';
// Импортируем стили Vue Cal
import 'vue-cal/dist/vuecal.css';

export default {
  components: {
    VueCal,
  },
  data() {
    return {
      // Массив событий
      events: [
        {
          start: '2025-03-07 10:00',
          end: '2025-03-07 11:00',
          title: 'Событие 1',
        },
        {
          start: '2025-03-08 12:00',
          end: '2025-03-08 14:00',
          title: 'Событие 2',
        },
      ],
      // Выбранная дата
      selectedDate: '2025-03-07',
    };
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
  /* max-width: 400px; */
  margin: 0 auto;
  padding: 20px;
  min-height: 500px;
}
</style>
