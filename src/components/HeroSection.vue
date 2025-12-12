<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import TypeIt from 'typeit';

const mainTitle = ref(null);
const subTitle = ref(null);
const profileImage = ref(null); // Tambahin ref buat animasi gambar (opsional)

onMounted(() => {
  const tl = gsap.timeline();

  // Animasi Gambar muncul (Pop up)
  tl.from(profileImage.value, {
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
  })
  .from(mainTitle.value, {
    y: 50, // Kurangin dikit biar gak terlalu jauh
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    skewY: 7
  }, "-=0.5");

  // TypeIt logic (Udah bener)
  new TypeIt(subTitle.value, {
    speed: 50,
    loop: true,
    waitUntilVisible: true,
    startDelay: 1500,
  })
  .type("> Backend Developer")
  .pause(1000)
  .delete(17) // Sesuaikan jumlah huruf yang dihapus
  .type(" Linux User")
  .pause(1000)
  .delete(10)
  .type(" Vibe Coder")
  .pause(2000)
  .delete(10)
  .go();
});
</script>

<template>
  <section class="h-screen w-full relative flex flex-col justify-center items-center overflow-hidden">
    
    <div ref="profileImage" class="z-10 mb-6 relative">
       <img src="../assets/profil.jpg" alt="Profile" class="w-40 h-40 md:w-52 md:h-52 object-cover border-4 border-blue-500/50 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]">
    </div>

    <div class="z-10 text-center px-4">
      <h1 ref="mainTitle" class="text-5xl md:text-7xl font-bold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Ikhsan Null.
      </h1>
      
      <div class="h-8 md:h-10 flex items-center justify-center">
         <p ref="subTitle" class="text-xl md:text-2xl text-gray-400 font-mono"></p>
      </div>

      <button onclick="window.location.href='#about'" class="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
        AYO MULAI
      </button>
            <button class="mt-4 ml-3 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
        Download CV
      </button>
    </div>
    
    <!-- <div class="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div> -->
  </section>
</template>

<style scoped>
:deep(.ti-cursor) {
  color: #60a5fa;
}
</style>