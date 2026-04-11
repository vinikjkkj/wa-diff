__d(
  "useWAWebActiveSelection",
  [
    "WAWebDomScroll",
    "WAWebFocusTracer",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState;
    function d(e, t, n) {
      var a = o("react-compiler-runtime").c(3),
        i =
          n != null
            ? n
            : function (n) {
                return (
                  (e == null || e.getter == null ? void 0 : e.getter(n)) === t
                );
              },
        l = u(null),
        s = c(!1),
        d = s[0],
        m = s[1],
        p = (e == null ? void 0 : e.value) != null ? i(e.value) : !1;
      d !== p && m(p);
      var _;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function (t, n) {
            if (t === "focus") {
              var e = l.current;
              e &&
                (r("WAWebFocusTracer").focus(e),
                n && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
            }
            m(!!t);
          }),
          (a[0] = _))
        : (_ = a[0]);
      var f = _;
      o("useWAWebListener").useListener(e, t, f);
      var g;
      return (
        a[1] !== d ? ((g = [l, d]), (a[1] = d), (a[2] = g)) : (g = a[2]),
        g
      );
    }
    l.default = d;
  },
  98,
);
