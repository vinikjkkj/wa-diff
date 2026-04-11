__d(
  "BaseScrollRegionObserver.react",
  [
    "intersectionObserverEntryIsIntersecting",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useIntersectionObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        end: { bottom: "x1ey2m1c", $$css: !0 },
        start: { top: "x13vifvy", $$css: !0 },
        target: {
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          opacity: "xg01cxk",
          position: "x10l6tqk",
          zIndex: "x8knxv4",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.end,
        r = e.rootRef,
        a = e.start,
        i;
      t[0] !== r || t[1] !== a
        ? ((i = a
            ? u.jsx(p, {
                callback: a.callback,
                rootRef: r,
                xstyle: [d.target, d.start, a.heightXStyle],
              })
            : null),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      t[3] !== n || t[4] !== r
        ? ((s = n
            ? u.jsx(p, {
                callback: n.callback,
                rootRef: r,
                xstyle: [d.target, d.end, n.heightXStyle],
              })
            : null),
          (t[3] = n),
          (t[4] = r),
          (t[5] = s))
        : (s = t[5]);
      var c = s,
        m;
      return (
        t[6] !== c || t[7] !== l
          ? ((m = u.jsxs(u.Fragment, { children: [l, c] })),
            (t[6] = c),
            (t[7] = l),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.callback,
        i = t.rootRef,
        l = t.xstyle,
        s;
      n[0] !== i
        ? ((s = function () {
            return i == null ? void 0 : i.current;
          }),
          (n[0] = i),
          (n[1] = s))
        : (s = n[1]);
      var c;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { bottom: 0, left: 0, right: 0, top: 0 }), (n[2] = c))
        : (c = n[2]);
      var d;
      n[3] !== s
        ? ((d = { root: s, rootMargin: c, threshold: 0 }),
          (n[3] = s),
          (n[4] = d))
        : (d = n[4]);
      var m = d,
        p;
      n[5] !== a
        ? ((p = function (t) {
            var e = r("intersectionObserverEntryIsIntersecting")(t);
            a(e);
          }),
          (n[5] = a),
          (n[6] = p))
        : (p = n[6]);
      var _ = r("useIntersectionObserver")(p, m),
        f;
      n[7] !== l
        ? ((f = (e || (e = r("stylex"))).props(l)), (n[7] = l), (n[8] = f))
        : (f = n[8]);
      var g;
      return (
        n[9] !== _ || n[10] !== f
          ? ((g = u.jsx("div", babelHelpers.extends({}, f, { ref: _ }))),
            (n[9] = _),
            (n[10] = f),
            (n[11] = g))
          : (g = n[11]),
        g
      );
    }
    l.default = m;
  },
  98,
);
