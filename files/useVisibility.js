__d(
  "useVisibility",
  [
    "intersectionObserverEntryIsIntersecting",
    "react",
    "react-compiler-runtime",
    "useIntersectionObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState,
      d = { top: 0, right: 0, bottom: 0, left: 0 };
    function m(e) {
      var t = o("react-compiler-runtime").c(13),
        n;
      t[0] !== e
        ? ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n))
        : (n = t[1]);
      var a = n,
        i = a.onHidden,
        l = a.onVisible,
        s = a.onVisibilityChange,
        u = a.root,
        m = a.rootMargin,
        p = a.threshold,
        _ = u === void 0 ? null : u,
        f = m === void 0 ? d : m,
        g = p === void 0 ? 0 : p,
        h = c(!1),
        y = h[0],
        C = h[1],
        b;
      t[2] !== i || t[3] !== s || t[4] !== l
        ? ((b = function (t) {
            var e = r("intersectionObserverEntryIsIntersecting")(t);
            (e ? l == null || l() : i == null || i(), s == null || s(e), C(e));
          }),
          (t[2] = i),
          (t[3] = s),
          (t[4] = l),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      t[6] !== _ || t[7] !== f || t[8] !== g
        ? ((S = { root: _, rootMargin: f, threshold: g }),
          (t[6] = _),
          (t[7] = f),
          (t[8] = g),
          (t[9] = S))
        : (S = t[9]);
      var R = r("useIntersectionObserver")(v, S),
        L;
      return (
        t[10] !== y || t[11] !== R
          ? ((L = [R, y]), (t[10] = y), (t[11] = R), (t[12] = L))
          : (L = t[12]),
        L
      );
    }
    l.default = m;
  },
  98,
);
