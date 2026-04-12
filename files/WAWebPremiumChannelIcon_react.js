__d(
  "WAWebPremiumChannelIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "premium-channel";
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
                c.jsxs("g", {
                  fill: "currentColor",
                  children: [
                    c.jsx("path", {
                      d: "m12.152 19.552 7.8-9.133a1.7 1.7 0 0 0 .143-2.015L18.457 5.82l1.52-.964 1.638 2.583a3.5 3.5 0 0 1-.294 4.148l-7.8 9.133a2 2 0 0 1-3.042 0l-7.8-9.133a3.5 3.5 0 0 1-.294-4.148l1.638-2.583A4 4 0 0 1 7.401 3h9.198a4 4 0 0 1 3.378 1.857l-1.52.964A2.2 2.2 0 0 0 16.599 4.8H7.401a2.2 2.2 0 0 0-1.858 1.021L3.905 8.404a1.7 1.7 0 0 0 .142 2.015l7.8 9.133a.2.2 0 0 0 .305 0",
                    }),
                    c.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M9.12 18.79a.9.9 0 1 0 1.76-.38L8.927 9.36l1.466-5.112a.9.9 0 1 0-1.73-.496l-1.59 5.547zm5.76 0a.9.9 0 0 1-1.76-.38l1.953-9.05-1.466-5.112a.9.9 0 1 1 1.73-.496l1.59 5.547z",
                    }),
                    c.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M21 10.4H3V8.6h18z",
                    }),
                  ],
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PremiumChannelIcon = m));
  },
  98,
);
