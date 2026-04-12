__d(
  "WAWebPreviewDocIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "preview-doc";
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
      var S = 110,
        R = 88;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 88 110",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("defs", {
                  children: [
                    c.jsx("rect", {
                      id: "b",
                      x: 0,
                      y: 0,
                      width: 54,
                      height: 36,
                      rx: 2.37,
                    }),
                    c.jsx("path", {
                      d: "M3 0h56.928a5 5 0 0 1 3.536 1.464l15.072 15.072A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z",
                      id: "a",
                    }),
                  ],
                }),
                c.jsxs("g", {
                  transform: "translate(4 3)",
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsx("use", {
                      fill: "#000",
                      filter: "url(#filter-3)",
                      xlinkHref: "#a",
                    }),
                    c.jsx("use", { fill: "#FFF", xlinkHref: "#a" }),
                    c.jsx("path", {
                      strokeOpacity: 0.08,
                      stroke: "#000",
                      d: "M3-.5h56.929a5.5 5.5 0 0 1 3.889 1.61l15.071 15.072a5.5 5.5 0 0 1 1.611 3.89V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z",
                      fill: "url(#linearGradient-1)",
                    }),
                    c.jsx("rect", {
                      fillOpacity: 0.2,
                      fill: "#000",
                      x: 13,
                      y: 84,
                      width: 54,
                      height: 2,
                      rx: 0.5,
                    }),
                    c.jsx("rect", {
                      fillOpacity: 0.2,
                      fill: "#000",
                      x: 13,
                      y: 89,
                      width: 27,
                      height: 2,
                      rx: 0.5,
                    }),
                    c.jsx("rect", {
                      fillOpacity: 0.2,
                      fill: "#000",
                      x: 13,
                      y: 24,
                      width: 54,
                      height: 2,
                      rx: 0.5,
                    }),
                    c.jsx("rect", {
                      fillOpacity: 0.2,
                      fill: "#000",
                      x: 13,
                      y: 29,
                      width: 54,
                      height: 2,
                      rx: 0.5,
                    }),
                    c.jsx("rect", {
                      fillOpacity: 0.2,
                      fill: "#000",
                      x: 13,
                      y: 34,
                      width: 40,
                      height: 2,
                      rx: 0.5,
                    }),
                    c.jsx("g", {
                      children: c.jsxs("g", {
                        transform: "translate(13 42)",
                        children: [
                          c.jsx("mask", {
                            id: "c",
                            fill: "#fff",
                            children: c.jsx("use", { xlinkHref: "#b" }),
                          }),
                          c.jsx("use", {
                            fillOpacity: 0.1,
                            fill: "#000",
                            xlinkHref: "#b",
                          }),
                          c.jsx("circle", {
                            fillOpacity: 0.1,
                            fill: "#000",
                            mask: "url(#c)",
                            cx: 37.5,
                            cy: 11.5,
                            r: 5.5,
                          }),
                          c.jsx("path", {
                            d: "m34.565 31.195 7.912-7.89a2.37 2.37 0 0 1 3.348 0l25.144 25.073L44.15 75.119l-19.556-19.5-11.259 11.228-26.817-26.742 25.143-25.072a2.37 2.37 0 0 1 3.348 0l16.208 16.162a2.37 2.37 0 0 0 3.347 0z",
                            fillOpacity: 0.1,
                            fill: "#000",
                            mask: "url(#c)",
                          }),
                        ],
                      }),
                    }),
                    c.jsx("path", {
                      d: "M61.5.5v15a3 3 0 0 0 3 3h15",
                      strokeOpacity: 0.12,
                      stroke: "#000",
                      fill: "#FFF",
                    }),
                  ],
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.PreviewDocIcon = m));
  },
  98,
);
