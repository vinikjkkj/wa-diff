__d(
  "WAWebVideoVolumeMutedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-volume-muted";
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
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("defs", {
                  children: [
                    c.jsx("path", {
                      d: "M3,16.9574612 C3,17.5715879 3.50689011,18.0694861 4.13180121,18.0694861 L6.9999111,18.0694861 L11.1050409,22.0986131 C11.4346995,22.4221684 12,22.1928525 12,21.7342208 L12,8.51557421 C12,8.05733512 11.4346995,7.82762659 11.1050409,8.15157452 L6.9999111,12.1803089 L4.13180121,12.1803089 C3.50689011,12.1803089 3,12.6782071 3,13.2915485 L3,16.9574612 Z",
                      id: "vvm-path-1",
                    }),
                    c.jsxs("filter", {
                      x: "-38.9%",
                      y: "-16.5%",
                      width: "177.8%",
                      height: "144.4%",
                      filterUnits: "objectBoundingBox",
                      id: "vvm-filter-2",
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
                    c.jsx("path", {
                      d: "M22.8281041,14.5906672 L25.9892792,17.7518424 C26.2739489,18.0365121 26.2739489,18.4980528 25.9892792,18.7827225 L25.7827225,18.9892792 C25.4980528,19.2739489 25.0365121,19.2739489 24.7518424,18.9892792 L21.5906672,15.8281041 L18.4294921,18.9892792 C18.1448224,19.2739489 17.6832817,19.2739489 17.398612,18.9892792 L17.1920552,18.7827225 C16.9073856,18.4980528 16.9073856,18.0365121 17.1920552,17.7518424 L20.3532304,14.5906672 L17.1920552,11.4294921 C16.9073856,11.1448224 16.9073856,10.6832817 17.1920552,10.398612 L17.398612,10.1920552 C17.6832817,9.90738555 18.1448224,9.90738555 18.4294921,10.1920552 L21.5906672,13.3532304 L24.7518424,10.1920552 C25.0365121,9.90738555 25.4980528,9.90738555 25.7827225,10.1920552 L25.9892792,10.398612 C26.2739489,10.6832817 26.2739489,11.1448224 25.9892792,11.4294921 L22.8281041,14.5906672 Z",
                      id: "vvm-path-3",
                    }),
                    c.jsxs("filter", {
                      x: "-37.9%",
                      y: "-27.1%",
                      width: "175.9%",
                      height: "175.9%",
                      filterUnits: "objectBoundingBox",
                      id: "vvm-filter-4",
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
                c.jsxs("g", {
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsxs("g", {
                      id: "Fill-1",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vvm-filter-2)",
                          xlinkHref: "#vvm-path-1",
                        }),
                        c.jsx("use", {
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vvm-path-1",
                        }),
                      ],
                    }),
                    c.jsxs("g", {
                      id: "Combined-Shape",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vvm-filter-4)",
                          xlinkHref: "#vvm-path-3",
                        }),
                        c.jsx("use", {
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vvm-path-3",
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
      (l.VideoVolumeMutedIcon = m));
  },
  98,
);
