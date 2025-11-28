<script lang="ts" setup>

const props = defineProps({
    timeString: {
        type: String,
        default: '10:00',
    },
    rowsLength: {
        type: Number,
        default: 1,
    },
    renderingFunction: {
        type: Function,
        default: () => {},
    },
    isEmpty: {
        type: Boolean,
        default: true,
    },
    content: {
        type: Object,
        default: {},
    },
    colorClass: {
        type: String,
        default: 'bg-amber-300',
    },
});

</script>

<template>
    <div class="w-full" :class="[`row-span-${rowsLength}`]">
        <div class="text-sm text-gray-700">{{ timeString }}</div>
        <div v-if="!isEmpty" class="min-h-3 rounded-2xl shadow-2xl w-full" :class="[colorClass]">
            {{  renderingFunction(content)  }}
        </div>
    </div>
</template>