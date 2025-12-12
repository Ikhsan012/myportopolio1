<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const navLinks = [
  { name: '~/home', href: '#home' },
  { name: './about', href: '#about' },
  { name: './projects', href: '#projects' },
  { name: './contact', href: '#contact' },
];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Fungsi buat auto-close menu pas link diklik (khusus mobile)
const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 transition">
            &lt;IkhsanNull /&gt;
          </a>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a 
              v-for="link in navLinks" 
              :key="link.name" 
              :href="link.href" 
              class="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors duration-200"
            >
              {{ link.name }}
            </a>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <button 
            @click="toggleMenu" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isOpen" class="md:hidden bg-gray-900 border-b border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          @click="closeMenu"
          class="text-gray-300 hover:text-cyan-400 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium font-mono"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>