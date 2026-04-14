__d(
  "WAWebLabelStackIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "label-stack";
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
                  fill: "currentColor",
                  d: "M6.4 4.01c.03-.22.09-.41.17-.57a2.26 2.26 0 0 1 1.85-1.23c.33-.03.87-.04 1.63-.04h5.36l1.2.01a3.14 3.14 0 0 1 2.23 1.1l.74.93 2.05 2.68c.2.26.36.46.45.6a1.23 1.23 0 0 1 .23.76c0 .13-.01.25-.04.36-.04.12-.1.25-.19.39l-.45.61-.2.27a9 9 0 0 0-.41-.56l-.09-.1-2.13-2.78a24 24 0 0 0-.77-.96 4.47 4.47 0 0 0-3.05-1.5c-.3-.02-.7-.03-1.21-.03H8.19c-.77 0-1.3.01-1.61.04l-.19.02Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.LabelStackIcon = m));
  },
  98,
);
