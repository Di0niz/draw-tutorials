# wrong-tilted-ellipse + right-axis-ellipse

**Где стоит:** день 3, страница «Ошибка: эллипс лежит на боку», лейаут
`compare`: слева `wrong-tilted-ellipse.svg` (как не надо), справа
`right-axis-ellipse.svg` (как надо). Одно описание на обе пластины — у них общий
кадр, общий масштаб и одна и та же ось цилиндра, иначе сравнение не читается.

**Что изображено.**

*Ошибка.* Цилиндр, ось которого наклонена примерно на 25 градусов; ось проведена
насквозь пунктиром акцентного цвета и выходит за оба торца. Стенки цилиндра идут
параллельно этой оси, а оба торцевых эллипса нарисованы горизонтальными, как
будто оси нет. Малая ось верхнего эллипса отмечена красным вертикальным
отрезком — видно, что она и ось цилиндра расходятся. Из-за этого торцы сидят на
теле косо, форму выворачивает. Невидимая половина нижнего эллипса дорисована
пунктиром. Красная подпись внизу: «малая ось эллипса вертикальна, а ось цилиндра
наклонена — форму выворачивает».

*Как надо.* Тот же цилиндр, та же наклонённая ось на том же месте. Эллипс
развёрнут вместе с осью: большая ось проведена светлой линией поперёк оси,
малая ось отмечена отрезком акцентного цвета и лежит точно на оси цилиндра.
Торец сидит на теле ровно. Невидимая половина нижнего эллипса дорисована
пунктиром. Подпись акцентным цветом: «малая ось легла на ось цилиндра, большая
встала поперёк неё — торец сидит на месте».

**Обязательно видно:**
- пунктирная ось цилиндра на обеих пластинах одна и та же, в одном наклоне и на
  одном месте;
- на ошибке малая ось эллипса вертикальна и с осью цилиндра не совпадает,
  отмечена красным;
- на ошибке эллипс горизонтальный, хотя тело наклонено;
- на верной пластине малая ось лежит точно на оси цилиндра, большая строго
  поперёк неё;
- на обеих невидимая половина нижнего торца дорисована пунктиром.

**Чего быть не должно:** линии горизонта, тона и штриховки, разного наклона или
размера цилиндра между пластинами, правильного эллипса на пластине ошибки.

**Кадр:** две вертикальные пластины примерно 3:4, одинаковый кадр, цилиндр на
одном и том же месте в кадре, вывод внизу каждой.

**Статус:** `wrong-tilted-ellipse.svg` и `right-axis-ellipse.svg` — временные
векторные заглушки, подлежат замене парой карандашных пластин в стиле
`templates/illustration-style.md`.

**Промпт для отрисовки.** Общий префикс из `templates/illustration-style.md`
плюс:

> This is a geometric construction study, not a figure: from the prefix keep the
> graphite line hierarchy, the clean white ground and the no-shading rule, and
> ignore the mannequin description. Draw a pair of matching vertical plates in
> the same crop and scale, to be placed side by side. Both show the same
> cylinder whose axis is tilted about 25 degrees, drawn through the whole form
> as a dashed line sticking out beyond both ends, in exactly the same place on
> both plates.
>
> MISTAKE PLATE: the walls follow the tilted axis, but both rim ellipses are
> drawn horizontally, as if the axis were not there. The minor axis of the top
> ellipse is marked in red and is vertical, so it visibly diverges from the
> cylinder axis; the rims sit on the body askew and the form looks dislocated.
>
> CORRECT PLATE: the ellipse is turned with the axis — the major axis is drawn
> as a light line across the cylinder axis and the minor axis, marked as an
> emphasised segment, lies exactly on the cylinder axis, so the rim sits square
> on the body.
>
> On both plates the hidden half of the lower rim is dashed through into a
> complete ellipse. No horizon line, no shading, no lettering — captions are
> added at layout.
