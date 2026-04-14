__d(
  "WAWebVideoPauseIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-pause";
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
                c.jsx("title", { children: "video-pause" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsxs("defs", {
                  children: [
                    c.jsx("path", {
                      d: "M22.5511124,8.00331871 L19.7857994,8.00331871 C19.1743275,8.00331871 18.6798401,8.49780612 18.6798401,9.10927798 L18.6798401,23.3581486 C18.6798401,23.9687908 19.1743275,24.4641079 19.7857994,24.4641079 L22.5511124,24.4641079 C23.1617546,24.4641079 23.6579013,23.9687908 23.6579013,23.3581486 L23.6579013,9.10927798 C23.6579013,8.49780612 23.1617546,8.00331871 22.5511124,8.00331871 M12.872102,8 L10.1059593,8 C9.49531709,8 9,8.49448742 9,9.10595927 L9,23.3581486 C9,23.9687908 9.49531709,24.4641079 10.1059593,24.4641079 L12.872102,24.4641079 C13.4827442,24.4641079 13.9780612,23.9687908 13.9780612,23.3581486 L13.9780612,9.10595927 C13.9780612,8.49448742 13.4827442,8 12.872102,8",
                      id: "video-pause-path-1",
                    }),
                    c.jsxs("filter", {
                      x: "-23.9%",
                      y: "-15.2%",
                      width: "147.8%",
                      height: "142.5%",
                      filterUnits: "objectBoundingBox",
                      id: "video-pause-filter-2",
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
                  id: "video-pause-Page-1",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsx("g", {
                    id: "video-pause-",
                    children: c.jsxs("g", {
                      id: "pause",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#video-pause-filter-2)",
                          xlinkHref: "#video-pause-path-1",
                        }),
                        c.jsx("use", {
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#video-pause-path-1",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.VideoPauseIcon = m));
  },
  98,
);
