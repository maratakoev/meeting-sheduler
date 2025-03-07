<template>
  <div class="saved-meetings">
    <h3>Saved meetings</h3>
    <ul class="saved-meetings__list">
      <li class="saved-meetings__item" v-for="meet in meetingList" :key="meet.id">
      <span>{{ meet.name }}</span>
      <span>{{ meet.data }}</span>
      <span>{{ meet.time }}</span>
    </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {
      meetingList: [
        {id:Date.now(), name:"John Smith", data:"12th feb", time:"12:45"},
        {id:Date.now(), name:"Lora Kauphman", data:"11th fed", time:"12:45"},
        {id:Date.now(), name:"Jada Pinket", data:"1th mar", time:"12:45"},
        {id:Date.now(), name:"Amanda Grey", data:"4th dec", time:"12:45"},
        {id:Date.now(), name:"Lucy Oravan", data:" 4th mar", time:"12:45"},

      ]
    };
  },
  methods: {
    name () {
      //
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
}
.saved-meetings__item {
  list-style: none;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

</style>