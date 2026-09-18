# Стиль иллюстраций: учебный конструктивный рисунок

Обязателен для всех схем во всех уроках. Новая иллюстрация либо сделана по
этому документу, либо помечена как временная заглушка в описании рядом с ней.

## Задача стиля
Показывать, как ученик получает форму: жест → большие объёмы → уточнённый контур. Один этап должен быть понятен без чтения длинного объяснения.

Визуальный образец: guide-illustration-style.png. Слева жест, в центре построение, справа выбранный контур. Это образец подачи, а не эталон анатомических измерений.

## Рисунок
- Взрослая фигура с правдоподобными пропорциями. Голова без черт лица; кисти и стопы упрощены.
- Голова, грудная клетка и таз читаются как отдельные связанные массы.
- В последовательности сохраняются поза, ракурс, масштаб и положение стоп. Усложняется только построение.
- На этапе объёмов видны ось и 2–3 поперечные дуги. На этапе контура большая часть вспомогательных линий убрана.
- В уроках о груди показываются связь объёма с грудной клеткой, направление и перекрытие форм. Один выбранный тип телосложения не подаётся как универсальная норма.

## Иерархия линий
| Назначение | Внешний вид | Ориентир для PDF |
|---|---|---|
| Основная форма | Тёмно-серая, уверенная, слегка меняющая толщину линия | 1–1,4 pt |
| Построение | Более светлая и тонкая, но различимая линия | 0,6–0,8 pt |
| Скрытые оси и вспомогательные направления | Прерывистая линия | 0,6–0,8 pt |

Толщины относятся к окончательному размеру на странице. Это параметры для вёрстки и дальнейшей отрисовки, а не измеренные свойства сгенерированного образца. После уменьшения рисунка нужно снова проверить читаемость. Цвет не должен быть единственным способом различать линии.

## Фон и тон
Белый фон, свободные поля, чистые промежутки между фигурами. Без декоративной текстуры бумаги, фоновых объектов, рамок вокруг каждой фигуры и падающих теней от самой страницы.

До урока о свете используем линейный рисунок. В уроке о тоне добавляем штрих по форме и согласованное освещение. Детализация тени подчинена учебной задаче.

## Подача в гайде
- На телефонной странице один крупный рисунок или два этапа вертикально.
- Три этапа рядом подходят для обзорного листа, как в образце.
- Один рисунок объясняет одно действие. Ракурсы, движение и тон изучаются на отдельных листах.
- Подписи, стрелки, номера и измерительные шкалы добавляются при вёрстке. Деления и числовые значения проверяются отдельно.
- Пояснения к упражнению остаются настоящим текстом PDF.
- Исходные изображения сохраняются отдельно, без встроенных заголовков.

## Общий префикс для дальнейших иллюстраций
Classical constructive figure-drawing study in graphite on clean white paper. Adult female artist's mannequin with plausible proportions, faceless head, simplified hands and feet. A clear hierarchy of dark selected contours and lighter readable construction lines. Show the head, rib cage and pelvis as connected major volumes, with a centerline and a small number of cross-contour arcs. Precise but natural pencil linework, economical detail, generous margins, strong readability at small screen size. Neutral academic instruction. No shading unless explicitly requested. No labels, numerals, watermark, background objects or decorative paper texture. Across sequential stages, preserve the same pose, camera, scale and proportions.

После префикса добавляется учебная задача конкретного дня и состав листа.

## Создание образца
Использован встроенный генератор изображений. Основа позы взята из ранее созданного файла graphite-female-mannequin-construction.png. Применённые промпты приведены ниже.

### Основной промпт
Use case: scientific-educational. Create one polished visual style sample for a beginner pencil figure-drawing guide. Input image 1 is a POSE AND CONSTRUCTION reference. New output is a landscape white teaching sheet with exactly THREE separate full-height versions of that same adult female drawing mannequin, equally sized and aligned, left to right. Keep the pose, camera angle, proportions, head position and foot placement consistent across all three stages. Keep head and feet fully inside the image and generous margins. STYLE: a precise yet human graphite study from a classical constructive drawing manual. Three levels of line emphasis: flowing dark-gray movement axis; lighter but clearly readable thin gray construction; selective dark graphite final contour. Crisp at small screen size. Flat white background with no paper noise. LEFT STAGE: economical gesture, one long flowing line, shoulder and pelvis inclination axes, head oval and simple single-stroke limbs; no cylindrical outlines or details. MIDDLE STAGE: clearly legible large volumes: head egg, rib-cage egg, pelvis bowl, tapered cylinders of limbs, simple joint indicators. Exactly two or three cross-contour arcs per main mass and one centerline; avoid a dense web of redundant lines. Hands are simple block shapes and feet simple wedges. RIGHT STAGE: same adult artist's mannequin pose as a clean continuous natural contour; retain just a few subtle construction landmarks. Let the contour change delicately in weight; soften the transition from geometric masses into the complete mannequin figure. It remains an abstract faceless art-studio mannequin with simplified torso geometry, not a person portrait. Simplified hands, no individually detailed fingers. No shading, hatching, tonal fill, skin rendering, clothing, garment seams, anatomical surface detail, labels, words, numbers, arrows, panels, borders, watermark or objects. All three must visibly show a repeatable beginner workflow rather than unrelated poses. Landscape 4:3 composition.

### Уточнение правого этапа
Edit the provided three-stage graphite teaching sheet. Make ONLY the RIGHTMOST figure an unmistakably different finishing stage. Preserve the left and center figures exactly, preserve the right figure's pose, proportions, position, head-to-feet extent, and outer silhouette. On the RIGHTMOST figure ERASE the internal shoulder-joint circles, elbow and wrist rings, knee and ankle circles, pelvis seams, internal limb-cylinder edges, and most cross-contour construction. Retain only a faint head centerline, faint central torso axis and two faint broad cross-contour arcs on the torso. The rightmost figure should read as a smooth, seamless faceless artist's mannequin with a confident natural graphite outer contour, not an articulated robot. Keep the simplified hand and foot shapes. Keep a restrained simple indication of the existing torso form, no added anatomical detail. The distinction must be clear: center = construction with many visible geometric volumes; right = selected outer contour with very few light construction guides. NO shading, no fill, no new detail, no text. Maintain grayscale pencil lines and clean white background.

---

## Как это применяется в проекте

- Каждая схема урока лежит парой: файл картинки и рядом `<имя>.md` с описанием
  рисунка. Описание содержит состав листа и готовый промпт: общий префикс выше
  плюс учебная задача этого листа.
- Пока картинка не отрисована в этом стиле, на её месте может стоять временная
  векторная заглушка. В описании это указывается прямо, чтобы заглушку можно
  было найти и заменить.
- Файл образца `guide-illustration-style.png` в репозиторий пока не добавлен.
  Когда появится, класть рядом с этим документом.
