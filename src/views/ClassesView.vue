<template>
  <div class="classes-page">
    <div class="top-bar">
      <button class="add-btn" @click="showForm = true">
        Add New
      </button>
    </div>
    <div v-for="danceClass in classes" :key="danceClass.id" class="class-card">
      <h2>{{ danceClass.title }}</h2>
      <p>{{ danceClass.level }}</p>
      <p>{{ danceClass.startTime }}</p>
      <p>{{ danceClass.endTime }}</p>
      <p>{{ danceClass.days }}</p>
      <p>{{ danceClass.note }}</p>
    </div>
    <ClassFormModal
      v-if="showForm"
      @close="closeForm"
      @saveClass="saveClass"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ClassFormModal from '../components/ClassFormModal.vue'
import { add, getAll } from '../api/classApi'

const showForm = ref(false)
const classes = ref([])

onMounted(async () => {
  const classesData = await getAll()
  if (classesData && classesData.length > 0) {
    classes.value = classesData
  }
})

const saveClass = (newClass) => {
  add(newClass)
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

.class-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
</style>