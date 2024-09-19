<template>
    <footer class="text-white bg-black font-teko">
        <div class="flex flex-col items-center justify-between ml-10 sm:gap-12 sm:items-start md:flex-row">
            <!-- Logo and Navigation -->
            <div class="flex items-center gap-8 my-8">
                <NuxtImg src="/img/logo_white.svg" alt="Symbol Gym" class="w-32 h-32" />
                <nav class="space-y-2">
                    <a href="#" class="block tracking-widest hover:text-gray-300">GALÉRIA</a>
                    <a href="#" class="block tracking-widest hover:text-gray-300">RÓLUNK</a>
                    <a href="#" class="block tracking-widest hover:text-gray-300">SZOLGÁLTATÁSOK</a>
                    <a href="#" class="block tracking-widest hover:text-gray-300">BLOG</a>
                    <a href="#" class="block tracking-widest hover:text-gray-300">ÁRLISTA</a>
                    <a href="#" class="block tracking-widest hover:text-gray-300">KAPCSOLAT</a>
                </nav>
            </div>

            <!-- Legal and Social -->
            <div class="flex flex-col items-center mx-auto sm:items-start sm:mx-0 sm:my-8">
                <nav class="mb-4 space-y-2 opacity-50">
                    <a href="#" class="block tracking-widest hover:text-gray-300">ADATVÉDELMI NYILATKOZAT</a>
                    <a href="#" class="block tracking-widest hover:text-gray-300">GYAKRAN ISMÉTELT KÉRDÉSEK</a>
                </nav>
                <div class="flex space-x-4">
                    <a href="#" class="hover:opacity-75">
                        <NuxtImg src="/img/FacebookLogo.svg" alt="Facebook" class="w-6 h-6" />
                    </a>
                    <a href="#" class="hover:opacity-75">
                        <NuxtImg src="/img/InstagramLogo.svg" alt="Instagram" class="w-6 h-6" />
                    </a>
                </div>
                <NuxtImg src="/img/DigitalSeedLogo.svg" alt="Digital Studio" class="w-20 pb-4 pt-7 sm:pb-0" />

            </div>

            <!-- Map -->
            <div class="relative hidden w-full h-[250px] max-w-6xl overflow-hidden md:w-1/2 lg:w-3/5 md:flex">
                <NuxtImg src="/img/map.webp" alt="Map" class="absolute inset-0 object-cover w-full h-full" />
            </div>
        </div>
    </footer>
</template>