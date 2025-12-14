<script setup>
import { ref } from 'vue';

const history = ref([
  { 
    id: 1,
    school: 'SMA Negeri 2 Pangkep',
    level: 'Sekolah Negeri',
    year: '2023 - Present',
    status: 'ONGOING',
    color: 'text-cyan-400', 
    border: 'border-cyan-400',
    description: '',
    subjects: [
      { name: 'Vue.Js', color: 'text-green-400', border: 'border-green-400' },
      { name: 'Axios', color: 'text-yellow-400', border: 'border-yellow-400' },
      { name: 'Firebase', color: 'text-yellow-400', border: 'border-yellow-400' },
      { name: 'Linux Server', color: 'text-purple-400', border: 'border-purple-400' },
      { name: 'Windows Server', color: 'text-blue-400', border: 'border-blue-400' },
      { name: 'Network Config', color: 'text-green-200', border: 'border-green-400' },
      { name: 'NodeJS', color: 'text-green-400', border: 'border-green-400' },
    ]
  },
  { 
    id: 2,
    school: 'SMP Negeri 1 Pangkep',
    level: 'Sekolah Negeri',
    year: '2019 - 2022',
    status: 'COMPLETED',
    color: 'text-green-400', 
    border: 'border-green-400',
    description: '',
    subjects: [
      { name: 'Basic Termux', color: 'text-orange-400', border: 'border-orange-400' },
      { name: 'Python', color: 'text-yellow-400', border: 'border-yellow-400' },
      { name: 'Bot JS', color: 'text-white-500', border: 'border-white-500' },
      { name: 'Science', color: 'text-purple-400', border: 'border-purple-400' },
    ]
  },
  { 
    id: 3,
    school: 'SD Negeri 9 Mangkaca',
    level: 'Sekolah Negeri',
    year: '2014 - 2019',
    status: 'COMPLETED',
    color: 'text-blue-400', 
    border: 'border-blue-400',
    description: '',
    subjects: [
      { name: 'Basic I/O', color: 'text-red-200', border: 'border-red-400' },
      { name: 'Social', color: 'text-orange-500', border: 'border-orange-500' },
    ]
  }
]);
</script>

<template>
  <section id="history" class="h-full w-full bg-gray-900 text-white flex flex-col pt-20 px-4 sm:px-8 overflow-hidden relative">
    
    <div class="max-w-7xl mx-auto w-full mb-8 flex-none">
      <h2 class="text-3xl md:text-4xl font-bold font-mono">
        <span class="text-cyan-400">2.</span> 
        <span class="border-b-2 border-cyan-400 pb-1">~/Education</span>
      </h2>
      <p class="mt-4 text-gray-400 font-mono text-sm">
        > tree ./history_log/
      </p>
    </div>
<div class="flex-grow overflow-y-auto pb-20 scrollbar-hide w-full">
  
  <div class="max-w-4xl mx-auto px-4 mt-8"> <div class="space-y-12"> <div v-for="item in history" :key="item.id" class="relative pl-8 border-l-2 border-gray-800 hover:border-cyan-500/50 transition-colors duration-300">
        
        <div class="absolute -left-[9px] top-1.5 w-4 h-4 bg-gray-900 border-2 border-cyan-500 rounded-full box-content"></div>
        
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
           <h3 class="text-xl md:text-2xl font-bold text-gray-100 flex items-center gap-3">
            {{ item.school }}
            <span v-if="item.status === 'ONGOING'" class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/50 animate-pulse whitespace-nowrap">Active</span>
          </h3>
          <p class="text-sm font-mono text-cyan-400">{{ item.year }}</p>
        </div>
        
        <p class="text-sm font-mono text-gray-500 mb-4 block">{{ item.level }}</p>
        
        <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
          {{ item.description }}
        </p>

        <div>
          <h4 class="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-2">
            <span class="text-cyan-500">></span> Modules Loaded:
          </h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="sub in item.subjects" 
              :key="sub.name"
              :class="`px-2 py-1 rounded border ${sub.border} ${sub.color} bg-gray-800/50 text-xs font-mono hover:bg-gray-800 transition-colors cursor-default`"
            >
              {{ sub.name }}
            </span>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>