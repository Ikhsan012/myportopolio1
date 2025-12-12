<script setup>
import { ref } from 'vue';

const history = ref([
  { 
    id: 1,
    school: 'SMA Negeri 9 Pangkep',
    level: 'Vocational High School',
    year: '2023 - Present',
    status: 'ONGOING',
    color: 'text-cyan-400', 
    border: 'border-cyan-400',
    description: '',
    subjects: [
      { name: 'Vue', color: 'text-blue-400', border: 'border-blue-400' },
      { name: 'Axios', color: 'text-yellow-400', border: 'border-yellow-400' },
      { name: 'Linux Server', color: 'text-green-400', border: 'border-green-400' },
      { name: 'Network Config', color: 'text-green-200', border: 'border-green-400' },
    ]
  },
  { 
    id: 2,
    school: 'SMP Negeri 1 Pangkep',
    level: 'Junior High School',
    year: '2019 - 2022',
    status: 'COMPLETED',
    color: 'text-green-400', 
    border: 'border-green-400',
    description: '',
    subjects: [
      { name: 'Basic Termux', color: 'text-orange-400', border: 'border-orange-400' },
      { name: 'Bot JS', color: 'text-white-500', border: 'border-white-500' },
      { name: 'Science', color: 'text-purple-400', border: 'border-purple-400' },
    ]
  },
  { 
    id: 3,
    school: 'SD Negeri 9 Mangkaca',
    level: 'Elementary School',
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

    <div class="flex-grow overflow-y-auto pb-20 scrollbar-hide max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        <!-- <div class="relative group order-2 lg:order-1 sticky top-0">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div class="relative bg-gray-950 rounded-lg border border-gray-800 shadow-2xl overflow-hidden text-left">
            <div class="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <div class="ml-4 text-xs text-gray-400 font-mono">system@education:~</div>
            </div>

            <div class="p-4 md:p-6 font-mono text-xs md:text-sm space-y-2 text-gray-300">
              <p><span class="text-green-400">➜</span> <span class="text-blue-400">~</span> tree -L 2 education</p>
              <p class="text-cyan-400">.</p>
              <p>├── <span class="text-blue-400 font-bold">2012-2018 (SD)</span></p>
              <p>│   └── <span class="text-gray-500">completed.log</span></p>
              <p>├── <span class="text-green-400 font-bold">2018-2021 (SMP)</span></p>
              <p>│   └── <span class="text-gray-500">completed.log</span></p>
              <p>└── <span class="text-cyan-400 font-bold">2021-Now (SMK)</span></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;├── <span class="text-yellow-400">learning.sh</span> <span class="animate-pulse">_</span></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;└── <span class="text-red-400">exams/</span></p>
              
              <br>
              <p class="text-gray-500">// Total Directories: 3</p>
              <p class="text-gray-500">// Status: <span class="text-green-400">Syncing Brain...</span></p>
            </div>
          </div>
        </div> -->

        <div class="space-y-8 order-1 lg:order-2">
          
          <div v-for="item in history" :key="item.id" class="relative pl-6 border-l-2 border-gray-800 hover:border-cyan-500/50 transition-colors duration-300">
            <div class="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 border-2 border-cyan-500 rounded-full"></div>
            
            <h3 class="text-xl md:text-2xl font-bold text-gray-100 flex items-center gap-3">
              {{ item.school }}
              <span v-if="item.status === 'ONGOING'" class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/50 animate-pulse">Active</span>
            </h3>
            
            <p class="text-sm font-mono text-cyan-400 mb-2">{{ item.level }} <span class="text-gray-600">|</span> {{ item.year }}</p>
            
            <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
              {{ item.description }}
            </p>

            <div>
              <h4 class="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Modules Loaded:</h4>
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
/* Utility buat hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>