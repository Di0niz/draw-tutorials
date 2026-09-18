# right-form-shading

Пара с `wrong-contour-shading` для страницы «Ошибка: тон вдоль контура»,
лейаут `compare`. Правая картинка — как надо. Тот же шар и тот же масштаб, что
у ошибки.

**Что изображено.** Шар под светом слева сверху. Стрелка направления луча в
углу. Тень лежит штриховкой поперёк формы, занимает теневую часть диска,
граница света и тени проходит внутри формы и касается контура только в двух
точках. У нижнего края внутри тени светлеет рефлекс.

**Обязательно видно:** штрих идёт поперёк формы, а не вдоль края; граница
света и тени внутри диска; обводки по теневой стороне нет; рефлекс светлее
основного тона тени.

**Чего быть не должно:** каймы вдоль силуэта, растушёвки, второго источника,
фона, фактуры, встроенных слов и цифр.

**Кадр:** вертикальный, примерно 3:4, одинаковый с `wrong-contour-shading`.

**Статус:** `right-form-shading.png` — карандашная пластина в стиле
`templates/illustration-style.md`. Тон обязателен: штрих по форме, рефлекс.
Не заглушка.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This sheet is a still-life of one geometric volume, not a figure: from the
> prefix keep the graphite line hierarchy and the clean white ground, and ignore
> the mannequin description. One large white sphere, the same size as on the
> matching mistake plate, lit from the upper left at about 45 degrees, with a
> small arrow in the corner marking the ray. TONE IS EXPLICITLY REQUIRED here
> and overrides the "no shading" rule of the prefix. One large shadow shape
> hatched across the form with short curved strokes, the light-shadow boundary
> running inside the disc and touching the contour at only two points, a lighter
> reflected light along the lower inner edge of the shadow, and no outline drawn
> on the shadow side. Graphite hatching, no smudging, no labels, no numerals,
> white background.
