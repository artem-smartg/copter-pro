
$(document).ready(function(){
  $('.slidermini').slick({
    infinite: true,
    slidesToShow: 3,
    asNavFor: ".sliderbig",
    adaptiveHeight: true,
    responsive:[
      {
        breakpoint: 550,
        settings:{
          slidesToShow: 2
        }
      },
      // {
      //   breakpoint: 390,
      //   settings:{
      //     slidesToShow: 1
      //   }
      // }
    ]
  });

  $('.sliderbig').slick({
    arrows: false,
    fade:true,
    asNavFor: ".slidermini"
  })


});


$(".counter__value").on('input', function(e){
  this.value = this.value.replace(/[^0-9\.]/g, '');
});





const counter = function(){

	const btns = document.querySelectorAll('.counter__btn');

	btns.forEach(btn => {
		btn.addEventListener('click', function(){
			const direction = this.dataset.direction;
			const inp = this.parentElement.querySelector('.counter__value');
			const currentValue = +inp.value;
			let newValue;

			if (direction === "plus") {
				newValue = currentValue + 1;
			}
			else{
				newValue = currentValue - 1 > 0 ? currentValue -1 : 0;
			}

			inp.value = newValue
		});
	});

}
counter();





let $tabs = function (target) {
      let
        _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
        _eventTabsShow,
        _showTab = function (tabsLinkTarget) {
          let tabsPaneTarget, tabsLinkActive, tabsPaneShow;
          tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
          tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
          tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
          // если следующая вкладка равна активной, то завершаем работу
          if (tabsLinkTarget === tabsLinkActive) {
            return;
          }
          // удаляем классы у текущих активных элементов
          if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs__link_active');
          }
          if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs__pane_show');
          }
          // добавляем классы к элементам (в завимости от выбранной вкладки)
          tabsLinkTarget.classList.add('tabs__link_active');
          tabsPaneTarget.classList.add('tabs__pane_show');
          document.dispatchEvent(_eventTabsShow);
        },
        _switchTabTo = function (tabsLinkIndex) {
          let tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
          if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
              tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
              tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
          }
        };

      _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

      _elemTabs.addEventListener('click', function (e) {
        let tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
          return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
      });

      return {
        showTab: function (target) {
          _showTab(target);
        },
        switchTabTo: function (index) {
          _switchTabTo(index);
        }
      }

};

$tabs('.tabs');






let header = document.getElementById("myTabs");
let btns = header.getElementsByClassName("slider__title");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {

    let current = document.getElementsByClassName("act");
    current[0].className = current[0].className.replace(" act", "");
    this.className += " act";
  });
}


