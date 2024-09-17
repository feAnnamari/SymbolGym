<template>
    <div class="w-full px-4 pt-16">
        <div class="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
            <Disclosure :singleOpen="true">
                <!-- Manual usage -->
                <DisclosureItem id="item1">
                    <template #title>What is your refund policy?</template>
                    <template #content>
                        If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.
                    </template>
                </DisclosureItem>

                <!-- Loop through array -->
                <DisclosureItem v-for="item in items" :key="item.id" :id="item.id">
                    <template #title>{{ item.title }}</template>
                    <template #content>{{ item.content }}</template>
                </DisclosureItem>
            </Disclosure>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const item1Open = ref(true)

const items = [
    {
        id: 'item2',
        title: 'Do you offer technical support?',
        content: 'Yes, we offer email and phone support 9am-5pm EST, Monday through Friday.'
    },
    {
        id: 'item3',
        title: 'Can I change my order?',
        content: 'Orders can be changed within 24 hours of placement. Please contact our customer service team for assistance.'
    }
]
</script>