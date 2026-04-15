__d(
  "WAWebMediaHubLoadingSkeletons.react",
  [
    "WAWebBox.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = "x10fmoen-B",
      d = "x1xgfvj9-B",
      m = "xmo4utw-B",
      p = { width: "x5lhr3w", height: "x16ye13r", $$css: !0 },
      _ = { animationDelay: "xvo38ju", $$css: !0 },
      f = {
        container: {
          width: "xi83emq",
          height: "x1rcao0v",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        overShadow: {
          width: "xymcp1x",
          height: "x127qqk8",
          borderStartStartRadius: "x175tud5",
          borderStartEndRadius: "x14zcg0b",
          borderEndEndRadius: "x1fa4axq",
          borderEndStartRadius: "xsbsmvu",
          transform: "xqjk9gv",
          background: "x164nj1r",
          position: "x10l6tqk",
          animationName: "x1m2z91j",
          animationDuration: "x1hpr77l",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xa3vuyk",
          filter: "x1bs05mj",
          $$css: !0,
        },
        textShadow: {
          borderStartStartRadius: "x175tud5",
          borderStartEndRadius: "x14zcg0b",
          borderEndEndRadius: "x1fa4axq",
          borderEndStartRadius: "xsbsmvu",
          animationName: "xttja7m",
          background: "x164nj1r",
          animationDuration: "x1hpr77l",
          animationIterationCount: "xa4qsjk",
          animationTimingFunction: "xa3vuyk",
          filter: "xj2j9hd",
          position: "x1n2onr6",
          top: "x13k8yb0",
          transform: "x5i6ehr",
          $$css: !0,
        },
        textShadowVert: {
          animationName: "x70id73",
          background: "xnukdne",
          animationDuration: "xmg6eyc",
          animationTimingFunction: "x1debuo4",
          top: "x13vifvy",
          insetInlineStart: "xpnintw",
          transform: "x105ttfm",
          height: "x130vq4z",
          width: "x75ztot",
          $$css: !0,
        },
        text: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
        imageText: {
          bottom: "x1jn9clo",
          insetInlineStart: "xi5uv41",
          left: null,
          right: null,
          position: "x10l6tqk",
          $$css: !0,
        },
        overflow: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        listRoot: {
          width: "xh8yej3",
          boxSizing: "x9f619",
          height: "xy75621",
          $$css: !0,
        },
        dimension: function (t, n) {
          return [
            p,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n + "px"),
            },
          ];
        },
        roundedBox: {
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          borderEndEndRadius: "xt6ovg4",
          borderEndStartRadius: "x1ru8ea5",
          $$css: !0,
        },
        animationDelay: function (t) {
          return [
            _,
            {
              "--x-animationDelay": (function (e) {
                return typeof e == "number" ? e + "ms" : e != null ? e : void 0;
              })(t + "ms"),
            },
          ];
        },
        textContainer: { height: "x5yr21d", $$css: !0 },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.delay,
        i;
      n[0] !== a
        ? ((i = (e || (e = r("stylex"))).props([
            f.overShadow,
            f.animationDelay(a),
          ])),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l;
      n[2] !== i
        ? ((l = u.jsx("div", babelHelpers.extends({}, i))),
          (n[2] = i),
          (n[3] = l))
        : (l = n[3]);
      var s;
      n[4] !== a
        ? ((s = u.jsx(h, { xstyle: f.imageText, delay: a })),
          (n[4] = a),
          (n[5] = s))
        : (s = n[5]);
      var c;
      return (
        n[6] !== l || n[7] !== s
          ? ((c = u.jsxs(r("WAWebBox.react"), {
              xstyle: f.container,
              children: [l, s],
            })),
            (n[6] = l),
            (n[7] = s),
            (n[8] = c))
          : (c = n[8]),
        c
      );
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.delay,
        i = t.height,
        l = t.width,
        s = t.xstyle,
        c = a === void 0 ? 0 : a,
        d = i === void 0 ? 10 : i,
        m = l === void 0 ? 100 : l,
        p;
      n[0] !== d || n[1] !== m || n[2] !== s
        ? ((p = (e || (e = r("stylex"))).props([f.text, s, f.dimension(m, d)])),
          (n[0] = d),
          (n[1] = m),
          (n[2] = s),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] !== c || n[5] !== d || n[6] !== m
        ? ((_ = (e || (e = r("stylex"))).props([
            f.textShadow,
            f.animationDelay(c),
            f.dimension(Math.max(30, m / 2), d * 5),
          ])),
          (n[4] = c),
          (n[5] = d),
          (n[6] = m),
          (n[7] = _))
        : (_ = n[7]);
      var g;
      n[8] !== _
        ? ((g = u.jsx("div", babelHelpers.extends({}, _))),
          (n[8] = _),
          (n[9] = g))
        : (g = n[9]);
      var h;
      return (
        n[10] !== p || n[11] !== g
          ? ((h = u.jsx("div", babelHelpers.extends({}, p, { children: g }))),
            (n[10] = p),
            (n[11] = g),
            (n[12] = h))
          : (h = n[12]),
        h
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.delay,
        r = n === void 0 ? 0 : n,
        a;
      t[0] !== r
        ? ((a = Array(5)
            .fill(null)
            .map(function (e, t) {
              return u.jsx(g, { delay: t * 200 + r }, t);
            })),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== a
          ? ((i = u.jsx(o("WAWebFlex.react").FlexRow, {
              grow: 1,
              justify: "all",
              gap: 2,
              paddingBottom: 2,
              children: a,
            })),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function C(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.delay,
        i = t.height,
        l = t.width,
        s = t.xstyle,
        c = a === void 0 ? 0 : a,
        d = i === void 0 ? 10 : i,
        m = l === void 0 ? 100 : l,
        p;
      n[0] !== d || n[1] !== m || n[2] !== s
        ? ((p = (e || (e = r("stylex"))).props([
            f.text,
            f.roundedBox,
            s,
            f.dimension(m, d),
          ])),
          (n[0] = d),
          (n[1] = m),
          (n[2] = s),
          (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] !== c
        ? ((_ = (e || (e = r("stylex"))).props([
            f.textShadow,
            f.textShadowVert,
            f.animationDelay(c),
          ])),
          (n[4] = c),
          (n[5] = _))
        : (_ = n[5]);
      var g;
      n[6] !== _
        ? ((g = u.jsx("div", babelHelpers.extends({}, _))),
          (n[6] = _),
          (n[7] = g))
        : (g = n[7]);
      var h;
      return (
        n[8] !== p || n[9] !== g
          ? ((h = u.jsx("div", babelHelpers.extends({}, p, { children: g }))),
            (n[8] = p),
            (n[9] = g),
            (n[10] = h))
          : (h = n[10]),
        h
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.delay,
        r = n === void 0 ? 0 : n,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [f.overflow, f.listRoot]), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== r
        ? ((i = u.jsx(C, { delay: r, width: 48, height: 48 })),
          (t[1] = r),
          (t[2] = i))
        : (i = t[2]);
      var l = r + 100,
        s;
      t[3] !== l
        ? ((s = u.jsx(C, { delay: l, width: 720, height: 14 })),
          (t[3] = l),
          (t[4] = s))
        : (s = t[4]);
      var c = r + 100,
        d;
      t[5] !== c
        ? ((d = u.jsx(C, { delay: c, width: 360, height: 14 })),
          (t[5] = c),
          (t[6] = d))
        : (d = t[6]);
      var m;
      t[7] !== s || t[8] !== d
        ? ((m = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: f.textContainer,
            gap: 8,
            children: [s, d],
          })),
          (t[7] = s),
          (t[8] = d),
          (t[9] = m))
        : (m = t[9]);
      var p;
      return (
        t[10] !== i || t[11] !== m
          ? ((p = u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              grow: 1,
              paddingStart: 20,
              paddingEnd: 20,
              xstyle: a,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 16,
                children: [i, m],
              }),
            })),
            (t[10] = i),
            (t[11] = m),
            (t[12] = p))
          : (p = t[12]),
        p
      );
    }
    ((l.WAWebMediaHubLoadingText = h),
      (l.WAWebMediaHubMediaSkeletons = y),
      (l.WAWebMediaHubMediaListSkeletons = b));
  },
  98,
);
