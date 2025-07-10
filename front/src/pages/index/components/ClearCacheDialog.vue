<template>
  <el-dialog
    :style="my_dialog_style"
    v-model="props.show"
    destroy-on-close
    align-center
    width="60%"
    :show-close="false">
    <div class="dialog-body">
      <div class="item-style" @click="$emit('clear')">
        <div class="title">清除缓存</div>
        <WarnTriangleFilled class="icon" />
        <div class="description">
          ·将会清除本地缓存和账号数据<br />·将会清除额外下载的网页资源
        </div>
      </div>
      <div class="item-style" @click="$emit('_hD5t7gp8S')">
        <div class="title">&p^5rTs_</div>
        <WarnTriangleFilled class="icon" />
        <div class="description">·�芦��𧼮�墧鱻</div>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean;
}>();
defineEmits<{
  clear: [];
  _hD5t7gp8S: [];
}>();
const my_dialog_style = {
  "--el-dialog-padding-primary": "0px",
  "background-color": "rgba(0, 0, 0, 0)",
  "--el-dialog-box-shadow": "none",
};
</script>

<style scoped>
.dialog-body {
  background-color: rgba(255, 255, 255, 0);
}
.item-style {
  background-color: rgba(49, 49, 49, 0.9);
  height: 80px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-radius: 7px;
  user-select: none;
  cursor: default;
}
.item-style::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 80%;
  background-color: rgb(38, 38, 38);
}
.item-style .title {
  font-size: 1.4rem;
  color: #ffffff;
  width: 30%;
  text-align: center;
  align-self: center;
}
.item-style .description {
  font-size: 1rem;
  color: rgb(135, 135, 135);
  /* width: 70%; */
  text-align: left;
  align-self: center;
  padding-right: 10px;
}
.item-style .icon {
  width: 45px;
  height: 45px;
  margin: 0 10px;
}
</style>
