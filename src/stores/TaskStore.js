import {defineStore} from "pinia";

export const useTaskStore = defineStore("taskStore", {
	state: () => ({
		tasks: [],
		isLoading: false
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
		async getTasks() {
			this.isLoading = true;
			const res = await fetch("http://localhost:3000/tasks");
			this.tasks = await res.json();
			this.isLoading = false;
		},
		async addTask(task) {
			this.tasks.push(task);

			const res = await fetch("http://localhost:3000/tasks", {
				method: "POST",
				body: JSON.stringify(task),
				headers: {"Content-Type": "application/json"}
			});
			if (res.error) {
				console.log(res.error);
			}
		},
		async deleteTask(id) {
			this.tasks = this.tasks.filter(task => {
				return task.id !== id;
			});

			const res = await fetch("http://localhost:3000/tasks/" + id, {
				method: "DELETE",
			});
			if (res.error) {
				console.log(res.error);
			}
		},
		async makeFavorite(id) {
			const task = this.tasks.find(task => task.id === id);
			task.isFav = !task.isFav;

			const res = await fetch("http://localhost:3000/tasks/" + id, {
				method: "PATCH",
				body: JSON.stringify({isFav: task.isFav}),
				headers: {"Content-Type": "application/json"}
			});
			if (res.error) {
				console.log(res.error);
			}
		}
	}
});
