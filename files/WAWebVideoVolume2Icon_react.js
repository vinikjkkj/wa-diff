__d(
  "WAWebVideoVolume2Icon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-volume-2";
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
                      id: "vv2-path-1",
                    }),
                    c.jsxs("filter", {
                      x: "-38.9%",
                      y: "-16.5%",
                      width: "177.8%",
                      height: "144.4%",
                      filterUnits: "objectBoundingBox",
                      id: "vv2-filter-2",
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
                      d: "M18.9318679,19.5044036 C18.7653544,19.5044036 18.6029581,19.4411976 18.4858497,19.3307007 L18.1949086,19.0560502 C18.0745981,18.9419156 18.0091821,18.7850373 18.0155865,18.6254308 C18.0219908,18.4690073 18.0942686,18.3266801 18.2200686,18.2252776 C19.1834679,17.4504356 19.7360729,16.3227312 19.7360729,15.1313661 C19.7360729,13.9336349 19.1788933,12.801838 18.2068024,12.0260865 C18.0800875,11.9251388 18.0068948,11.7832663 18.0004905,11.6254787 C17.9936286,11.4658721 18.0590446,11.3089939 18.1793552,11.195314 L18.4707537,10.919754 C18.5878621,10.8092571 18.7507159,10.7460511 18.9167719,10.7460511 C19.0626999,10.7460511 19.202681,10.7942514 19.3110977,10.882467 C20.6281093,11.9506031 21.3829092,13.4993778 21.3829092,15.1313661 C21.3829092,16.7547147 20.6340562,18.2984875 19.3280235,19.3666236 C19.2191493,19.4552939 19.0787108,19.5044036 18.9318679,19.5044036 M21.8371616,22.25 C21.6697332,22.25 21.5132838,22.1890676 21.3961754,22.0790255 L21.1034045,21.8021013 C20.9858387,21.6911497 20.9231674,21.5442753 20.9263696,21.3887612 C20.9300293,21.2314283 21.0000198,21.0859181 21.12399,20.9781495 C22.8586576,19.4725732 23.8531637,17.3417576 23.8531637,15.1313661 C23.8531637,12.9141537 22.8531681,10.7787909 21.1098089,9.27275991 C20.9849238,9.16499138 20.9144758,9.0185717 20.9112736,8.86123875 C20.907614,8.70572468 20.9707427,8.55885028 21.0883085,8.44789872 L21.3810794,8.17142926 C21.4977303,8.06093241 21.6541798,8 21.8211507,8 C21.9808023,8 22.1331347,8.05638522 22.2497856,8.15778767 C24.3156502,9.95483917 25.5,12.4962665 25.5,15.1313661 C25.5,17.7591901 24.3215971,20.2960703 22.2662539,22.0917576 C22.1491456,22.1940695 21.9968132,22.25 21.8371616,22.25",
                      id: "vv2-path-3",
                    }),
                    c.jsxs("filter", {
                      x: "-43.9%",
                      y: "-10.5%",
                      width: "190.6%",
                      height: "141.7%",
                      filterUnits: "objectBoundingBox",
                      id: "vv2-filter-4",
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
                      d: "M24.8346034,24.5 C24.6848657,24.5 24.5438385,24.4402942 24.4384828,24.3316566 L24.1767529,24.0627561 C24.0697381,23.9523229 24.0116681,23.8064252 24.013742,23.6519983 C24.0158159,23.5020604 24.0751303,23.3633455 24.180486,23.2609927 C26.453513,21.0581634 27.7567705,17.9588494 27.7567705,14.7567337 C27.7567705,11.5483333 26.4485356,8.4436323 24.1676276,6.23900732 C24.0618572,6.13665454 24.0025428,5.99793959 24.0000541,5.84800175 C23.9979801,5.69357475 24.0556354,5.54767715 24.1630649,5.43724389 L24.4252097,5.16789447 C24.5301505,5.05970579 24.670763,5 24.8209155,5 C24.9698236,5 25.1116804,5.05880796 25.2207692,5.16520098 C27.8189884,7.69080068 29.25,11.0967241 29.25,14.7567337 C29.25,18.4091118 27.8239659,21.8105461 25.2352867,24.3352479 C25.126198,24.441641 24.9839264,24.5 24.8346034,24.5",
                      id: "vv2-path-5",
                    }),
                    c.jsxs("filter", {
                      x: "-63.5%",
                      y: "-7.7%",
                      width: "230.1%",
                      height: "130.4%",
                      filterUnits: "objectBoundingBox",
                      id: "vv2-filter-6",
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
                        c.jsx("feComposite", {
                          in: "shadowBlurOuter1",
                          in2: "SourceAlpha",
                          operator: "out",
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
                          filter: "url(#vv2-filter-2)",
                          xlinkHref: "#vv2-path-1",
                        }),
                        c.jsx("use", {
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vv2-path-1",
                        }),
                      ],
                    }),
                    c.jsxs("g", {
                      id: "Fill-1",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vv2-filter-4)",
                          xlinkHref: "#vv2-path-3",
                        }),
                        c.jsx("use", {
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vv2-path-3",
                        }),
                      ],
                    }),
                    c.jsxs("g", {
                      id: "Path",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vv2-filter-6)",
                          xlinkHref: "#vv2-path-5",
                        }),
                        c.jsx("use", {
                          fillOpacity: 0.4,
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vv2-path-5",
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
      (l.VideoVolume2Icon = m));
  },
  98,
);
