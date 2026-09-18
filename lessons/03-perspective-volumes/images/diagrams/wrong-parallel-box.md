# wrong-parallel-box + right-converging-box

**Где стоит:** день 2, страница «Ошибка: рёбра не сходятся», лейаут `compare`:
слева `wrong-parallel-box.svg` (как не надо), справа `right-converging-box.svg`
(как надо). Одно описание на обе пластины — они рисуются одной парой, в одном
кадре, масштабе и ракурсе, иначе сравнение не работает.

**Что изображено.**

*Ошибка.* Линия горизонта в верхней части листа и под ней коробка, нарисованная
«по знанию»: противоположные рёбра строго параллельны, дальняя грань той же
ширины, что ближняя, дальнее вертикальное ребро той же длины, что ближнее.
Скрытые рёбра проведены пунктиром. Два правых уходящих ребра продолжены за
коробку красными пунктирными линиями: они остаются параллельными и приходят на
горизонт в разных местах, общей точки не давая. Красная подпись внизу: «рёбра
параллельны и приходят на горизонт в разные точки / дальняя грань не у́же
ближней».

*Как надо.* Тот же горизонт, тот же размер и то же положение коробки, но
построение двухточечное. Одна точка схода отмечена кружком акцентного цвета у
правого края листа, вторая уходит за левый край, и туда же уходят тонкие
светлые продления рёбер. Ближнее вертикальное ребро выделено акцентным цветом и
заметно длиннее боковых, дальние грани у́же ближних. Скрытые рёбра пунктиром,
вертикали параллельны краю листа. Подпись акцентным цветом: «оба пучка сходятся
каждый в свою точку на горизонте, дальние грани у́же ближних».

**Обязательно видно:**
- обе коробки одного размера, в одном положении и на одном уровне горизонта —
  различается только построение;
- на ошибке продлённые рёбра остаются параллельными и общей точки не дают;
- на ошибке дальняя грань такой же ширины, как ближняя;
- на верной пластине оба пучка сходятся, каждый в свою точку, и одна из точек
  отмечена прямо на листе;
- на верной пластине ближнее вертикальное ребро длиннее дальних;
- вертикали на обеих пластинах параллельны краю листа;
- скрытые рёбра пунктиром на обеих.

**Чего быть не должно:** третьей точки схода и завала вертикалей; отмеченных
точек схода на пластине ошибки; тона, теней, фона; разного ракурса или размера
между левой и правой пластиной.

**Кадр:** две вертикальные пластины примерно 3:4 каждая, одинаковый кадр и
одинаковое место коробки в кадре, подпись-вывод внизу каждой.

**Статус:** `wrong-parallel-box.svg` и `right-converging-box.svg` — временные
векторные заглушки, подлежат замене парой карандашных пластин в стиле
`templates/illustration-style.md`.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This is a geometric construction study, not a figure: from the prefix keep the
> graphite line hierarchy, the clean white ground and the no-shading rule, and
> ignore the mannequin description. Draw a pair of matching vertical plates in
> the same crop, scale and camera, to be placed side by side.
>
> MISTAKE PLATE: a horizon line near the top and below it a box drawn without
> perspective — opposite edges strictly parallel, the far face exactly as wide
> as the near one, the far vertical edge exactly as long as the near one.
> Hidden edges dashed. Two receding edges are continued past the box by red
> dashed lines that stay parallel to each other and cross the horizon at two
> different places, giving no common point.
>
> CORRECT PLATE: the same box, same size and position, same horizon, but built
> in two-point perspective. One vanishing point is marked by a dot near the
> right edge of the sheet; the second lies beyond the left edge and the thin
> light edge extensions run off towards it. The near vertical edge is
> emphasised and is clearly the longest; the far faces are narrower than the
> near ones. Verticals stay parallel to the sheet edge and hidden edges are
> dashed.
>
> No third vanishing point, no shading, no lettering — captions are added at
> layout.
