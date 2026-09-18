# build-stages

**Где стоит:** день 5, страница «Сборка торса», крупная схема во всю ширину над
текстом порядка сборки. В дриллах не повторяется — упражнение «Торс из двух
объёмов» идёт без референса.

**Что изображено.** Одна линия горизонта проходит через весь лист и через все
три стадии, подпись слева: «один горизонт на весь лист». Слева направо три
стадии одной и той же сборки торса, одного масштаба и одного поворота; подписи
под ними: «1. горизонт и оси», «2. коробка таза и яйцо клетки», «3. дуги, центр,
шея». Торс собирается только из двух масс: коробка таза и яйцо грудной клетки.

*Стадия 1.* Объёмов ещё нет. Только горизонт, пунктирная ось клетки и пунктирная
ось таза акцентного цвета с разным наклоном. На каждой оси намечено сечение
светлым пунктирным эллипсом (у таза шире и полнее, у клетки уже), от центра
каждого сечения отходит короткий указатель акцентного цвета — куда развёрнут
объём. Подписи: «ось клетки», «ось таза, стрелка — куда развёрнут объём».

*Стадия 2.* На тех же осях построены объёмы. Коробка таза — по двум точкам, со
скрытыми рёбрами пунктиром и светлыми продлениями рёбер в обе стороны к точкам
схода за краем стадии. Над ней стоит яйцо клетки. Дуг, центральной линии и шеи
ещё нет.

*Стадия 3.* Та же коробка и то же яйцо, но линии построения убраны. На яйце
появились две поперечные дуги с пунктирными невидимыми половинами, наклонённые
вместе с осью клетки, и центральная линия акцентного цвета, выгнутая в сторону
поворота. Сверху добавлена шея-цилиндр: верхний торец замкнут, у нижнего
невидимая половина дорисована пунктиром.

**Обязательно видно:**
- горизонт один и тот же и проведён через все три стадии;
- масштаб, поворот и положение обоих объёмов на всех трёх стадиях совпадают,
  добавляется только построение;
- на первой стадии объёмов нет, только оси, сечения и указатели разворота;
  указатель читается как стрелка с наконечником;
- у коробки таза скрытые рёбра пунктиром, а на второй стадии видны продления
  рёбер к точкам схода;
- на третьей стадии дуги клетки и видимая грань таза смотрят в одну сторону;
- у обоих объёмов дальняя сторона у́же ближней;
- у шеи-цилиндра малая ось торца лежит на его оси.

**Чего быть не должно:** головы, рук, ног, груди и анатомических деталей; второй
линии горизонта или разных горизонтов у стадий; разного поворота или масштаба
между стадиями; тона и штриховки; линий построения на третьей стадии.

**Кадр:** горизонтальный, примерно 7:4. Три стадии в ряд равной высоты,
горизонт у верхнего края, номера стадий под ними.

**Статус:** `build-stages.png` — карандашная пластина в стиле
`templates/illustration-style.md`. Линейный конструктивный рисунок. Не заглушка.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> Follow the prefix, but draw the torso alone, built from two masses only: a
> pelvis block and a rib-cage egg. No head, no arms, no legs, no breasts, no
> anatomical detail. Landscape sheet with exactly three stages of the same
> construction, left to right, sharing one horizon line that crosses the whole
> sheet and all three stages; camera, scale and turn are identical in all three.
> STAGE 1: no volumes yet — the horizon, a dashed rib-cage axis and a dashed
> pelvis axis at slightly different tilts, a faint dashed cross-section ellipse
> on each (wider and fuller on the pelvis, narrower on the rib cage) and a short
> arrow from the centre of each section showing which way that mass faces.
> STAGE 2: on those axes, the pelvis block is built in two-point perspective
> with dashed hidden edges and light extensions of its edges running off both
> ways towards vanishing points outside the stage, and the rib-cage egg is drawn
> above it; no arcs, no centerline, no neck yet. STAGE 3: the same block and egg
> with the construction lines removed; two cross-contour arcs with dashed hidden
> halves, tilted with the rib-cage axis, and an emphasised front centerline
> swung towards the side the mass is turned to; a small neck cylinder on top,
> its upper rim a closed ellipse and the hidden half of its lower rim dashed. No
> shading, no lettering — stage captions are added at layout.
