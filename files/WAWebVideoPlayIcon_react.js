__d(
  "WAWebVideoPlayIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-play";
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
      var S = 32,
        R = 32;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 32 32",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: "video-play" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsxs("defs", {
                  children: [
                    c.jsx("path", {
                      d: "M24.4,14.7910279 L11.4,7.29102793 C10.1,6.59102793 9,7.19102793 9,8.69102793 L9,23.6910279 C9,25.1910279 10.1,25.7910279 11.4,25.0910279 L24.4,17.5910279 C25.7,16.6910279 25.7,15.4910279 24.4,14.7910279 Z",
                      id: "v-play-path-1",
                    }),
                    c.jsxs("filter", {
                      x: "-21.4%",
                      y: "-13.6%",
                      width: "142.7%",
                      height: "138.1%",
                      filterUnits: "objectBoundingBox",
                      id: "v-play-filter-2",
                      children: [
                        c.jsx("feOffset", {
                          dx: 0,
                          dy: 1,
                          in: "SourceAlpha",
                          result: "shadowOffsetOuter1",
                        }),
                        c.jsx("feGaussianBlur", {
                          stdDeviation: 1,
                          in: "shadowOffsetOuter1",
                          result: "shadowBlurOuter1",
                        }),
                        c.jsx("feColorMatrix", {
                          values:
                            "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0",
                          type: "matrix",
                          in: "shadowBlurOuter1",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx("g", {
                  id: "video-play-Page-1",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsxs("g", {
                    id: "video-play",
                    fillRule: "nonzero",
                    children: [
                      c.jsx("use", {
                        fill: "black",
                        fillOpacity: 1,
                        filter: "url(#v-play-filter-2)",
                        xlinkHref: "#v-play-path-1",
                      }),
                      c.jsx("use", {
                        fill: "#FFFFFF",
                        fillRule: "evenodd",
                        xlinkHref: "#v-play-path-1",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.VideoPlayIcon = m));
  },
  98,
);
