<script>
  import {subject, accounts, account, mode, subject_mode} from "./stores.js"
  
  let searchword = "";
  let quota_id = "";
  let quota_name = "";
  let quota_max = "";
  let quota_section = "";
  let quota_period = "";
  let quota_date = "";

  let lists = [];
  
  let quotas = $subject.length;
  $mode = "list"
  $subject_mode = "list"
  
  
  function search() {
    searchword = searchword.toUpperCase()
  }

  function addSubject() {
    $subject.push({
      name: quota_name,
      id: quota_id,
      quota: quota_max,
      submitted: 0,
      section: quota_section,
      period: quota_period,
      date: quota_date
    })
    $mode = "update_list"
  }

  function showList(id, section) {
    lists = [];
    // loop through student
    for (let i = 0; i < Object.keys($accounts).length; i++) {
      let student = $accounts[Object.keys($accounts)[i]]
      if (student.subject.some((ele) => ele.id == id && ele.section == section)) {
        lists.push({name: student.name, id: student.username})
      }
    }
    
    $subject_mode = id + "_" + section
  }

  function delSub(account_id) {
    let q_id = $subject_mode.split("_")[0]
    let q_section = $subject_mode.split("_")[1]
    
    for (let i = 0; i < $subject.length; i++) {
      let subject_item = $subject[i];
      if (subject_item.id == q_id && subject_item.section == q_section) {
        if ($accounts[account_id].subject.some((ele) => ele.id == q_id && ele.section == q_section)) {
         for (let sub_i = 0; sub_i < $accounts[account_id].subject.length; sub_i++) {
            let user_subject = $accounts[account_id].subject[sub_i]
           if (user_subject.id == q_id && user_subject.section == q_section) {
              subject_item.submitted -= 1
              $accounts[account_id].subject.splice(sub_i, 1)
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

{#if $subject_mode == "list"}
<!--ค้นหารายวิชา-->
<br>
<div>
<input placeholder="ค้นหารายชื่อวิชา จากรหัสวิชา" bind:value={searchword}>
<button id="searchbutton" on:click={() => search()}>ค้นหา</button>
</div>
<br>
<br>
{/if}

<!--แสดงข้อมูลรายวิชา-->
{#if quotas < 1}
  <h1>ไม่มีวิชาที่ลงทะเบียนได้</h1>
{:else}
{#if $subject_mode == "list"}
<table>
  <tr>
    <th>รหัสวิชา</th>
    <th>ชื่อวิชา</th>
    <th>โควต้าที่ว่าง</th>
    <th>Section</th>
    <th>เวลาเรียน</th>
    <th>วันที่เรียน</th>
    <th>ดูรายชื่อนักเรียน</th>
    
  </tr>
{#each $subject as s}
{#if searchword == "" || (searchword == s.id || searchword == s.name)}
 <tr>
   <td id="id">{s.id}</td>
   <td id="name">{s.name}</td>
   <td id="submit">{s.submitted}/{s.quota}</td>
   <td id="section">{s.section}</td>
   <td>{s.period}</td>
   <td>{s.date}</td>
   <td><button on:click={() => showList(s.id, s.section)}>ดูรายชื่อนักเรียน</button></td>
</tr>
{/if}
{/each}
</table>
  
    <!--แสดงรายชื่อนักเรียน-->
  {:else}
  {#if lists.length == 0}
    <h1>ไม่มีนักเรียนขอโควต้า</h1>
  {:else}
  <br>
  <table>
    <tr>
      <th>รหัสนักศึกษา</th>
      <th>ชื่อ-สกุล</th>
      <th>ลบจากโควต้า</th>
    </tr>
    {#each lists as s_list}
      <tr>
        <td>{s_list.id}</td>
        <td>{s_list.name}</td>
        <td><button on:click={() => delSub(s_list.id)}>ลบจากโควต้า</button></td>
      </tr>
    {/each}
  </table>
  <br>
  {/if}
  <div class="backbutton">
    <button on:click={() => $subject_mode="list"}>กลับ</button>
  </div>
  {/if}
{/if}

  <!--เพิ่มรายวิชา-->
{#if $subject_mode == "list"}
<br>
<div>
  เพิ่มรายวิชา<br>
  <input placeholder="รหัสวิชา" bind:value={quota_id}>
  <input placeholder="ชื่อวิชา" bind:value={quota_name}>
  <input placeholder="จำนวนโควต้า" type="number" bind:value={quota_max}>
  <input placeholder="เวลาเรียน" bind:value={quota_period}>
  <input placeholder="วันที่เรียน" bind:value={quota_date}>
  <input placeholder="Section" bind:value={quota_section}>
  <button on:click={() => addSubject()}>เพิ่มรายวิชา</button>
</div>
{/if}

<style>
  input{
    padding:3px;
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

  div{
    margin:auto;
    text-align:center;
     }
  #quota{
    border:none;  }
  #searchbutton {
    padding:5px;
    background-color: #38b6ff;
    cursor: pointer;
    border-radius: 7px;
  }

  #backbutton{
    text-align: center;
    margin:auto;
  }
  
  h1 {
    padding-top:200px;
    text-align:center;
    margin: auto;
  }
</style>