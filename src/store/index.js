import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    meetsList: []  // Массив для хранения встреч
  }),
  getters: {
    meetsCount: (state) => state.meetsList.length // Длина списка встреч
  },
  actions: {
    addTask(meeting) {
      this.meetsList = [...this.meetsList, meeting]; // Добавляем встречу
    },
    removeTask(id) {
      this.meetsList = this.meetsList.filter(meeting => meeting.id !== id); // Удаляем встречу по id
    }
  }
});
