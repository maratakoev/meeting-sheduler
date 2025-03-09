<template>
  <div class="create">
    <h3>Create a new meeting</h3>

    <form class="create__form" @submit.prevent="handleSubmit">
      <input 
        v-model="meeting.name"
        class="create__input"
        type="text"
        placeholder="Meeting name"
      />
      <input 
        v-model="meeting.date"
        class="create__input"
        type="date"
        placeholder="Meeting date"
      />
      <input 
        v-model="meeting.startTime"
        class="create__input"
        type="time"
        placeholder="Start time"
      />
      <input 
        v-model="meeting.endTime"
        class="create__input"
        type="time"
        placeholder="End time"
      />
      <textarea
        v-model="meeting.description"
        class="create__textarea"
        placeholder="Meeting description"
      />
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
  data() {
    return {
      meeting: {
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

      // Генерация уникального id
      const newMeeting = {
        id: uuidv4(),
        name: this.meeting.name,
        date: this.meeting.date,
        startTime: this.meeting.startTime,
        endTime: this.meeting.endTime,
        description: this.meeting.description,
      };

      // Добавление встречи в стор
      store.addTask(newMeeting);

      // Очищаем форму после добавления
      this.resetForm();
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

.create__input::placeholder {
  color: #8e8d8a;
}

.create__input::-webkit-calendar-picker-indicator {
  filter: invert(44%) sepia(20%) saturate(100%) hue-rotate(30deg);
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
