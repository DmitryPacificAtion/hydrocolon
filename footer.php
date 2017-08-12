<footer class="l--footer container-fluid">
	<div class="container">
		<div class="col-md-1 col-sm-1 logo"><a href="/"><img src="img/logo/dark-logo.png" alt="Светлое лого"></a></div>
		<div class="contacts">
			<div class="contacts__tel"><a href="tel:+38 (097) 423-15-15"><i class="fa fa-mobile" aria-hidden="true"></i>+38 (097) 423-15-15</a></div>
			<div class="contacts__call-me">
				<a href="#this" id="get-footer-popup">Заказать обратный звонок</a>
				<div class="contacts__call-me__popup col-md-4 col-sm-4">
					<p>Укажите свой контактный номер и мы свяжемся с Вами в ближайшее время</p>
					<input type="text" value="+38 (0__) ___-__-__" required>
					<button class="send-tel">Отправить</button>
				</div>
			</div>
		</div>
	</div>
</footer>
<div class="overlay">
	<div class="col-md-4 l--first-screen__modal-form">
		<form id="modal-form" method="POST" action="mailer.php"><?php include 'form.php';?></form>
	</div>
</div>
<div class="mail-popup">
	<header><i class="fa fa-times"></i></header>
	<section>
		<div class="success">Сообщение отправленно успешно!<br><i class="fa fa-check-circle-o fa-5" aria-hidden="true"></i></div>
		<div class="error">Ошибка!<br><span></span><i class="fa fa-times-circle-o fa-5" aria-hidden="true"></i></div>
	</section>
</div>
<script src="https://use.fontawesome.com/b3c61977a6.js"></script>
<!--[if IE 9]><link rel="stylesheet" type="text/css" href="css/ie-style.css"><![endif]-->
	<!--[if IE 9]>
	<script src="bower_components/html5shiv/dist/html5shiv.min.js"></script>
	<script src="js/ie-support.js"></script>
	<![endif]-->
	<script src=js/jquery-3.1.1.js></script>
	<script src=js/bootstrap.min.js></script>
	<script src=js/common.js></script>
</body>
</html>