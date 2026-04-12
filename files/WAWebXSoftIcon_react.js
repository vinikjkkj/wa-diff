__d(
  "WAWebXSoftIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "x-soft";
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
                  d: "M 8.785 15.536 C 8.395 15.145 8.395 14.512 8.785 14.121 L 10.906 12 L 8.785 9.879 C 8.395 9.489 8.395 8.855 8.785 8.465 C 9.176 8.074 9.809 8.074 10.2 8.465 L 12.32 10.586 L 14.442 8.464 C 14.833 8.074 15.466 8.074 15.856 8.464 C 16.247 8.855 16.247 9.488 15.856 9.879 L 13.735 12 L 15.856 14.122 C 16.247 14.512 16.247 15.145 15.856 15.536 C 15.466 15.926 14.833 15.926 14.442 15.536 L 12.321 13.415 L 10.2 15.536 C 9.809 15.926 9.176 15.926 8.785 15.536 Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.XSoftIcon = m));
  },
  98,
);
