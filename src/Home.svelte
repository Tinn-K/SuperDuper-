<script>
  import {accounts,account,isLogin,mode,update} from './stores.js';
  import Subject from './Subject.svelte';
  import SubjectAdmin from './SubjectAdmin.svelte';
  import Submitted from './Submitted.svelte';
  import Timetable from './Timetable.svelte';
</script>

<!--ตรามธ+แบนเนอร์-->
<div id="banner">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Thammasat_University.svg/768px-Emblem_of_Thammasat_University.svg.png" alt="ตรามธ" width="150" height="150">
<img src="https://web.reg.tu.ac.th/registrar/images/thai/banner/welcome_0.jpg" alt="registor_banner" height="150">
</div>

<!--แถบปุ่มเปลี่ยนหน้า-->
<div id="nav"><span id="name">{$accounts[$account].username}: {$accounts[$account].name} </span>
<button on:click={()=>$mode="home"}>หน้าแรก</button>
<button on:click={()=>$mode="list"}>รายชื่อวิชา</button>

{#if !$accounts[$account].admin}
<button on:click={()=>$mode="submit"}>วิชาที่ขอไปแล้ว</button>
<button on:click={()=>$mode="timetable"}>ตารางเรียน</button>
{/if}
  
<button on:click={()=>$isLogin=false}>ออกจากระบบ</button>
</div>

<!--แสดงหน้าต่างๆ-->
{#if $mode == "home"}
  <h1>ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนรายวิชา</h1>
{:else if $mode == "list"}
  {#if $accounts[$account].admin}
    <SubjectAdmin />
  {:else}
    <Subject />
  {/if}
{:else if $mode == "submit"}
  <Submitted />
{:else if $mode == "timetable"}
  <Timetable />
{:else if $mode == "update_list"}
  {#if $accounts[$account].admin}
    <SubjectAdmin />
  {:else}
    <Subject />
  {/if}
{:else if $mode == "update_submit"}
  <Submitted />
{/if}


<style>
  h1 {
    padding-top:200px;
    text-align:center;
    margin: auto;
  }
  
  #name {
    color: white;
    width: 200px;
    display: inline-block;
    padding-left: 10px;
  }
  #nav {
    background-color:#004aad;
    margin-left: auto; 
    margin-right: 0;
  }
  
  button {
    color:white;
    padding:5px;
    background-color: #38b6ff;
    cursor: pointer;
    border-radius: 7px;
  }
  
  #banner {
    background-color: #f1b55a;
    width: 100%;
  }
</style>

