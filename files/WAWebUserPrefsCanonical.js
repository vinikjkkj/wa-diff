__d(
  "WAWebUserPrefsCanonical",
  ["WAWebLocalStorage", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
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
    function f() {
      var e = o("WAWebUserPrefsKeys").UserPrefs.CanonicalAuthV2MintThrottle,
        t =
          r("WAWebLocalStorage") != null
            ? r("WAWebUserPrefsStore").getPSIgnoringCache(e)
            : r("WAWebUserPrefsStore").get(e);
      if (t == null || typeof t != "object" || Array.isArray(t)) return null;
      var n = C(t.lastAttemptAtMs),
        a = C(t.consecutiveFailures);
      return n != null && a != null
        ? { lastAttemptAtMs: n, consecutiveFailures: a }
        : null;
    }
    function g(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalAuthV2MintThrottle,
        e,
      );
    }
    function h() {
      return C(
        r("WAWebUserPrefsStore").get(
          o("WAWebUserPrefsKeys").UserPrefs.CanonicalAuthV2LastValidatedAtMs,
        ),
      );
    }
    function y(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").UserPrefs.CanonicalAuthV2LastValidatedAtMs,
        e,
      );
    }
    function C(e) {
      return typeof e == "number" && Number.isSafeInteger(e) && e >= 0
        ? e
        : null;
    }
    ((l.getCanonicalRegistrationTraceId = e),
      (l.setCanonicalRegistrationTraceId = s),
      (l.getRetryBackoffSeconds = u),
      (l.setRetryBackoffSeconds = c),
      (l.clearRetryBackoffSeconds = d),
      (l.getPeerRequestTimestamp = m),
      (l.setPeerRequestTimestamp = p),
      (l.clearNonceRequestTimestamp = _),
      (l.getCanonicalAuthV2MintThrottle = f),
      (l.setCanonicalAuthV2MintThrottle = g),
      (l.getCanonicalAuthV2LastValidatedAtMs = h),
      (l.setCanonicalAuthV2LastValidatedAtMs = y));
  },
  98,
);
