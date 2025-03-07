import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    meetsList: []  // создал массив для хранения списка задач
  }),
  getters: {
    meetsCount: (state) => state.meetsList.length // выше есть state, в нем есть taskList, и length это его длина
  },
  actions: {
    addTask(meeting) {  // task это строка массива, которую хотим сохранить в стор, в taskList
      this.meetsList = [...this.meetsList, meeting]; // Берем массив taskList, превращаем его в копию с добавленной строкой task (которую мы и добавляем)
    },
    removeTask(id) { // id удаляемой задачи, определяется автоматически при клике на задачу или кнопку
      this.meetsList = this.meetsList.filter(meeting => meeting.id !== id); // создаем новый массив без задачи с заданным id
    } // приравниваем массив стора this.taskList к массиву отфильтрованному по условию
    // тут this.taskList.filter( создаем новый массив согласно условию фильтра
    // фильтр принимает аргументом task и возвращает те task у кого id != выбранному для удаления
  }
});