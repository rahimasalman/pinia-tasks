<template>
  <main>
    <!--  Heading-->
    <header>
      <img src="./assets/pinia.svg" alt="pinia-logo">
      <h1>Pinia task</h1>

    </header>
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <task-details
            :task="task"/>
      </div>
    </div>
  </main>
</template>
<script>
import TaskDetails from "@/components/TaskDetails.vue";
import {useTaskStore} from "@/stores/TaskStore.js";

export default {
	components: {
		TaskDetails
	},
	setup() {
		const taskStore = useTaskStore();

		return {taskStore};
	}
};
</script>

