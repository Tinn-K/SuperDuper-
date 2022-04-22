<script>
  import {subject, accounts, account, mode} from "./stores.js";
  
  let quotas = $accounts[$account].subject.length;
</script>



<!--ตารางเรียน-->
<br>
{#if quotas < 1}
  <h1>ไม่มีวิชาที่ลงทะเบียนไว้</h1>
{:else}
<table>
  <tr>
    <th>รหัสวิชา</th>
    <th>ชื่อวิชา</th>
    <th>เวลาเรียน</th>
    <th>วันที่เรียน</th>
    <th>Section</th>
  </tr>
{#each $subject as s}
{#each $accounts[$account].subject as s_user}
    {#if s.id == s_user.id && s.section == s_user.section}
     <tr>
       <td>{s.id}</td>
       <td>{s.name}</td>
       <td>{s.period}</td>
       <td>{s.date}</td>
       <td>{s.section}</td>
    </tr>
    {/if}
  {/each}
{/each}
</table>
{/if}


  
<style>
  table{
    text-align: center;
    border:2px solid black;
    margin:auto;
  }
  td,th{
    text-align: center;
    border:2px solid black;
    padding-left: 12px;
    padding-right: 12px;
  }
  h1 {
    padding-top:200px;
    text-align:center;
    margin: auto;
  }
</style>