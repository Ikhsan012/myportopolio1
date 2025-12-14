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
  { name: 'Terminal Linux', color: 'text-black-500', border: 'border-black-500' },
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

    <div class="flex flex-col items-center justify-center min-h-[50vh] px-4">

  <div class="w-full max-w-4xl space-y-8 text-center">
    
    <div class="prose prose-invert mx-auto">
      <h3 class="text-2xl md:text-4xl font-bold text-gray-100 mb-4">
        Write Your
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Code.</span>
      </h3>
      <p class="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
        Hello, I am Muh. Ikhsan Ainul (often known as Ikhsan Null). I am a 18-year-old technology enthusiast with a strong focus on
        <span class="text-cyan-400 font-semibold">System Administration</span> And <span class="text-cyan-400 font-semibold">Web Development</span>. 
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      
      <div class="flex flex-col items-center">
        <h4 class="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider border-b border-gray-700 pb-1">Frontend</h4>
        <div class="flex flex-wrap justify-center gap-2">
          <span 
            v-for="skill in skills" 
            :key="skill.name"
            :class="`px-2 py-1 rounded border ${skill.border} ${skill.color} bg-gray-800/50 text-xs font-mono hover:bg-gray-800 transition-colors`"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <h4 class="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider border-b border-gray-700 pb-1">Backend</h4>
        <div class="flex flex-wrap justify-center gap-2">
          <span 
            v-for="back in backend" 
            :key="back.name"
            :class="`px-2 py-1 rounded border ${back.border} ${back.color} bg-gray-800/50 text-xs font-mono hover:bg-gray-800 transition-colors`"
          >
            {{ back.name }}
          </span>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <h4 class="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider border-b border-gray-700 pb-1">Tools</h4>
        <div class="flex flex-wrap justify-center gap-2">
          <span 
            v-for="tool in tools" 
            :key="tool.name"
            :class="`px-2 py-1 rounded border ${tool.border} ${tool.color} bg-gray-800/50 text-xs font-mono hover:bg-gray-800 transition-colors`"
          >
            {{ tool.name }}
          </span>
        </div>
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