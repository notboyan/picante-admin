<template>
  <div class="classes-page">
    <div class="top-bar">
      <button class="add-btn" @click="showForm = true">
        Add New
      </button>
    </div>

    <ClassFormModal
      v-if="showForm"
      @close="closeForm"
      @saveClass="saveClass"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ClassFormModal from '../components/ClassFormModal.vue'

const showForm = ref(false)

const saveClass = (newClass) => {
  console.log('saveClass', newClass)
  showForm.value = false
}

const closeForm = () => {
  showForm.value = false
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
}

.add-btn {
  background-color: #22c55e; /* green */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 999px; /* fully rounded */
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.add-btn:hover {
  background-color: #16a34a;
}
</style>