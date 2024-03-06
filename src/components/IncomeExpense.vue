<script setup>
defineProps({
	income: {
		type: Number,
		required: true,
	},
	expense: {
		type: Number,
		required: true,
	},
});
</script>

<template>
	<div
		class="p-4 rounded-md bg-white w-full mt-6 flex items-center justify-center"
	>
		<div class="flex justify-center items-center w-full flex-col">
			<p class="text-lg uppercase font-medium">Income</p>
			<p class="text-green-500 font-semibold">+${{ income.toFixed(2) }}</p>
		</div>
		<div class="w-[2px] h-12 bg-slate-700/50" />
		<div class="flex justify-center items-center w-full flex-col">
			<p class="text-lg uppercase font-medium">Expense</p>
			<p class="text-red-500 font-semibold">-${{ income.toFixed(2) }}</p>
		</div>
	</div>
</template>
