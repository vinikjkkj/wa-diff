__d(
  "AdsLoadObjectHooks_DO_NOT_USE",
  ["AdsLoadObjectUtils", "Promise", "react", "setTimeoutCometSpeculative"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useCallback,
      d = 300;
    function m(t) {
      var o = t.shouldSuspend;
      if (o)
        throw new (e || (e = n("Promise")))(function (e) {
          return r("setTimeoutCometSpeculative")(e, d);
        });
      return null;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      var n =
        e.isLoading() ||
        (e.isEmpty() && (t == null ? void 0 : t.suspendOnEmpty) === !0);
      return c(
        function (e) {
          return u.jsx(m, { shouldSuspend: n });
        },
        [n],
      );
    }
    function _(e, t) {
      var n = Object.keys(e).map(function (t) {
          return e[t];
        }),
        r = o("AdsLoadObjectUtils").all(n);
      return p(r, t);
    }
    ((l.SuspendWhenLoadingComponent = m),
      (l.useSuspendableStructuredState = _));
  },
  98,
);
