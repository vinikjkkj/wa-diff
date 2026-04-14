__d(
  "WAWebGifRefreshedNewIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "gif-refreshed-new";
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
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M4 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h5a1 1 0 0 1 0 2H4v8h4v-3H7a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1v4q0 .824-.588 1.413A1.93 1.93 0 0 1 8 18zm9 0a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1m4 0a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-4v3h3a1 1 0 1 1 0 2h-3v4a1 1 0 0 1-1 1",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.GifRefreshedNewIcon = m));
  },
  98,
);
