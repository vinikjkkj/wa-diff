__d(
  "WAWebDeactivateIconIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "deactivate-icon";
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
                  d: "M14.9 3H9.1C8.57 3 8.06 3.21 7.68 3.59L3.58 7.69C3.21 8.06 3 8.57 3 9.1V14.9C3 15.43 3.21 15.94 3.59 16.31L7.69 20.41C8.06 20.79 8.57 21 9.1 21H14.9C15.43 21 15.94 20.79 16.31 20.41L20.41 16.31C20.79 15.94 21 15.43 21 14.9V9.1C21 8.57 20.79 8.06 20.41 7.69L16.31 3.59C15.94 3.21 15.43 3 14.9 3ZM15.54 15.54C15.15 15.93 14.52 15.93 14.13 15.54L12 13.41L9.88 15.53C9.49 15.92 8.86 15.92 8.47 15.53C8.08 15.14 8.08 14.51 8.47 14.12L10.59 12L8.46 9.88C8.07 9.49 8.07 8.86 8.46 8.47C8.85 8.08 9.48 8.08 9.87 8.47L12 10.59L14.12 8.47C14.51 8.08 15.14 8.08 15.53 8.47C15.92 8.86 15.92 9.49 15.53 9.88L13.41 12L15.53 14.12C15.93 14.51 15.93 15.15 15.54 15.54Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.DeactivateIconIcon = m));
  },
  98,
);
