# wrong-dark-detail / right-detail-in-shadow

Пара для страницы «Ошибка: деталь темнее тени», лейаут `compare`. Один и тот
же шар с одной и той же деталью, отличается только тон детали.

## wrong-dark-detail

**Что изображено.** Шар с правильно положенной собственной тенью, но мелкая
деталь на светлой стороне залита сплошным чёрным и оказывается самым тёмным
пятном листа. Красный пунктир выносит это в подпись.

**Обязательно видно:** деталь темнее самой тёмной штриховки тени; она стоит
на свету; объём при этом разваливается, глаз идёт к пятну, а не к форме.

**Чего быть не должно:** оправданий в виде «это просто тёмное пятно на
предмете». Лист про раскладку тонов, а не про локальный цвет.

## right-detail-in-shadow

**Что изображено.** Тот же шар, та же деталь, но взята полутоном: заштрихована
реже основного тона тени. Самым тёмным на листе остаётся собственная тень
формы, что отмечено выноской.

**Обязательно видно:** деталь измеримо светлее тени; самое тёмное место
подписано и лежит в тени формы; рефлекс на месте.

**Кадр обеих:** вертикальный, примерно 3:4, одинаковый для пары.

**Статус:** обе — временные векторные заглушки, подлежат замене.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`,
с оговоркой, что тон здесь разрешён и обязателен. Дальше:

> Two-panel comparison sheet, the same lit sphere in both panels, same size and
> same light from the upper left. Both spheres carry a correct form shadow
> hatched across the volume. LEFT panel, the mistake: a small detail on the lit
> side is filled solid black and is the darkest value on the entire sheet, so
> the volume collapses and the eye locks onto the spot. RIGHT panel: the same
> detail rendered as a mid tone, lighter than the form shadow, with the darkest
> value clearly belonging to the shadow of the sphere itself. Graphite
> hatching, no smudging, white background.
