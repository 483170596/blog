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
  <div class="footer">
    <div class="diamond-wrapper">
      <div class="diamond">
        <div class="content">START</div>
      </div>
    </div>
  </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.diamond-wrapper {
  position: relative;
  height: 35%;
  aspect-ratio: 1 / 1;
  transform: rotate(45deg); /* 变成菱形 */
}

.diamond {
  width: 100%;
  height: 100%;
  border: 4px solid #ffcc00;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px #ffcc00;
}

.diamond::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #ffcc00;
  opacity: 0.4;
  animation: pulse 1s infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.4;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.content {
  transform: rotate(-45deg); /* 让文字正回来 */
  font-family: sans-serif;
  font-style: italic;
  font-size: 8px;
  font-weight: bold;
  color: #ffcc00;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.content::before {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 10px solid #ffcc00;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
</style>
