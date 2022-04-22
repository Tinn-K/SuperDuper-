<script>
  import Login from './Login.svelte';
  import Home from './Home.svelte';
  import {isLogin} from './stores.js';
</script>

<!--ตรวจสอบการล็อกอิน-->
{#if !$isLogin}
  <Login />
{:else}
  <Home />
{/if}

<style>

</style>