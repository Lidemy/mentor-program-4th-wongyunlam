<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言版</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <div>
      <a class='board__btn' href='index.php'>back to board</a>
      <a class='board__btn' href='login.php'>login</a>
    </div>
    <h1 class="board__title">Register</h1>
    <?php
      if (!empty($_GET['errCode'])) {
        $code = $_GET['errCode'];
        $msg = 'error';
        if ($code === '1') {
          $msg = '資料不齊全  <br>  請重新輸入';
        } else if ($code === '2') {
          $msg = 'Account has already been used.';
        }
        echo '<h3 class="err_msg">' . $msg . '<h3>';
      }
    ?>
    <form class='board__new-comment-form' method="POST" action="handle_register.php">
      <div class='board__nickname'>
        <span>Nickname．</span>
        <input class='board__input' type="text" name="nickname"/>
      </div>
      <div class='board__nickname'>
        <span>Username．</span>
        <input class='board__input' type="text" name="username"/>
      </div>
      <div class='board__nickname'>
        <span>Password．</span>
        <input class='board__input' type="password" name="password"/>
      </div>
      <input class='board__submit-btn' type='submit' value='Submit'></input>
    </form>
  </main>
</body>
</html>