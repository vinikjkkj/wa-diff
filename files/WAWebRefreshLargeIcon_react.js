__d(
  "WAWebRefreshLargeIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "refresh-large";
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
      var S = 48,
        R = 48;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 48 48",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: "refresh-l-light" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsx("defs", {}),
                c.jsx("g", {
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsx("g", {
                    id: "ic_refresh_black_24px",
                    fill: "currentColor",
                    fillRule: "nonzero",
                    children: c.jsx("path", {
                      d: "M35.3,12.7 C32.4,9.8 28.42,8 24,8 C15.16,8 8.02,15.16 8.02,24 C8.02,32.84 15.16,40 24,40 C31.46,40 37.68,34.9 39.46,28 L35.3,28 C33.66,32.66 29.22,36 24,36 C17.38,36 12,30.62 12,24 C12,17.38 17.38,12 24,12 C27.32,12 30.28,13.38 32.44,15.56 L26,22 L40,22 L40,8 L35.3,12.7 Z",
                      id: "Shape",
                    }),
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.RefreshLargeIcon = m));
  },
  98,
);
