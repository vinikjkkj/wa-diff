__d(
  "WAWebWdsPictoPasskeyIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-passkey";
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
                  fill: "#e6ffda",
                  stroke: "#111b21",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "M72.46 49.27A11.11 11.11 0 1 0 57.3 59.6v14L61.35 77l6.38-5.78-2.32-3.54v-2.14l2.32-2.8-2.32-3.04v-.11a11.1 11.1 0 0 0 7.05-10.34zm-11.11-3c1.66 0 3 1.33 3 3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.67 1.34-3 3-3Z",
                }),
                c.jsx("path", {
                  fill: "#25d366",
                  d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4M45.93 43.93q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64",
                }),
                c.jsx("path", {
                  stroke: "#111b21",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "M40.4 39.42a14.2 14.2 0 1 0 .02-28.4 14.2 14.2 0 0 0-.02 28.4ZM45.93 43.93q-.98 2.5-1 5.32c0 6.2 4.25 12 7.98 13.64v5.62h-32a5.3 5.3 0 0 1-5.3-5.16c-.17-5.86.01-7.29.08-7.77q.15-1.1.54-2.2c1.93-5.38 7.98-7.14 10.28-7.8l.02-.01a51 51 0 0 1 19.4-1.64Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoPasskeyIcon = m));
  },
  98,
);
