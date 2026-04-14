__d(
  "WAWebPaletteOutlineIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "palette-outline";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 20,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M10 20a9.7 9.7 0 0 1-3.875-.788 10.1 10.1 0 0 1-3.187-2.15 10.1 10.1 0 0 1-2.15-3.187A9.7 9.7 0 0 1 0 10q0-2.074.813-3.9a10.1 10.1 0 0 1 2.2-3.175A10.5 10.5 0 0 1 6.25.788 10 10 0 0 1 10.2 0q2 0 3.775.688a9.9 9.9 0 0 1 3.112 1.9 9.1 9.1 0 0 1 2.125 2.875A8.3 8.3 0 0 1 20 9.05q0 2.875-1.75 4.413Q16.5 15 14 15h-1.85q-.225 0-.312.125a.47.47 0 0 0-.088.275q0 .3.375.862t.375 1.288q0 1.25-.687 1.85T10 20m-5.5-9q.65 0 1.075-.425T6 9.5t-.425-1.075T4.5 8t-1.075.425T3 9.5t.425 1.075T4.5 11m3-4q.65 0 1.075-.425T9 5.5t-.425-1.075T7.5 4t-1.075.425T6 5.5t.425 1.075T7.5 7m5 0q.65 0 1.075-.425T14 5.5t-.425-1.075T12.5 4t-1.075.425T11 5.5t.425 1.075T12.5 7m3 4q.65 0 1.075-.425T17 9.5t-.425-1.075T15.5 8t-1.075.425T14 9.5t.425 1.075T15.5 11M10 18q.224 0 .363-.125a.42.42 0 0 0 .137-.325q0-.35-.375-.825T9.75 15.3q0-1.05.725-1.675T12.25 13H14q1.65 0 2.825-.963Q18 11.076 18 9.05q0-3.025-2.312-5.038Q13.375 2 10.2 2 6.8 2 4.4 4.325T2 10q0 3.325 2.338 5.663T10 18",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PaletteOutlineIcon = m));
  },
  98,
);
