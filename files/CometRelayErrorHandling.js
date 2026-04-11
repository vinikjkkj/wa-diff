__d(
  "CometRelayErrorHandling",
  ["errorCode", "SilenceableErrorMessageUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    try {
      e = new WeakMap();
    } catch (t) {
      e = null;
    }
    function u(t) {
      var n;
      (n = e) == null || n.set(t, !0);
    }
    function c(t) {
      var n,
        r,
        a = t.source,
        i =
          (n = a == null ? void 0 : a.errorCode) != null
            ? n
            : a == null
              ? void 0
              : a.code;
      return i === 1357001
        ? !1
        : i === 1675030
          ? !0
          : ((r = e) == null ? void 0 : r.get(t)) === !0 ||
            o("SilenceableErrorMessageUtils").shouldHideErrorMessage(
              o("SilenceableErrorMessageUtils").getMetadataFromError(t),
            );
    }
    ((l.markErrorAsHandled = u), (l.shouldSkipErrorSideEffects = c));
  },
  98,
);
