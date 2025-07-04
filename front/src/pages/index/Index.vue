<template>
  <div class="header">
    <div class="left">
      <el-button class="btn" round @click="clearCache">清除缓存</el-button>
      <el-button class="btn" round @click="checkNetwork">检测网络</el-button>
      <div class="ver">Ver:{{ version }}</div>
    </div>
    <div class="right">
      <span class="filing">炎ICP备xxxxxxxx号-8A</span>
      <div style="width: 40px; height: 50px; display: inline-block"></div>
    </div>
  </div>
  <div class="index-body">INDEX</div>
  <div class="footer"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { httpCheckNetwork } from "../../http/httpUtils";

const version = ref("2.5.80");
const clearCache = () => {
  // 清除缓存的逻辑
  console.log("缓存已清除");
};
const checkNetwork = () => {
  /* 检测网络的逻辑 */
  httpCheckNetwork()
    .then(() => {
      console.log("网络连接正常");
    })
    .catch(() => {
      console.error("网络连接异常");
    });
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 15%;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .left {
  padding: 0 20px;
  display: grid;
  grid-template-rows: 1fr, 1fr;
  grid-template-columns: repeat(2, 1fr);
}

.header .left .btn {
  margin: 0 5px 0 5px;
  border: 0;
  background-color: rgb(49, 49, 49);
  color: #ffffff;
}

.header .left .ver {
  color: rgb(130, 130, 130);
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  font-style: italic;
  font-weight: bold;
}
.header .right {
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
}
.header .right .filing {
  color: rgb(171, 171, 171);
  font-size: 11px;
  line-height: 20px;
  text-align: start;
  font-weight: bold;
}

.index-body {
  width: 100%;
  height: 65%;
  background-color: #ffffff;
}

.footer {
  width: 100%;
  height: 20%;
  background-color: #000000;
}
</style>
