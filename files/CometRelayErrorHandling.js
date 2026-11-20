__d(
  "CometRelayErrorHandling",
  ["errorCode", "SilenceableErrorMessageUtils", "gkx"],
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
    function d(e) {
      var t, n, o, a;
      if (!r("gkx")("24856")) return !1;
      var i = e.source,
        l =
          (t =
            (n = i == null ? void 0 : i.errorCode) != null
              ? n
              : i == null
                ? void 0
                : i.code) != null
            ? t
            : i == null
              ? void 0
              : i.error,
        s =
          (o = i == null ? void 0 : i.errorSummary) != null
            ? o
            : i == null
              ? void 0
              : i.summary,
        u =
          (a = i == null ? void 0 : i.errorDescription) != null
            ? a
            : i == null
              ? void 0
              : i.description;
      return (
        l != null &&
        l !== 0 &&
        s != null &&
        s !== "" &&
        u != null &&
        u !== "" &&
        !c(e)
      );
    }
    ((l.markErrorAsHandled = u),
      (l.shouldSkipErrorSideEffects = c),
      (l.shouldShowServerErrorMessage = d));
  },
  98,
);
