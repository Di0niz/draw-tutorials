# light-direction

**Где стоит:** день 1, теория «свет — одно пятно, тень — одно пятно», первая
схема урока; повторно как референс перед дриллом 1 «карта теней».

**Что изображено.** Шар и коробка стоят на плоскости под одним источником
слева-сверху, примерно 45°. В левом верхнем углу стрелка направления луча и
подпись «свет», от неё вниз-вправо идут три пунктирных луча. Теневая сторона
каждого предмета закрыта штриховкой одной плотности: на шаре — дугами по форме,
на коробке — прямыми штрихами по правой грани. Под каждым предметом своя
падающая тень, очерченная тонкой линией и заштрихованная.

**Обязательно видно:**
- ровно два тона: то, что под прямым лучом, и то, что не под ним;
- внутри тени градаций нет — ни ядра, ни рефлекса;
- на коробке теневая грань начинается строго от ребра;
- у шара и у коробки своя падающая тень, обе выходят из точки контакта;
- стрелка направления света согласована с тем, какая сторона в тени;
- контур на теневой стороне не обведён отдельной тёмной линией.

**Чего быть не должно:** второго источника и второй падающей тени, рефлекса,
ядра тени, полутона, растушёвки, фона, фактуры, подписей внутри предметов.

**Кадр:** горизонтальный лист 700×400, шар слева, коробка справа, общая линия
плоскости, свободные поля.

**Статус:** `light-direction.svg` — временная векторная заглушка, подлежит
замене карандашной пластиной по `templates/illustration-style.md`. Расхождение,
которое надо снять при замене: заглушка нарисована линиями 1,6 / 1,2, а три
остальные схемы урока — 2,6 / 1,4, как задано палитрой урока.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> A white sphere and a rectangular box standing on a flat plane, lit by a single
> hard light source from the upper left at about 45 degrees. This sheet is the
> shadow-map stage of a tonal study: TONE IS EXPLICITLY REQUIRED here and
> overrides the "no shading" rule of the prefix. Every surface that does not
> receive a direct ray is covered by one even pencil tone, built from short
> strokes laid across the form: curved arcs on the sphere, straight parallel
> strokes on the shadow plane of the box. There are NO gradations inside that
> tone, no core shadow, no reflected light, no half light. Each object casts its
> own shadow on the plane, starting at the contact point with no gap. A small
> arrow in the upper left corner marks the direction of the ray. The contour on
> the shadow side is not reinforced with a dark outline. Two values only: light
> and shadow.
