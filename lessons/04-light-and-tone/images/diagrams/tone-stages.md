# tone-stages

**Где стоит:** разбор, три шага подряд. Лист заменяет три отдельные схемы
`step-1-shadow-map`, `step-2-cast-shadow`, `step-3-reflex` из таблицы картинок
в `research.md`: стадии собраны в один горизонтальный лист, чтобы шаг к шагу
сравнивался глазом, а не перелистыванием. Повторно — в самопроверке дня 4.

**Что изображено.** Одна и та же стоящая женская фигура в фас, три раза слева
направо. Поза, ракурс, масштаб, положение стоп и лёгкое линейное построение из
уроков 01–03 (осевая и поперечные дуги по плечам, клетке, талии и тазу) во всех
трёх стадиях одинаковые. Руки висят по бокам отдельными объёмами, между ними и
талией виден просвет. В левом верхнем углу одна стрелка направления света на
весь лист.

- **Стадия 1 — карта теней.** Поверх построения штриховка одной плотности по
  всей теневой стороне: правая сторона головы, корпуса, правая рука, правая
  нога и узкая полоса на внутренней стороне левой ноги. Дуги идут поперёк
  формы. Падающей тени нет, линии плоскости нет.
- **Стадия 2 — падающая тень.** Тон на фигуре не тронут. Добавлены линия
  плоскости и падающая тень: выходит из-под стоп без просвета, край у основания
  обведён сплошной линией, дальний конец мягче, штрихи внутри густые у стоп и
  редкие к дальнему концу.
- **Стадия 3 — рефлекс.** Вдоль теневого контура правой руки и правой ноги
  лежит светлая полоса с редким штрихом, у границы света и тени добавлен второй
  проход штриховки. Итого три тона.

**Обязательно видно:**
- от стадии к стадии добавляется ровно один тон, ничего прежнего не
  переделывается;
- поза, ракурс, масштаб и положение стоп не меняются;
- граница света и тени идёт внутри формы, тон не положен полосой вдоль
  силуэта;
- контур на теневой стороне нигде не обведён отдельной тёмной линией;
- на стадии 2 тень выходит из-под опорных стоп без просвета;
- на стадии 3 ядро тени стоит у границы света и тени, а теневой контур светлее
  ядра;
- штрих — короткие дуги поперёк формы, растушёвки нет.

**Чего быть не должно:** черт лица, детально прорисованных пальцев, одежды,
фактуры, фона, четвёртого тона, блика, второго источника, разной позы или
разного масштаба между стадиями, падающей тени на первой стадии, встроенных
слов и цифр.

**Кадр:** горизонтальный лист 16:9, три фигуры в ряд, равные по высоте и
выровненные по линии стоп.

**Статус:** `tone-stages.png` — карандашная пластина в стиле
`templates/illustration-style.md`. Тон обязателен: три стадии одной фигуры.
Не заглушка.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> A landscape teaching sheet with exactly THREE full-height versions of the same
> standing adult female mannequin, front view, equally sized and aligned on one
> foot line, left to right. One arrow in the upper left corner marks a single
> hard light source from the upper left at about 45 degrees for all three. This
> sheet is a tonal build-up, so TONE IS EXPLICITLY REQUIRED and overrides the
> "no shading" rule of the prefix. Each stage keeps the pose, camera, scale,
> foot placement and the light construction lines of the previous one, and adds
> exactly one thing. STAGE 1: the whole shadow side — right side of head and
> torso, right arm, right leg and a narrow strip on the inner left leg — covered
> by one even value made of short arcs laid across the form; no cast shadow, no
> ground line, no gradation inside the shadow. STAGE 2: the value on the figure
> is untouched; a ground line and a cast shadow are added, leaving the standing
> feet with no gap, crisp at the base and softening toward the far end. STAGE 3:
> a lighter band of reflected light appears inside the shadow along the shadow
> contour of the right arm and the right leg, while the darkest passage stays
> next to the light–shadow boundary; three values in total. Faceless head,
> simplified hands and feet, no facial features, no clothing, no surface detail,
> no blending or smudging, no dark outline on the shadow side, no background, no
> labels, no numerals.
