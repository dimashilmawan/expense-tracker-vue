<script setup>
defineProps({
	total: { type: Number, required: true },
});
</script>

<template>
	<div class="w-full mt-4">
		<h2 class="uppercase font-medium">Your Balance</h2>
		<p class="text-3xl font-semibold">${{ total.toFixed(2) }}</p>
	</div>
</template>
