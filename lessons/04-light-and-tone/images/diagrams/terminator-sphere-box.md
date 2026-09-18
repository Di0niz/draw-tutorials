# terminator-sphere-box

**Где стоит:** день 2, теория «терминатор и планы формы», главный лист дня;
повторно как референс перед дриллом 2 «граница по форме».

**Что изображено.** Шар и коробка крупно, под тем же источником слева-сверху,
что и на всех схемах урока. На шаре граница света и тени показана как эллипс,
идущий по поверхности внутри силуэта: сама линия проведена пунктиром цветом
акцента, а тон подходит к ней с обеих сторон постепенно — со стороны света
двумя рядами редких коротких дуг (полутон), со стороны тени рядами дуг,
которые густеют у границы и разрежаются к контуру. Два конца эллипса помечены
точками: это единственные места, где граница касается контура. На коробке
граница света и тени обведена сплошной толстой линией и целиком лежит на
рёбрах: вертикальном переднем и верхнем правом. Теневая грань заштрихована
прямыми штрихами по плоскости, штриховка начинается вплотную к ребру, полутона
между светом и тенью нет. Выноски: «полутон» к шару, «скачок тона» к ребру
коробки.

**Обязательно видно:**
- на шаре граница размыта — от света к тени тон идёт через полутон, ни одной
  резкой ступени;
- на коробке тон меняется на ребре скачком, полутона нет;
- граница на шаре лежит внутри силуэта и касается контура ровно в двух точках;
- граница на коробке нигде не сходит с ребра;
- штрих читается карандашом: короткие дуги поперёк формы на шаре, прямые
  штрихи по плоскости на грани коробки;
- обе границы обведены отдельной линией, так что их можно сравнить глазом;
- источник света тот же, что на остальных схемах урока.

**Чего быть не должно:** падающих теней (этот лист только про границу, тени на
`light-direction` и `tone-stages`), рефлекса и ядра тени, второго источника,
сплошной заливки вместо штриховки, обводки контура на теневой стороне, фона и
фактуры.

**Кадр:** горизонтальный лист 700×400, шар слева, коробка справа, предметы без
опорной плоскости, свободные поля.

**Статус:** `terminator-sphere-box.svg` — временная векторная заглушка,
подлежит замене карандашной пластиной по `templates/illustration-style.md`.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> A white sphere and a white cube side by side, large, lit by one hard source
> from the upper left at about 45 degrees, no ground plane. The subject of the
> sheet is the light–shadow boundary itself, so TONE IS EXPLICITLY REQUIRED
> here and overrides the "no shading" rule of the prefix. On the SPHERE the
> boundary is an ellipse running across the surface inside the silhouette; it
> touches the outer contour at exactly two points and nowhere else. It has no
> edge: the value arrives through a narrow band of half light on the lit side
> and thickens just past the boundary on the shadow side, all of it built from
> short curved pencil strokes laid across the form, never a flat fill. On the
> CUBE the same boundary sits entirely on the edges — the near vertical edge and
> the upper right edge — and the value jumps there in one step, with no half
> light at all; the shadow plane is hatched with straight parallel strokes that
> start hard against the edge. Both boundaries are traced with one extra line so
> a reader can compare them. No cast shadows, no reflected light, no core
> shadow, no dark outline on the shadow side, no background.
