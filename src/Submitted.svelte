<script>
  import {subject, accounts, account, mode} from "./stores.js"

  let searchword = "";
  let quotas = $accounts[$account].subject.length;
  $mode = "submit"
  
  function cancel_quota(quota_id, account_id, section) {
    for (let i = 0; i < $subject.length; i++) {
      let subject_item = $subject[i];
      if (subject_item.id == quota_id && subject_item.section == section) {
        if ($accounts[$account].subject.some((ele) => ele.id == quota_id && ele.section == section)) {
         for (let sub_i = 0; sub_i < $accounts[$account].subject.length; sub_i++) {
            let user_subject = $accounts[$account].subject[sub_i]
           if (user_subject.id == quota_id && user_subject.section == section) {
              subject_item.submitted -= 1
              $accounts[$account].subject.splice(sub_i, 1)
              alert("ยกเลิกการขอโควต้าสำเร็จ")
              $mode = "update_submit"
              break
            }
          }
          break
        }
      }
    }
 }

</script>

<!--ตารางแสดงวิชาที่ลงไว้+กดยกเลิกวิชา-->
<br>
{#if quotas < 1}
  <h1>ไม่มีวิชาที่ลงทะเบียนไว้</h1>
{:else}
<table>
  <tr>
    <th>รหัสวิชา</th>
    <th>ชื่อวิชา</th>
    <th>Section</th>
    <th>ยกเลิกการขอโควต้า</th>
  </tr>
{#each $subject as s}
{#each $accounts[$account].subject as s_user}
    {#if s.id == s_user.id && s.section == s_user.section}
     <tr>
       <td>{s.id}</td>
       <td>{s.name}</td>
       <td>{s.section}</td>
         <td ><button on:click={() => cancel_quota(s.id, $account, s.section)}>ยกเลิกการขอโควต้า</button></td>
    </tr>
    {/if}
  {/each}
{/each}
</table>
{/if}


  
<style>
  h1 {
    padding-top:200px;
    text-align:center;
    margin: auto;
  }
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
  td,th{
    text-align: center;
    border:2px solid black;
    padding-left: 12px;
    padding-right: 12px;
  }
  #quota{
    border:none;  }
  #searchbutton {
    padding:5px;
    cursor: pointer;
    background-color: #38b6ff;
  }
</style>