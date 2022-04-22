<script>
  import { accounts,account,isLogin,mode} from "./stores.js";

  let username = "";
  let password = "";
  let error = "";

  //เช็คล็อกอิน
  function checklogin() {
    if(!(username in $accounts) || $accounts[username].password != password) {
      error = "Incorrect username or password"
    } else {
      $isLogin = true;
      $account = username;
      username = "";
      password = "";
      $mode = "home";
    }
  }
</script>

<!--กรอบที่ล็อกอิน-->
<div>
  <p>
  <span id ="Login"><b>Login</b></span>
  <br>
  <br>
<input placeholder="Username" bind:value={username}><br>
<input type="password" placeholder="Password" bind:value={password}><br> 
    {#if error != ""}
      <span id="error">{error}</span>
    {/if}
  <br>
<button id=button on:click={checklogin}>Log in</button>
  </p>
</div>



<style>
  div {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-image: url("https://tu.ac.th/uploads/news-tu/banner/banner64/vr32.jpeg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0;
    padding: 0;
  }

  
  p {
    background-color: #2B79CD;
    padding-top: 50px;
    padding-bottom: 50px;
    margin:auto;
    text-align: center;
    width:300px;
    height:170px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -146px;
    margin-left: -150px;
    border:solid black;



  }
  
  input {
    background-color: #c4d0d8;
    margin: 5px;
  }
  
  #Login {
    
    font-weight: bold;
    font-size: 32px;
  }

  #error {
    color: red;
    background-color:white;
    border-radius: 7px;
    padding: 2px;
  }
  
  #button {
    background-color: #ffd13f;
    padding: 2px;
    border-radius: 7px;
    padding: 5px;
    cursor: pointer;
  }
  
</style>