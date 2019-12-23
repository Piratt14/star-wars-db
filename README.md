# Star Wars DataBase

## Description:

This application is presented in the form of the main module (random planet and its description) and tabs.
When switching tabs, the content lists change (people, planets, spaceships).
In each of the tabs, we can choose which character, planet or ship we want to get a detailed description along with its image.

Also in the form of a test in the application there are 2 buttons: login and secret. Secret simulates the work of the closed part of the application. When switching to it, an unauthorized user
redirected to the login page - login, after logging in he can again go to the previously closed page and see previously inaccessible content.
Two independent servers with open APIs act as a data source, more precisely, the swapi.co API is open, and from the second server, the images were simply taken by links.
This SPA is based on React, Bootstrap is used as a visual library.

## Описание:

Это приложение представлено в виде основного модуля(случайной планеты и ее описания) и вкладок.
При переключении вкладок списки содержимого меняются(люди, планеты, космические корабли).
В каждой из вкладок мы можем выбирать по какому персонажу, планете или кораблю хотим получить подбобное описание вместе с его изображением.

Так же в виде теста в приложении есть 2 кнопки: login и secret. Secret имитирует работы закрытой части приложения. При переходе на нее незалогиненный пользователь
перенаправляется на страницу входа - login, после входа он может снова зайти на закрытую ранее страницу и увидит ранее недоступный контент.
В качестве источника данных выступает два независимых сервера с открытыми API, точнее у swapi.co API открыт, а у второго сервера изображения просто брал по ссылкам.
Данное SPA основано на React, в качестве визуальной библиотеки используется Bootstrap.

## Tools & Technologies:

* **Platforms:** Browser SPA
* **Tools:** Web Storm, Git
* **Languages & Technologies:** HTML, CSS, JS, React, Open API, Bootstrap

## Какой опыт я получил :

Научился создавать более сложные SPA с роутингом. Научился разбивать цельное с виду приложение на переиспользуемые компоненты.
А так же дробить большие и сложные компоненты на мелкие, если это возможно. 

Научился писать и использовать свои компоненты высшего порядка (HOC)
для лучшей организации кода, что помогает при масштабировании приложения и его дальнейшей поддержке.
Написал свой аналог функции compose для функциональной композиции.

Научился применять Моки для имитирования работы сетевой части приложения.
Научился лучше работать с сетевыми запросами, обрабатывать ошибки, структурировать ответ и выделять нужные данные.

Для работы использовались два разных API с разных серверов, иногда необходимые данные отсутствуют(картинка планеты например),
но целью этого проекта не было предоставить очень подробные данные и заполнить все имеющиеся поля. Чужие сервера не всегда 
отвечают, особенно это касается swapi.co. Поэтому если приложение показывает ошибку в каком либо компоненте или долго не подгружает данные,
то придется смириться и подождать когда сервера возобновят работу.

## What experience did i get:

Learned how to create more complex SPA with routing. Learned how to break up a seemingly seamless application into reusable components.
And also split large and complex components into small ones, if possible.

Learned to write and use your higher order components (HOC)
for better organization of the code, which helps with scaling the application and its further support.
 I wrote my analogue of the compose function for functional composition.

Learned to use Mocks to simulate the network part of the application.
I learned to better work with network requests, handle errors, structure the response and highlight the necessary data.

For work, we used two different APIs from different servers, sometimes the necessary data are missing (picture of the planet, for example),
but the goal of this project was not to provide very detailed data and fill in all available fields. Foreign servers are not always
answer, especially swapi.co. Therefore, if the application shows an error in any component or for a long time does not load data,
you’ll have to put up with it and wait for the servers to resume work.

### 

![screenshot of store](https://github.com/Piratt14/star-wars-db/blob/master/misc/star-wars-db.png)

[This App Hosted on my portfolio web-site](http://d292314v.beget.tech/)

![screenshot of store](https://github.com/Piratt14/star-wars-db/blob/master/misc/app-on-site.png)
