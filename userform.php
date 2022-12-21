<?php
$conn=mysqli_connect('localhost','root','','shop_db') or die('connection failed');
$var1=$_POST['name'];
$var2=$_POST['phone'];
$var3=$_POST['email'];
$var4=$_POST['message'];
mysqli_query($conn,"insert into usercontact values('$var1','$var2','$var3','$var4')");
header("Location:contact.html");
?>