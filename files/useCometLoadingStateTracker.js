__d(
  "useCometLoadingStateTracker",
  [
    "CometVisualCompletionAttributes",
    "InteractionTracing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t = c(null),
        n,
        a;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = function () {
            var e = t.current,
              n = [];
            return (
              e != null && (n = p(e)),
              function () {
                n.forEach(m);
              }
            );
          }),
          (a = []),
          (e[0] = n),
          (e[1] = a))
        : ((n = e[0]), (a = e[1])),
        u(n, a));
      var i;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = [r("CometVisualCompletionAttributes").LOADING_STATE, t]),
            (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    function m(e) {
      e();
    }
    function p(e) {
      var t = [];
      return (
        r("InteractionTracing")
          .getPendingInteractions()
          .forEach(function (n) {
            var r = n.getTrace();
            r && r.vcTracker && t.push(r.vcTracker.waitLoadingState(e));
          }),
        t
      );
    }
    l.default = d;
  },
  98,
);
