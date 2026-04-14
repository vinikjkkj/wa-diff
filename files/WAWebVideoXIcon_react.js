__d(
  "WAWebVideoXIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-x";
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
              version: "1.1",
              children: [
                c.jsx("title", { children: "video-x" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsxs("defs", {
                  children: [
                    c.jsx("path", {
                      d: "M17.5268719,5.42394001 L12.6402,10.31144 L7.75252027,5.42404786 C7.51826184,5.18978943 7.13847373,5.18972508 6.90413593,5.42390412 L6.42426412,5.90287593 C6.18987015,6.13711109 6.18974142,6.51701006 6.42397658,6.75140402 C6.42402449,6.75145196 6.4240724,6.75149989 6.42412032,6.75154781 L11.3118,11.63894 L6.42412032,16.5263322 C6.18980575,16.7606468 6.18980575,17.1405457 6.42412032,17.3748603 C6.42416825,17.3749082 6.42421618,17.3749562 6.42426412,17.3750041 L6.90413593,17.8539759 C7.13847373,18.0881549 7.51826184,18.0880906 7.75252027,17.8538321 L12.6402,12.96644 L17.5266921,17.8541197 C17.7609868,18.0884542 18.1408858,18.0884864 18.3752202,17.8541916 C18.3752802,17.8541317 18.3753401,17.8540718 18.3754,17.8540118 L18.8533999,17.3749681 C19.0875648,17.1406443 19.0875165,16.760884 18.853292,16.5266198 L13.9668,11.63894 L18.853292,6.75126018 C19.0875165,6.51699597 19.0875648,6.13723565 18.8533999,5.90291188 L18.3754,5.4238682 C18.1411649,5.18947418 17.7612659,5.18934536 17.5268719,5.42358046 C17.526812,5.42364038 17.526752,5.42370031 17.5266921,5.42376025 Z",
                      id: "path-1",
                    }),
                    c.jsxs("filter", {
                      x: "-23.2%",
                      y: "-15.6%",
                      width: "146.3%",
                      height: "146.3%",
                      filterUnits: "objectBoundingBox",
                      id: "filter-2",
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
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsxs("g", {
                    id: "x",
                    children: [
                      c.jsx("use", {
                        fill: "black",
                        fillOpacity: 1,
                        filter: "url(#filter-2)",
                        xlinkHref: "#path-1",
                      }),
                      c.jsx("use", {
                        fill: "#FFFFFF",
                        fillRule: "evenodd",
                        xlinkHref: "#path-1",
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
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.VideoXIcon = m));
  },
  98,
);
