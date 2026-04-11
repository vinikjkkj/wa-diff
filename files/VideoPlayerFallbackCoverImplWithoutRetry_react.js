__d(
  "VideoPlayerFallbackCoverImplWithoutRetry.react",
  [
    "FDSText.react",
    "VideoPlayerFallbackLearnMoreLink.react",
    "cr:2324",
    "cr:4149",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(21),
        a = e.background,
        i = e.debugError,
        l = e.message,
        u = e.showDebugWithoutError,
        c = e.showLearnMoreLink,
        d = u === void 0 ? !0 : u,
        m = c === void 0 ? !0 : c,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = {
            className:
              "x6s0dn4 xatbrnm x9f619 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x889kno x2vl965 x1a8lsjc xe2zdcy x1n2onr6 xh8yej3",
          }),
          (t[0] = p))
        : (p = t[0]);
      var _;
      t[1] !== a
        ? ((_ = {
            0: { className: "x6s0dn4 x78zum5 xdt5ytf x3es6ox" },
            1: { className: "x6s0dn4 x78zum5 xdt5ytf x3es6ox x1vjfegm" },
          }[(a != null) << 0]),
          (t[1] = a),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x6s0dn4 x78zum5 xdt5ytf x193iq5w" }), (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] !== l
        ? ((g = s.jsx(
            "div",
            babelHelpers.extends({}, f, {
              children: s.jsx(r("FDSText.react"), {
                align: "center",
                color: "primaryOnMedia",
                type: "bodyLink3",
                children: l,
              }),
            }),
          )),
          (t[4] = l),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== m
        ? ((h =
            m &&
            s.jsx("div", {
              className: "x6s0dn4 x78zum5 xdt5ytf xw7yly9 x193iq5w",
              children: s.jsx(r("VideoPlayerFallbackLearnMoreLink.react"), {}),
            })),
          (t[6] = m),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== i || t[9] !== d
        ? ((y =
            (i != null || d) &&
            s.jsxs(s.Fragment, {
              children: [
                n("cr:4149") ? s.jsx(n("cr:4149"), { error: i }) : null,
                n("cr:2324") ? s.jsx(n("cr:2324"), { error: i }) : null,
              ],
            })),
          (t[8] = i),
          (t[9] = d),
          (t[10] = y))
        : (y = t[10]);
      var C;
      t[11] !== _ || t[12] !== g || t[13] !== h || t[14] !== y
        ? ((C = s.jsxs(
            "div",
            babelHelpers.extends({}, _, { children: [g, h, y] }),
          )),
          (t[11] = _),
          (t[12] = g),
          (t[13] = h),
          (t[14] = y),
          (t[15] = C))
        : (C = t[15]);
      var b;
      t[16] !== a
        ? ((b =
            a != null &&
            s.jsx("div", {
              className: "x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy",
              children: a,
            })),
          (t[16] = a),
          (t[17] = b))
        : (b = t[17]);
      var v;
      return (
        t[18] !== b || t[19] !== C
          ? ((v = s.jsxs(
              "div",
              babelHelpers.extends({}, p, { children: [C, b] }),
            )),
            (t[18] = b),
            (t[19] = C),
            (t[20] = v))
          : (v = t[20]),
        v
      );
    }
    l.default = u;
  },
  98,
);
