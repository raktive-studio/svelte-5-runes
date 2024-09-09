<script>
  let username = $state('');
  let isValid = $state(true);

  $effect(() => {
    if (username.length > 3 && username.length < 10) {
      isValid = true;
    } else {
      isValid = false;
    }
  });
</script>

<div class="text-sm mb-2 text-blue-500">username must be between 3-10 characters</div>
<input type="text" bind:value={username} class="border-2 border-black mb-2"/>

{#if isValid}
  <p>Username is valid!</p>
{:else}
  <p>Username is invalid!</p>
{/if}