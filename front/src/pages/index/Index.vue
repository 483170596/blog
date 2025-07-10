<template>
  <div class="header" @click="routeToLogin">
    <div class="left">
      <el-button class="btn" round @click="clickClearCache">清除缓存</el-button>
      <el-button class="btn" round @click="clickCheckNetwork"
        >检测网络</el-button
      >
      <div class="ver">Ver:{{ version }}</div>
    </div>
    <div class="right">
      <span class="filing">炎ICP备xxxxxxxx号-8A</span>
      <div style="width: 40px; height: 50px; display: inline-block"></div>
    </div>
  </div>

  <div class="index-body" @click="routeToLogin">
    <img :src="bodyRes.url" :alt="bodyRes.title" />
    <div class="overlay-text">
      <div class="text-title">{{ bodyRes.title }}</div>
      <div class="text-description">{{ bodyRes.description }}</div>
    </div>
  </div>

  <div class="footer" @click="routeToLogin">
    <div class="diamond-wrapper">
      <div class="diamond">
        <div class="content">START</div>
      </div>
    </div>
  </div>

  <ClearCacheDialog
    :show="showClearCacheDialog"
    @clear="clearCache"
    @_h-d5t7gp8-s="_hD5t7gp8S" />
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { httpCheckNetwork } from "../../http/httpUtils";
import { useRouter } from "vue-router";
import bodyStaticResource from "../../assets/pagesStaticReource/index/citiesAndDescription.json";
import { getRandomInt } from "../../utils/common";
import ClearCacheDialog from "./components/ClearCacheDialog.vue";

// 版本号
const version = ref("2.5.80");

// 图片和文字
const bodyResIdx = ref(getRandomInt(0, bodyStaticResource.length - 1));
const intervalTime = 5000;
let bodyResTimer: number | null = null;
const bodyRes = computed(() => bodyStaticResource[bodyResIdx.value]);
onMounted(() => {
  bodyResTimer = setInterval(() => {
    bodyResIdx.value = getRandomInt(0, bodyStaticResource.length - 1);
  }, intervalTime);
});
onUnmounted(() => {
  if (bodyResTimer) {
    clearInterval(bodyResTimer);
    bodyResTimer = null;
  }
});

// 清除缓存
const showClearCacheDialog = ref(false);
const clickClearCache = (ev: PointerEvent) => {
  ev.stopPropagation();
  showClearCacheDialog.value = true;
};
const clearCache = () => {
  // todo 清除缓存逻辑
  console.log("缓存清除");
  showClearCacheDialog.value = false;
};
const _hD5t7gp8S = () => {
  // todo 处理 _hD5t7gp8S 事件
  console.log("_hD5t7gp8S");
  showClearCacheDialog.value = false;
};

// 检测网络连接
const clickCheckNetwork = (ev: PointerEvent) => {
  ev.stopPropagation();
  httpCheckNetwork()
    .then(() => {
      console.log("网络连接正常");
    })
    .catch(() => {
      console.error("网络连接异常");
    });
};

const route = useRouter();
const routeToLogin = () => {
  route.push("/login");
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
  user-select: none;
  cursor: default;
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
  /* font-weight: bold; */
  font-family: sans-serif;
}

.index-body {
  width: 100%;
  height: 65%;
  position: relative;
  overflow: hidden;
  user-select: none;
  cursor: default;
}

.index-body img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.index-body::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 3%;
  pointer-events: none;
  z-index: 1;
}
.index-body::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 20%;
  pointer-events: none;
  z-index: 1;
}

.index-body::before {
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
}

.index-body::after {
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
}
.overlay-text {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  margin-bottom: 10px;
  display: flex;
  gap: 1rem;
  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  z-index: 2;
}
.text-title {
  font-size: 1.5rem;
  font-weight: bold;
  width: 10%;
  white-space: nowrap;
  text-align: right;
  align-self: center;
}
.text-description {
  font-size: 1rem;
  align-self: center;
}

.footer {
  width: 100%;
  height: 20%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: default;
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
