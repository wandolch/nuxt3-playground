<script setup lang="ts">
import type {ITodoItem} from "~/src/types";
import type {PropType} from "vue";

const emit = defineEmits(['editTodo', 'deleteTodo'])


const props = defineProps({
  todo: { type: Object as PropType<ITodoItem>, required: true },
});

const {todo} = toRefs(props);
const editing = ref(false);
const editableText = ref(todo.value.text);

const edit = () => {
  editing.value = true;
};

const saveEdit = () => {
  debugger
  editing.value = false;
  emit('editTodo', {...todo.value, text: editableText.value});
};

const deleteTodo = () => {
  emit('deleteTodo', todo.value.id);
};
</script>

<template>
  <li>
    <input v-if="editing" v-model="editableText" @keyup.enter="saveEdit" @blur="saveEdit"/>
    <span v-else @dblclick="edit">{{ todo.text }}</span>
    <button @click="deleteTodo">Delete</button>
  </li>
</template>