<script>
  import {subject, accounts, account, mode} from "./stores.js"

  let searchword = "";
  let quotas = $subject.length;
  
  $mode = "list"
  
function request_quota(quota_id, account_id, section) {
    for (let i = 0; i < $subject.length; i++) {
        let subject_item = $subject[i];
        if (subject_item.id == quota_id && subject_item.section == section) {
            if (subject_item.submitted < subject_item.quota) {
                if ($accounts[$account].subject.some((ele) => ele.id == quota_id)) {
                    alert("คุณลงทะเบียนวิชา/เซคชันนี้ไปแล้ว")
                    break
                }

                subject_item.submitted += 1
                $accounts[$account].subject.push({
                    id: quota_id,
                    section: section
                })
                alert("ลงทะเบียนสำเร็จ")

                $mode = "update_list"
            } else {
                alert("โควต้าเต็มแล้ว!")
            }
            break
        }

    }
}
  function search() {
    searchword = searchword.toUpperCase()
  }
</script>



<!--ค้นหารายวิชา-->
<br>
<div>
<input placeholder="ค้นหารายชื่อวิชา จากรหัสวิชา" bind:value={searchword}>
<button id="searchbutton" on:click={() => search()}>ค้นหา</button>
</div>
<br>
<br>

<!--แสดงข้อมูลรายวิชา+ลงทะเบียนรายวิชา-->
{#if quotas < 1}
  <h1>ไม่มีวิชาที่ลงทะเบียนได้</h1>
{:else}
<table>
  <tr>
    <th>รหัสวิชา</th>
    <th>ชื่อวิชา</th>
    <th>โควต้าที่ว่าง</th>
    <th>Section</th>
    <th>ขอโควต้า</th>
    <th>เวลาเรียน</th>
    <th>วันที่เรียน</th>
  </tr>
{#each $subject as s}
{#if searchword == "" || (searchword == s.id || searchword == s.name)}
 <tr>
   <td id="id">{s.id}</td>
   <td id="name">{s.name}</td>
   <td id="submit">{s.submitted}/{s.quota}</td>
   <td id="section">{s.section}</td>
   {#if s.submitted >= s.quota || $accounts[$account].admin}
     <td>โควต้าเต็ม</td>
     <td>{s.period}</td>
      <td>{s.date}</td>
   {:else}
     <td><button on:click={() => request_quota(s.id, $account, s.section)}>ขอโควต้า</button></td>
   <td>{s.period}</td>
    <td>{s.date}</td>
   {/if}
</tr>
{/if}
{/each}
</table>
{/if}


  
<style>
  input{
    padding:3px;
    margin:auto;
    text-align: center;
  }
  
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

  div{
    margin:auto;
    text-align: center;
  }
  
  button {
    padding:5px;
    background-color: #38b6ff;
    cursor: pointer;
    border-radius: 7px;
  }
</style>