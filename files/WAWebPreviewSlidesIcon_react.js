__d(
  "WAWebPreviewSlidesIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "preview-slides";
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
      var S = 88,
        R = 110;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 110 88",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsxs("g", {
                      transform: "translate(4 3)",
                      children: [
                        c.jsx("use", {
                          fill: "#000",
                          filter: "url(#filter-2)",
                          xlinkHref: "#path-1",
                        }),
                        c.jsx("rect", {
                          strokeOpacity: 0.08,
                          stroke: "#000",
                          fill: "#FFF",
                          x: -0.5,
                          y: -0.5,
                          width: 105,
                          height: 81,
                          rx: 3,
                        }),
                      ],
                    }),
                    c.jsxs("g", {
                      transform: "translate(8 15)",
                      children: [
                        c.jsx("rect", {
                          fillOpacity: 0.1,
                          fill: "#000",
                          width: 96,
                          height: 56,
                          rx: 2,
                        }),
                        c.jsx("rect", {
                          fillOpacity: 0.2,
                          fill: "#000",
                          x: 55,
                          y: 19,
                          width: 30,
                          height: 2,
                          rx: 0.5,
                        }),
                        c.jsx("rect", {
                          fillOpacity: 0.2,
                          fill: "#000",
                          x: 55,
                          y: 24,
                          width: 30,
                          height: 2,
                          rx: 0.5,
                        }),
                        c.jsx("rect", {
                          fillOpacity: 0.2,
                          fill: "#000",
                          x: 55,
                          y: 29,
                          width: 30,
                          height: 2,
                          rx: 0.5,
                        }),
                        c.jsx("rect", {
                          fillOpacity: 0.2,
                          fill: "#000",
                          x: 55,
                          y: 34,
                          width: 18,
                          height: 2,
                          rx: 0.5,
                        }),
                        c.jsxs("g", {
                          transform: "translate(12 13)",
                          children: [
                            c.jsx("circle", {
                              fillOpacity: 0.2,
                              fill: "#000",
                              cx: 16,
                              cy: 16,
                              r: 16,
                            }),
                            c.jsx("path", {
                              d: "M32 16c0 8.837-7.163 16-16 16V16z",
                              fill: "#FFF",
                            }),
                          ],
                        }),
                      ],
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
      (l.PreviewSlidesIcon = m));
  },
  98,
);
