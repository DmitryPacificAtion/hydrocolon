<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<title>Hydrocolon</title>
</head>
<body>
	<header class="l--header container-fluid">
		<div class="container">
			<div class="logo col-md-1 col-sm-1">
				<a href="/"><img src="img/logo/light-logo.png" alt="Image"></a>
			</div>
			<div class="contacts col-md-4 col-sm-4">
				<div class="contacts__tel"><a href="tel:+38 (097) 423-15-15"><i class="fa fa-mobile" aria-hidden="true"></i>+38 (097) 423-15-15</a></div>
				<div class="contacts__call-me">
<?php /*<!-- 					<a href="#this" id="get-header-popup">Обратный звонок</a>
					<div class="contacts__call-me__popup col-md-4">
						<p>Укажите свой контактный номер и мы свяжемся с Вами в ближайшее время</p>
						<input type="text" value="+38 (0__) ___-__-__" required>
						<button class="send-tel" id="call-me-header">Отправить</button>
					</div> -->*/?>
				</div>
			</div>
			<button class="toggle-menu" type="button"><span class="toggle-menu__lines"></span></button>
			<nav class="col-md-7 row">
				<ul class="menu" id="toggle-menu">
					<li class="menu-item"><a class="menu-item__link" href="/about.php">О&nbsp;процедуре</a></li>
					<?php /*<!--<li class="menu-item"><a class="menu-item__link" href="/about.php#what-is">О&nbsp;нас</a></li>-->*/?>
					<li class="menu-item"><a class="menu-item__link" href="/#description">Характеристики</a></li>
					<li class="menu-item"><a class="menu-item__link" href="/#what-in">Комплектация</a></li>
					<li class="menu-item"><a class="menu-item__link" href="/#price">Цены</a></li>
				</ul>
			</nav>
		</div>
	</header>