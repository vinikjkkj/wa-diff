__d(
  "ErrorUtils",
  [
    "ErrorGuard",
    "ErrorGuardState",
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "ErrorSerializer",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    (u || (u = n("ErrorGuardState")),
      n("ErrorNormalizeUtils"),
      c || (c = n("ErrorPubSub")),
      n("getErrorSafe"),
      d || (d = n("ErrorGuard")),
      n("ErrorSerializer"),
      (t.getErrorSafe = r("getErrorSafe")),
      (t.ErrorGuard = e || (e = r("ErrorGuard"))),
      (t.ErrorSerializer = r("ErrorSerializer")));
    var m = {
      history: (s || (s = r("ErrorPubSub"))).history,
      applyWithGuard: function (n, o, a, i, l, s) {
        return (e || (e = r("ErrorGuard"))).applyWithGuard(
          n,
          o,
          a != null ? a : [],
          {
            name: l,
            onNormalizedError: i,
            deferredSource: s == null ? void 0 : s.deferredSource,
          },
        );
      },
      guard: function (n, o, a) {
        var t = (e || (e = r("ErrorGuard"))).guard(
          n,
          o != null ? { name: o } : null,
        );
        return (a != null && (t = t.bind(a)), t);
      },
      normalizeError: function (t) {
        var e;
        return (e = r("ErrorNormalizeUtils").ifNormalizedError(t)) != null
          ? e
          : r("ErrorNormalizeUtils").normalizeError(r("getErrorSafe")(t));
      },
    };
    t.ErrorUtils = m;
    var p = m;
    (typeof __t == "function" &&
      __t.setHandler &&
      __t.setHandler((s || (s = r("ErrorPubSub"))).reportError),
      (l.default = p));
  },
  99,
);
