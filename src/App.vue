<script setup>
import TheNavbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import myProject from './components/myProject.vue';
import myContact from './components/myContact.vue';
import mySchollHistory from './components/mySchollHistory.vue';
</script>

<template>
  <div class="relative w-full h-full">
    <TheNavbar />
    
    <main class="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      
      <div id="home" class="snap-start w-full h-screen">
        <HeroSection />
      </div>
      
      <div id="about" class="snap-start w-full h-screen">
        <AboutMe />
      </div>

      <div id="scholl" class="snap-start w-full h-screen">
        <mySchollHistory />
      </div>

      <div id="project" class="snap-start w-full h-screen">
        <myProject />
      </div>

      <div id="contack" class="snap-start w-full h-screen">
        <myContact />
      </div>
    </main>
  </div>
</template>

<style>
/* Sembunyiin Scrollbar tapi tetep bisa scroll */
main {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
main::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>