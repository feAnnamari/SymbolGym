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
    <div class="py-4 bg-black">
        <header class="container flex items-center justify-between">
            <NuxtImg src="/img/logo_white.svg" width="64" height="64" />
            <nav class="space-x-10">
                <NuxtLink v-for="link in links" :to="link.href" class="tracking-widest text-white uppercase font-teko">{{ link.label }}</NuxtLink>
            </nav>
        </header>
    </div>
</template>
