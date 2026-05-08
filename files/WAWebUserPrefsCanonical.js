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
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalRetryBackoffSeconds,
      );
      return typeof e == "number" ? e : 0;
    }
    function c(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalRetryBackoffSeconds,
        e,
      );
    }
    function d() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalRetryBackoffSeconds,
        null,
      );
    }
    function m() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalPeerRequestTimestamp,
      );
      return typeof e == "number" ? e : null;
    }
    function p(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalPeerRequestTimestamp,
        e,
      );
    }
    function _() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalPeerRequestTimestamp,
        null,
      );
    }
    ((l.getCanonicalRegistrationTraceId = e),
      (l.setCanonicalRegistrationTraceId = s),
      (l.getRetryBackoffSeconds = u),
      (l.setRetryBackoffSeconds = c),
      (l.clearRetryBackoffSeconds = d),
      (l.getPeerRequestTimestamp = m),
      (l.setPeerRequestTimestamp = p),
      (l.clearNonceRequestTimestamp = _));
  },
  98,
);
