__d(
  "useLayoutAnimationEvents",
  [
    "LayoutAnimationBoundaryContext",
    "LayoutAnimationEvents",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = u(r("LayoutAnimationBoundaryContext")),
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (t[0] = a))
        : (a = t[0]);
      var i = d(a),
        l;
      t[1] !== (n == null ? void 0 : n.animationEventTargets) || t[2] !== e
        ? ((l = function () {
            var t = (n == null ? void 0 : n.animationEventTargets) || [];
            return (
              t.forEach(function (t) {
                var n = t.addListener(
                  o("LayoutAnimationEvents").LAYOUT_ANIMATION_EVENT,
                  e,
                );
                i.current = [].concat(i.current, [n]);
              }),
              function () {
                (i.current.forEach(p), (i.current = []));
              }
            );
          }),
          (t[1] = n == null ? void 0 : n.animationEventTargets),
          (t[2] = e),
          (t[3] = l))
        : (l = t[3]);
      var s;
      (t[4] !== n || t[5] !== e
        ? ((s = [e, n]), (t[4] = n), (t[5] = e), (t[6] = s))
        : (s = t[6]),
        c(l, s));
    }
    function p(e) {
      e.remove();
    }
    l.default = m;
  },
  98,
);
