<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['loaded']);
const progress = ref(0);
const currentLog = ref('');
const logs = ref([]);

const bootMessages = [
  "Initializing kernel...",
  "Loading module: vue_core_v3.0...",
  "Mounting filesystem /dev/sda1...",
  "Starting Network Manager...",
  "[ OK ] Reached target Graphical Interface.",
  "Loading assets...",
  "Compiling shaders...",
  "Establishing secure connection...",
  "System Ready."
];

let intervalId;

onMounted(() => {
  let i = 0;
  
  intervalId = setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.floor(Math.random() * 15); // Random jump biar natural
      if (progress.value > 100) progress.value = 100;
    }

    if (i < bootMessages.length) {
      logs.value.push(bootMessages[i]);
      window.scrollTo(0, document.body.scrollHeight);
      i++;
    } else {
      clearInterval(intervalId);
      setTimeout(() => {
        emit('loaded'); // Kirim sinyal ke App.vue
      }, 500); // Delay dikit pas 100% biar user sadar
    }
  }, 200); // Kecepatan log muncul
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="fixed inset-0 z-[9999] bg-black flex flex-col justify-between p-8 font-mono overflow-hidden cursor-wait">
    
    <div class="flex-grow space-y-1 text-xs md:text-sm text-gray-400">
      <div v-for="(log, index) in logs" :key="index" class="flex gap-3">
        <span class="text-green-500 font-bold">[ OK ]</span>
        <span>{{ log }}</span>
      </div>
      <div class="flex gap-3 animate-pulse">
        <span class="text-gray-600">_</span>
      </div>
    </div>

    <div class="w-full mt-4">
      <div class="flex justify-between text-xs text-gray-500 mb-1 uppercase">
        <span>Booting System</span>
        <span>{{ progress }}%</span>
      </div>
      <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          class="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-200 ease-out"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
div {
  user-select: none;
}
</style>