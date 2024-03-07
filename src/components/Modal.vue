<script setup>
import { Teleport } from "vue";
import TransactionForm from "./TransactionForm.vue";
import { XCircleIcon } from "@heroicons/vue/24/solid";

defineEmits(["closeModal", "submitTransaction"]);
defineProps(["showModal"]);
</script>
<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div
        v-if="showModal"
        @click.self="$emit('closeModal')"
        class="fixed inset-0 h-full w-full bg-slate-900/70 backdrop-blur-[2px]"
      ></div>
    </Transition>
    <Transition name="modal">
      <div
        v-if="showModal"
        class="absolute left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-slate-100 p-10 pt-12"
      >
        <button
          @:click="$emit('closeModal')"
          class="absolute right-3 top-3 flex aspect-square items-center justify-center"
        >
          <XCircleIcon class="h-8 w-8 text-slate-700" />
        </button>
        <TransactionForm
          @submitTransaction="(data) => $emit('submitTransaction', data)"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
  transition: all 0.2s ease;
}

.backdrop-leave-active {
  transition-delay: 0.05s;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease;
}

.modal-enter-active {
  transition-delay: 0.05s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(0.7);
}
</style>
