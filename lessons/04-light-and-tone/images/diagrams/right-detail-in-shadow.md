# right-detail-in-shadow

Пара с `wrong-dark-detail` для страницы «Ошибка: деталь темнее тени», лейаут
`compare`. Правая картинка — как надо. Тот же шар, та же деталь, отличается
только тон детали.

**Что изображено.** Тот же шар, та же мелкая деталь на светлой стороне, но
взята полутоном: заштрихована реже основного тона тени. Самым тёмным на листе
остаётся собственная тень формы. Рефлекс на месте.

**Обязательно видно:** деталь измеримо светлее тени; самое тёмное место лежит
в тени формы; рефлекс на месте.

**Чего быть не должно:** чёрной заливки детали, растушёвки, второго источника,
фона, фактуры, встроенных слов и цифр.

**Кадр:** вертикальный, примерно 3:4, одинаковый с `wrong-dark-detail`.

**Статус:** `right-detail-in-shadow.png` — карандашная пластина в стиле
`templates/illustration-style.md`. Тон обязателен: деталь в полутоне,
подчинена объёму. Не заглушка.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This sheet is a still-life of one geometric volume, not a figure: from the
> prefix keep the graphite line hierarchy and the clean white ground, and ignore
> the mannequin description. One large white sphere, the same size and the same
> upper-left light as on the matching mistake plate. TONE IS EXPLICITLY REQUIRED
> here and overrides the "no shading" rule of the prefix. The sphere carries a
> correct form shadow hatched across the volume, with the darkest value clearly
> belonging to the core of that shadow and a lighter reflected-light band near
> the shadow contour. The same small oval detail sits on the lit side, rendered
> as a mid tone, hatched more openly than the form shadow, measurably lighter
> than the darkest passage. Graphite hatching, no smudging, no labels, no
> numerals, white background.
