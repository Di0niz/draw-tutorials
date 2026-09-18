# right-wrapping-arc

**Где стоит:** день 4, страница «Ошибка: плоская дуга», лейаут `compare`:
справа (как надо). Пара с `wrong-flat-arc.png`. Шар, кадр и линия горизонта у
них одинаковые, разница только в дугах.

**Что изображено.** Тот же шар того же размера на том же месте и тот же
горизонт. Через шар проведена вертикальная пунктирная ось, выходящая за силуэт
сверху и снизу. Три сечения нарисованы дугами: видимая половина каждой
провисает вниз сплошной линией, невидимая дорисована пунктиром и замыкает дугу
в полный эллипс, малая ось которого лежит на оси шара. Среднее сечение самое
широкое, у полюсов дуги у́же; ни один эллипс не выходит за силуэт.

**Обязательно видно:**
- шар, кадр, горизонт и положение трёх сечений совпадают с пластиной ошибки;
- каждая дуга замкнута пунктиром в полный эллипс;
- шар ниже горизонта, поэтому видимые половины провисают вниз, ни одна не
  выгнута вверх;
- малая ось каждого эллипса лежит на оси шара.

**Чего быть не должно:** тона и штриховки; меридианов и сетки «глобуса»;
разного размера или положения шара относительно левой пластины; дуг, вылезающих
за силуэт; встроенных подписей.

**Кадр:** вертикальная пластина примерно 3:4, одинаковый кадр с
`wrong-flat-arc.png`, шар на одном и том же месте, горизонт у верхнего края.

**Статус:** `right-wrapping-arc.png` — карандашная пластина в стиле
`templates/illustration-style.md`. Линейный конструктивный рисунок. Не заглушка.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This is a geometric construction study, not a figure: from the prefix keep the
> graphite line hierarchy, the clean white ground and the no-shading rule, and
> ignore the mannequin description. Vertical teaching plate. Horizon line near
> the top of the sheet. The same sphere as the companion mistake plate, as a
> plain circle in the same position, below that horizon. A vertical dashed axis
> runs through the sphere and out past the silhouette; the same three sections
> are drawn as cross-contour arcs whose visible half sags downward as a solid
> line and whose hidden half is dashed through, closing each arc into a complete
> ellipse with its minor axis on the sphere axis. The middle section is the
> widest, the ones near the poles narrower, and no ellipse runs outside the
> silhouette. No meridians, no globe grid, no shading, no lettering — captions
> are added at layout.
