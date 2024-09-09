<script>
	let number = $state(0);
    const squared = $derived(number * number);
    const cubed = $derived(number * number * number);
</script>

<input type="number" bind:value={number} class="border-2 border-black">

<p>Number: {number}</p>
<p>Square of: {squared}</p>
<p>Cube of: {cubed}</p>