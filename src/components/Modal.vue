<script setup>
import { Teleport } from "vue";
import TransactionForm from "./TransactionForm.vue";
import { XCircleIcon } from "@heroicons/vue/24/solid";

defineEmits(["closeModal", "submitTransaction"]);
defineProps(["showModal"]);
</script>
<template>
  <Teleport to="body">
    <Transition name="modal" :duration="400">
      <div
        v-if="showModal"
        @click.self="$emit('closeModal')"
        class="fixed inset-0 flex items-center justify-center bg-slate-900/70 backdrop-blur-[2px]"
      >
        <div
          v-if="showModal"
          class="content relative w-full max-w-sm rounded-xl bg-slate-100 p-10 pt-12"
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
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .content,
.modal-leave-active .content {
  /* DELAY content to animate */
  transition: all 0.3s ease 0.1s;
}

.modal-enter-from .content,
.modal-leave-to .content {
  opacity: 0;
  transform: scale(0.9);
}
</style>
