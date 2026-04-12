__d(
  "WAWebWdsPictoChatlockIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-chatlock";
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
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "#25d366",
                  fillRule: "evenodd",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  d: "M62.82 25.63v-3.02A18.7 18.7 0 0 0 44 4a18.7 18.7 0 0 0-18.83 18.61v3.02h-4.32c-4.99 0-9.03 4-9.03 8.93V65.8a9 9 0 0 0 9.03 8.93h4.54v5.94c0 2.6 2.93 4.18 5.19 2.84l11.75-8.77h24.82c4.99 0 9.03-4 9.03-8.94V34.56a9 9 0 0 0-9.03-8.93zm-5.08 0v-3.02c0-7.5-6.15-13.59-13.74-13.59s-13.75 6.09-13.75 13.6v3.01z",
                  clipRule: "evenodd",
                }),
                c.jsx("path", {
                  stroke: "#111b21",
                  strokeLinecap: "round",
                  strokeWidth: 1.5,
                  d: "M25.49 43.9h37.57M25.49 54.84H52.7",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoChatlockIcon = m));
  },
  98,
);
