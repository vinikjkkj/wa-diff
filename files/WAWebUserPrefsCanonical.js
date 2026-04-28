__d(
  "WAWebUserPrefsCanonical",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalRegistrationTraceId,
      );
      return typeof e == "string" ? e : "";
    }
    function s(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalRegistrationTraceId,
        e,
      );
    }
    function u() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalNonceRequestTimestamp,
      );
      return typeof e == "number" ? e : null;
    }
    function c(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalNonceRequestTimestamp,
        e,
      );
    }
    function d() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalNonceRequestTimestamp,
        null,
      );
    }
    ((l.getCanonicalRegistrationTraceId = e),
      (l.setCanonicalRegistrationTraceId = s),
      (l.getNonceRequestTimestamp = u),
      (l.setNonceRequestTimestamp = c),
      (l.clearNonceRequestTimestamp = d));
  },
  98,
);
