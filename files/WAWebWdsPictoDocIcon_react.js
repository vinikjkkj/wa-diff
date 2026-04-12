__d(
  "WAWebWdsPictoDocIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-doc";
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
      var S = 88,
        R = 88;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 88 88",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M49 10.9H24.3c-2 0-3.8.7-5.2 2.2-1.4 1.4-2.2 3.2-2.2 5.2v51.4c0 2 .7 3.8 2.2 5.2 1.4 1.4 3.2 2.2 5.2 2.2h39.4c2 0 3.8-.7 5.2-2.2s2.2-3.2 2.2-5.2V33z",
                  style: {
                    fill: "#25d366",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                  },
                }),
                c.jsx("path", {
                  d: "M49 10.9v14.8c0 4 3.3 7.3 7.3 7.3h14.1",
                  style: { fill: "none", stroke: "#111b21", strokeWidth: 1.5 },
                }),
                c.jsx("path", {
                  d: "M29.3 29.3h9.8M29.3 44H59M29.3 58.7H59",
                  style: {
                    fill: "none",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoDocIcon = m));
  },
  98,
);
