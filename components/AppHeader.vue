<script setup lang="ts">
const links = [
    {
        label: 'Rólunk',
        href: '#rolunk',
    },
    {
        label: 'Galéria',
        href: '#galeria',
    },
    {
        label: 'Galéria',
        href: '#galeria',
    },
    {
        label: 'Szolgáltatások',
        href: '#szolgaltatasok',
    },
    {
        label: 'Árlista',
        href: '#arlista',
    },
    {
        label: 'blog',
        href: '#blog',
    },
    {
        label: 'kapcsolat',
        href: '#kapcsolat',
    }
]
</script>

<template>
    <header class="flex items-center justify-between h-24 px-10 bg-black">
        <NuxtImg src="/img/logo_white.svg" width="64" height="64" />
        <nav class="space-x-10">
            <NuxtLink v-for="link in links" :to="link.href" class="tracking-widest text-white uppercase font-teko">{{ link.label }}</NuxtLink>
        </nav>
    </header>
</template>
