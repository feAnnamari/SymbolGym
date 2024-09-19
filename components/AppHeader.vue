<template>
    <div>
      <header class="fixed top-0 left-0 right-0 z-50 py-4 bg-black bg-opacity-75">
        <div class="container flex items-center justify-between px-4 mx-auto">
          <NuxtLink to="/" class="flex items-center">
            <NuxtImg src="/img/logo_white.svg" alt="Logo" class="w-16 h-16 transition-transform duration-300 hover:scale-110" />
          </NuxtLink>
          
          <!-- Desktop Navigation -->
          <nav class="hidden space-x-6 md:flex">
            <NuxtLink v-for="link in links" :key="link.href" :to="link.href" 
               class="relative overflow-hidden tracking-widest text-white uppercase transition-colors duration-300 font-teko hover:text-gray-300 group">
              {{ link.label }}
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </NuxtLink>
          </nav>
          
          <!-- Mobile Navigation Toggle -->
          <button @click="toggleMobileNav" class="z-50 text-white md:hidden focus:outline-none">
            <svg v-if="!mobileNavOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </header>
      
      <!-- Mobile Navigation Menu -->
      <Transition name="fade">
        <div v-if="mobileNavOpen" class="fixed inset-0 z-40 bg-black bg-opacity-90 md:hidden">
          <nav class="flex flex-col items-center justify-center h-full">
            <NuxtLink 
              v-for="link in links" 
              :key="link.href" 
              :to="link.href" 
              @click="closeMobileNav"
              class="py-4 text-2xl tracking-widest text-white uppercase transition-colors duration-300 font-teko hover:text-gray-300"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const links = [
    { label: 'Rólunk', href: '#rolunk' },
    { label: 'Galéria', href: '#galeria' },
    { label: 'Szolgáltatások', href: '#szolgaltatasok' },
    { label: 'Árlista', href: '#arlista' },
    { label: 'Blog', href: '#blog' },
    { label: 'Kapcsolat', href: '#kapcsolat' }
  ]
  
  const mobileNavOpen = ref(false)
  
  const toggleMobileNav = () => {
    mobileNavOpen.value = !mobileNavOpen.value
  }
  
  const closeMobileNav = () => {
    mobileNavOpen.value = false
  }
  
  watch(mobileNavOpen, (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>