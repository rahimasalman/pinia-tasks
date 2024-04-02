<template>
  <main>
    <!--  Heading-->
    <header>
      <img src="./assets/pinia.svg" alt="pinia-logo">
      <h1>Pinia task</h1>

    </header>
    <!--    filter-->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'fav'">Favorite tasks</button>
    </nav>
    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <task-details
            :task="task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'fav'">
      <p>Favorite Tasks</p>
      <div v-for="task in taskStore.favoriteTasks" :key="task.id">
        <task-details
            :task="task"/>
      </div>
    </div>
  </main>
</template>
<script>
import TaskDetails from "@/components/TaskDetails.vue";
import {useTaskStore} from "@/stores/TaskStore.js";
import {ref} from "vue";

export default {
	components: {
		TaskDetails
	},
	setup() {
		const taskStore = useTaskStore();

		const filter = ref("all");
		return {taskStore, filter};
	}
};
</script>

