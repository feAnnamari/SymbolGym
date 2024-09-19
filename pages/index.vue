<script setup>
const heroList = [
    {
        label: "Erősítés",
        img: "01_erosites.svg"
    },
    {
        label: "Személyi edzők",
        img: "02_szemelyi_edzok.svg"
    },
    {
        label: "Különleges edzéstervek",
        img: "03_edzestervek.svg"
    },
    {
        label: "Egyéni étrend tervezés",
        img: "04_egyeni_etrend_tervezes.svg"
    },
    {
        label: "Kiemelkedő eszközpark",
        img: "05_kiemelkedo_edzopark.svg"
    }
]

const servicesCards = [
    { id: 1, title: 'SAJÁT TESTSÚLLYAL VÉGZETT GYAKORLATOK', icon: '01_sajat_testsuly.svg' },
    { id: 2, title: 'KETTLEBELL GYAKORLATOK', icon: '02_kettleball.svg' },
    { id: 3, title: 'ERGOMÉTERES GÉPEKEN VÉGZETT GYAKORLATOK', icon: '03_ergometeres.svg' },
    { id: 4, title: 'ERŐEMELŐ ELEMEK', icon: '04_eroemelo.svg' },
    { id: 5, title: 'MOBILIZÁCIÓS GYAKORLATOK', icon: '05_mobilizacios.svg' },
    { id: 6, title: 'CORE IZMOK ERŐSÍTÉSE', icon: '06_core_izmok.svg' },
    { id: 7, title: 'EGYEDI EDZÉSTERV', icon: '07_egyedi_edzesterv.svg' },
    { id: 8, title: 'EGYÉNI ÉTREND', icon: '08_egyeni_etrend.svg' },
]

const target = [
    {
        title: "Kezdőknek: ",
        description: "Akik most lépnek be a crosstraining világába, és szeretnének egy támogató közösségben fejlődni."
    },
    {
        title: "Tapasztalt sportolóknak: ",
        description: "Akik új kihívásokat keresnek, és tovább szeretnék fejleszteni erőnlétüket és teljesítményüket."
    },
    {
        title: "Közösségre vágyóknak: ",
        description: "Akik egy összetartó, motiváló társaság részei szeretnének lenni, ahol minden edzés közös élmény."
    },
    {
        title: "Fittségüket növelni vágyóknak: ",
        description: "Akik szeretnének fittebbé válni, és a legjobb formájukat hozni."
    },
    {
        title: "Mentális erőt fejleszteni kívánóknak: ",
        description: "Akik nem csak a testüket, de a mentális erejüket is új szintre szeretnék emelni."
    }
];
</script>

<template>
    <section class="h-[670px] relative overflow-hidden">
        <div class="container flex items-center justify-end h-full">
            <div class="max-w-[500px] relative z-10  pt-[100px]">
                <div class="z-10 p-10 bg-white">
                    <h2 class="pb-5 text-4xl font-extrabold uppercase font-shoulders">Építsd fel a legjobb önmagad a Symbol Gym-ben!</h2>
                    <p>A Symbol Gym-ben a fejlődés nemcsak cél, hanem életstílus. Modern eszközparkunkkal és tapasztalt edzőinkkel segítünk, hogy elérd a kitűzött céljaidat, legyen az erőnövelés, állóképesség-fejlesztés vagy egy egészségesebb életmód kialakítása. Lépj be hozzánk, és tapasztald meg, mit jelent igazán hatékonyan edzeni!</p>
                </div>
                <div class="bg-primary h-1.5"></div>
            </div>
        </div>
        <NuxtImg src="/img/hero-bg.webp" class="absolute inset-0 object-cover w-full h-full" alt="background" />
    </section>

    <section class="bg-black">
        <div class="container flex flex-wrap justify-around py-8 gap-x-20 gap-y-10">
            <div v-for="item in heroList" class="flex flex-col items-center w-20">
                <div class="h-16 pb-3">
                    <NuxtImg :src="'/img/hero-icons/' + item.img" class="h-full" :alt="item.label"></NuxtImg>
                </div>
                <span class="text-center text-white uppercase font-teko">{{ item.label }}</span>
            </div>
        </div>
    </section>

    <section class="sm:h-[570px] relative overflow-hidden flex items-center">
        <div class="container z-10 mix-blend-overlay">
            <p class="font-shoulders text-white text-4xl sm:text-[170px] opacity-10 font-black uppercase leading-[182px] max-w-4xl">Sosem késő elkezdeni</p>
        </div>
        <NuxtImg src="/img/red-bg.webp" class="absolute inset-0 object-cover w-full h-full" />
    </section>

    <section id="rolunk" class="py-10 text-white bg-black">
        <div class="container">
            <h2 class="pb-4 uppercase text-[32px] font-extrabold font-shoulders">MIRŐL SZÓL A SYMBOL GYM ÉRZÉS?</h2>
            <p class="max-w-3xl pb-10 text-sm">A Symbol Gym érzés többről szól, mint egyszerű edzésről. Itt egy közösség része lehetsz, ahol a családias hangulat és a támogató társaság minden alkalommal motivál. A Symbol Gym-ben együtt dolgozunk, együtt fejlődünk, és együtt érjük el a céljainkat. Ez az érzés a közös küzdelmekből, a megosztott sikerekből és a folyamatos támogatásból fakad. Nálunk nem csak erősebbé válsz, hanem igazi közösségre találsz, amely minden lépésedet támogatja az úton.</p>
            <NuxtImg class="w-[832px]" src="/img/team.webp" alt="team"></NuxtImg>
        </div>
    </section>

    <section id="szolgaltatasok" class="py-10 text-white bg-black">
        <div class="container flex flex-col items-end">
            <h2 class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders">Szolgáltatásaink</h2>
            <p class="max-w-3xl pb-10 text-sm text-right">A Symbol Gym érzés többről szól, mint egyszerű edzésről. Itt egy közösség része lehetsz, ahol a családias hangulat és a támogató társaság minden alkalommal motivál. A Symbol Gym-ben együtt dolgozunk, együtt fejlődünk, és együtt érjük el a céljainkat. Ez az érzés a közös küzdelmekből, a megosztott sikerekből és a folyamatos támogatásból fakad. Nálunk nem csak erősebbé válsz, hanem igazi közösségre találsz, amely minden lépésedet támogatja az úton.</p>
            <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div v-for="card in servicesCards" :key="card.id" class="p-4 text-center bg-black border border-white">
                    <div class="mb-4 text-red-500">
                        <NuxtImg :src="`/img/szolgaltatasok/${card.icon}`" :alt="card.title" class="w-32 h-32 mx-auto" loading="lazy" />
                    </div>
                    <h3 class="text-2xl text-white uppercase font-teko">{{ card.title }}</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="container py-20">
        <h1 class="mb-6 text-4xl font-extrabold font-shoulders">KINEK VALÓ A SYMBOL GYM?</h1>
        <ul class="space-y-4">
            <li v-for="(item, index) in target" :key="index" class="flex items-start">
                <div class="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full"></div>
                <div>
                    <span class="font-semibold">{{ item.title }}</span>
                    {{ item.description }}
                </div>
            </li>
        </ul>
    </section>

    <section class="relative flex items-center justify-center bg-black">
    <NuxtImg src="/img/form-bg.webp" alt="Background" class="absolute inset-0 object-cover w-full h-full max-w-6xl" />
    <div class="container relative z-10 flex flex-col items-end justify-end bg-black bg-opacity-75 md:bg-opacity-0">
      <div class="py-20 md:w-1/2">
        <h2 class="mb-2 text-4xl font-extrabold text-right text-primary font-shoulders">EDDZ VELÜNK!</h2>
        <p class="mb-6 text-sm text-right text-white">Jelentkezz az alábbi űrlapon és lépj be a Symbol Gym érzésbe!</p>
        <form class="flex flex-col items-end">
          <div class="w-full mb-4">
            <input type="text" placeholder="NÉV" class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary" />
          </div>
          <div class="w-full mb-4">
            <input type="email" placeholder="E-MAIL CÍM" class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary" />
          </div>
          <div class="w-full mb-4">
            <input type="tel" placeholder="TELEFONSZÁM" class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary" />
          </div>
          <div class="w-full mb-6">
            <input type="number" placeholder="EDZÉSEK SZÁMA HETENTE" class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary" />
          </div>
          <button type="submit" class="px-[39px] py-[17px] font-extrabold text-xl text-white transition duration-300 bg-primary font-shoulders hover:bg-red-700">JELENTKEZEM</button>
        </form>
        <p class="mt-4 text-xs text-right text-gray-400">A JELENTKEZEM GOMBRA KATTINTVA ELFOGADOM AZ ADATVÉDELMI NYILATKOZATOT.</p>
      </div>
    </div>
  </section>
</template>