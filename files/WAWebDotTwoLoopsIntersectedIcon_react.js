__d(
  "WAWebDotTwoLoopsIntersectedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "dot-two-loops-intersected";
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
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                }),
                c.jsx("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  d: "M4.22 4.22c1.6-1.6 4.64-1.37 7.78.33 3.13-1.7 6.17-1.94 7.78-.33 1.6 1.6 1.37 4.64-.33 7.78 1.7 3.14 1.94 6.17.33 7.78-1.6 1.6-4.65 1.37-7.78-.33-3.14 1.7-6.17 1.93-7.78.33-1.6-1.6-1.37-4.65.33-7.78-1.7-3.13-1.94-6.17-.33-7.78Zm14.36 4.72c.55-1.88.2-2.9-.22-3.3-.4-.42-1.42-.77-3.3-.22-.35.1-.7.23-1.08.39a19.73 19.73 0 0 1 4.2 4.2c.17-.36.3-.73.4-1.07ZM8.94 5.42c.34.1.7.23 1.08.39a19.72 19.72 0 0 0-4.21 4.2 9.89 9.89 0 0 1-.4-1.07c-.54-1.88-.19-2.9.23-3.3.4-.42 1.42-.77 3.3-.22Zm-3.52 9.64c.1-.35.23-.7.39-1.08a19.74 19.74 0 0 0 4.2 4.21 9.9 9.9 0 0 1-1.07.4c-1.88.54-2.9.18-3.3-.23-.42-.4-.77-1.42-.22-3.3Zm3.75-.23c.92.92 1.88 1.69 2.83 2.3A17.24 17.24 0 0 0 17.13 12 17.24 17.24 0 0 0 12 6.87 17.24 17.24 0 0 0 6.87 12c.61.95 1.38 1.9 2.3 2.83Zm5.9 3.75a9.9 9.9 0 0 1-1.09-.39 19.73 19.73 0 0 0 4.2-4.2c.17.36.3.73.4 1.07.55 1.88.2 2.9-.22 3.3-.4.42-1.42.77-3.3.22Z",
                  clipRule: "evenodd",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.DotTwoLoopsIntersectedIcon = m));
  },
  98,
);
