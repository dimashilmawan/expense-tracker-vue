<script setup>
defineProps({
	transactions: {
		type: Array,
		required: true,
	},
});
</script>
<template>
	<div class="w-full mt-6">
		<h2 class="text-lg font-medium">History</h2>
		<ul class="mt-3 space-y-3">
			<li
				v-for="transaction in transactions"
				:key="transaction.id"
				:class="`relative rounded-md pl-5 pr-3 py-3 flex group items-center bg-white border-r-[6px] ${
					transaction.amount > 0 ? 'border-green-500' : 'border-red-500'
				}`"
			>
				<p class="capitalize flex-1">{{ transaction.text }}</p>
				<p>${{ transaction.amount }}</p>
				<button
					class="opacity-0 absolute top-0 right-1.5 translate-x-full transition-all group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 rounded-md bg-red-500 h-full aspect-square pointer-events-none"
				>
					x
				</button>
			</li>
		</ul>
	</div>
</template>
