<script setup>
import { ref } from 'vue';
const skills = [
  { name: 'HTML', color: 'text-blue-400', border: 'border-blue-400' },
  { name: 'JavaScript', color: 'text-green-400', border: 'border-green-400' },
  { name: 'CSS', color: 'text-orange-400', border: 'border-orange-400' },
  { name: 'Vue.js', color: 'text-green-200', border: 'border-green-400' },
  { name: 'NextJS', color: 'text-white-500', border: 'border-white-500' },
//   { name: 'Python', color: 'text-blue-500', border: 'border-blue-500' },
];
const backend = [
  { name: 'Firebase', color: 'text-yellow-400', border: 'border-yellow-400' },
  { name: 'NodeJS', color: 'text-green-400', border: 'border-green-400' },
  { name: 'Axios', color: 'text-purple-400', border: 'border-purple-400' },
  { name: 'Express JS', color: 'text-red-200', border: 'border-red-400' },
//   { name: 'Node.js', color: 'text-green-500', border: 'border-green-500' },
//   { name: 'Python', color: 'text-blue-500', border: 'border-blue-500' },
];
const tools = [
  { name: 'VSCodium', color: 'text-blue-400', border: 'border-blue-400' },
  { name: 'Gemini Pro 3', color: 'text-green-400', border: 'border-green-400' },
  { name: 'Brave', color: 'text-purple-400', border: 'border-purple-400' },
//   { name: '', color: 'text-red-200', border: 'border-red-400' },
  { name: 'Postman', color: 'text-orange-500', border: 'border-orange-500' },
  { name: 'Docker', color: 'text-blue-500', border: 'border-blue-500' },
];
</script>

<template>
  <section id="about" class="h-full w-full bg-gray-900 text-white flex flex-col pt-20 px-4 sm:px-8 overflow-hidden relative">
        <div class="max-w-7xl mx-auto w-full mb-8 flex-none">
      <h2 class="text-3xl md:text-4xl font-bold font-mono">
        <span class="text-cyan-400">1.</span> 
        <span class="border-b-2 border-cyan-400 pb-1">~/AboutMe</span>
      </h2>
      <p class="mt-4 text-gray-400 font-mono text-sm">
        > ls -la ./aboutme_
      </p>
    </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        <div class="relative group order-2 lg:order-1"> <div class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div class="relative bg-gray-950 rounded-lg border border-gray-800 shadow-2xl overflow-hidden text-left">
            <div class="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
              <div class="ml-4 text-xs text-gray-400 font-mono">ikhsan@archlinux:~</div>
            </div>

            <div class="p-4 md:p-6 font-mono text-xs md:text-sm space-y-4">
              <p>
                <span class="text-green-400">➜</span> 
                <span class="text-blue-400">~</span> 
                <span class="text-gray-300">neofetch --ascii_distro arch</span>
              </p>
              
              <div class="flex flex-row gap-4">
                 <div class="hidden sm:block text-cyan-500 font-bold whitespace-pre leading-none select-none text-[10px] md:text-xs">
       /\
      /  \
     /    \
    /      \
   /   ,,   \
  /   |  |   \
 /_-''    ''-_\
                </div>

                <div class="space-y-1">
                  <p><span class="text-cyan-400 font-bold">Host</span>: Ikhsan Null</p>
                  <p><span class="text-cyan-400 font-bold">OS</span>: Arch Linux</p>
                  <p><span class="text-cyan-400 font-bold">Uptime</span>: 18 years</p>
                  <p><span class="text-cyan-400 font-bold">Role</span>: Vibe Coder</p>
                  <p><span class="text-cyan-400 font-bold">Status</span>: <span class="text-green-400 blink">Online</span></p>
                  
                  <div class="flex mt-2 gap-2">
                    <div class="w-3 h-3 bg-black"></div>
                    <div class="w-3 h-3 bg-red-500"></div>
                    <div class="w-3 h-3 bg-green-500"></div>
                    <div class="w-3 h-3 bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-6 order-1 lg:order-2">
          <div class="prose prose-invert">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-100">
              Hello
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">World.</span>
            </h3>
            <p class="text-gray-400 text-sm md:text-base leading-relaxed">
              Hi, My Name Is Muh Ikhsan Ainul I Like It
              <span class="text-cyan-400">Coding</span> And <span class="text-cyan-400">Studying</span>. 
            </p>
          </div>

          <div>
            <h4 class="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Frontend</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in skills" 
                :key="skill.name"
                :class="`px-2 py-1 rounded border ${skill.border} ${skill.color} bg-gray-800/50 text-xs font-mono hover:bg-gray-800 transition-colors`"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
          <div>
            <h4 class="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Backend</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="backend in backend" 
                :key="backend.name"
                :class="`px-2 py-1 rounded border ${backend.border} ${backend.color} bg-gray-800/50 text-xs font-mono hover:bg-gray-800 transition-colors`"
              >
                {{ backend.name }}
              </span>
            </div>
          </div>
            <div>
            <h4 class="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">Tools</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="backend in tools" 
                :key="backend.name"
                :class="`px-2 py-1 rounded border ${backend.border} ${backend.color} bg-gray-800/50 text-xs font-mono hover:bg-gray-800 transition-colors`"
              >
                {{ backend.name }}
              </span>
            </div>
          </div>
        </div>

      </div>
  </section>
</template>

<style scoped>
.blink { animation: blinker 1.5s linear infinite; }
@keyframes blinker { 50% { opacity: 0; } }
</style>