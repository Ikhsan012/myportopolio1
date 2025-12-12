<script setup>
// import { startTransition } from 'react';
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    name: 'Bot Whatsapp',
    extension: '.js',
    status: 'ongoing', // running, stopped, maintenance
    description: 'Bot Wa untuk mempermudah keseharian, tersedia banyak fitur',
    tech: ['Node.js', 'Whatsapp-web.js', 'npm'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    name: 'SMBO',
    extension: '.vue',
    status: 'ongoing',
    description: 'SMBO (Sistem Management Barang Organisai) adalah Sistem Yang Saya Buat Untuk Mempermudah Manajement Barang Di Dalam lingkup Organisasi',
    tech: ['Vue.js', 'Tailwind', 'Firebase'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    name: 'arch-rice-config',
    extension: '.conf',
    status: 'stopped',
    description: 'Kumpulan dotfiles konfigurasi i3wm, polybar, dan zsh setup pribadi.',
    tech: ['Bash', 'Lua', 'CSS'],
    link: '#',
    github: '#'
  },
]);

// Fungsi buat nentuin warna status kayak systemd
const getStatusColor = (status) => {
  if (status === 'running') return 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]';
  if (status === 'maintenance') return 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]';
  if (status === 'ongoing') return 'animate-ping bg-blue-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]';
  return 'bg-red-500 opacity-50';
};
</script>

<template>
  <section id="projects" class="h-full w-full bg-gray-900 text-white flex flex-col pt-20 px-4 sm:px-8 overflow-hidden">
    
    <div class="max-w-7xl mx-auto w-full mb-8 flex-none">
      <h2 class="text-3xl md:text-4xl font-bold font-mono">
        <span class="text-cyan-400">02.</span> 
        <span class="border-b-2 border-cyan-400 pb-1">~/projects</span>
      </h2>
      <p class="mt-4 text-gray-400 font-mono text-sm">
        > ls -la ./works_
      </p>
    </div>

    <div class="max-w-7xl mx-auto w-full flex-grow overflow-y-auto pb-20 scrollbar-hide">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="group relative bg-gray-800/40 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>

          <div class="relative flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              
              <div>
                <h3 class="font-bold text-lg text-gray-100 group-hover:text-cyan-400 transition-colors font-mono">
                  {{ project.name }}<span class="text-gray-500">{{ project.extension }}</span>
                </h3>
              </div>
            </div>

            <div class="flex items-center gap-2 bg-gray-900/50 px-2 py-1 rounded-full border border-gray-700">
              <span :class="`w-2 h-2 rounded-full ${getStatusColor(project.status)}`"></span>
              <span class="text-[10px] font-mono text-gray-400 uppercase">{{ project.status }}</span>
            </div>
          </div>

          <p class="relative text-gray-400 text-sm mb-6 leading-relaxed min-h-[60px]">
            {{ project.description }}
          </p>

          <div class="relative flex flex-wrap gap-2 mb-6">
            <span 
              v-for="tech in project.tech" 
              :key="tech"
              class="text-xs font-mono text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded"
            >
              #{{ tech }}
            </span>
          </div>

          <div class="relative flex gap-4 pt-4 border-t border-gray-700/50">
            <a :href="project.github" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Source
            </a>
            <a :href="project.link" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Live Demo
            </a>
          </div>

        </div>

        <div class="hidden lg:flex items-center justify-center border-2 border-dashed border-gray-800 rounded-lg text-gray-700 font-mono text-sm">
          // More projects coming soon...
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom Scrollbar untuk grid container */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>