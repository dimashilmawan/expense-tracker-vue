<script setup>
import { ref } from "vue";
const count = ref(0);
const toggle = ref(false);
</script>
<template>
  <div class="flex h-screen w-full flex-col items-center justify-center">
    <Transition mode="out-in">
      <p
        :key="count"
        v-if="toggle"
        class="w-full max-w-sm bg-gray-400 p-4 text-center"
      >
        {{ count }}
      </p>
    </Transition>
    <button
      @click="count++"
      class="mt-8 rounded-md bg-emerald-500 px-4 py-2 text-white"
    >
      Increment
    </button>
    <button
      @click="toggle = !toggle"
      class="mt-8 rounded-md bg-emerald-900 px-4 py-2 text-white"
    >
      Toggle
    </button>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.32s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
</style>
