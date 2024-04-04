<template>
  <main>
    <!--  Heading-->
    <header>
      <img src="./assets/pinia.svg" alt="pinia-logo">
      <h1>Pinia task</h1>
    </header>

    <!--    add new task form-->
    <div class="new-task-form">
      <task-form/>
    </div>

    <!--    filter-->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'fav'">Favorite tasks</button>
    </nav>

    <!--    loading-->
    <div v-if="isLoading"
         class="loading">Loading tasks...
    </div>
    <!--    task lists-->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalTasksCount }} task(s) left to do </p>
      <div v-for="task in tasks" :key="task.id">
        <task-details
            :task="task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'fav'">
      <p>You have {{ favoriteTaskCount }} favorite task(s) left to do </p>
      <div v-for="task in favoriteTasks" :key="task.id">
        <task-details
            :task="task"/>
      </div>
    </div>

    <button @click="taskStore.$reset" class="btn">Reset</button>
  </main>
</template>
<script>
import TaskDetails from "@/components/TaskDetails.vue";
import {useTaskStore} from "@/stores/TaskStore.js";
import {ref} from "vue";
import TaskForm from "@/components/TaskForm.vue";
import {storeToRefs} from "pinia";

export default {
	components: {
		TaskForm,
		TaskDetails
	},
	setup() {
		const taskStore = useTaskStore();

		const {tasks, isLoading, favoriteTasks, totalTasksCount, favoriteTaskCount} = storeToRefs(taskStore);

		// fetch tasks
		taskStore.getTasks();

		const filter = ref("all");
		return {taskStore, filter, tasks, isLoading, favoriteTasks, totalTasksCount, favoriteTaskCount};
	}
};
</script>

