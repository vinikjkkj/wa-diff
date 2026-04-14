__d(
  "WAWebVideoExitFullscreenIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-exit-fullscreen";
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
                c.jsxs("defs", {
                  children: [
                    c.jsx("path", {
                      d: "M15.0425532,1.93617021 L15.0425532,8.95744681 L22.0638298,8.95744681 C22.5808623,8.95744681 23,8.53830913 23,8.0212766 L23,7.08510638 C23,6.56807385 22.5808623,6.14893617 22.0638298,6.14893617 L17.8510638,6.14893617 L17.8510638,1.93617021 C17.8510638,1.41913768 17.4319261,1 16.9148936,1 L15.9787234,1 C15.4616909,1 15.0425532,1.41913768 15.0425532,1.93617021 Z M6.14893617,1.93617021 L6.14893617,6.14893617 L1.93617021,6.14893617 C1.41913768,6.14893617 1,6.56807385 1,7.08510638 L1,8.0212766 C1,8.53830913 1.41913768,8.95744681 1.93617021,8.95744681 L8.95744681,8.95744681 L8.95744681,1.93617021 C8.95744681,1.41913768 8.53830913,1 8.0212766,1 L7.08510638,1 C6.56807385,1 6.14893617,1.41913768 6.14893617,1.93617021 Z M15.0425532,15.0425532 L15.0425532,22.0638298 C15.0425532,22.5808623 15.4616909,23 15.9787234,23 L16.9148936,23 C17.4319261,23 17.8510638,22.5808623 17.8510638,22.0638298 L17.8510638,17.8510638 L22.0638298,17.8510638 C22.5808623,17.8510638 23,17.4319261 23,16.9148936 L23,15.9787234 C23,15.4616909 22.5808623,15.0425532 22.0638298,15.0425532 L15.0425532,15.0425532 Z M1,15.9787234 L1,16.9148936 C1,17.4319261 1.41913768,17.8510638 1.93617021,17.8510638 L6.14893617,17.8510638 L6.14893617,22.0638298 C6.14893617,22.5808623 6.56807385,23 7.08510638,23 L8.0212766,23 C8.53830913,23 8.95744681,22.5808623 8.95744681,22.0638298 L8.95744681,15.0425532 L1.93617021,15.0425532 C1.41913768,15.0425532 1,15.4616909 1,15.9787234 Z",
                      id: "exit-fullscreen-path",
                    }),
                    c.jsxs("filter", {
                      x: "-15.9%",
                      y: "-11.4%",
                      width: "131.8%",
                      height: "131.8%",
                      filterUnits: "objectBoundingBox",
                      id: "exit-fullscreen-filter",
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
                  id: "exit-fullscreen-page",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsxs("g", {
                    id: "exit-fullscreen",
                    children: [
                      c.jsx("use", {
                        fill: "black",
                        fillOpacity: 1,
                        filter: "url(#exit-fullscreen-filter)",
                        xlinkHref: "#exit-fullscreen-path",
                      }),
                      c.jsx("use", {
                        fill: "#FFFFFF",
                        fillRule: "evenodd",
                        xlinkHref: "#exit-fullscreen-path",
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
      (l.VideoExitFullscreenIcon = m));
  },
  98,
);
