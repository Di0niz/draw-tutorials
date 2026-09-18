# wrong-flat-arc + right-wrapping-arc

**Где стоит:** день 4, страница «Ошибка: плоская дуга», лейаут `compare`: слева
`wrong-flat-arc.png` (как не надо), справа `right-wrapping-arc.png` (как надо).
У правой пластины есть отдельное описание `right-wrapping-arc.md`.
Одно описание на обе пластины — шар, кадр и линия горизонта у них одинаковые,
разница только в дугах.

**Что изображено.**

*Ошибка.* Линия горизонта у верхнего края листа, под ней шар — ровная окружность.
Поперёк неё проведены три прямых горизонтальных отрезка от края до края силуэта:
верхний, средний через центр и нижний. Ни один не изогнут, ни один не продолжен
за силуэт, оси у шара нет. Верхний отрезок перечёркнут красным крестом. Красная
подпись внизу: «дуги прямые, ни одна не замыкается в эллипс — шар читается
блином».

*Как надо.* Тот же шар того же размера на том же месте и тот же горизонт. Через
шар проведена вертикальная пунктирная ось акцентного цвета, выходящая за силуэт
сверху и снизу. Те же три сечения нарисованы дугами: видимая половина каждой
провисает вниз сплошной линией, невидимая дорисована пунктиром и замыкает дугу
в полный эллипс, малая ось которого лежит на оси шара. Среднее сечение самое
широкое, у полюсов дуги у́же; ни один эллипс не выходит за силуэт. Подпись
акцентным цветом: «видимая половина провисает, невидимая замыкает её в эллипс на
оси шара».

**Обязательно видно:**
- шар, кадр, горизонт и положение трёх сечений совпадают на обеих пластинах;
- на ошибке сечения — именно прямые отрезки, без кривизны и без пунктирной
  половины;
- на ошибке нет оси шара;
- на верной пластине каждая дуга замкнута пунктиром в полный эллипс;
- на верной пластине шар ниже горизонта, поэтому видимые половины провисают
  вниз, ни одна не выгнута вверх;
- малая ось каждого эллипса лежит на оси шара.

**Чего быть не должно:** тона и штриховки; меридианов и сетки «глобуса»;
правильных замкнутых дуг на пластине ошибки; разного размера или положения шара
между пластинами; дуг, вылезающих за силуэт.

**Кадр:** две вертикальные пластины примерно 3:4, одинаковый кадр, шар на одном
и том же месте, горизонт у верхнего края, вывод внизу каждой.

**Статус:** `wrong-flat-arc.png` и `right-wrapping-arc.png` — карандашные
пластины в стиле `templates/illustration-style.md`. Линейный конструктивный
рисунок. Не заглушки.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This is a geometric construction study, not a figure: from the prefix keep the
> graphite line hierarchy, the clean white ground and the no-shading rule, and
> ignore the mannequin description. Draw a pair of matching vertical plates in
> the same crop and scale, to be placed side by side. Both show the same sphere
> as a plain circle in the same position, below a horizon line drawn near the
> top of the sheet, with three cross-sections at the same three heights.
>
> MISTAKE PLATE: the three cross-sections are dead straight horizontal segments
> running from silhouette edge to silhouette edge, with no curvature, no dashed
> continuation and no axis on the sphere; the upper one is struck through with a
> red cross. The sphere reads as a flat disc.
>
> CORRECT PLATE: a vertical dashed axis runs through the sphere and out past the
> silhouette; the same three sections are drawn as cross-contour arcs whose
> visible half sags downward as a solid line and whose hidden half is dashed
> through, closing each arc into a complete ellipse with its minor axis on the
> sphere axis. The middle section is the widest, the ones near the poles
> narrower, and no ellipse runs outside the silhouette.
>
> No meridians, no globe grid, no shading, no lettering — captions are added at
> layout.
