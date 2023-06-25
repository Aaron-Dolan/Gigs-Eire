<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the entered email and password
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Validate the email and password
  // You can add your own validation logic here

  // If the email and password are valid, perform the login
  if ($email == "user@example.com" && $password == "password") {
    // Start the session
    session_start();

    // Set session variables
    $_SESSION["email"] = $email;

    // Redirect to the home page or any other page after successful login
    header("Location: index.html");
    exit();
  } else {
    // Invalid credentials, show an error message
    $error = "Invalid email or password";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Gigs Eire - Login</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <style>
    /* Add your custom styles here */
  </style>
</head>
<body>
  <!-- Your HTML code -->
  <header>
    <!-- Header content -->
  </header>

  <main>
    <section id="login-form">
      <h2>Login</h2>
      <!-- Form content -->
      <form method="POST" action="login.php">
        <!-- Form fields -->
        <div class="form-group">
          <label for="login-email">Email:</label>
          <input type="email" id="login-email" name="email" required>
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input type="password" id="login-password" name="password" required>
        </div>
        <div class="login-button">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  </main>

  <footer>
    <!-- Footer content -->
  </footer>

  <script src="script.js"></script>
</body>
</html>
