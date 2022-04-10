<script>
  import Login from './Login.svelte';
  import home from './home.svelte';
  import {isLogin} from './stores.js';
</script>

{#if !$isLogin}
  <Login />
{:else}
  <home />
{/if}

<style>

</style>