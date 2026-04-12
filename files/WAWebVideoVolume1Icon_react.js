__d(
  "WAWebVideoVolume1Icon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-volume-1";
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
                      id: "vv1-path-1",
                    }),
                    c.jsxs("filter", {
                      x: "-38.9%",
                      y: "-16.5%",
                      width: "177.8%",
                      height: "144.4%",
                      filterUnits: "objectBoundingBox",
                      id: "vv1-filter-2",
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
                      d: "M18.9318679,19.7583525 C18.7653544,19.7583525 18.6029581,19.6951465 18.4858497,19.5846496 L18.1949086,19.309999 C18.0745981,19.1958644 18.0091821,19.0389862 18.0155865,18.8793797 C18.0219908,18.7229562 18.0942686,18.5806289 18.2200686,18.4792265 C19.1834679,17.7043845 19.7360729,16.5766801 19.7360729,15.385315 C19.7360729,14.1875838 19.1788933,13.0557869 18.2068024,12.2800354 C18.0800875,12.1790877 18.0068948,12.0372152 18.0004905,11.8794275 C17.9936286,11.719821 18.0590446,11.5629428 18.1793552,11.4492629 L18.4707537,11.1737029 C18.5878621,11.063206 18.7507159,11 18.9167719,11 C19.0626999,11 19.202681,11.0482003 19.3110977,11.1364159 C20.6281093,12.204552 21.3829092,13.7533266 21.3829092,15.385315 C21.3829092,17.0086636 20.6340562,18.5524363 19.3280235,19.6205725 C19.2191493,19.7092428 19.0787108,19.7583525 18.9318679,19.7583525",
                      id: "vv1-path-3",
                    }),
                    c.jsxs("filter", {
                      x: "-97.3%",
                      y: "-17.1%",
                      width: "300.8%",
                      height: "167.8%",
                      filterUnits: "objectBoundingBox",
                      id: "vv1-filter-4",
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
                      d: "M21.9260386,22.25 C21.7586103,22.25 21.6021608,22.1890676 21.4850525,22.0790255 L21.1922816,21.8021013 C21.0747157,21.6911497 21.0120445,21.5442753 21.0152467,21.3887612 C21.0189063,21.2314283 21.0888968,21.0859181 21.212867,20.9781495 C22.9475346,19.4725732 23.9420407,17.3417576 23.9420407,15.1313661 C23.9420407,12.9141537 22.9420451,10.7787909 21.1986859,9.27275991 C21.0738008,9.16499138 21.0033528,9.0185717 21.0001507,8.86123875 C20.996491,8.70572468 21.0596197,8.55885028 21.1771856,8.44789872 L21.4699565,8.17142926 C21.5866074,8.06093241 21.7430568,8 21.9100277,8 C22.0696793,8 22.2220117,8.05638522 22.3386626,8.15778767 C24.4045273,9.95483917 25.588877,12.4962665 25.588877,15.1313661 C25.588877,17.7591901 24.4104742,20.2960703 22.355131,22.0917576 C22.2380226,22.1940695 22.0856902,22.25 21.9260386,22.25",
                      id: "vv1-path-5",
                    }),
                    c.jsxs("filter", {
                      x: "-71.9%",
                      y: "-10.5%",
                      width: "248.2%",
                      height: "141.7%",
                      filterUnits: "objectBoundingBox",
                      id: "vv1-filter-6",
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
                    c.jsx("path", {
                      d: "M24.8346034,24.5 C24.6848657,24.5 24.5438385,24.4402942 24.4384828,24.3316566 L24.1767529,24.0627561 C24.0697381,23.9523229 24.0116681,23.8064252 24.013742,23.6519983 C24.0158159,23.5020604 24.0751303,23.3633455 24.180486,23.2609927 C26.453513,21.0581634 27.7567705,17.9588494 27.7567705,14.7567337 C27.7567705,11.5483333 26.4485356,8.4436323 24.1676276,6.23900732 C24.0618572,6.13665454 24.0025428,5.99793959 24.0000541,5.84800175 C23.9979801,5.69357475 24.0556354,5.54767715 24.1630649,5.43724389 L24.4252097,5.16789447 C24.5301505,5.05970579 24.670763,5 24.8209155,5 C24.9698236,5 25.1116804,5.05880796 25.2207692,5.16520098 C27.8189884,7.69080068 29.25,11.0967241 29.25,14.7567337 C29.25,18.4091118 27.8239659,21.8105461 25.2352867,24.3352479 C25.126198,24.441641 24.9839264,24.5 24.8346034,24.5",
                      id: "vv1-path-7",
                    }),
                    c.jsxs("filter", {
                      x: "-63.5%",
                      y: "-7.7%",
                      width: "230.1%",
                      height: "130.4%",
                      filterUnits: "objectBoundingBox",
                      id: "vv1-filter-8",
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
                      id: "Fill-1-Copy",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vv1-filter-2)",
                          xlinkHref: "#vv1-path-1",
                        }),
                        c.jsx("use", {
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vv1-path-1",
                        }),
                      ],
                    }),
                    c.jsxs("g", {
                      id: "Path",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vv1-filter-4)",
                          xlinkHref: "#vv1-path-3",
                        }),
                        c.jsx("use", {
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vv1-path-3",
                        }),
                      ],
                    }),
                    c.jsxs("g", {
                      id: "Path",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vv1-filter-6)",
                          xlinkHref: "#vv1-path-5",
                        }),
                        c.jsx("use", {
                          fillOpacity: 0.4,
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vv1-path-5",
                        }),
                      ],
                    }),
                    c.jsxs("g", {
                      id: "Path-Copy",
                      children: [
                        c.jsx("use", {
                          fill: "black",
                          fillOpacity: 1,
                          filter: "url(#vv1-filter-8)",
                          xlinkHref: "#vv1-path-7",
                        }),
                        c.jsx("use", {
                          fillOpacity: 0.4,
                          fill: "#FFFFFF",
                          fillRule: "evenodd",
                          xlinkHref: "#vv1-path-7",
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
      (l.VideoVolume1Icon = m));
  },
  98,
);
