import {skipHydrate} from "pinia";
import type {ITodoItem, ITodoSettings} from "~/types";

export const useTodoStore = defineStore('todoStore', () => {
    const todos = ref<ITodoItem[]>([])
    const todosLoading = ref<boolean>(false)
    const settings = ref<ITodoSettings | null>(null)

    const markedTodos = computed(() => todos.value?.map(todo => todo.marked))

    const setTodos = function (newTodos: ITodoItem[]) {
        todos.value = newTodos
    }

    const addTodo = function (newTodo: ITodoItem) {
        todos.value.push(newTodo)
    }

    const updateTodo = function (updatedTodo: ITodoItem) {
        const index = todos.value.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            todos.value[index] = updatedTodo;
        }
    }

    const deleteTodo = function (id: number) {
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const fetchTodos = async function () {
        todosLoading.value = true
        const newTodos: ITodoItem[] = await $fetch('http://127.0.0.1:8080/todos.json')
        setTodos(newTodos)
        todosLoading.value = false
        return newTodos
    }

    const fetchSettings = async function () {
        settings.value = await $fetch('http://127.0.0.1:8080/settings.json')
    }


    return {
        todos,
        markedTodos,
        settings: skipHydrate(settings),
        todosLoading,
        updateTodo,
        deleteTodo,
        addTodo,
        setTodos,
        fetchTodos,
        fetchSettings
    }
})

// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
// }