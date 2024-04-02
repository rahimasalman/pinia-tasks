import {defineStore} from "pinia";

export const useTaskStore = defineStore("taskStore", () => {
	return {
		tasks: [
			{id: 1, title: "buy some vegetables", isFav: false},
			{id: 2, title: "write code", isFav: true},
			{id: 3, title: "cook a meal", isFav: false}
		],
	};
});
