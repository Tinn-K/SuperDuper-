<script>
  import {Login, Counter} from './Login.svelte';
</script>

{#if !$islogin}
  <Login />
{:else}
  <Counter />
{/if}

<style>

</style>