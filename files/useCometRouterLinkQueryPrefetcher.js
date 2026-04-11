__d(
  "useCometRouterLinkQueryPrefetcher",
  [
    "clearTimeout",
    "react",
    "react-compiler-runtime",
    "setTimeout",
    "useCometRouterDispatcher",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.startTransition,
      c = s.useCallback,
      d = s.useRef,
      m = 3500;
    function p(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.delayCleanup,
        a = e.dispatcherExtras,
        i = e.href,
        l = e.isRouterLink,
        s = e.onQueryPreload,
        c = e.onQueryUsed,
        p = r("useCometRouterDispatcher")(),
        f = d(null),
        g = r("useStable")(_),
        h = d(null),
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            var e = f.current;
            e &&
              (u(function () {
                e.cancel();
              }),
              (f.current = null));
          }),
          (t[0] = y))
        : (y = t[0]);
      var C = y,
        b;
      t[1] !== n
        ? ((b = function () {
            if (
              (h.current != null &&
                (r("clearTimeout")(h.current), (h.current = null)),
              !n)
            ) {
              C();
              return;
            }
            h.current = r("setTimeout")(function () {
              ((h.current = null), C());
            }, m);
          }),
          (t[1] = n),
          (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      t[3] !== c
        ? ((S = function () {
            var e = f.current;
            return ((f.current = null), e != null && c(), e);
          }),
          (t[3] = c),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== p ||
      t[6] !== a ||
      t[7] !== g ||
      t[8] !== i ||
      t[9] !== l ||
      t[10] !== s
        ? ((L = function () {
            p != null &&
              i != null &&
              l &&
              f.current == null &&
              ((f.current = p.prefetchRouteQueries(i, a != null ? a : {}, g)),
              s());
          }),
          (t[5] = p),
          (t[6] = a),
          (t[7] = g),
          (t[8] = i),
          (t[9] = l),
          (t[10] = s),
          (t[11] = L))
        : (L = t[11]);
      var E = L,
        k;
      t[12] !== E
        ? ((k = function () {
            (h.current != null &&
              (r("clearTimeout")(h.current), (h.current = null)),
              E());
          }),
          (t[12] = E),
          (t[13] = k))
        : (k = t[13]);
      var I = k,
        T;
      return (
        t[14] !== v || t[15] !== R || t[16] !== I
          ? ((T = {
              cancelPrefetchRouteQueries: v,
              getPrefetchedQueryContainerAndMarkAsUsed: R,
              prefetchRouteQueries: I,
            }),
            (t[14] = v),
            (t[15] = R),
            (t[16] = I),
            (t[17] = T))
          : (T = t[17]),
        T
      );
    }
    function _() {
      return Symbol();
    }
    l.default = p;
  },
  98,
);
