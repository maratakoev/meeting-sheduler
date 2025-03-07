<template>
  <div class="create">
    <h3>Create a new meeting</h3>

    <form class="create__form" @submit.prevent="handleSubmit">
      <input 
      v-model="meeting.name"
      class="create__input"
      type="text"
      placeholder="Meeting name"
      >
      <input 
      v-model="meeting.data"
      class="create__input"
      type="date"
      placeholder="Meeting data"

      >
      <input 
      v-model="meeting.startTime"
      class="create__input"
      type="time"
      >
      <input 
      v-model="meeting.endTime"
      class="create__input"
      type="time"
      >
      <textarea
      v-model="meeting.description"
      class="create__textarea"
      placeholder="Meeting discription"
      >
      </textarea>
      <button class="btn">
        Add new meeting
      </button>
    </form>

  </div>
</template>

<script>
import { useTaskStore } from '@/store/index';
import { v4 as uuidv4 } from 'uuid';

export default {
  data () {
    return {
      meeting: {
        id: uuidv4(),
        name: "",
        date: "",
        startTime: "",
        endTime: "",
        description: "",
      } 
    };
  },
  methods: {
    handleSubmit() {
      const store = useTaskStore();
      const newMeeting = { ...this.meeting, id: uuidv4() }; // Генерация уникального id при добавлении
      store.addTask(this.meeting); // Отправляем объект встречи в стор
      this.resetForm(); // Очищаем форму после добавления
    },
    resetForm() {
      this.meeting = {
        name: "",
        date: "",
        startTime: "",
        endTime: "",
        description: "",
      };
    }
  }
};
</script>

<style scoped>
.create {
  padding: 10px;
  background-color: #d8c3a5;
  display: flex;
  flex-direction: column;
  height: 300px;
  color: #8e8d8a;

}
.create__form {
  display: flex;
  flex-direction: column;
}

.create__input {
  padding: 5px 10px;
  background-color: #eae7dc;
  border-radius: 8px;
  border: 1px solid #8e8d8a;
  min-width: 100px;
  margin-bottom: 10px;
  color: #8e8d8a;
}

.create__input::placeholder{
  color: #8e8d8a;
}

.create__input::-webkit-calendar-picker-indicator {
  filter: invert(44%) sepia(20%) saturate(100%) hue-rotate(30deg); /* Приблизительно создает цвет #8e8d8a */
}

.create__textarea {
  background-color: #eae7dc;

  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #8e8d8a;
  margin-bottom: 10px;

}
.create__textarea::placeholder {
  color: #8e8d8a;


}


.btn {
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid  #e98074;
  color: #eae7dc;
  background-color: #e85a4f;
  width: 150px;
  margin-left: auto;
  margin-right: auto;


}

</style>