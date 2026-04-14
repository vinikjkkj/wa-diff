__d(
  "WAWebVideoFullscreenIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-fullscreen";
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
                c.jsx("title", { children: "video-fullscreen" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsxs("defs", {
                  children: [
                    c.jsx("path", {
                      d: "M14,5.6 L14,6.18723404 C14,6.51860489 14.2686292,6.78723404 14.6,6.78723404 L17.212766,6.78723404 L17.212766,9.4 C17.212766,9.73137085 17.4813951,10 17.812766,10 L18.4,10 C18.7313708,10 19,9.73137085 19,9.4 L19,5 L14.6,5 C14.2686292,5 14,5.26862915 14,5.6 Z M5,5 L5,9.4 C5,9.73137085 5.26862915,10 5.6,10 L6.18723404,10 C6.51860489,10 6.78723404,9.73137085 6.78723404,9.4 L6.78723404,6.78723404 L9.4,6.78723404 C9.73137085,6.78723404 10,6.51860489 10,6.18723404 L10,5.6 C10,5.26862915 9.73137085,5 9.4,5 L5,5 Z M17.212766,14.6 L17.212766,17.212766 L14.6,17.212766 C14.2686292,17.212766 14,17.4813951 14,17.812766 L14,18.4 C14,18.7313708 14.2686292,19 14.6,19 L19,19 L19,14.6 C19,14.2686292 18.7313708,14 18.4,14 L17.812766,14 C17.4813951,14 17.212766,14.2686292 17.212766,14.6 Z M5,14.6 L5,19 L9.4,19 C9.73137085,19 10,18.7313708 10,18.4 L10,17.812766 C10,17.4813951 9.73137085,17.212766 9.4,17.212766 L6.78723404,17.212766 L6.78723404,14.6 C6.78723404,14.2686292 6.51860489,14 6.18723404,14 L5.6,14 C5.26862915,14 5,14.2686292 5,14.6 Z",
                      id: "video-fullscreen-path-1",
                    }),
                    c.jsxs("filter", {
                      x: "-25.0%",
                      y: "-17.9%",
                      width: "150.0%",
                      height: "150.0%",
                      filterUnits: "objectBoundingBox",
                      id: "video-fullscreen-filter-2",
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
                  id: "video-fullscreen-Page-1",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsxs("g", {
                    id: "video-fullscreen-fullscreen",
                    children: [
                      c.jsx("use", {
                        fill: "black",
                        fillOpacity: 1,
                        filter: "url(#video-fullscreen-filter-2)",
                        xlinkHref: "#video-fullscreen-path-1",
                      }),
                      c.jsx("use", {
                        fill: "#FFFFFF",
                        fillRule: "evenodd",
                        xlinkHref: "#video-fullscreen-path-1",
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
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.VideoFullscreenIcon = m));
  },
  98,
);
