import {defineStore} from "pinia";

export const useTaskStore = defineStore("taskStore", {
	state: () => ({
		tasks: [
			{id: 1, title: "Buy some vegetables", isFav: false},
			{id: 2, title: "Write a code", isFav: true},
			{id: 3, title: "Cook a meal", isFav: false}
		],
	}),
	getters: {
		// Getter for getting all favorite tasks
		favoriteTasks() {
			return this.tasks.filter(task => task.isFav);
		},
		// Getter for getting the total number of favorite tasks
		favoriteTaskCount() {
			return this.tasks.reduce((prev, curr) => {
				return curr.isFav ? prev + 1 : prev;
			}, 0);
		},
		// Getter for getting the total number of tasks
		totalTasksCount() {
			return this.tasks.length;
		},
	},
	actions: {
		addTask(task) {
			this.tasks.push(task);
		}
	}
});
