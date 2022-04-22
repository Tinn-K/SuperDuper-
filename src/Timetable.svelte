<script>
  import {subject, accounts, account, mode} from "./stores.js";
  
  let quota_num_timetable = $accounts[$account].subject.length;
</script>



<!--ตารางเรียน-->
<br>
{#if quota_num_timetable < 1}
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

  tr:nth-child(even) {
      background-color: #A5CAF1
  }
  tr:nth-child(2n+1) {
      background-color: #78B3F1
  }

  td {
    padding-top: 5px;
    padding-bottom: 5px;
    height: 30px;
    text-align: center;
    padding-left: 12px;
    padding-right: 12px;
  }

  th {
    background-color:#3498DB;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 25px;
    text-align: center;    
    padding-left: 12px;
    padding-right: 12px;
  }
  
  h1 {
    padding-top:200px;
    text-align:center;
    margin: auto;
  }
</style>