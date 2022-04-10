<script>
  import { accounts,account,isLogin } from "./stores.js";

  let username = "";
  let password = "";
  function checklogin() {
    /* เขียนโลจิกตรงนี้!!!*/
    if(!(username in $accounts) || $accounts[username].password != password) {
      alert("ควาย")
    } else {
      alert("ฉลาด")
      $isLogin = true;
      $account = username;
      username = "";
      password = "";
    }

  }
</script>

<p>
  <span id ="head">Login</span>
  <br>
  <br>
<input placeholder="username" bind:value={username}><br>
<input type="password" placeholder="Password" bind:value={password}><br>
  <br>
<botton id=botton on:click={checklogin}>Log in</botton>
</p>

<style>
  p {
    background-color: #38b6ff;
    padding-top: 50px;
    padding-bottom: 700px;
    margin: auto;
    text-align: center;
  }
  input {
    background-color: #c4d0d8;
    margin: 5px;
  }
  
  #head {
    font-weight: bold;
    font-size: 32px;
  }
  
  #botton {
    background-color: #ffde59;
    padding: 2px;
    border-radius: 7px;
    padding: 5px;
    cursor: pointer;
  }
  
</style>