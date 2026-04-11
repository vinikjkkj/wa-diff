__d(
  "useCDSButtonSpinner",
  ["FocusManager", "getActiveElement", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = {
        spinnerContainer: {
          boxSizing: "x9f619",
          left: "x1nrll8i",
          insetInlineStart: null,
          insetInlineEnd: null,
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x11lhmoz",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
      };
    function m(e, t, n) {
      var a = o("react-compiler-runtime").c(7),
        i = n === void 0 ? !0 : n,
        l = c(null),
        s = c(!1),
        d = c(!1),
        m,
        p;
      (a[0] !== e || a[1] !== t || a[2] !== i
        ? ((m = function () {
            var n = l.current;
            t
              ? (!d.current &&
                  n != null &&
                  e.current != null &&
                  r("getActiveElement")() === e.current &&
                  o("FocusManager").focusElement(n),
                (d.current = !0))
              : (d.current &&
                  s.current &&
                  e.current != null &&
                  i &&
                  o("FocusManager").focusElement(e.current),
                (d.current = !1));
          }),
          (p = [e, d, s, t, i]),
          (a[0] = e),
          (a[1] = t),
          (a[2] = i),
          (a[3] = m),
          (a[4] = p))
        : ((m = a[3]), (p = a[4])),
        u(m, p));
      var _;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function (t) {
            l.current != null && t.target === l.current && (s.current = !0);
          }),
          (a[5] = _))
        : (_ = a[5]);
      var f = _,
        g;
      if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
        var h = function (t) {
          l.current != null && t.target === l.current && (s.current = !1);
        };
        ((g = {
          handleContainerBlur: h,
          handleContainerFocus: f,
          spinnerRef: l,
        }),
          (a[6] = g));
      } else g = a[6];
      return g;
    }
    ((l.spinnerContainerStyle = d), (l.useCDSButtonSpinner = m));
  },
  98,
);
