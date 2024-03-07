<script setup>
import { ref } from "vue";
const count = ref(0);
const toggle = ref(false);
</script>
<template>
  <div class="flex h-screen w-full flex-col items-center pt-40">
    <button
      @click="toggle = !toggle"
      class="mt-8 rounded-md bg-emerald-900 px-4 py-2 text-white"
    >
      Toggle
    </button>
    <Transition type="transition">
      <p
        v-if="toggle"
        class="absolute left-1/2 top-1/2 mt-20 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 bg-gray-400 p-4 text-center"
      >
        {{ count }}
      </p>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(0.7);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(1.2);
}
</style>
