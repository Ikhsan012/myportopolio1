<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const status = ref('idle'); // idle, sending, success

const socialLinks = [
  { 
    name: 'GitHub', 
    username: '@ikhsan-null', 
    url: 'https://github.com/Ikhsan012', 
    icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>' 
  },
  { 
    name: 'Instagram', 
    username: '@ikhsan_bruhh', 
    url: 'https://www.instagram.com/ikhsan_bruhh', 
    icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>'
  },
  { 
    name: 'Email', 
    username: 'ikhsannull10@gmail.com', 
    url: 'mailto:ikhsannull10@gmail.com', 
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>' 
  }
];

const sendMessage = () => {
  status.value = 'sending';
  
  setTimeout(() => {
    status.value = 'success';
    form.value = { name: '', email: '', message: '' }; // Reset form
    
    setTimeout(() => {
      status.value = 'idle';
    }, 3000);
  }, 2000);
};
</script>

<template>
  <section id="contact" class="h-full w-full bg-gray-900 text-white flex flex-col pt-20 px-4 sm:px-8 overflow-hidden relative">
    
    <div class="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.9),rgba(17,24,39,0.9)),url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

    <div class="max-w-7xl mx-auto w-full z-10 flex flex-col h-full">
      
      <div class="mb-8 flex-none">
        <h2 class="text-3xl md:text-4xl font-bold font-mono">
          <span class="text-cyan-400">03.</span> 
          <span class="border-b-2 border-cyan-400 pb-1">./contact-me.sh</span>
        </h2>
        <p class="mt-4 text-gray-400 font-mono text-sm">
          > sudo initiate_connection --secure
        </p>
      </div>

      <div class="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-12 items-start overflow-y-auto pb-10 scrollbar-hide">
        
        <div class="space-y-8">
          <div class="prose prose-invert">
            <h3 class="text-2xl font-bold text-gray-100">
              Let's execute <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">New Collaboration.</span>
            </h3>
            <p class="text-gray-400">
              Punya ide project gila? Server sekolah lu meledak? Atau cuma mau ngajak mabar?
              Inbox gw selalu open port-nya (kecuali pas lagi compile kernel).
            </p>
          </div>

          <div class="space-y-4">
            <h4 class="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">Available Endpoints</h4>
            
            <a 
              v-for="social in socialLinks" 
              :key="social.name" 
              :href="social.url"
              target="_blank"
              class="group flex items-center gap-4 p-4 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
            >
              <div class="p-2 rounded bg-gray-800 text-cyan-400 group-hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="social.icon"></svg>
              </div>
              <div>
                <p class="text-xs text-gray-500 font-mono">{{ social.name }}</p>
                <p class="text-sm font-bold text-gray-200 group-hover:text-cyan-400 font-mono">{{ social.username }}</p>
              </div>
            </a>
          </div>
        </div>

        <div class="relative">
           <div class="rounded-lg border border-gray-700 bg-gray-950 shadow-2xl overflow-hidden">
             
             <div class="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
               <div class="flex space-x-2">
                 <div class="w-3 h-3 rounded-full bg-red-500"></div>
                 <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div class="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <span class="text-xs text-gray-400 font-mono">message_payload.json</span>
             </div>

             <form @submit.prevent="sendMessage" class="p-6 space-y-6 font-mono">
                
                <div class="group">
                  <label class="block text-xs text-gray-500 mb-1 group-focus-within:text-cyan-400">var name =</label>
                  <input 
                    v-model="form.name"
                    required
                    type="text" 
                    class="w-full bg-transparent border-b border-gray-700 text-cyan-300 py-2 focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-800"
                    placeholder='"Siapa Nama Kamu?"'
                  >
                </div>

                <div class="group">
                  <label class="block text-xs text-gray-500 mb-1 group-focus-within:text-cyan-400">var email =</label>
                  <input 
                    v-model="form.email"
                    required
                    type="email" 
                    class="w-full bg-transparent border-b border-gray-700 text-cyan-300 py-2 focus:outline-none focus:border-cyan-400 transition-colors placeholder-gray-800"
                    placeholder='"email@address.com"'
                  >
                </div>

                <div class="group">
                  <label class="block text-xs text-gray-500 mb-1 group-focus-within:text-cyan-400">const message = `</label>
                  <textarea 
                    v-model="form.message"
                    required
                    rows="4"
                    class="w-full bg-transparent border-b border-gray-700 text-gray-300 py-2 focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder-gray-800"
                    placeholder="Tulis pesanmu di sini..."
                  ></textarea>
                  <label class="block text-xs text-gray-500 mt-1">`;</label>
                </div>

                <button 
                  type="submit" 
                  :disabled="status === 'sending'"
                  class="w-full py-3 mt-4 bg-gray-800 hover:bg-cyan-900 border border-gray-700 hover:border-cyan-500 text-cyan-400 font-bold rounded flex items-center justify-center gap-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="status === 'idle'">> TRANSMIT_DATA</span>
                  <span v-else-if="status === 'sending'" class="animate-pulse">SENDING_PACKETS...</span>
                  <span v-else class="text-green-400">PACKET_SENT [200 OK]</span>
                </button>

             </form>
           </div>
        </div>

      </div>

      <footer class="flex-none py-6 text-center border-t border-gray-800 mt-auto">
        <p class="text-xs text-gray-500 font-mono">
          Built with <span class="text-green-400">Vue.js</span> & <span class="text-blue-400">Arch Linux</span> environment.
          <br>
          © 2025 Ikhsan Null. No system is safe.
        </p>
      </footer>

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