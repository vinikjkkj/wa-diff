__d(
  "WAWebVideoPipIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-pip";
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
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("defs", {
                  children: c.jsxs("filter", {
                    x: "-39.5%",
                    y: "-46.4%",
                    width: "173.7%",
                    height: "200.0%",
                    filterUnits: "objectBoundingBox",
                    id: "video-pip-filter-1",
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
                        result: "shadowMatrixOuter1",
                      }),
                      c.jsxs("feMerge", {
                        children: [
                          c.jsx("feMergeNode", { in: "shadowMatrixOuter1" }),
                          c.jsx("feMergeNode", { in: "SourceGraphic" }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsx("g", {
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsxs("g", {
                    filter: "url(#video-pip-filter-1)",
                    transform: "translate(3.000000, 4.000000)",
                    fill: "#FFFFFF",
                    children: [
                      c.jsx("path", {
                        d: "M11.3499993,5.99999964 L17.349999,5.99999964 C18.0123989,5.99999964 18.5499989,5.46239967 18.5499989,4.79999971 L18.5499989,1.19999993 C18.5499989,0.537599968 18.0123989,0 17.349999,0 L11.3499993,0 C10.6875994,0 10.1499994,0.537599968 10.1499994,1.19999993 L10.1499994,4.79999971 C10.1499994,5.46239967 10.6875994,5.99999964 11.3499993,5.99999964",
                      }),
                      c.jsx("path", {
                        d: "M8.64999941,1.87499984 L8.64999941,3.37499984 L1.20029993,3.37499984 C0.951778708,3.37499984 0.7503,3.57654815 0.7503,3.82499977 L0.7503,12.4249992 C0.7503,12.6734508 0.951778708,12.8749991 1.20029993,12.8749991 L14.6002991,12.8749991 C14.8484855,12.8749991 15.050299,12.6731856 15.050299,12.4249992 L15.050299,7.17479957 L16.550299,7.17479957 L16.550299,12.4249992 C16.550299,13.5016127 15.6769126,14.3749991 14.6002991,14.3749991 L1.20029993,14.3749991 C0.123235593,14.3749991 -0.7497,13.501762 -0.7497,12.4249992 L-0.7497,3.82499977 C-0.7497,2.74823697 0.123235593,1.87499984 1.20029993,1.87499984 L8.64999941,1.87499984 Z",
                        fillRule: "nonzero",
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
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.VideoPipIcon = m));
  },
  98,
);
