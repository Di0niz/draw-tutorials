# wrong-contour-shading / right-form-shading

Пара для страницы «Ошибка: тон вдоль контура», лейаут `compare`. Обе картинки
одного размера и с одним предметом, иначе сравнение не работает.

## wrong-contour-shading

**Что изображено.** Шар, у которого тон положен каймой вдоль контура: тёмная
полоса идёт по краю силуэта, внутри формы пусто. Границы света и тени нет.

**Обязательно видно:** тон повторяет линию контура; центр формы остался белым;
направление света по рисунку определить невозможно.

**Чего быть не должно:** терминатора, рефлекса, падающей тени. Здесь их нет
намеренно, это и есть ошибка.

## right-form-shading

**Что изображено.** Тот же шар под светом слева сверху. Стрелка направления
луча в углу. Тень лежит крестообразной штриховкой поперёк формы, занимает
теневую часть диска, граница света и тени проходит внутри формы и касается
контура только в двух точках. У нижнего края внутри тени светлеет рефлекс.

**Обязательно видно:** штрих идёт поперёк формы, а не вдоль края; граница
света и тени внутри диска; обводки по теневой стороне нет; рефлекс светлее
основного тона тени.

**Кадр обеих:** вертикальный, примерно 3:4, одинаковый для пары.

**Статус:** обе — временные векторные заглушки, подлежат замене. Штриховка
сделана паттерном, в карандашной версии она должна идти дугами по форме.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`,
но с прямой оговоркой: в этом уроке тон разрешён и обязателен, правило
«no shading» из префикса не применяется. Дальше:

> Two-panel comparison sheet, same sphere and same size in both panels. LEFT
> panel, the mistake: tone laid as a dark band hugging the outline of the
> sphere, the interior left blank, no terminator anywhere, the light direction
> unreadable. RIGHT panel: the same sphere lit from the upper left with a small
> arrow marking the ray. One large shadow shape hatched across the form, the
> light-shadow boundary running inside the disc and touching the contour at
> only two points, a lighter reflected light along the lower inner edge of the
> shadow, and no outline drawn on the shadow side. Graphite hatching, no
> smudging, white background.
