// инициализирую центр вьюпорта карты при переходе на страницу
let center=[59.936477949708625,30.43431145533509];
// инициализирую точку А
let Placemark_A = [59.93520715383538,30.434074071305584];

function init(){
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 14,

        // ПАНЕЛЬ НАВИГАЦИИ
        controls: ['routePanelControl']
    });




// ЗДЕСЬ ДОБАВИМ ТОЧКУ НА КАРТУ   " A "

    let placemark = new ymaps.Placemark(
            // PLACEMARK A
        Placemark_A,
        
        {
            // // BALOON ПОДСКАЗКА БЕЗ СТИЛЕЙ
            // balloonContentHeader: 'SOME HEADER',
            // balloonContentBody: 'SOME BODY',
            // balloonContentFooter: 'SOME FOOTER',

            //  BALOON ПОДСКАЗКА СТИЛЬНЫЙ
            balloonContent:`

                <div class="balloon">
                    <div class="balloon_name"> Марджин Групп </div>
                    <div class="balloon_description"> ЛОГИСТИКА И МЕЖДУНАРОДНЫЕ ГРУЗОПЕРЕВОЗКИ </div>
                    <div class="balloon_contacts"> <a href=" tel: +7(999)-999-99-99">+7(999)-999-99-99</a>
                    </div>
                </div>




            `

        },        {
            // ПРИКРЕПЛЯЮ СВОЮ ИКОНКУ
            iconLayout: 'default#image',
            iconImageHref: 'location.png',
            iconImageSize: [50, 50],
            iconImageOffset: [-26,-45]
        });

    map.geoObjects.add(placemark);


        // ОТКРЫТЫЙ BALOON ПРИ ОБНОВЛЕНИИ СТРАНИЦЫ
    placemark.balloon.open()

        // НАСТРАИВАЮ НАВИГАЦТИЮ
    let control = map.controls.get('routePanelControl');
    let city = 'Санкт-Петербург'

    control.routePanel.state.set({
        type: "auto",
        fromEnabled: true,
        type:"auto",
        from: `${city}, Энергетиков 4 1`,
        toEnabled: true,
        to:'невский проспект'
    })
        control.routePanel.options.set({
            types:{
                // masstransit: true,
                pedestrian : false,
                taxi: true,
                bus: false,
                auto: true
            }
        })
    
}    
ymaps.ready(init);






