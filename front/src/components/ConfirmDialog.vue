<template>
  <el-dialog v-model="props.dialogVisible" title="Tips"> </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  dialogVisible: boolean;
}>();
const emit = defineEmits<{}>();
</script>

<style scoped></style>
