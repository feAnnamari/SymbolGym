<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Size Title` : 'Site Title';
  }
})
</script>
<template>
  <div class="font-roboto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>