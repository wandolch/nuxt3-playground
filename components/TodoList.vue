<script setup lang="ts">
import type {ITodoItem} from "~/types";

const todoStore = useTodoStore()
await useAsyncData('todos', () => todoStore.fetchTodos())

if (process.client) {
  todoStore.fetchSettings()
}

const newTodoText = ref('');
const nextTodoId = ref(0);

const addTodo = () => {
  if (newTodoText.value.trim()) {
    todoStore.addTodo({
      id: nextTodoId.value++,
      text: newTodoText.value,
    } as ITodoItem);
    newTodoText.value = '';
  }
};

const deleteTodo = (id: number) => {
  todoStore.deleteTodo(id)
};

const editTodo = (updatedTodo: ITodoItem) => {
  todoStore.updateTodo(updatedTodo)
};
</script>

<template>
  <div>
    <h1>Todos are hydrated from nuxt:</h1>
    <input v-model="newTodoText" @keyup.enter="addTodo" placeholder="Add a new todo"/>
    <ul v-if="todoStore.todos?.length">
      <todo-item
          v-for="(todo, index) in todoStore.todos"
          :key="todo.id"
          :todo="todo"
          @delete-todo="deleteTodo"
          @edit-todo="editTodo"
      />
    </ul>

    <h1>This data is loaded only on client client:</h1>
    <div style="margin-bottom: 100px">{{todoStore.settings ? 'Settings: ' + todoStore.settings?.view : "Loading"}}</div>
  </div>
</template>