<?

if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) {
	die();
}

use \Bitrix\Main\Localization\Loc as Bitrix__Loc;

Bitrix__Loc::loadMessages(__FILE__);

$__frame = $this->createFrame('_' . md5(__FILE__), false)->begin('');//'Loading...'

$curPage = $APPLICATION->GetCurPage(true);

$Me = \Azbn\Core\Entity\Profile\Me::getInstance();
$fmgr = \Azbn\Core\Manager\FileMgr::getInstance();

?>
<a class="go-to-top" href="body"> 
	<svg class="icon-svg icon-owl-next" role="img">
	<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#owl-next"></use>
</svg>
</a>
<nav class="navbar-site scroll navbar   ">
	<div class="navbar__inner">
		<div class="container navbar__container"> 				
			<div class="navbar__header">
				<div class="row navbar__row-header ">
					<div class="cols navbar__cols-header  is--hamburger">
						<div class="navbar__hamburger">
							<button class="navbar__hamburger-btn hamburger__item" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false" data-toggle-nav=".navbar-site" data-body="html" data-collapse-nav=".navbar__collapse"  data-text="Меню">
								<span class="hamburger__line  is--left"></span>
								<span class="hamburger__line  is--center"></span>
								<span class="hamburger__line  is--right"></span>
							</button>
						</div>
					</div>
					<div class="cols navbar__cols-header  is--brand">
						<a class="navbar__brand" href="/">
							<img src="<?=SITE_TEMPLATE_PATH;?>/img/default/logotip.png" alt="">
						</a>
					</div>
					<div class="cols navbar__cols-header  is--tel">
						<a href="tel:+<?=$arResult['FIELDS']['PHONES'][0]['NUM'];?>" class="navbar__tel">
							<span class="navbar__tel-icon"><svg class="icon-svg icon-contacts-tel" role="img">
								<use xlink:href="<?=SITE_TEMPLATE_PATH;?>/img/svg/sprite.svg#contacts-tel"></use>
							</svg></span>
							<span class="navbar__tel-num"><?=$arResult['FIELDS']['PHONES'][0]['HUMAN'];?></span>
						</a>
					</div>
					
					<?
					if($Me->is()) {
						
						$user = $Me->user();
						//azbn_ed($user->GetParam('PERSONAL_PHOTO'), true);
						
						$photo = '';
						$photo_id = intval($user->GetParam('PERSONAL_PHOTO'));
						$photo_id = $photo_id ? $photo_id : 1;
						$photo = azbn_resize($photo_id, array('width' => 140, 'height' => 140,));
						$photo = $photo['src'];
						
					?>
					
					<div class="cols navbar__cols-header  is--btn">
						<a href="/account/" class="navbar__enter">
							<div class="navbar__enter-preview">
								<img src="<?=$photo;?>" alt="<?=$user->GetLastName();?> <?=$user->GetFirstName();?>" > 
							</div>
							<div class="navbar__enter-name"><?=$user->GetLastName();?> <?=$user->GetFirstName();?></div>
						</a>
					</div>
					
					<?
					} else {
					?>
					
					<div class="cols navbar__cols-header  is--btn">
						<a href="/account/enter/" class="btn__item is--white  is--xs  is--enter">
							<span class="btn__item-name">Вход</span>
						</a>  
					</div>
					
					<?
					}
					?>
					
				</div>
			</div>
		</div>
		
		<?
		$APPLICATION->IncludeComponent(
			AZBN__NS . ':menu',
			'',
			Array(
				'IBLOCK_ID' => 2,
				'SECTION_CODE' => 'navbar1',
			)
		);
		?>
		
	</div>
</nav>

<?

$__frame->end();

?>