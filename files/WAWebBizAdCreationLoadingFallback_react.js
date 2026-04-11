__d(
  "WAWebBizAdCreationLoadingFallback.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebBizTwoColumnLayout.react",
    "WAWebDivider.react",
    "WAWebFlexBox.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        card: {
          alignContent: "xqjyukv",
          backgroundColor: "x1280gxy",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          boxSizing: "x9f619",
          $$css: !0,
        },
        shimmers: { maxWidth: "x193iq5w", $$css: !0 },
        primary: { paddingBottom: "xvpt6g3", $$css: !0 },
        secondary: { rowGap: "xlxy9ep", columnGap: "xf91ah9", $$css: !0 },
        creative: { height: "xc3b8f0", $$css: !0 },
        audience: { minHeight: "x1q45rg8", $$css: !0 },
        preview: {
          paddingBottom: "x1c76a8b",
          minHeight: "x1reb3pv",
          boxSizing: "x9f619",
          $$css: !0,
        },
        summary: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          paddingBottom: "xvg22vi",
          $$css: !0,
        },
        summaryRow: { width: "xh8yej3", $$css: !0 },
      };
    function c() {
      var e = o("react-compiler-runtime").c(9),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = "x78zum5 xdt5ytf x1iyjqo2 xl56j7k"), (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s.jsxs(m, {
            xstyle: u.creative,
            gap: 12,
            children: [
              s.jsx(d, { width: 180 }),
              s.jsx(d, { height: 80, width: "100%" }),
              s.jsx(d, { height: 40, width: 255 }),
            ],
          })),
          (e[1] = n))
        : (n = e[1]);
      var a;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s.jsx(m, {
            xstyle: u.audience,
            gap: 48,
            children: s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
              paddingTop: 8,
              gap: 40,
              children: [
                s.jsx(d, { width: 232 }),
                s.jsx(d, { width: "100%", height: 64 }),
                s.jsx(d, { width: 532 }),
                s.jsx(d, { width: 314 }),
                s.jsx(d, { width: 490 }),
                s.jsx(d, { width: 285 }),
                s.jsx(d, { width: 460 }),
              ],
            }),
          })),
          (e[2] = a))
        : (a = e[2]);
      var i;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsx(m, { gap: 32, children: s.jsx(d, { width: "100%" }) })),
          (e[3] = i))
        : (i = e[3]);
      var l;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s.jsxs(m, {
            gap: 40,
            children: [s.jsx(d, { width: 180 }), s.jsx(d, { width: 515 })],
          })),
          (e[4] = l))
        : (l = e[4]);
      var c;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx(m, {
            gap: 40,
            children: s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
              gap: 40,
              align: "center",
              children: [
                s.jsx(d, { height: 40, width: 40 }),
                s.jsx(d, { width: 532 }),
              ],
            }),
          })),
          (e[5] = c))
        : (c = e[5]);
      var _;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s.jsx(m, {
            gap: 40,
            children: s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
              gap: 40,
              align: "center",
              children: [
                s.jsx(d, { height: 40, width: 105 }),
                s.jsx(d, { width: 532 }),
              ],
            }),
          })),
          (e[6] = _))
        : (_ = e[6]);
      var f;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
            xstyle: u.primary,
            gap: 16,
            children: [
              n,
              a,
              i,
              l,
              c,
              _,
              s.jsxs(m, {
                gap: 24,
                children: [
                  s.jsx(d, { height: 24, width: 119 }),
                  s.jsx(d, { height: 44, width: 260 }),
                  s.jsx(d, { height: 24, width: 180 }),
                  s.jsx(d, { height: 16, width: 400 }),
                ],
              }),
            ],
          })),
          (e[7] = f))
        : (f = e[7]);
      var g;
      return (
        e[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = s.jsx("div", {
              className: t,
              children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
                primaryContent: f,
                secondaryContent: s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                  xstyle: u.secondary,
                  children: [
                    s.jsx(m, {
                      xstyle: u.preview,
                      gap: 40,
                      children: s.jsx(o("WAWebFlexBox.react").FlexColumn, {
                        align: "center",
                        children: s.jsx(d, { height: 412, width: 300 }),
                      }),
                    }),
                    s.jsx(p, {}),
                  ],
                }),
              }),
            })),
            (e[8] = g))
          : (g = e[8]),
        g
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.height,
        r = e.width,
        a = n === void 0 ? 16 : n,
        i;
      return (
        t[0] !== a || t[1] !== r
          ? ((i = s.jsx(
              o("WAWebBaseShimmerComponents.react").RectangleShimmer,
              { xstyle: u.shimmers, height: a, width: r },
            )),
            (t[0] = a),
            (t[1] = r),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.align,
        r = e.children,
        a = e.gap,
        i = e.xstyle,
        l;
      t[0] !== i ? ((l = [u.card, i]), (t[0] = i), (t[1] = l)) : (l = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s.jsx(d, { height: 24, width: 115 })), (t[2] = c))
        : (c = t[2]);
      var m;
      return (
        t[3] !== n || t[4] !== r || t[5] !== a || t[6] !== l
          ? ((m = s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
              xstyle: l,
              align: n,
              gap: a,
              children: [c, r],
            })),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a),
            (t[6] = l),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function p() {
      var e = o("react-compiler-runtime").c(7),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx(d, { width: 68, height: 24 })), (e[0] = t))
        : (t = e[0]);
      var n, a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s.jsxs(o("WAWebFlexBox.react").FlexRow, {
            xstyle: u.summaryRow,
            justify: "all",
            children: [s.jsx(d, { width: 250 }), s.jsx(d, { width: 70 })],
          })),
          (a = s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (e[1] = n),
          (e[2] = a))
        : ((n = e[1]), (a = e[2]));
      var i, l, c;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s.jsxs(o("WAWebFlexBox.react").FlexRow, {
            xstyle: u.summaryRow,
            justify: "all",
            children: [s.jsx(d, { width: 210 }), s.jsx(d, { width: 60 })],
          })),
          (l = s.jsx(d, { width: 75 })),
          (c = s.jsx(r("WAWebDivider.react"), { direction: "horizontal" })),
          (e[3] = i),
          (e[4] = l),
          (e[5] = c))
        : ((i = e[3]), (l = e[4]), (c = e[5]));
      var m;
      return (
        e[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
              gap: 20,
              xstyle: u.summary,
              children: [
                t,
                s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
                  gap: 12,
                  children: [
                    n,
                    a,
                    i,
                    l,
                    c,
                    s.jsxs(o("WAWebFlexBox.react").FlexRow, {
                      xstyle: u.summaryRow,
                      justify: "all",
                      children: [
                        s.jsx(d, { width: 210 }),
                        s.jsx(d, { width: 60 }),
                      ],
                    }),
                  ],
                }),
              ],
            })),
            (e[6] = m))
          : (m = e[6]),
        m
      );
    }
    l.default = c;
  },
  98,
);
