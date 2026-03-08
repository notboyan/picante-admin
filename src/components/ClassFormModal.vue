<script setup>
import { levelOptions, dayOptions } from '@/const/classConst'
import { ref, computed } from 'vue'
import FormActions from './FormActions.vue'
const emit = defineEmits(['close', 'saveClass'])
const form = ref({  
    title: '',
    level: null,
    startTime: '',
    endTime: '',
    days: [],
    note: '',
    isNew: false,
    eventLink: ''
})

const selectedLevelColor = computed(() => {
    const selected = levelOptions.find(l => l.value === form.value.level)
    return selected ? selected.color : '#fff'
})

function timeToMinutes(time) {
    if (!time) return null
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
}

const isTimeValid = computed(() => {
    if (!form.value.startTime || !form.value.endTime) return true
    return timeToMinutes(form.value.startTime) <
        timeToMinutes(form.value.endTime)
})

const timeError = computed(() => {
    if (!isTimeValid.value) {
        return 'End time must be after start time'
    }
    return ''
})

const isFormValid = computed(() => {
    return (
        form.value.title &&
        form.value.level &&
        isTimeValid.value
    )
})

</script>
<template>
    <div class="overlay" @click.self="$emit('close')">
        <div class="modal">
            <h2>Create New Class</h2>

            <form class="grid">

                <!-- FULL WIDTH TITLE -->
                <input v-model="form.title" placeholder="Title" class="full" />

                <!-- LEVEL DROPDOWN -->
                <select v-model="form.level" :style="{ backgroundColor: selectedLevelColor }">
                    <option disabled value="">Select Level</option>
                    <option v-for="option in levelOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>

                <input type="time" v-model="form.startTime" :class="{ invalid: !isTimeValid }" />

                <input type="time" v-model="form.endTime" :class="{ invalid: !isTimeValid }" />

                <p v-if="timeError" class="error">
                    {{ timeError }}
                </p>

                <!-- MULTI SELECT DAYS -->
                <div class="multi-select">
                    <label v-for="day in dayOptions" :key="day.value">
                        <input type="checkbox" :value="day.value" v-model="form.days" />
                        {{ day.label }}
                    </label>
                </div>

                <input v-model="form.note" placeholder="Note" />

                <label class="checkbox">
                    <input type="checkbox" v-model="form.isNew" />
                    Is New
                </label>

                <!-- FULL WIDTH EVENT LINK -->
                <input v-model="form.eventLink" placeholder="Link to Event" class="full" />

            </form>

            <FormActions :isFormValid="!!isFormValid" @close="emit('close')" @submit="emit('saveClass', form)" />
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: white;
    padding: 32px;
    border-radius: 16px;
    width: 900px;
    max-width: 95%;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.full {
    grid-column: span 3;
}

input,
select {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.multi-select {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
}

.actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 24px;
}

.invalid {
    border-color: #ef4444;
    background-color: #fee2e2;
}

.error {
    grid-column: span 3;
    color: #ef4444;
    font-size: 14px;
}
</style>