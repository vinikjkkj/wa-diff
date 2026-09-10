__d(
  "WAWebBizAiSmartComposerImpressionContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useRef,
      m = { current: new Set() },
      p = s.createContext(m);
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = new Set()), (t[0] = r))
        : (r = t[0]);
      var a = d(r),
        i;
      return (
        t[1] !== n
          ? ((i = s.jsx(p.Provider, { value: a, children: n })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function f() {
      return c(p);
    }
    function g(e, t) {
      return e === m || e.current.has(t) ? !1 : (e.current.add(t), !0);
    }
    ((l.WAWebBizAiSmartComposerImpressionProvider = _),
      (l.useWAWebBizAiSmartComposerImpressions = f),
      (l.markSmartComposerImpression = g));
  },
  98,
);
