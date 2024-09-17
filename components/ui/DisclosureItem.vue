<template>
    <div class="mb-2">
        <button @click="toggle" class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <slot name="title" />
            <PhosphorIconCaretUp :class="isOpen ? 'rotate-180 transform' : ''" class="w-5 h-5 text-purple-500" />
        </button>
        <div class="overflow-hidden transition-max-height" :style="{ maxHeight: isOpen ? `${contentHeight}px` : '0' }">
            <div ref="content" class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, watch } from 'vue'

defineOptions({
    name: 'DisclosureItem'
})

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    modelValue: {
        type: Boolean,
        default: undefined
    }
})

const emit = defineEmits(['update:modelValue'])

const { openStates, toggleItem, registerItem } = inject('disclosure')

const content = ref(null)
const contentHeight = ref(0)

onMounted(() => {
    registerItem(props.id, props.modelValue)
    contentHeight.value = content.value.scrollHeight
})

const isOpen = computed({
    get: () => props.modelValue !== undefined ? props.modelValue : openStates[props.id],
    set: (value) => {
        if (props.modelValue !== undefined) {
            emit('update:modelValue', value)
        } else {
            toggleItem(props.id)
        }
    }
})

const toggle = () => {
    isOpen.value = !isOpen.value
}

watch(() => props.modelValue, (newValue) => {
    if (newValue !== undefined) {
        openStates[props.id] = newValue
    }
})
</script>

<style scoped>
.transition-max-height {
    transition: max-height 0.3s ease-out;
}
</style>