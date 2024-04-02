import {defineStore} from "pinia";

export const useTaskStore = defineStore("taskStore", {
	state: () => ({
		tasks: [
			{id: 1, title: "buy some vegetables", isFav: false},
			{id: 2, title: "write code", isFav: true},
			{id: 3, title: "cook a meal", isFav: false}
		],
	}),
	getters: {
		// Example getter for getting all favorite tasks
		favoriteTasks() {
			return this.tasks.filter(task => task.isFav);
		},
		// // Getter for getting the total number of tasks
		// totalTasks(state) {
		// 	return state.tasks.length;
		// },
	},
});
