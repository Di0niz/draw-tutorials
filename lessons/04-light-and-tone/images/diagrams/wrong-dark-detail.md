# wrong-dark-detail

Пара с `right-detail-in-shadow` для страницы «Ошибка: деталь темнее тени»,
лейаут `compare`. Один и тот же шар с одной и той же деталью, отличается
только тон детали. Левая картинка — ошибка.

**Что изображено.** Шар с правильно положенной собственной тенью, но мелкая
деталь на светлой стороне — овал или след — залита сплошным чёрным и
оказывается самым тёмным пятном листа. Объём разваливается: глаз идёт к
пятну, а не к форме.

**Обязательно видно:** деталь темнее самой тёмной штриховки тени; она стоит
на свету; глаз цепляется за пятно.

**Чего быть не должно:** оправданий в виде «это просто тёмное пятно на
предмете». Лист про раскладку тонов, а не про локальный цвет. Встроенных слов
и цифр нет.

**Кадр:** вертикальный, примерно 3:4, одинаковый с `right-detail-in-shadow`.

**Статус:** `wrong-dark-detail.png` — карандашная пластина в стиле
`templates/illustration-style.md`. Ошибочный лист: деталь темнее тени формы.
Не заглушка.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This sheet is a still-life of one geometric volume, not a figure: from the
> prefix keep the graphite line hierarchy and the clean white ground, and ignore
> the mannequin description. A pedagogical MISTAKE plate. One large white
> sphere, the same size and the same upper-left light as on the matching correct
> plate. TONE IS EXPLICITLY REQUIRED. The sphere carries a correct form shadow
> hatched across the volume with a lighter reflected-light band near the shadow
> contour. On the LIT side a small oval detail is filled solid black and is the
> darkest value on the entire sheet, so the volume collapses and the eye locks
> onto the spot. Overworked dark detail, graphite hatching, no smudging, no
> labels, no numerals, white background.
