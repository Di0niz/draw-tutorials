# wrong-contour-shading

Пара с `right-form-shading` для страницы «Ошибка: тон вдоль контура», лейаут
`compare`. Левая картинка — ошибка. Обе рисуются в одном масштабе и с одним
предметом, иначе сравнение не работает.

**Что изображено.** Шар, у которого тон положен каймой вдоль контура: тёмная
полоса штрихов идёт по краю силуэта, внутри формы пусто. Границы света и тени
нет. Направление света по рисунку определить невозможно.

**Обязательно видно:** тон повторяет линию контура; центр формы остался белым;
штрих идёт вдоль обвода, а не поперёк объёма; направление света не читается.

**Чего быть не должно:** терминатора, рефлекса, падающей тени, стрелки света.
Здесь их нет намеренно, это и есть ошибка. Встроенных слов и цифр нет.

**Кадр:** вертикальный, примерно 3:4, одинаковый с `right-form-shading`.

**Статус:** `wrong-contour-shading.png` — карандашная пластина в стиле
`templates/illustration-style.md`. Ошибочный лист: штрих вдоль контура.
Не заглушка.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This sheet is a still-life of one geometric volume, not a figure: from the
> prefix keep the graphite line hierarchy and the clean white ground, and ignore
> the mannequin description. A pedagogical MISTAKE plate. One large white
> sphere, the same size as on the matching correct plate. Tone is laid as a
> dark graphite band hugging the outline of the sphere: short strokes follow
> the contour like a ring, the interior left blank and white. There is no
> terminator, no form shadow, no cast shadow, no light arrow, no reflected
> light. The light direction is unreadable. The sphere stays a flat circle.
> Graphite hatching, no smudging, no labels, no numerals, white background.
