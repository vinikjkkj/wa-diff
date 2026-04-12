__d(
  "WAWebImageIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "image";
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
      var S = 42,
        R = 42;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 42 42",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M42 4.66667V37.3333C42 39.9 39.9 42 37.3333 42H4.66667C2.1 42 0 39.9 0 37.3333V4.66667C0 2.1 2.1 0 4.66667 0H37.3333C39.9 0 42 2.1 42 4.66667ZM18.6667 31.5233L13.7667 25.62C13.2767 25.0367 12.39 25.06 11.9467 25.6667L6.13667 33.1333C5.53 33.9033 6.06667 35.0233 7.04667 35.0233H35.0233C35.98 35.0233 36.54 33.9267 35.9567 33.1567L27.7667 22.2367C27.3 21.6067 26.3667 21.6067 25.9 22.2133L18.6667 31.5233Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ImageIcon = m));
  },
  98,
);
