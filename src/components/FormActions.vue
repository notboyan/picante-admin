<script setup>
const emit = defineEmits(['close', 'submit']);

const props = defineProps({
  isFormValid: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="actions">
    <button class="cancel" @click="$emit('close')">Cancel</button>
    <button class="save" :disabled="!props.isFormValid" @click="$emit('submit')">Save Class</button>
  </div>
</template>



<style scoped>
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
}

/* CANCEL */
.cancel {
  background: white;
  border: 1px solid #d1d5db;
  padding: 10px 20px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.cancel:hover {
  background: #f3f4f6;
  transform: translateY(-1px);
}

/* SAVE */
.save {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(34, 197, 94, 0.3);
  transition: all 0.2s ease;
}

.save:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(34, 197, 94, 0.4);
}

.save:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}
</style>