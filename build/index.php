<?php include 'header.php';?>
	<section class="l--first-screen">
		<div class="container">
			<div class="col-md-8 l--first-screen__title">
				<h1>Одноразовые ректальные наборы для гидроколонотерапии</h1>
			</div>
			<div class="col-md-4 l--first-screen__form">
				<form id="form" method="POST" action="mailer.php"><?php include 'form.php';?></form> 
			</div>
		</div>
	</section>
	<section class="l--what-is container-fluid">
		<a name="what-is"></a>
		<div class="container">
			<h2>Что такое гидроколонотерапия?</h2>
			<div class="container row">
				<div class="col-md-6 col-sm-6">
					<p class="l--what-is__description">
						Гидроколонотерапия&nbsp;&mdash; это процедура по&nbsp;промыванию кишечника водой с&nbsp;целью выведения каловых шлаков, дезинтоксикации, коррекции минерального баланса организма и&nbsp;возобновлению нормальной кишечной флоры.<br><br><a class="l--what-is__description__link" href="/about.php">Подробнее о&nbsp;процедуре</a>
					</p>
				</div>
				<div class="col-md-6 col-sm-6 l--what-is__image"><img src="img/hydrocolon.jpg"  alt="Пример процедуры"></div>
			</div>
		</div>
	</section>
	<section class="l--description container">
		<a name="description"></a>
		<h2>Описание</h2>
		<table>
			<tr>
				<td class="l--description__cell-name">Производитель</td>
				<td class="l--description__cell-description">Украина</td>
			</tr>
			<tr>
				<td class="l--description__cell-name">Описание комплекта</td>
				<td class="l--description__cell-description">Гофро-шланг, трубка ПВХ, спекула</td>
			</tr>
			<tr>
				<td class="l--description__cell-name">Применение</td>
				<td class="l--description__cell-description">Одноразовый расходный материал для гидроколонотерапии. Подходит для импортных и украинских аппаратов.</td>
			</tr>
		</table>
		<div class="l--what-in">
			<a name="what-in"></a>
			<h2 class="what-in__h3">Что в комплекте?</h2>
			<div class="l--what-in__wrapper container">
				<div class="carousel slide" data-ride="carousel" id="product-slider">
					<ul class="carousel-inner" role="listbox">
						<!-- Wrapper for slides -->
						<li class="item" data-img="0">
							<img src="img/tube.jpg" alt="Трубка">
							<div class="carousel-caption">
								<h3>Трубка</h3>
							</div>
						</li>
						<li class="item active" data-img="1">
							<img src="img/spekula.jpg" alt="Спекула">
							<div class="carousel-caption">
								<h3>Спекула</h3>
							</div>
						</li>
						<li class="item" data-img="2">
							<img src="img/shlang.jpg" alt="Спекула">
							<div class="carousel-caption">
								<h3>Шланг-гофра</h3>
							</div>
						</li>
					</ul>
					<!-- Controls -->
					<a class="left carousel-control" href="#product-slider" role="button" data-slide="prev">
						<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#product-slider" role="button" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>

					<ol class="carousel-indicators">
						<li class="active"  data-target="#product-slider" data-slide-to="0"></li>
						<li class=""  data-target="#product-slider" data-slide-to="1"></li>
						<li class=""  data-target="#product-slider" data-slide-to="2"></li>
					</ol>
				</div>
			</div>
		</div>
	</section>
	<section class="l--price container-fluid">
		<a name="price"></a>
		<div class="container">
			<h2>Цена</h2>
			<div class="l--price__product"><img src="img/komplekt.jpg" alt="Комплект"></div>
			<div class="l--price__price">
				<div class="l--price__price__old">64 грн</div>
				<div class="l--price__price__action">49 грн</div>
			</div>
			<button class="cta">Заказать</button>
			<div class="l--price__cta">Успейте, пока действуют мартовские скидки!</div>
			<div class="l--price__timer" id="timer">
				<span id="days"></span>
				<span id="hours"></span>
				<span id="minutes"></span>
				<span id="seconds"></span>
			</div>
		</div>
	</section>
<?php include 'footer.php'?>