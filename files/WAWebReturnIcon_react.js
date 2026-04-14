__d(
  "WAWebReturnIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "return";
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
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M19.77,11.73c0,1.64-0.5,2.95-1.48,3.89c-1.38,1.32-3.26,1.41-3.75,1.41c-0.07,0-0.11,0-0.12,0l-5.41,0v-2.1 h5.46c0.05,0,1.47,0.04,2.38-0.84c0.55-0.53,0.82-1.32,0.82-2.37c0-1.27-0.33-2.23-0.99-2.84c-0.98-0.92-2.43-0.85-2.44-0.85 l-4.23,0v3.1L4,7.07L10.01,3v2.93h4.16c0.03,0,2.29-0.13,3.95,1.42C19.21,8.38,19.77,9.85,19.77,11.73z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ReturnIcon = m));
  },
  98,
);
