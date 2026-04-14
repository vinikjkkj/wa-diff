__d(
  "WAWebInfoFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "info-filled";
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
      var S = 11,
        R = 11;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 11 11",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M5,0 C7.76142375,0 10,2.23857625 10,5 C10,7.76142375 7.76142375,10 5,10 C2.23857625,10 0,7.76142375 0,5 C0,2.23857625 2.23857625,0 5,0 Z M4.97297297,4.11764706 C4.61473422,4.11764706 4.32432432,4.40805695 4.32432432,4.76629571 L4.32432432,4.76629571 L4.32432432,7.52305246 C4.32432432,7.88129122 4.61473422,8.17170111 4.97297297,8.17170111 C5.33121173,8.17170111 5.62162162,7.88129122 5.62162162,7.52305246 L5.62162162,7.52305246 L5.62162162,4.76629571 C5.62162162,4.40805695 5.33121173,4.11764706 4.97297297,4.11764706 Z M5,1.89189189 C4.77305624,1.89189189 4.59377335,1.96074818 4.46214597,2.09846281 C4.33051859,2.23617745 4.26470588,2.41159704 4.26470588,2.62472683 C4.26470588,2.84113555 4.33203152,3.01819457 4.46668482,3.1559092 C4.60133812,3.29362384 4.77910807,3.36248013 5,3.36248013 C5.22089193,3.36248013 5.39866188,3.29362384 5.53331518,3.1559092 C5.66796848,3.01819457 5.73529412,2.84113555 5.73529412,2.62472683 C5.73529412,2.41159704 5.66872495,2.23617745 5.5355846,2.09846281 C5.40244426,1.96074818 5.22391785,1.89189189 5,1.89189189 Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.InfoFilledIcon = m));
  },
  98,
);
