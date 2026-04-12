__d(
  "WAWebSubgroupsNuxIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "subgroups-nux";
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
      var S = 27,
        R = 27;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 27 27",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("g", {
                  children: [
                    c.jsx("rect", {
                      x: 0,
                      y: 0,
                      width: 17,
                      height: 17,
                      rx: 8.5,
                      transform: "matrix(-1 0 0 1 18 4)",
                      fill: "#D1D7DB",
                      stroke: "currentColor",
                    }),
                    c.jsx("rect", {
                      x: 0,
                      y: 0,
                      width: 17,
                      height: 17,
                      rx: 8.5,
                      transform: "matrix(-1 0 0 1 22 4)",
                      fill: "#AEBAC1",
                      stroke: "currentColor",
                    }),
                    c.jsx("rect", {
                      x: 0,
                      y: 0,
                      width: 17,
                      height: 17,
                      rx: 8.5,
                      transform: "matrix(-1 0 0 1 26 4)",
                      fill: "#8696A0",
                      stroke: "currentColor",
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
      (l.SubgroupsNuxIcon = m));
  },
  98,
);
