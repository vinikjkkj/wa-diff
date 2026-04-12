__d(
  "WAWebRepeatIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "repeat";
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
                c.jsx("mask", {
                  id: "mask0_9226_27743",
                  style: { maskType: "alpha" },
                  maskUnits: "userSpaceOnUse",
                  x: 0,
                  y: 0,
                  width: 24,
                  height: 24,
                  children: c.jsx("rect", {
                    width: 24,
                    height: 24,
                    fill: "#D9D9D9",
                  }),
                }),
                c.jsx("g", {
                  mask: "url(#mask0_9226_27743)",
                  children: c.jsx("path", {
                    d: "M7 22L3 18L7 14L8.4 15.45L6.85 17H17V13H19V19H6.85L8.4 20.55L7 22ZM5 11V5H17.15L15.6 3.45L17 2L21 6L17 10L15.6 8.55L17.15 7H7V11H5Z",
                    fill: "currentColor",
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.RepeatIcon = m));
  },
  98,
);
